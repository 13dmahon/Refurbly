import { useState, useMemo, useEffect } from "react";
import { FirestoreWrapper } from '../services/firebase-wrapper';
import PaymentButton from './PaymentButton';
import { useAuth } from '../hooks/useAuth.jsx';
import { Capacitor } from '@capacitor/core';
import ApplePaymentButton from './ApplePaymentButton';

const AUTO_SQM = {
  flat: { 1: 45, 2: 65, 3: 85, 4: 100, 5: 120 },
  house: { 2: 75, 3: 95, 4: 120, 5: 150 },
  maisonette: { 2: 70, 3: 90, 4: 110, 5: 135 }
};

const RATES = {
  decoration: {
    hourlyRate: { budget: 30, standard: 35, premium: 45 },
    hoursPerSqm: 0.5,
    materialsPerSqm: { budget: 8, standard: 12, premium: 18 }
  },
  flooring: {
    hourlyRate: { budget: 35, standard: 40, premium: 55 },
    hoursPerSqm: 0.3,
    materialsPerSqm: { budget: 25, standard: 45, premium: 80 }
  },
  plastering: {
    hourlyRate: { budget: 35, standard: 45, premium: 60 },
    hoursPerSqm: 0.4,
    materialsPerSqm: { budget: 12, standard: 16, premium: 24 }
  },
  kitchen: {
    hourlyRate: { budget: 30, standard: 40, premium: 50 },
    hours: { budget: 50, standard: 60, premium: 90 },
    materials: { budget: 6000, standard: 16000, premium: 30000 }
  },
  bathroom: {
    hourlyRate: { budget: 35, standard: 40, premium: 50 },
    hoursPerBathroom: { budget: 40, standard: 50, premium: 70 },
    materialsPerBathroom: { budget: 3000, standard: 5500, premium: 10000 }
  },
  rewire: {
    hourlyRate: { budget: 40, standard: 45, premium: 55 },
    hours: { budget: 50, standard: 60, premium: 80 },
    materials: { budget: 1500, standard: 2500, premium: 4000 }
  },
  heating: {
    hourlyRate: { budget: 35, standard: 40, premium: 50 },
    hours: { budget: 40, standard: 50, premium: 60 },
    materials: { budget: 2000, standard: 3500, premium: 6000 }
  },
  windows: {
    hourlyRate: { budget: 30, standard: 35, premium: 45 },
    hoursPerWindow: { budget: 2, standard: 3, premium: 4 },
    materialsPerWindow: { budget: 300, standard: 500, premium: 800 }
  },
  protection: {
    dustSheets: { perSqm: 0.5, perRoom: 15 },
    correx: { perSqm: 3, perRoom: 50 },
    masking: { perSqm: 1, perRoom: 25 }
  }
};

const SOURCES = {
  labour: {
    text: "Checkatrade & MyBuilder 2025 London rates",
    links: []
  },
  materials: {
    kitchen: {
      text: "London kitchen costs £15k-£30k (mid-range)",
      links: [
        { url: "https://www.checkatrade.com/blog/cost-guides/new-kitchen-cost/", label: "Checkatrade Kitchen Guide" },
        { url: "https://content.knightfrank.com/research/2179/documents/en/knight-frank-landlord-refurbishment-cost-guide-spring-2024-11150.pdf", label: "Knight Frank Refurb Guide 2024" }
      ]
    },
    bathroom: {
      text: "London bathroom costs £5k-£12k+ (standard)",
      links: [
        { url: "https://www.checkatrade.com/blog/cost-guides/bathroom-cost/", label: "Checkatrade Bathroom Guide" },
        { url: "https://content.knightfrank.com/research/2179/documents/en/knight-frank-landlord-refurbishment-cost-guide-spring-2024-11150.pdf", label: "Knight Frank Refurb Guide 2024" }
      ]
    },
    flooring: {
      text: "Flooring costs from Carpetright & trade suppliers",
      links: [
        { url: "https://www.checkatrade.com/blog/cost-guides/flooring-cost/", label: "Checkatrade Flooring Guide" }
      ]
    },
    general: {
      text: "UK renovation statistics 2025",
      links: [
        { url: "https://www.hillarys.co.uk/static/home-renovation-statistics/", label: "Hillarys UK Renovation Stats" },
        { url: "https://content.knightfrank.com/research/2179/documents/en/knight-frank-landlord-refurbishment-cost-guide-spring-2024-11150.pdf", label: "Knight Frank Refurb Guide 2024" }
      ]
    }
  }
};

export default function Refurbly({ onQuoteSaved, editingQuote, quotesCount, maxQuotes, onEditComplete }) {
  const [step, setStep] = useState(1);
  const { user, isPremium } = useAuth();
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [showAdjustModal, setShowAdjustModal] = useState(false);
  const [adjustments, setAdjustments] = useState({});
  const [customItems, setCustomItems] = useState([]);
  const [isManuallyEdited, setIsManuallyEdited] = useState(false);
  const [showAddItemForm, setShowAddItemForm] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [newItemCost, setNewItemCost] = useState('');
  const [newItemDesc, setNewItemDesc] = useState('');
  const isEditing = !!editingQuote;

  const [pricingTemplates, setPricingTemplates] = useState(null);
  const [templatesLoading, setTemplatesLoading] = useState(true);
  
  const [formData, setFormData] = useState({
    bedrooms: '2',
    bathrooms: '1',
    propertyType: 'house',
    location: '',
    quality: 'standard',
    needsDecoration: true,
    needsFlooring: true,
    needsPlastering: false,
    needsKitchen: true,
    needsBathroom: true,
    needsRewire: false,
    needsHeating: false,
    needsWindows: false,
    needsProtection: false,
    protectionDustSheets: true,
    protectionCorrex: true,
    protectionMasking: true,
    manualTotalSqm: "",
    manualRoomSqm: {},
  });

  useEffect(() => {
    const loadTemplates = async () => {
      try {
        const { collection, getDocs } = await import('firebase/firestore');
        const { db } = await import('../config/firebase');
        const snap = await getDocs(collection(db, 'pricingTemplates'));
        const map = {};
        snap.docs.forEach((doc) => {
          map[doc.id] = { id: doc.id, ...doc.data() };
        });
        console.log('✅ Loaded pricing templates from Firestore:', Object.keys(map));
        setPricingTemplates(map);
      } catch (e) {
        console.error('❌ Failed to load pricing templates, using fallback:', e);
        setPricingTemplates(null);
      } finally {
        setTemplatesLoading(false);
      }
    };
    loadTemplates();
  }, []);

  useEffect(() => {
    if (editingQuote) {
      setFormData({
        bedrooms: String(editingQuote.bedrooms || '2'),
        bathrooms: String(editingQuote.bathrooms || '1'),
        propertyType: editingQuote.propertyType || 'house',
        location: editingQuote.location || '',
        quality: editingQuote.quality || 'standard',
        needsDecoration: editingQuote.needsDecoration !== false,
        needsFlooring: editingQuote.needsFlooring !== false,
        needsProtection: editingQuote.needsProtection || false,
        protectionDustSheets: editingQuote.protectionDustSheets !== false,
        protectionCorrex: editingQuote.protectionCorrex !== false,
        protectionMasking: editingQuote.protectionMasking !== false,
        manualTotalSqm: editingQuote.manualTotalSqm || "",
        manualRoomSqm: editingQuote.manualRoomSqm || {},
        needsPlastering: editingQuote.needsPlastering || false,
        needsKitchen: editingQuote.needsKitchen !== false,
        needsBathroom: editingQuote.needsBathroom !== false,
        needsRewire: editingQuote.needsRewire || false,
        needsHeating: editingQuote.needsHeating || false,
        needsWindows: editingQuote.needsWindows || false,
      });
      if (editingQuote.adjustments) setAdjustments(editingQuote.adjustments);
      if (editingQuote.customItems) setCustomItems(editingQuote.customItems);
      if (editingQuote.isManuallyEdited) setIsManuallyEdited(true);
    }
  }, [editingQuote]);

  const updateForm = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const estimate = useMemo(() => {
    const bedrooms = parseInt(formData.bedrooms) || 2;
    const bathrooms = parseInt(formData.bathrooms) || 1;
    const propertyType = formData.propertyType;
    const quality = formData.quality;
    const totalSqm = AUTO_SQM[propertyType]?.[bedrooms] || 75;
    const estimatedWindows = bedrooms * 2 + 2;
    let roomBreakdown = [];

    if (formData.needsKitchen) {
      const tpl = pricingTemplates?.kitchen;
      const hours = tpl?.hours?.[quality] ?? RATES.kitchen.hours[quality];
      const hourlyRate = tpl?.hourlyRate?.[quality] ?? RATES.kitchen.hourlyRate[quality];
      const materials = tpl?.materials?.[quality] ?? RATES.kitchen.materials[quality];
      const materialsDetails = tpl?.materialsDetails || 'Units & appliances';
      const source = tpl?.source || SOURCES.materials.kitchen;
      const labour = hours * hourlyRate;
      const total = labour + materials;
      roomBreakdown.push({
        id: 'kitchen',
        name: 'Kitchen',
        labour,
        labourDetails: `${hours} hrs @ £${hourlyRate}/hr`,
        materials,
        materialsDetails,
        total: adjustments.kitchen || total,
        source
      });
    }

    if (formData.needsBathroom) {
      const tpl = pricingTemplates?.bathrooms;
      const hoursPerBathroom = tpl?.hoursPerBathroom?.[quality] ?? RATES.bathroom.hoursPerBathroom[quality];
      const hourlyRate = tpl?.hourlyRate?.[quality] ?? RATES.bathroom.hourlyRate[quality];
      const materialsPerBathroom = tpl?.materialsPerBathroom?.[quality] ?? RATES.bathroom.materialsPerBathroom[quality];
      const materialsDetails = tpl?.materialsDetails || 'Suite & tiles';
      const source = tpl?.source || SOURCES.materials.bathroom;
      const hours = hoursPerBathroom * bathrooms;
      const labour = hours * hourlyRate;
      const materials = materialsPerBathroom * bathrooms;
      const total = labour + materials;
      roomBreakdown.push({
        id: 'bathrooms',
        name: `Bathroom${bathrooms > 1 ? 's' : ''} (${bathrooms})`,
        labour,
        labourDetails: `${hours} hrs @ £${hourlyRate}/hr`,
        materials,
        materialsDetails,
        total: adjustments.bathrooms || total,
        source
      });
    }

    if (formData.needsDecoration) {
      const tpl = pricingTemplates?.decoration;
      const hoursPerSqm = tpl?.hoursPerSqm ?? RATES.decoration.hoursPerSqm;
      const hourlyRate = tpl?.hourlyRate?.[quality] ?? RATES.decoration.hourlyRate[quality];
      const materialsPerSqm = tpl?.materialsPerSqm?.[quality] ?? RATES.decoration.materialsPerSqm[quality];
      const materialsDetails = tpl?.materialsDetailsTemplate 
        ? tpl.materialsDetailsTemplate.replace('{sqm}', totalSqm)
        : `Paint & materials (${totalSqm}sqm)`;
      const source = tpl?.source || SOURCES.materials.general;
      const hours = Math.round(totalSqm * hoursPerSqm);
      const labour = hours * hourlyRate;
      const materials = totalSqm * materialsPerSqm;
      const total = labour + materials;
      roomBreakdown.push({
        id: 'decoration',
        name: 'Decoration',
        labour,
        labourDetails: `${hours} hrs @ £${hourlyRate}/hr`,
        materials,
        materialsDetails,
        total: adjustments.decoration || total,
        source
      });
    }

    if (formData.needsFlooring) {
      const tpl = pricingTemplates?.flooring;
      const hoursPerSqm = tpl?.hoursPerSqm ?? RATES.flooring.hoursPerSqm;
      const hourlyRate = tpl?.hourlyRate?.[quality] ?? RATES.flooring.hourlyRate[quality];
      const materialsPerSqm = tpl?.materialsPerSqm?.[quality] ?? RATES.flooring.materialsPerSqm[quality];
      const materialsDetails = tpl?.materialsDetailsTemplate
        ? tpl.materialsDetailsTemplate.replace('{sqm}', totalSqm)
        : `Carpet/laminate (${totalSqm}sqm)`;
      const source = tpl?.source || SOURCES.materials.flooring;
      const hours = Math.round(totalSqm * hoursPerSqm);
      const labour = hours * hourlyRate;
      const materials = totalSqm * materialsPerSqm;
      const total = labour + materials;
      roomBreakdown.push({
        id: 'flooring',
        name: 'Flooring',
        labour,
        labourDetails: `${hours} hrs @ £${hourlyRate}/hr`,
        materials,
        materialsDetails,
        total: adjustments.flooring || total,
        source
      });
    }

    if (formData.needsPlastering) {
      const tpl = pricingTemplates?.plastering;
      const hoursPerSqm = tpl?.hoursPerSqm ?? RATES.plastering.hoursPerSqm;
      const hourlyRate = tpl?.hourlyRate?.[quality] ?? RATES.plastering.hourlyRate[quality];
      const materialsPerSqm = tpl?.materialsPerSqm?.[quality] ?? RATES.plastering.materialsPerSqm[quality];
      const materialsDetails = tpl?.materialsDetailsTemplate
        ? tpl.materialsDetailsTemplate.replace('{sqm}', totalSqm)
        : `Materials (${totalSqm}sqm)`;
      const source = tpl?.source || SOURCES.materials.general;
      const hours = Math.round(totalSqm * hoursPerSqm);
      const labour = hours * hourlyRate;
      const materials = totalSqm * materialsPerSqm;
      const total = labour + materials;
      roomBreakdown.push({
        id: 'plastering',
        name: 'Plastering',
        labour,
        labourDetails: `${hours} hrs @ £${hourlyRate}/hr`,
        materials,
        materialsDetails,
        total: adjustments.plastering || total,
        source
      });
    }

    if (formData.needsRewire) {
      const tpl = pricingTemplates?.rewire;
      const hours = tpl?.hours?.[quality] ?? RATES.rewire.hours[quality];
      const hourlyRate = tpl?.hourlyRate?.[quality] ?? RATES.rewire.hourlyRate[quality];
      const materials = tpl?.materials?.[quality] ?? RATES.rewire.materials[quality];
      const materialsDetails = tpl?.materialsDetails || 'Cable, sockets, consumer unit';
      const source = tpl?.source || SOURCES.materials.general;
      const labour = hours * hourlyRate;
      const total = labour + materials;
      roomBreakdown.push({
        id: 'rewire',
        name: 'Electrical Rewire',
        labour,
        labourDetails: `${hours} hrs @ £${hourlyRate}/hr`,
        materials,
        materialsDetails,
        total: adjustments.rewire || total,
        source
      });
    }

    if (formData.needsHeating) {
      const tpl = pricingTemplates?.heating;
      const hours = tpl?.hours?.[quality] ?? RATES.heating.hours[quality];
      const hourlyRate = tpl?.hourlyRate?.[quality] ?? RATES.heating.hourlyRate[quality];
      const materials = tpl?.materials?.[quality] ?? RATES.heating.materials[quality];
      const materialsDetails = tpl?.materialsDetails || 'Boiler & radiators';
      const source = tpl?.source || SOURCES.materials.general;
      const labour = hours * hourlyRate;
      const total = labour + materials;
      roomBreakdown.push({
        id: 'heating',
        name: 'Heating System',
        labour,
        labourDetails: `${hours} hrs @ £${hourlyRate}/hr`,
        materials,
        materialsDetails,
        total: adjustments.heating || total,
        source
      });
    }

    if (formData.needsWindows) {
      const tpl = pricingTemplates?.windows;
      const hoursPerWindow = tpl?.hoursPerWindow?.[quality] ?? RATES.windows.hoursPerWindow[quality];
      const hourlyRate = tpl?.hourlyRate?.[quality] ?? RATES.windows.hourlyRate[quality];
      const materialsPerWindow = tpl?.materialsPerWindow?.[quality] ?? RATES.windows.materialsPerWindow[quality];
      const materialsDetails = tpl?.materialsDetails || 'Double glazed units';
      const source = tpl?.source || SOURCES.materials.general;
      const hours = hoursPerWindow * estimatedWindows;
      const labour = hours * hourlyRate;
      const materials = materialsPerWindow * estimatedWindows;
      const total = labour + materials;
      roomBreakdown.push({
        id: 'windows',
        name: `Windows (~${estimatedWindows})`,
        labour,
        labourDetails: `${hours} hrs @ £${hourlyRate}/hr`,
        materials,
        materialsDetails,
        total: adjustments.windows || total,
        source
      });
    }

    customItems.forEach(item => {
      roomBreakdown.push({
        id: `custom-${item.id}`,
        name: item.name,
        labour: 0,
        labourDetails: 'Custom item',
        materials: 0,
        materialsDetails: item.description || '',
        total: item.cost,
        source: 'User added',
        isCustom: true
      });
    });

    const subtotal = roomBreakdown.reduce((sum, room) => sum + room.total, 0);
    const contingency = Math.round(subtotal * 0.15);
    const total = subtotal + contingency;
    const roundedTotal = Math.round(total / 5000) * 5000;
    const rangeMin = roundedTotal - 5000;
    const rangeMax = roundedTotal + 5000;

    return {
      roomBreakdown,
      subtotal: Math.round(subtotal),
      contingency,
      total: Math.round(total),
      rangeMin,
      rangeMax,
      totalSqm
    };
  }, [formData, adjustments, customItems, pricingTemplates]);

  const handleSaveQuote = async () => {
    if (!user) {
      alert('Please sign in to save quotes');
      return;
    }
    if (!isEditing && quotesCount >= maxQuotes) {
      if (isPremium) {
        alert('You\'ve reached the maximum of 10 saved quotes. Please delete some quotes to add new ones.');
      } else {
        alert('You\'ve reached your free limit of 5 quotes. Upgrade to Premium to save more!');
      }
      return;
    }
    setSaving(true);
    setSaveSuccess(false);
    try {
      const quoteData = {
        userId: user.uid,
        location: formData.location || 'No location specified',
        propertyType: formData.propertyType,
        bedrooms: parseInt(formData.bedrooms),
        bathrooms: parseInt(formData.bathrooms),
        totalSqm: estimate.totalSqm,
        quality: formData.quality,
        needsDecoration: formData.needsDecoration,
        needsFlooring: formData.needsFlooring,
        needsPlastering: formData.needsPlastering,
        needsKitchen: formData.needsKitchen,
        needsBathroom: formData.needsBathroom,
        needsRewire: formData.needsRewire,
        needsHeating: formData.needsHeating,
        needsWindows: formData.needsWindows,
        estimate: estimate.total,
        rangeMin: estimate.rangeMin,
        rangeMax: estimate.rangeMax,
        breakdown: estimate.roomBreakdown,
        adjustments: Object.keys(adjustments).length > 0 ? adjustments : null,
        customItems: customItems.length > 0 ? customItems : null,
        isManuallyEdited,
        updatedAt: new Date().toISOString(),
      };
      if (isEditing) {
        await FirestoreWrapper.updateDoc('quotes', editingQuote.id, quoteData);
        setSaveSuccess(true);
        setTimeout(() => {
          if (onEditComplete) onEditComplete();
        }, 1500);
      } else {
        quoteData.createdAt = Date.now();
        await FirestoreWrapper.addDoc('quotes', quoteData);
        setSaveSuccess(true);
        if (onQuoteSaved) onQuoteSaved();
        setTimeout(() => setSaveSuccess(false), 3000);
      }
    } catch (error) {
      console.error('Error saving quote:', error);
      alert('Failed to save quote. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleAdjustCost = (roomId, newValue) => {
    setAdjustments(prev => ({ ...prev, [roomId]: parseFloat(newValue) || 0 }));
    setIsManuallyEdited(true);
  };

  const handleAddCustomItem = () => {
    if (!newItemName || !newItemCost) {
      alert('Please enter item name and cost');
      return;
    }
    setCustomItems(prev => [...prev, {
      id: Date.now(),
      name: newItemName,
      cost: parseFloat(newItemCost),
      description: newItemDesc
    }]);
    setIsManuallyEdited(true);
    setNewItemName('');
    setNewItemCost('');
    setNewItemDesc('');
    setShowAddItemForm(false);
  };

  const handleRemoveCustomItem = (id) => {
    setCustomItems(prev => prev.filter(item => item.id !== id));
  };

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  const renderSourceLinks = (source) => {
    if (!source || !source.links || source.links.length === 0) return null;
    return (
      <div className="flex flex-wrap gap-2 mt-1">
        {source.links.map((link, i) => (
          
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-refurbly-navy hover:text-blue-800 underline"
          >
            {link.label} →
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      {isEditing && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✏️</span>
            <div>
              <p className="font-semibold text-blue-900">Editing Quote</p>
              <p className="text-sm text-blue-700">{editingQuote.location || 'No location'} • Changes will update this quote</p>
            </div>
          </div>
        </div>
      )}

      <div className="mb-8">
        <div className="flex items-center mb-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${s <= step ? 'bg-refurbly-navy text-white shadow-lg' : 'bg-slate-200 text-slate-400'}`}>
                {s}
              </div>
              {s < 3 && <div className={`h-1 flex-1 mx-2 rounded transition-all ${s < step ? 'bg-refurbly-navy' : 'bg-slate-200'}`} />}
            </div>
          ))}
        </div>
        <div className="flex items-center">
          {['Property', 'What\'s Needed', 'Estimate'].map((label, i) => (
            <div key={i} className="flex-1 flex items-center">
              <div className="w-10 text-center text-xs sm:text-sm text-slate-600">{label}</div>
              {i < 2 && <div className="flex-1" />}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8">
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Property Details</h2>
            <p className="text-slate-600 mb-6">Tell us about the property</p>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Property Type</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {['flat', 'house', 'maisonette'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => updateForm('propertyType', type)}
                      className={`p-4 rounded-xl border-2 font-medium transition-all capitalize ${formData.propertyType === type ? 'border-refurbly-navy bg-blue-50 text-blue-700' : 'border-slate-200 hover:border-slate-300 text-slate-700'}`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Bedrooms</label>
                  <select
                    value={formData.bedrooms}
                    onChange={(e) => updateForm('bedrooms', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-refurbly-navy focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  >
                    {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Bathrooms</label>
                  <select
                    value={formData.bathrooms}
                    onChange={(e) => updateForm('bathrooms', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-refurbly-navy focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  >
                    {[1, 2, 3].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Property Location <span className="font-normal text-slate-500">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => updateForm('location', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-refurbly-navy focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  placeholder="e.g., 123 Oak Street, Manchester"
                />
              </div>
              <div className="bg-green-50 rounded-xl p-4 border-2 border-dashed border-green-200">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Total Floor Area (sqm) <span className="font-normal text-slate-500">(Optional)</span>
                </label>
                <input
                  type="number"
                  value={formData.manualTotalSqm}
                  onChange={(e) => updateForm('manualTotalSqm', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-refurbly-navy focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  placeholder="Auto: 75 sqm"
                />
                <p className="text-xs text-slate-500 mt-2">If not specified, we'll estimate based on your property type</p>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">What Needs Doing?</h2>
            <p className="text-slate-600 mb-6">Select all that apply</p>
            <div className="space-y-3">
              {[
                { field: 'needsDecoration', label: 'Full Decoration', desc: 'Painting, decorating throughout' },
                { field: 'needsFlooring', label: 'New Flooring', desc: 'Carpets, laminate, or tiles' },
                { field: 'needsPlastering', label: 'Plastering', desc: 'Walls and ceilings' },
                { field: 'needsKitchen', label: 'New Kitchen', desc: 'Full kitchen replacement' },
                { field: 'needsBathroom', label: 'New Bathroom(s)', desc: 'Complete bathroom refurb' },
                { field: 'needsRewire', label: 'Full Rewire', desc: 'Complete electrical rewiring' },
                { field: 'needsHeating', label: 'New Heating System', desc: 'Boiler and radiators' },
                { field: 'needsWindows', label: 'Replace Windows', desc: 'New double glazing' },
              ].map((item) => (
                <label
                  key={item.field}
                  className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData[item.field] ? 'border-refurbly-navy bg-blue-50' : 'border-slate-200 hover:border-slate-300'}`}
                >
                  <input
                    type="checkbox"
                    checked={formData[item.field]}
                    onChange={(e) => updateForm(item.field, e.target.checked)}
                    className="w-5 h-5 mt-0.5 rounded border-slate-300 text-refurbly-navy"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900">{item.label}</div>
                    <div className="text-sm text-slate-600">{item.desc}</div>
                  </div>
                </label>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-slate-200">
              <label className="block text-sm font-semibold text-slate-700 mb-3">Quality Level</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { value: 'budget', label: 'Budget', icon: '💰', desc: 'Basic, functional finish' },
                  { value: 'standard', label: 'Standard', icon: '🏡', desc: 'Good quality, mid-range' },
                  { value: 'premium', label: 'Premium', icon: '⭐', desc: 'High-end finishes' }
                ].map((q) => (
                  <button
                    key={q.value}
                    type="button"
                    onClick={() => updateForm('quality', q.value)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${formData.quality === q.value ? 'border-refurbly-navy bg-blue-50' : 'border-slate-200 hover:border-slate-300'}`}
                  >
                    <div className="text-2xl mb-2">{q.icon}</div>
                    <div className="font-semibold text-slate-900">{q.label}</div>
                    <div className="text-sm text-slate-600">{q.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">{isEditing ? 'Updated Estimate' : 'Your Estimate'}</h2>
            <p className="text-slate-600 mb-6">
              {formData.location && `${formData.location} • `}
              {formData.bedrooms} bed {formData.propertyType} • {formData.quality} quality
            </p>

            {templatesLoading && (
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 mb-4 text-xs text-slate-600">
                Updating with latest pricing in the background…
              </div>
            )}

            {isManuallyEdited && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 text-sm">
                <span className="text-amber-800">⚠️ This quote has been manually edited</span>
              </div>
            )}

            {!isPremium ? (
              <>
                <div className="bg-gradient-to-br from-refurbly-navy to-refurbly-charcoal rounded-xl p-6 text-white shadow-lg mb-6">
                  <div className="text-sm opacity-90 mb-1">Estimated Cost Range</div>
                  <div className="text-4xl font-bold">
                    £{estimate.rangeMin.toLocaleString()} - £{estimate.rangeMax.toLocaleString()}
                  </div>
                  <div className="text-sm opacity-75 mt-2">Based on 30+ UK trade quotes</div>
                </div>

                <div className="relative mb-6">
                  <div className="blur-md pointer-events-none select-none">
                    <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Room-by-Room Breakdown:</h3>
                      {estimate.roomBreakdown.map((room) => (
                        <div key={room.id} className="bg-white rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div className="font-bold text-gray-900">{room.name}</div>
                            <div className="text-xl font-bold text-gray-900">£{Math.round(room.total).toLocaleString()}</div>
                          </div>
                          <div className="text-sm text-gray-600 space-y-1">
                            <div>Labour: {room.labourDetails}</div>
                            <div>Materials: {room.materialsDetails}</div>
                          </div>
                        </div>
                      ))}
                      <div className="bg-amber-100 rounded-lg p-4 mt-4">
                        <div className="flex justify-between">
                          <span className="font-bold">Contingency (15%)</span>
                          <span className="font-bold">£{estimate.contingency.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-xl shadow-2xl p-6 text-center max-w-sm mx-4">
                      <div className="text-4xl mb-4">🔒</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Unlock Full Breakdown</h3>
                      <p className="text-gray-600 mb-4">See exact costs per room with labour rates, material costs, and source links</p>
                      {user ? (
                        Capacitor.getPlatform() === 'ios' ? (
                          <ApplePaymentButton />
                        ) : (
                          <PaymentButton quoteData={formData} />
                        )
                      ) : (
                        <div className="text-amber-700 text-sm">Sign in to unlock premium features</div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-gradient-to-br from-refurbly-navy to-refurbly-charcoal rounded-xl p-6 text-white shadow-lg mb-6">
                  <div className="text-sm opacity-90 mb-1">Total Estimated Cost</div>
                  <div className="text-4xl font-bold">£{estimate.total.toLocaleString()}</div>
                  <div className="text-sm opacity-75 mt-2">Including 15% contingency</div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-green-800">
                      <span className="text-xl">✅</span>
                      <span className="font-semibold">Premium - Full breakdown unlocked</span>
                    </div>
                    <button
                      onClick={() => setShowAdjustModal(true)}
                      className="px-4 py-2 bg-refurbly-navy hover:bg-refurbly-charcoal text-white text-sm rounded-lg font-semibold transition-all"
                    >
                      ✏️ Adjust Costs
                    </button>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {estimate.roomBreakdown.map((room) => (
                    <div key={room.id} className="bg-blue-50 rounded-xl p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div className="font-bold text-blue-900 text-lg">{room.name}</div>
                        <div className="text-2xl font-bold text-blue-900">£{Math.round(room.total).toLocaleString()}</div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between text-blue-800">
                          <span>Labour: {room.labourDetails}</span>
                          <span className="font-semibold">£{Math.round(room.labour).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-blue-800">
                          <span>Materials: {room.materialsDetails}</span>
                          <span className="font-semibold">£{Math.round(room.materials).toLocaleString()}</span>
                        </div>
                        {room.source && room.source.text && (
                          <div className="text-xs mt-2 pt-2 border-t border-blue-200">
                            <div className="text-blue-900 font-semibold mb-1">💡 Evidence:</div>
                            <div className="text-blue-700">{room.source.text}</div>
                            {renderSourceLinks(room.source)}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  <div className="bg-amber-50 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold text-amber-900">Contingency (15%)</div>
                        <div className="text-sm text-amber-700">For unexpected costs</div>
                      </div>
                      <div className="text-xl font-bold text-amber-900">£{estimate.contingency.toLocaleString()}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-600 mb-6">
                  <div className="font-semibold text-slate-900 mb-2">💡 About these rates:</div>
                  <div>Labour rates: {SOURCES.labour.text}</div>
                  <div className="mt-1">Material costs: Industry average from major UK suppliers</div>
                </div>
              </>
            )}

            {saveSuccess && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <p className="text-green-800 font-semibold">✓ Quote {isEditing ? 'updated' : 'saved'} successfully!</p>
              </div>
            )}

            <div className="flex flex-col gap-3">
              {user && (
                <button
                  onClick={handleSaveQuote}
                  disabled={saving}
                  className="w-full px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition-all disabled:opacity-50"
                >
                  {saving ? (isEditing ? 'Updating...' : 'Saving...') : (isEditing ? '💾 Update Quote' : '💾 Save Quote')}
                </button>
              )}
              {!isEditing && (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full px-6 py-3 rounded-xl bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-semibold transition-all"
                >
                  🔄 Start Again
                </button>
              )}
            </div>
          </div>
        )}

        {step < 3 && (
          <div className="flex gap-3 mt-8 pt-6 border-t border-slate-200">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-all"
              >
                Back
              </button>
            )}
            <button
              type="button"
              onClick={handleNext}
              className="flex-1 px-6 py-3 rounded-xl bg-refurbly-navy hover:bg-refurbly-charcoal text-white font-semibold transition-all shadow-lg"
            >
              {step === 2 ? 'Get Estimate' : 'Next'}
            </button>
          </div>
        )}
      </div>

      {showAdjustModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
              <h2 className="text-2xl font-bold text-slate-900">Adjust Costs</h2>
              <button
                onClick={() => setShowAdjustModal(false)}
                className="text-slate-400 hover:text-slate-600 text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-4">
              {estimate.roomBreakdown.map((room) => !room.isCustom && (
                <div key={room.id} className="bg-slate-50 rounded-xl p-4">
                  <label className="block font-semibold text-slate-900 mb-2">{room.name}</label>
                  <div className="flex gap-3 items-center">
                    <input
                      type="number"
                      value={adjustments[room.id] || room.total}
                      onChange={(e) => handleAdjustCost(room.id, e.target.value)}
                      className="flex-1 px-4 py-2 rounded-lg border-2 border-slate-200 focus:border-refurbly-navy outline-none"
                      placeholder="Enter cost"
                    />
                    <button
                      onClick={() => {
                        const newAdj = { ...adjustments };
                        delete newAdj[room.id];
                        setAdjustments(newAdj);
                      }}
                      className="px-3 py-2 bg-slate-200 hover:bg-slate-300 rounded-lg text-sm"
                    >
                      Reset
                    </button>
                  </div>
                  <div className="text-sm text-slate-600 mt-1">Original: £{Math.round(room.total).toLocaleString()}</div>
                </div>
              ))}

              <div className="border-t border-slate-200 pt-4">
                <h3 className="font-semibold text-slate-900 mb-3">Custom Items</h3>
                {customItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center bg-slate-50 rounded-lg p-3 mb-2">
                    <div>
                      <div className="font-medium">{item.name}</div>
                      {item.description && <div className="text-sm text-slate-600">{item.description}</div>}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold">£{item.cost.toLocaleString()}</span>
                      <button
                        onClick={() => handleRemoveCustomItem(item.id)}
                        className="text-red-600 hover:text-red-700 text-xl"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}

                {!showAddItemForm ? (
                  <button
                    onClick={() => setShowAddItemForm(true)}
                    className="w-full px-4 py-3 border-2 border-dashed border-slate-300 hover:border-refurbly-navy hover:bg-blue-50 rounded-xl text-slate-600 hover:text-refurbly-navy font-semibold transition-all"
                  >
                    + Add Custom Item
                  </button>
                ) : (
                  <div className="bg-blue-50 rounded-xl p-4 space-y-3">
                    <input
                      type="text"
                      value={newItemName}
                      onChange={(e) => setNewItemName(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border-2 border-blue-200 focus:border-refurbly-navy outline-none"
                      placeholder="Item name (e.g., Loft Insulation)"
                    />
                    <input
                      type="number"
                      value={newItemCost}
                      onChange={(e) => setNewItemCost(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border-2 border-blue-200 focus:border-refurbly-navy outline-none"
                      placeholder="Cost (£)"
                    />
                    <input
                      type="text"
                      value={newItemDesc}
                      onChange={(e) => setNewItemDesc(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border-2 border-blue-200 focus:border-refurbly-navy outline-none"
                      placeholder="Description (optional)"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setShowAddItemForm(false);
                          setNewItemName('');
                          setNewItemCost('');
                          setNewItemDesc('');
                        }}
                        className="flex-1 px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-lg font-semibold"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleAddCustomItem}
                        className="flex-1 px-4 py-2 bg-refurbly-navy hover:bg-refurbly-charcoal text-white rounded-lg font-semibold"
                      >
                        Add Item
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => setShowAdjustModal(false)}
                className="w-full px-6 py-3 bg-refurbly-navy hover:bg-refurbly-charcoal text-white font-semibold rounded-xl transition-all mt-4"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
