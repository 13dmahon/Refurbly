import { useState, useMemo, useEffect } from "react";
import { FirestoreWrapper } from '../services/firebase-wrapper';
import PaymentButton from './PaymentButton';
import { useAuth } from '../hooks/useAuth.jsx';

// Auto-calculate sqm from property details
const AUTO_SQM = {
  flat: { 1: 45, 2: 65, 3: 85, 4: 100, 5: 120 },
  house: { 2: 75, 3: 95, 4: 120, 5: 150 },
  maisonette: { 2: 70, 3: 90, 4: 110, 5: 135 }
};

// NEW RATES STRUCTURE with Labour + Materials
const RATES = {
  // Per sqm rates
  decoration: {
    labour: { budget: 8, standard: 12, premium: 18 },    // £ per sqm
    materials: { budget: 5, standard: 8, premium: 15 }   // £ per sqm
  },
  flooring: {
    labour: { budget: 15, standard: 20, premium: 30 },
    materials: { budget: 20, standard: 40, premium: 70 }
  },
  plastering: {
    labour: { budget: 25, standard: 35, premium: 50 },
    materials: { budget: 8, standard: 12, premium: 18 }
  },
  
  // Fixed rates
  kitchen: {
    labour: { budget: 1500, standard: 2000, premium: 3000 },
    materials: { budget: 3500, standard: 6000, premium: 12000 }
  },
  bathroom: {
    labour: { budget: 1200, standard: 1800, premium: 2500 },
    materials: { budget: 1800, standard: 2700, premium: 5000 }
  },
  rewire: {
    labour: { budget: 1500, standard: 2000, premium: 3000 },
    materials: { budget: 1000, standard: 1500, premium: 2000 }
  },
  heating: {
    labour: { budget: 1500, standard: 2000, premium: 2500 },
    materials: { budget: 1500, standard: 2000, premium: 3500 }
  },
  windows: {
    labour: { budget: 1000, standard: 1500, premium: 2000 },
    materials: { budget: 3000, standard: 4500, premium: 7000 }
  }
};

export default function Refurbly({ onQuoteSaved, editingQuote, quotesCount, maxQuotes, onEditComplete }) {
  const [step, setStep] = useState(1);
  const { user, isPremium } = useAuth();
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const isEditing = !!editingQuote;
  
  const [formData, setFormData] = useState({
    bedrooms: '2',
    bathrooms: '1',
    propertyType: 'house',
    location: '',
    quality: 'standard',
    // What needs doing (checkboxes)
    needsDecoration: true,
    needsFlooring: true,
    needsPlastering: false,
    needsKitchen: true,
    needsBathroom: true,
    needsRewire: false,
    needsHeating: false,
    needsWindows: false,
  });

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
        needsPlastering: editingQuote.needsPlastering || false,
        needsKitchen: editingQuote.needsKitchen !== false,
        needsBathroom: editingQuote.needsBathroom !== false,
        needsRewire: editingQuote.needsRewire || false,
        needsHeating: editingQuote.needsHeating || false,
        needsWindows: editingQuote.needsWindows || false,
      });
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
    
    // Auto-calculate sqm
    const totalSqm = AUTO_SQM[propertyType]?.[bedrooms] || 75;
    
    let labourBreakdown = {};
    let materialsBreakdown = {};
    
    // Calculate costs based on what's needed
    if (formData.needsDecoration) {
      labourBreakdown.decoration = totalSqm * RATES.decoration.labour[quality];
      materialsBreakdown.decoration = totalSqm * RATES.decoration.materials[quality];
    }
    
    if (formData.needsFlooring) {
      labourBreakdown.flooring = totalSqm * RATES.flooring.labour[quality];
      materialsBreakdown.flooring = totalSqm * RATES.flooring.materials[quality];
    }
    
    if (formData.needsPlastering) {
      labourBreakdown.plastering = totalSqm * RATES.plastering.labour[quality];
      materialsBreakdown.plastering = totalSqm * RATES.plastering.materials[quality];
    }
    
    if (formData.needsKitchen) {
      labourBreakdown.kitchen = RATES.kitchen.labour[quality];
      materialsBreakdown.kitchen = RATES.kitchen.materials[quality];
    }
    
    if (formData.needsBathroom) {
      labourBreakdown.bathrooms = RATES.bathroom.labour[quality] * bathrooms;
      materialsBreakdown.bathrooms = RATES.bathroom.materials[quality] * bathrooms;
    }
    
    if (formData.needsRewire) {
      labourBreakdown.rewire = RATES.rewire.labour[quality];
      materialsBreakdown.rewire = RATES.rewire.materials[quality];
    }
    
    if (formData.needsHeating) {
      labourBreakdown.heating = RATES.heating.labour[quality];
      materialsBreakdown.heating = RATES.heating.materials[quality];
    }
    
    if (formData.needsWindows) {
      labourBreakdown.windows = RATES.windows.labour[quality];
      materialsBreakdown.windows = RATES.windows.materials[quality];
    }
    
    const totalLabour = Object.values(labourBreakdown).reduce((sum, val) => sum + val, 0);
    const totalMaterials = Object.values(materialsBreakdown).reduce((sum, val) => sum + val, 0);
    const subtotal = totalLabour + totalMaterials;
    const contingency = Math.round(subtotal * 0.15);
    const total = subtotal + contingency;
    
    // Calculate range (±20%)
    const rangeMin = Math.round(total * 0.8);
    const rangeMax = Math.round(total * 1.2);
    
    return {
      labourBreakdown,
      materialsBreakdown,
      totalLabour,
      totalMaterials,
      subtotal,
      contingency,
      total,
      rangeMin,
      rangeMax,
      totalSqm
    };
  }, [formData]);

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
        breakdown: {
          labour: estimate.labourBreakdown,
          materials: estimate.materialsBreakdown
        },
        updatedAt: new Date().toISOString(),
      };

      if (isEditing) {
        await FirestoreWrapper.updateDoc('quotes', editingQuote.id, quoteData);
        setSaveSuccess(true);
        setTimeout(() => {
          if (onEditComplete) onEditComplete();
        }, 1500);
      } else {
        quoteData.createdAt = new Date().toISOString();
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

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${s <= step ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-200 text-slate-400'}`}>
                {s}
              </div>
              {s < 3 && <div className={`h-1 flex-1 mx-2 rounded transition-all ${s < step ? 'bg-blue-600' : 'bg-slate-200'}`} />}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs sm:text-sm text-slate-600 mt-2">
          <span>Property</span>
          <span>What's Needed</span>
          <span>Estimate</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8">
        {/* STEP 1: Property Details */}
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
                      className={`p-4 rounded-xl border-2 font-medium transition-all capitalize ${formData.propertyType === type ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 hover:border-slate-300 text-slate-700'}`}
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
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  >
                    {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Bathrooms</label>
                  <select
                    value={formData.bathrooms}
                    onChange={(e) => updateForm('bathrooms', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
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
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  placeholder="e.g., 123 Oak Street, Manchester"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: What Needs Doing */}
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
                  className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData[item.field] ? 'border-blue-600 bg-blue-50' : 'border-slate-200 hover:border-slate-300'}`}
                >
                  <input
                    type="checkbox"
                    checked={formData[item.field]}
                    onChange={(e) => updateForm(item.field, e.target.checked)}
                    className="w-5 h-5 mt-0.5 rounded border-slate-300 text-blue-600"
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
                    className={`p-4 rounded-xl border-2 text-left transition-all ${formData.quality === q.value ? 'border-blue-600 bg-blue-50' : 'border-slate-200 hover:border-slate-300'}`}
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

        {/* STEP 3: Estimate */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">{isEditing ? 'Updated Estimate' : 'Your Estimate'}</h2>
            <p className="text-slate-600 mb-6">
              {formData.location && `${formData.location} • `}
              {formData.bedrooms} bed {formData.propertyType} • {formData.quality} quality
            </p>

            {/* ESTIMATE DISPLAY - RANGE FOR FREE/SIGNED UP */}
            {!isPremium ? (
              <>
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white shadow-lg mb-6">
                  <div className="text-sm opacity-90 mb-1">Estimated Cost Range</div>
                  <div className="text-4xl font-bold">
                    £{estimate.rangeMin.toLocaleString()} - £{estimate.rangeMax.toLocaleString()}
                  </div>
                  <div className="text-sm opacity-75 mt-2">Based on UK trade rates</div>
                </div>

                {/* BLURRED BREAKDOWN */}
                <div className="relative mb-6">
                  <div className="blur-sm pointer-events-none select-none">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Cost Breakdown</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between py-3 border-b">
                          <span>Labour Costs</span>
                          <span className="font-bold">£{estimate.totalLabour.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between py-3 border-b">
                          <span>Materials</span>
                          <span className="font-bold">£{estimate.totalMaterials.toLocaleString()}</span>
                        </div>
                        {Object.keys(estimate.labourBreakdown).map(key => (
                          <div key={key} className="text-sm text-gray-600 ml-4">
                            {key}: Labour £XXX + Materials £XXX
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-xl shadow-2xl p-6 text-center max-w-sm">
                      <div className="text-4xl mb-4">🔒</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Unlock Full Breakdown</h3>
                      <p className="text-gray-600 mb-4">See detailed labour and material costs for each item</p>
                      {user ? (
                        <PaymentButton quoteData={formData} />
                      ) : (
                        <div className="text-amber-700 text-sm">Sign in to unlock premium features</div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* EXACT ESTIMATE FOR PREMIUM */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white shadow-lg mb-6">
                  <div className="text-sm opacity-90 mb-1">Total Estimated Cost</div>
                  <div className="text-4xl font-bold">£{estimate.total.toLocaleString()}</div>
                  <div className="text-sm opacity-75 mt-2">Including 15% contingency</div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-2 text-green-800">
                    <span className="text-xl">✅</span>
                    <span className="font-semibold">Premium - Full breakdown unlocked</span>
                  </div>
                </div>

                {/* FULL BREAKDOWN */}
                <div className="space-y-4 mb-6">
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-blue-900">Total Labour</span>
                      <span className="text-xl font-bold text-blue-900">£{estimate.totalLabour.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  {Object.entries(estimate.labourBreakdown).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-3 border-b border-slate-200 ml-4">
                      <span className="text-slate-700 capitalize">{key} Labour</span>
                      <span className="font-semibold text-slate-900">£{Math.round(value).toLocaleString()}</span>
                    </div>
                  ))}

                  <div className="bg-purple-50 rounded-xl p-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-purple-900">Total Materials</span>
                      <span className="text-xl font-bold text-purple-900">£{estimate.totalMaterials.toLocaleString()}</span>
                    </div>
                  </div>

                  {Object.entries(estimate.materialsBreakdown).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-3 border-b border-slate-200 ml-4">
                      <span className="text-slate-700 capitalize">{key} Materials</span>
                      <span className="font-semibold text-slate-900">£{Math.round(value).toLocaleString()}</span>
                    </div>
                  ))}

                  <div className="bg-amber-50 rounded-xl p-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-amber-900">Contingency (15%)</span>
                      <span className="text-xl font-bold text-amber-900">£{estimate.contingency.toLocaleString()}</span>
                    </div>
                  </div>
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

        {/* Navigation */}
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
              className="flex-1 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-lg"
            >
              {step === 2 ? 'Get Estimate' : 'Next'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
