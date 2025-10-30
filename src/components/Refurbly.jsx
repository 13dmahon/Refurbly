import { useState, useMemo, useEffect } from "react";
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import PaymentButton from './PaymentButton';
import { useAuth } from '../hooks/useAuth.jsx';

const RATES = {
  decoration: {
    light: { budget: 200, standard: 300, premium: 500 },
    standard: { budget: 400, standard: 600, premium: 1000 },
    full: { budget: 600, standard: 900, premium: 1500 },
  },
  flooring: {
    light: { budget: 25, standard: 35, premium: 50 },
    standard: { budget: 40, standard: 60, premium: 90 },
    full: { budget: 70, standard: 95, premium: 130 },
  },
  plastering: {
    light: { budget: 0, standard: 0, premium: 0 },
    standard: { budget: 25, standard: 35, premium: 50 },
    full: { budget: 45, standard: 60, premium: 80 },
  },
  kitchen: {
    budget: 5000,
    standard: 8000,
    premium: 15000,
  },
  bathroom: {
    budget: 3000,
    standard: 4500,
    premium: 7500,
  },
  extras: {
    rewire: { budget: 2500, standard: 3500, premium: 5000 },
    heating: { budget: 3000, standard: 4000, premium: 6000 },
    windows: { budget: 4000, standard: 6000, premium: 9000 },
  },
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
    totalSqm: '75',
    location: '',
    refurbLevel: 'standard',
    quality: 'standard',
    includeKitchen: true,
    includeBathroom: true,
    includeRewire: false,
    includeHeating: false,
    includeWindows: false,
  });

  // Load editing quote data
  useEffect(() => {
    if (editingQuote) {
      setFormData({
        bedrooms: String(editingQuote.bedrooms || '2'),
        bathrooms: String(editingQuote.bathrooms || '1'),
        propertyType: editingQuote.propertyType || 'house',
        totalSqm: String(editingQuote.totalSqm || '75'),
        location: editingQuote.location || '',
        refurbLevel: editingQuote.refurbLevel || 'standard',
        quality: editingQuote.quality || 'standard',
        includeKitchen: editingQuote.includeKitchen !== false,
        includeBathroom: editingQuote.includeBathroom !== false,
        includeRewire: editingQuote.includeRewire || false,
        includeHeating: editingQuote.includeHeating || false,
        includeWindows: editingQuote.includeWindows || false,
      });
    }
  }, [editingQuote]);

  const updateForm = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const estimate = useMemo(() => {
    const totalSqm = parseFloat(formData.totalSqm) || 75;
    const bathrooms = parseInt(formData.bathrooms) || 1;
    const { refurbLevel, quality, includeKitchen, includeBathroom, includeRewire, includeHeating, includeWindows } = formData;
    
    let breakdown = {};
    
    const decorationCost = RATES.decoration[refurbLevel][quality];
    const flooringCost = totalSqm * RATES.flooring[refurbLevel][quality];
    const plasteringCost = totalSqm * RATES.plastering[refurbLevel][quality];
    
    breakdown.decorationLabour = decorationCost;
    breakdown.flooringTotal = flooringCost;
    if (plasteringCost > 0) {
      breakdown.plastering = plasteringCost;
    }
    
    if (includeKitchen) breakdown.kitchen = RATES.kitchen[quality];
    if (includeBathroom) breakdown.bathrooms = RATES.bathroom[quality] * bathrooms;
    if (includeRewire) breakdown.rewire = RATES.extras.rewire[quality];
    if (includeHeating) breakdown.heating = RATES.extras.heating[quality];
    if (includeWindows) breakdown.windows = RATES.extras.windows[quality];
    
    const subtotal = Object.values(breakdown).reduce((sum, val) => sum + val, 0);
    const contingency = Math.round(subtotal * 0.15);
    
    return {
      breakdown,
      subtotal,
      contingency,
      total: subtotal + contingency,
    };
  }, [formData]);

  const handleSaveQuote = async () => {
    if (!user) {
      alert('Please sign in to save quotes');
      return;
    }

    // Check quote limit for new quotes
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
        totalSqm: parseFloat(formData.totalSqm),
        refurbLevel: formData.refurbLevel,
        quality: formData.quality,
        includeKitchen: formData.includeKitchen,
        includeBathroom: formData.includeBathroom,
        includeRewire: formData.includeRewire,
        includeHeating: formData.includeHeating,
        includeWindows: formData.includeWindows,
        estimate: estimate.total,
        breakdown: estimate.breakdown,
        updatedAt: new Date().toISOString(),
      };

      if (isEditing) {
        // Update existing quote
        await updateDoc(doc(db, 'quotes', editingQuote.id), quoteData);
        setSaveSuccess(true);
        setTimeout(() => {
          if (onEditComplete) onEditComplete();
        }, 1500);
      } else {
        // Create new quote
        quoteData.createdAt = new Date().toISOString();
        await addDoc(collection(db, 'quotes'), quoteData);
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

  const handleNext = () => setStep((s) => Math.min(s + 1, 4));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="max-w-4xl mx-auto">
      {/* Show editing banner */}
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
        <div className="flex items-center justify-between mb-2">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                  s <= step ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-200 text-slate-400'
                }`}
              >
                {s}
              </div>
              {s < 4 && (
                <div className={`h-1 flex-1 mx-2 rounded transition-all ${s < step ? 'bg-blue-600' : 'bg-slate-200'}`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs sm:text-sm text-slate-600 mt-2">
          <span>Property</span>
          <span>Refurb Type</span>
          <span>Quality</span>
          <span>Estimate</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8">
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Property Details</h2>
            <p className="text-slate-600 mb-6">Tell us about the property you're refurbishing</p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Property Location (optional)</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => updateForm('location', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  placeholder="e.g., 123 Oak Street, Manchester"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Property Type</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {['flat', 'house', 'maisonette'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => updateForm('propertyType', type)}
                      className={`p-4 rounded-xl border-2 font-medium transition-all capitalize ${
                        formData.propertyType === type
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Bedrooms</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={formData.bedrooms}
                    onChange={(e) => updateForm('bedrooms', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Bathrooms</label>
                  <input
                    type="number"
                    min="1"
                    max="6"
                    value={formData.bathrooms}
                    onChange={(e) => updateForm('bathrooms', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Total Floor Area (sqm)
                  <span className="ml-2 text-xs font-normal text-slate-500">Optional</span>
                </label>
                <input
                  type="number"
                  min="20"
                  max="500"
                  value={formData.totalSqm}
                  onChange={(e) => updateForm('totalSqm', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  placeholder="e.g., 75"
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Refurbishment Scope</h2>
            <p className="text-slate-600 mb-6">What work needs doing?</p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">Refurb Level</label>
                <div className="space-y-3">
                  {[
                    { value: 'light', label: 'Light Refresh', desc: 'Paint, carpets, cosmetic updates' },
                    { value: 'standard', label: 'Standard Refurb', desc: 'Full decoration, flooring, kitchen & bathroom refresh' },
                    { value: 'full', label: 'Full Refurbishment', desc: 'Complete overhaul - everything renewed' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => updateForm('refurbLevel', option.value)}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                        formData.refurbLevel === option.value
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="font-semibold text-slate-900">{option.label}</div>
                      <div className="text-sm text-slate-600 mt-1">{option.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <label className="block text-sm font-semibold text-slate-700 mb-3">Additional Works</label>
                <div className="space-y-2">
                  {[
                    { field: 'includeKitchen', label: 'Include kitchen refurb' },
                    { field: 'includeBathroom', label: `Include bathroom refurb` },
                    { field: 'includeRewire', label: 'Full electrical rewire' },
                    { field: 'includeHeating', label: 'New heating system/boiler' },
                    { field: 'includeWindows', label: 'Replace windows' },
                  ].map((checkbox) => (
                    <label key={checkbox.field} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData[checkbox.field]}
                        onChange={(e) => updateForm(checkbox.field, e.target.checked)}
                        className="w-5 h-5 rounded border-slate-300 text-blue-600"
                      />
                      <span className="text-slate-700">{checkbox.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Quality Level</h2>
            <p className="text-slate-600 mb-6">What standard of finish are you aiming for?</p>

            <div className="space-y-3">
              {[
                { value: 'budget', label: 'Budget', desc: 'Basic, functional finish', icon: '💰' },
                { value: 'standard', label: 'Standard', desc: 'Good quality, mid-range finishes', icon: '🏡' },
                { value: 'premium', label: 'Premium', desc: 'High-end finishes and fittings', icon: '⭐' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => updateForm('quality', option.value)}
                  className={`w-full p-5 rounded-xl border-2 text-left transition-all ${
                    formData.quality === option.value
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{option.icon}</span>
                    <div>
                      <div className="font-semibold text-slate-900 text-lg">{option.label}</div>
                      <div className="text-sm text-slate-600 mt-1">{option.desc}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              {isEditing ? 'Updated Estimate' : 'Your Estimate'}
            </h2>
            <p className="text-slate-600 mb-6">
              {formData.location && `${formData.location} • `}
              {formData.bedrooms} bed {formData.propertyType} • {formData.quality} quality
            </p>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white shadow-lg mb-6">
              <div className="text-sm opacity-90 mb-1">Total Estimated Cost</div>
              <div className="text-4xl font-bold">£{estimate.total.toLocaleString()}</div>
              <div className="text-sm opacity-75 mt-2">Including 15% contingency</div>
            </div>

            {!isPremium && !isEditing && (
              <div className="border-2 border-blue-200 bg-blue-50 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🔓</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Unlock Full Breakdown</h3>
                    <p className="text-slate-700 mb-4">Get detailed costs and edit saved quotes</p>
                    
                    <ul className="space-y-2 mb-4 text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span> Save up to 10 quotes (vs 5 free)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span> Full cost breakdown
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-600">✓</span> Edit saved quotes
                      </li>
                    </ul>

                    {user ? (
                      <PaymentButton quoteData={formData} />
                    ) : (
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                        <p className="text-sm text-amber-800">
                          Please sign in to unlock premium features
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {isPremium && (
              <div className="space-y-3 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-2 text-green-800">
                    <span className="text-xl">✅</span>
                    <span className="font-semibold">Premium - Full breakdown</span>
                  </div>
                </div>
                
                {estimate.breakdown.decorationLabour && (
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <span className="text-slate-700">Decoration Labour</span>
                    <span className="font-semibold text-slate-900">£{estimate.breakdown.decorationLabour.toLocaleString()}</span>
                  </div>
                )}
                {estimate.breakdown.flooringTotal && (
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <span className="text-slate-700">Flooring ({parseFloat(formData.totalSqm)}sqm)</span>
                    <span className="font-semibold text-slate-900">£{Math.round(estimate.breakdown.flooringTotal).toLocaleString()}</span>
                  </div>
                )}
                {estimate.breakdown.plastering && (
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <span className="text-slate-700">Plastering</span>
                    <span className="font-semibold text-slate-900">£{Math.round(estimate.breakdown.plastering).toLocaleString()}</span>
                  </div>
                )}
                {estimate.breakdown.kitchen && (
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <span className="text-slate-700">Kitchen</span>
                    <span className="font-semibold text-slate-900">£{estimate.breakdown.kitchen.toLocaleString()}</span>
                  </div>
                )}
                {estimate.breakdown.bathrooms && (
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <span className="text-slate-700">Bathrooms</span>
                    <span className="font-semibold text-slate-900">£{estimate.breakdown.bathrooms.toLocaleString()}</span>
                  </div>
                )}
                {estimate.breakdown.rewire && (
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <span className="text-slate-700">Rewire</span>
                    <span className="font-semibold text-slate-900">£{estimate.breakdown.rewire.toLocaleString()}</span>
                  </div>
                )}
                {estimate.breakdown.heating && (
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <span className="text-slate-700">Heating</span>
                    <span className="font-semibold text-slate-900">£{estimate.breakdown.heating.toLocaleString()}</span>
                  </div>
                )}
                {estimate.breakdown.windows && (
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <span className="text-slate-700">Windows</span>
                    <span className="font-semibold text-slate-900">£{estimate.breakdown.windows.toLocaleString()}</span>
                  </div>
                )}
              </div>
            )}

            {saveSuccess && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <p className="text-green-800 font-semibold">
                  ✓ Quote {isEditing ? 'updated' : 'saved'} successfully!
                </p>
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
              
              <button
                type="button"
                className="w-full px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-all"
              >
                📧 Email This Quote
              </button>
              
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

        {step < 4 && (
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
              {step === 3 ? 'Get Estimate' : 'Next'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
