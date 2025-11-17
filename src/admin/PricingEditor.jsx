import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { FirestoreWrapper } from "../services/firebase-wrapper";

const TEMPLATE_IDS = ['kitchen', 'bathrooms', 'decoration', 'flooring'];

export default function PricingEditor() {
  const { user } = useAuth();
  const [templates, setTemplates] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadTemplates();
  }, []);

  const loadTemplates = async () => {
    setLoading(true);
    try {
      const { collection, getDocs } = await import('firebase/firestore');
      const { db } = await import('../config/firebase');
      
      const snap = await getDocs(collection(db, "pricingTemplates"));
      const map = {};
      snap.forEach((d) => {
        map[d.id] = { 
          id: d.id,
          name: d.id.charAt(0).toUpperCase() + d.id.slice(1),
          hours: {},
          hoursPerBathroom: {},
          hoursPerSqm: 0.5,
          hourlyRate: { budget: 0, standard: 0, premium: 0 },
          materials: {},
          materialsPerBathroom: {},
          materialsPerSqm: { budget: 0, standard: 0, premium: 0 },
          materialsDetails: '',
          materialsDetailsTemplate: '',
          source: { text: '', links: [] },
          ...d.data() 
        };
      });

      // Ensure all 4 templatesRetryimport { useState, useMemo, useEffect } from "react";
import { FirestoreWrapper } from '../services/firebase-wrapper';
import PaymentButton from './PaymentButton';
import { useAuth } from '../hooks/useAuth.jsx';

// Auto-calculate sqm from property details
const AUTO_SQM = {
  flat: { 1: 45, pastedDthis was the old refurblyPerfect! Now I'll create the complete integration with the Firestore-backed pricing system. Let me create all the necessary files:
bashcd ~/Refurbly

# 1. Create admin folder and PricingEditor component
mkdir -p src/admin

cat > src/admin/PricingEditor.jsx << 'EOF'
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

const TEMPLATE_IDS = ['kitchen', 'bathrooms', 'decoration', 'flooring'];

export default function PricingEditor() {
  const { user } = useAuth();
  const [templates, setTemplates] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadTemplates();
  }, []);

  const loadTemplates = async () => {
    setLoading(true);
    try {
      const { collection, getDocs } = await import('firebase/firestore');
      const { db } = await import('../config/firebase');
      
      const snap = await getDocs(collection(db, "pricingTemplates"));
      const map = {};
      snap.forEach((d) => {
        map[d.id] = { 
          id: d.id,
          name: d.id.charAt(0).toUpperCase() + d.id.slice(1),
          hours: {},
          hoursPerBathroom: {},
          hoursPerSqm: 0.5,
          hourlyRate: { budget: 0, standard: 0, premium: 0 },
          materials: {},
          materialsPerBathroom: {},
          materialsPerSqm: { budget: 0, standard: 0, premium: 0 },
          materialsDetails: '',
          materialsDetailsTemplate: '',
          source: { text: '', links: [] },
          ...d.data() 
        };
      });

      // Ensure all 4 templates exist with defaults
      TEMPLATE_IDS.forEach((id) => {
        if (!map[id]) {
          map[id] = {
            id,
            name: id.charAt(0).toUpperCase() + id.slice(1),
            hours: id === 'kitchen' ? { budget: 50, standard: 60, premium: 90 } : {},
            hoursPerBathroom: id === 'bathrooms' ? { budget: 40, standard: 50, premium: 70 } : {},
            hoursPerSqm: ['decoration', 'flooring'].includes(id) ? 0.5 : 0,
            hourlyRate: { budget: 30, standard: 35, premium: 45 },
            materials: id === 'kitchen' ? { budget: 6000, standard: 16000, premium: 30000 } : {},
            materialsPerBathroom: id === 'bathrooms' ? { budget: 3000, standard: 5500, premium: 10000 } : {},
            materialsPerSqm: ['decoration', 'flooring'].includes(id) ? { budget: 8, standard: 12, premium: 18 } : {},
            materialsDetails: '',
            materialsDetailsTemplate: '',
            source: { text: '', links: [] },
          };
        }
      });

      setTemplates(map);
    } catch (e) {
      console.error('Error loading templates', e);
      alert('Failed to load templates: ' + e.message);
    } finally {
      setLoading(false);
    }
  };

  const update = (id, field, value) => {
    setTemplates((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value
      }
    }));
  };

  const updateNested = (id, parent, quality, value) => {
    setTemplates((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [parent]: {
          ...(prev[id][parent] || {}),
          [quality]: Number(value) || 0
        }
      }
    }));
  };

  const updateSourceText = (id, text) => {
    setTemplates((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        source: {
          ...(prev[id].source || { links: [] }),
          text
        }
      }
    }));
  };

  const updateLink = (id, index, field, value) => {
    setTemplates((prev) => {
      const tpl = prev[id];
      const links = [...(tpl.source?.links || [])];
      links[index] = { ...(links[index] || {}), [field]: value };
      return {
        ...prev,
        [id]: {
          ...tpl,
          source: {
            ...(tpl.source || { text: '' }),
            links
          }
        }
      };
    });
  };

  const addLink = (id) => {
    setTemplates((prev) => {
      const tpl = prev[id];
      const links = [...(tpl.source?.links || [])];
      links.push({ label: '', url: '' });
      return {
        ...prev,
        [id]: {
          ...tpl,
          source: {
            ...(tpl.source || { text: '' }),
            links
          }
        }
      };
    });
  };

  const removeLink = (id, index) => {
    setTemplates((prev) => {
      const tpl = prev[id];
      const links = [...(tpl.source?.links || [])];
      links.splice(index, 1);
      return {
        ...prev,
        [id]: {
          ...tpl,
          source: {
            ...(tpl.source || { text: '' }),
            links
          }
        }
      };
    });
  };

  const saveAll = async () => {
    setSaving(true);
    try {
      const { doc, setDoc } = await import('firebase/firestore');
      const { db } = await import('../config/firebase');

      for (const key of Object.keys(templates)) {
        const tpl = templates[key];
        const cleanLinks = (tpl.source?.links || []).filter(
          (l) => l.label && l.url
        );
        const payload = {
          ...tpl,
          source: {
            text: tpl.source?.text || '',
            links: cleanLinks
          }
        };

        await setDoc(doc(db, "pricingTemplates", key), payload, { merge: true });
      }
      alert("✅ All templates saved successfully!");
    } catch (e) {
      console.error(e);
      alert("Failed to save: " + e.message);
    } finally {
      setSaving(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Not logged in</h2>
          <p className="text-slate-600">Please sign in to access the pricing editor</p>
        </div>
      </div>
    );
  }

  // Replace with your actual admin email
  if (user.email !== "dominick.m.mahon@gmail.com") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Access Denied</h2>
          <p className="text-slate-600">You don't have permission to access this page</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-slate-600">Loading templates...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Pricing Admin Panel</h1>
          <p className="text-slate-600">Manage pricing templates for the Refurbly calculator</p>
        </div>

        {TEMPLATE_IDS.map((id) => {
          const tpl = templates[id];
          if (!tpl) return null;

          return (
            <div key={id} className="bg-white rounded-2xl shadow-xl p-6 mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 capitalize">{tpl.name}</h2>

              {/* Materials Details */}
              <div className="mb-6">
                <label className="block font-semibold text-slate-700 mb-2">Materials Description</label>
                <input
                  type="text"
                  value={tpl.materialsDetails || ""}
                  onChange={(e) => update(id, "materialsDetails", e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-600 outline-none"
                  placeholder="e.g., Units & appliances"
                />
              </div>

              {/* Materials Template (for sqm-based) */}
              {['decoration', 'flooring'].includes(id) && (
                <div className="mb-6">
                  <label className="block font-semibold text-slate-700 mb-2">Materials Template (use {'{sqm}'} for area)</label>
                  <input
                    type="text"
                    value={tpl.materialsDetailsTemplate || ""}
                    onChange={(e) => update(id, "materialsDetailsTemplate", e.target.value)}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-600 outline-none"
                    placeholder="e.g., Paint & materials ({sqm}sqm)"
                  />
                </div>
              )}

              {/* Hourly Rates */}
              <div className="mb-6">
                <h3 className="font-semibold text-slate-700 mb-3">Hourly Rates (£/hour)</h3>
                <div className="grid grid-cols-3 gap-3">
                  {["budget", "standard", "premium"].map((q) => (
                    <div key={q}>
                      <label className="block text-sm text-slate-600 mb-1 capitalize">{q}</label>
                      <input
                        type="number"
                        value={tpl.hourlyRate?.[q] || ""}
                        onChange={(e) => updateNested(id, "hourlyRate", q, e.target.value)}
                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-600 outline-none"
                        placeholder="35"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Hours (for kitchen) */}
              {id === 'kitchen' && (
                <div className="mb-6">
                  <h3 className="font-semibold text-slate-700 mb-3">Labour Hours</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {["budget", "standard", "premium"].map((q) => (
                      <div key={q}>
                        <label className="block text-sm text-slate-600 mb-1 capitalize">{q}</label>
                        <input
                          type="number"
                          value={tpl.hours?.[q] || ""}
                          onChange={(e) => updateNested(id, "hours", q, e.target.value)}
                          className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-600 outline-none"
                          placeholder="60"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Hours per bathroom */}
              {id === 'bathrooms' && (
                <div className="mb-6">
                  <h3 className="font-semibold text-slate-700 mb-3">Hours per Bathroom</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {["budget", "standard", "premium"].map((q) => (
                      <div key={q}>
                        <label className="block text-sm text-slate-600 mb-1 capitalize">{q}</label>
                        <input
                          type="number"
                          value={tpl.hoursPerBathroom?.[q] || ""}
                          onChange={(e) => updateNested(id, "hoursPerBathroom", q, e.target.value)}
                          className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-600 outline-none"
                          placeholder="50"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Hours per sqm (for decoration/flooring) */}
              {['decoration', 'flooring'].includes(id) && (
                <div className="mb-6">
                  <label className="block font-semibold text-slate-700 mb-2">Hours per m²</label>
                  <input
                    type="number"
                    step="0.1"
                    value={tpl.hoursPerSqm || ""}
                    onChange={(e) => update(id, "hoursPerSqm", Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-600 outline-none"
                    placeholder="0.5"
                  />
                </div>
              )}

              {/* Materials Cost */}
              <div className="mb-6">
                <h3 className="font-semibold text-slate-700 mb-3">
                  {id === 'kitchen' ? 'Total Materials Cost (£)' :
                   id === 'bathrooms' ? 'Materials per Bathroom (£)' :
                   'Materials per m² (£)'}
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {["budget", "standard", "premium"].map((q) => (
                    <div key={q}>
                      <label className="block text-sm text-slate-600 mb-1 capitalize">{q}</label>
                      <input
                        type="number"
                        value={
                          id === 'kitchen' ? (tpl.materials?.[q] || "") :
                          id === 'bathrooms' ? (tpl.materialsPerBathroom?.[q] || "") :
                          (tpl.materialsPerSqm?.[q] || "")
                        }
                        onChange={(e) => {
                          const field = id === 'kitchen' ? 'materials' :
                                       id === 'bathrooms' ? 'materialsPerBathroom' :
                                       'materialsPerSqm';
                          updateNested(id, field, q, e.target.value);
                        }}
                        className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-600 outline-none"
                        placeholder={id === 'kitchen' ? "16000" : id === 'bathrooms' ? "5500" : "12"}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Source */}
              <div className="mb-6">
                <h3 className="font-semibold text-slate-700 mb-3">Evidence Source</h3>
                <input
                  type="text"
                  value={tpl.source?.text || ""}
                  onChange={(e) => updateSourceText(id, e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-600 outline-none mb-3"
                  placeholder="e.g., London kitchen costs £15k-£30k (mid-range)"
                />

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">Source Links</label>
                  {(tpl.source?.links || []).map((link, idx) => (
                    <div key={idx} className="flex gap-2">
                      <input
                        type="text"
                        value={link.label || ""}
                        onChange={(e) => updateLink(id, idx, 'label', e.target.value)}
                        className="flex-1 px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-600 outline-none"
                        placeholder="Link label"
                      />
                      <input
                        type="url"
                        value={link.url || ""}
                        onChange={(e) => updateLink(id, idx, 'url', e.target.value)}
                        className="flex-1 px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-600 outline-none"
                        placeholder="https://..."
                      />
                      <button
                        onClick={() => removeLink(id, idx)}
                        className="px-3 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => addLink(id)}
                    className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg text-sm font-semibold"
                  >
                    + Add Link
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        <div className="bg-white rounded-2xl shadow-xl p-6">
          <button
            onClick={saveAll}
            disabled={saving}
            className="w-full px-6 py-4 bg-green-600 hover:bg-green-700 disabled:bg-slate-400 text-white font-bold rounded-xl text-lg transition-all"
          >
            {saving ? "Saving..." : "💾 Save All Templates"}
          </button>
        </div>
      </div>
    </div>
  );
}
