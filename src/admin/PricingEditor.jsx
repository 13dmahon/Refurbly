import { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth.jsx'
import { FirestoreWrapper } from '../services/firebase-wrapper'

// These are just used for sensible defaults when Firestore is empty
const DEFAULT_TEMPLATES = {
  kitchen: {
    id: 'kitchen',
    name: 'Kitchen',
    hourlyRate: { budget: 30, standard: 40, premium: 50 },
    hours: { budget: 50, standard: 60, premium: 90 },
    materials: { budget: 6000, standard: 16000, premium: 30000 },
    materialsDetails: 'Units & appliances',
    source: {
      text: 'London kitchen costs £15k–£30k (mid-range)',
      links: [
        {
          label: 'Checkatrade Kitchen Guide',
          url: 'https://www.checkatrade.com/blog/cost-guides/new-kitchen-cost/',
        },
        {
          label: 'Knight Frank Refurb Guide 2024',
          url: 'https://content.knightfrank.com/research/2179/documents/en/knight-frank-landlord-refurbishment-cost-guide-spring-2024-11150.pdf',
        },
      ],
    },
  },
  bathrooms: {
    id: 'bathrooms',
    name: 'Bathrooms',
    hourlyRate: { budget: 35, standard: 40, premium: 50 },
    hoursPerBathroom: { budget: 40, standard: 50, premium: 70 },
    materialsPerBathroom: { budget: 3000, standard: 5500, premium: 10000 },
    materialsDetails: 'Suite & tiles',
    source: {
      text: 'London bathroom costs £5k–£12k+ (standard)',
      links: [
        {
          label: 'Checkatrade Bathroom Guide',
          url: 'https://www.checkatrade.com/blog/cost-guides/bathroom-cost/',
        },
        {
          label: 'Knight Frank Refurb Guide 2024',
          url: 'https://content.knightfrank.com/research/2179/documents/en/knight-frank-landlord-refurbishment-cost-guide-spring-2024-11150.pdf',
        },
      ],
    },
  },
  decoration: {
    id: 'decoration',
    name: 'Decoration',
    hourlyRate: { budget: 30, standard: 35, premium: 45 },
    hoursPerSqm: 0.5,
    materialsPerSqm: { budget: 8, standard: 12, premium: 18 },
    materialsDetailsTemplate: 'Paint & materials ({sqm}sqm)',
    source: {
      text: 'UK renovation statistics 2025',
      links: [
        {
          label: 'Hillarys UK Renovation Stats',
          url: 'https://www.hillarys.co.uk/static/home-renovation-statistics/',
        },
        {
          label: 'Knight Frank Refurb Guide 2024',
          url: 'https://content.knightfrank.com/research/2179/documents/en/knight-frank-landlord-refurbishment-cost-guide-spring-2024-11150.pdf',
        },
      ],
    },
  },
  flooring: {
    id: 'flooring',
    name: 'Flooring',
    hourlyRate: { budget: 35, standard: 40, premium: 55 },
    hoursPerSqm: 0.3,
    materialsPerSqm: { budget: 25, standard: 45, premium: 80 },
    materialsDetailsTemplate: 'Carpet/laminate ({sqm}sqm)',
    source: {
      text: 'Flooring costs from Carpetright & trade suppliers',
      links: [
        {
          label: 'Checkatrade Flooring Guide',
          url: 'https://www.checkatrade.com/blog/cost-guides/flooring-cost/',
        },
      ],
    },
  },
}

const TEMPLATE_ORDER = ['kitchen', 'bathrooms', 'decoration', 'flooring']

const QUALITY_LEVELS = ['budget', 'standard', 'premium']

// Only allow this email to edit pricing (change to whatever you use)
const ADMIN_EMAILS = ['dominick.m.mahon@gmail.com']

export default function PricingEditor() {
  const { user } = useAuth()

  const [templates, setTemplates] = useState({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState('')

  useEffect(() => {
    const loadTemplates = async () => {
      setLoading(true)
      try {
        const { collection, getDocs } = await import('firebase/firestore')
        const { db } = await import('../config/firebase')

        const snap = await getDocs(collection(db, 'pricingTemplates'))
        const data = {}

        snap.forEach((docSnap) => {
          data[docSnap.id] = { id: docSnap.id, ...docSnap.data() }
        })

        // Ensure we have all templates with sensible defaults
        const merged = {}
        TEMPLATE_ORDER.forEach((id) => {
          merged[id] = {
            ...(DEFAULT_TEMPLATES[id] || { id, name: id }),
            ...(data[id] || {}),
          }
        })

        setTemplates(merged)
      } catch (err) {
        console.error('❌ Failed to load pricing templates', err)
      } finally {
        setLoading(false)
      }
    }

    loadTemplates()
  }, [])

  const isAdmin =
    user && user.email && ADMIN_EMAILS.includes(user.email.toLowerCase())

  const updateTemplateField = (id, field, value) => {
    setTemplates((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }))
  }

  const updateNestedMap = (id, parentField, key, value) => {
    setTemplates((prev) => {
      const tpl = prev[id] || {}
      const parent = { ...(tpl[parentField] || {}) }
      parent[key] = value
      return {
        ...prev,
        [id]: { ...tpl, [parentField]: parent },
      }
    })
  }

  const updateSourceText = (id, value) => {
    setTemplates((prev) => {
      const tpl = prev[id] || {}
      const source = { ...(tpl.source || {}), text: value }
      return {
        ...prev,
        [id]: { ...tpl, source },
      }
    })
  }

  const updateSourceLink = (id, index, field, value) => {
    setTemplates((prev) => {
      const tpl = prev[id] || {}
      const source = { ...(tpl.source || {}) }
      const links = [...(source.links || [])]
      links[index] = { ...(links[index] || {}), [field]: value }
      source.links = links
      return {
        ...prev,
        [id]: { ...tpl, source },
      }
    })
  }

  const addSourceLink = (id) => {
    setTemplates((prev) => {
      const tpl = prev[id] || {}
      const source = { ...(tpl.source || {}) }
      const links = [...(source.links || []), { label: '', url: '' }]
      source.links = links
      return {
        ...prev,
        [id]: { ...tpl, source },
      }
    })
  }

  const removeSourceLink = (id, index) => {
    setTemplates((prev) => {
      const tpl = prev[id] || {}
      const source = { ...(tpl.source || {}) }
      const links = [...(source.links || [])]
      links.splice(index, 1)
      source.links = links
      return {
        ...prev,
        [id]: { ...tpl, source },
      }
    })
  }

  const saveAll = async () => {
    setSaving(true)
    setSaveMessage('')
    try {
      const templateList = TEMPLATE_ORDER.map((id) => templates[id]).filter(
        Boolean
      )

      for (const tpl of templateList) {
        const clean = { ...tpl }

        // Clean links (remove empty ones)
        if (clean.source && Array.isArray(clean.source.links)) {
          clean.source.links = clean.source.links.filter(
            (l) => l.label && l.url
          )
        }

        // Remove id from the stored doc (id is docId)
        const { id, ...payload } = clean

        await FirestoreWrapper.setDoc(
          'pricingTemplates',
          id,
          payload,
          { merge: true }
        )
      }

      setSaveMessage('✅ Saved pricing templates')
    } catch (err) {
      console.error('❌ Failed to save templates', err)
      setSaveMessage('❌ Failed to save — see console for details')
    } finally {
      setSaving(false)
      setTimeout(() => setSaveMessage(''), 4000)
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-2 text-slate-900">Admin Panel</h1>
          <p className="text-slate-600 mb-4">
            You need to be signed in to manage pricing.
          </p>
          <p className="text-sm text-slate-500">
            Log in in the main app, then tap the profile menu → Admin.
          </p>
        </div>
      </div>
    )
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-2 text-slate-900">No Access</h1>
          <p className="text-slate-600 mb-2">
            This pricing admin is restricted.
          </p>
          <p className="text-sm text-slate-500">
            You&apos;re signed in as <span className="font-mono">{user.email}</span> but only
            whitelisted admin accounts can edit pricing.
          </p>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading pricing templates...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Pricing Admin</h1>
          <p className="text-sm text-slate-600">
            Signed in as <span className="font-mono">{user.email}</span>
          </p>
        </div>
        <button
          onClick={saveAll}
          disabled={saving}
          className="px-5 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {saving ? 'Saving…' : '💾 Save All'}
        </button>
      </div>

      {saveMessage && (
        <div className="mb-4 rounded-xl px-4 py-3 text-sm bg-slate-900 text-slate-50">
          {saveMessage}
        </div>
      )}

      <div className="space-y-8">
        {TEMPLATE_ORDER.map((id) => {
          const tpl = templates[id]
          if (!tpl) return null

          return (
            <div
              key={id}
              className="bg-white rounded-2xl shadow-md border border-slate-200 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    {tpl.name || id}
                  </h2>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">
                    Template ID: <span className="font-mono">{id}</span>
                  </p>
                </div>
              </div>

              {/* Name */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Display Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border-2 border-slate-200 rounded-xl focus:border-blue-600 outline-none"
                  value={tpl.name || ''}
                  onChange={(e) =>
                    updateTemplateField(id, 'name', e.target.value)
                  }
                  placeholder="e.g. Kitchen"
                />
              </div>

              {/* LABOUR & MATERIALS */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-sm font-semibold text-slate-800 mb-2">
                    Labour – hourly rate (per quality)
                  </h3>
                  <div className="space-y-2">
                    {QUALITY_LEVELS.map((q) => (
                      <div key={q} className="flex items-center gap-3">
                        <div className="w-20 text-sm capitalize text-slate-600">
                          {q}
                        </div>
                        <input
                          type="number"
                          className="flex-1 px-3 py-2 border-2 border-slate-200 rounded-xl focus:border-blue-600 outline-none"
                          value={tpl.hourlyRate?.[q] ?? ''}
                          onChange={(e) =>
                            updateNestedMap(
                              id,
                              'hourlyRate',
                              q,
                              Number(e.target.value) || 0
                            )
                          }
                          placeholder="£ / hr"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* PER-TEMPLATE SPECIAL FIELDS */}
                <div>
                  {id === 'kitchen' && (
                    <>
                      <h3 className="text-sm font-semibold text-slate-800 mb-2">
                        Kitchen: fixed hours & materials per quality
                      </h3>
                      <div className="space-y-2 mb-4">
                        {QUALITY_LEVELS.map((q) => (
                          <div
                            key={q}
                            className="grid grid-cols-[80px,1fr,1fr] gap-2 items-center"
                          >
                            <div className="text-sm capitalize text-slate-600">
                              {q}
                            </div>
                            <input
                              type="number"
                              className="px-3 py-2 border-2 border-slate-200 rounded-xl focus:border-blue-600 outline-none"
                              value={tpl.hours?.[q] ?? ''}
                              onChange={(e) =>
                                updateNestedMap(
                                  id,
                                  'hours',
                                  q,
                                  Number(e.target.value) || 0
                                )
                              }
                              placeholder="Hours"
                            />
                            <input
                              type="number"
                              className="px-3 py-2 border-2 border-slate-200 rounded-xl focus:border-blue-600 outline-none"
                              value={tpl.materials?.[q] ?? ''}
                              onChange={(e) =>
                                updateNestedMap(
                                  id,
                                  'materials',
                                  q,
                                  Number(e.target.value) || 0
                                )
                              }
                              placeholder="£ Materials"
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {id === 'bathrooms' && (
                    <>
                      <h3 className="text-sm font-semibold text-slate-800 mb-2">
                        Bathrooms: per bathroom hours & materials
                      </h3>
                      <div className="space-y-2 mb-4">
                        {QUALITY_LEVELS.map((q) => (
                          <div
                            key={q}
                            className="grid grid-cols-[80px,1fr,1fr] gap-2 items-center"
                          >
                            <div className="text-sm capitalize text-slate-600">
                              {q}
                            </div>
                            <input
                              type="number"
                              className="px-3 py-2 border-2 border-slate-200 rounded-xl focus:border-blue-600 outline-none"
                              value={tpl.hoursPerBathroom?.[q] ?? ''}
                              onChange={(e) =>
                                updateNestedMap(
                                  id,
                                  'hoursPerBathroom',
                                  q,
                                  Number(e.target.value) || 0
                                )
                              }
                              placeholder="Hours per bathroom"
                            />
                            <input
                              type="number"
                              className="px-3 py-2 border-2 border-slate-200 rounded-xl focus:border-blue-600 outline-none"
                              value={tpl.materialsPerBathroom?.[q] ?? ''}
                              onChange={(e) =>
                                updateNestedMap(
                                  id,
                                  'materialsPerBathroom',
                                  q,
                                  Number(e.target.value) || 0
                                )
                              }
                              placeholder="£ per bathroom"
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {(id === 'decoration' || id === 'flooring') && (
                    <>
                      <h3 className="text-sm font-semibold text-slate-800 mb-2">
                        {tpl.name}: per m² configuration
                      </h3>
                      <div className="mb-3">
                        <label className="block text-xs font-semibold text-slate-600 mb-1">
                          Hours per m²
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border-2 border-slate-200 rounded-xl focus:border-blue-600 outline-none"
                          value={tpl.hoursPerSqm ?? ''}
                          onChange={(e) =>
                            updateTemplateField(
                              id,
                              'hoursPerSqm',
                              Number(e.target.value) || 0
                            )
                          }
                          placeholder="e.g. 0.5"
                        />
                      </div>
                      <div className="space-y-2">
                        {QUALITY_LEVELS.map((q) => (
                          <div
                            key={q}
                            className="flex items-center gap-3 mb-1"
                          >
                            <div className="w-20 text-sm capitalize text-slate-600">
                              {q}
                            </div>
                            <input
                              type="number"
                              className="flex-1 px-3 py-2 border-2 border-slate-200 rounded-xl focus:border-blue-600 outline-none"
                              value={tpl.materialsPerSqm?.[q] ?? ''}
                              onChange={(e) =>
                                updateNestedMap(
                                  id,
                                  'materialsPerSqm',
                                  q,
                                  Number(e.target.value) || 0
                                )
                              }
                              placeholder="£ materials per m²"
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* MATERIAL DETAILS / TEMPLATE */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Materials description / template
                </label>
                {id === 'decoration' || id === 'flooring' ? (
                  <input
                    type="text"
                    className="w-full px-3 py-2 border-2 border-slate-200 rounded-xl focus:border-blue-600 outline-none"
                    value={tpl.materialsDetailsTemplate || ''}
                    onChange={(e) =>
                      updateTemplateField(
                        id,
                        'materialsDetailsTemplate',
                        e.target.value
                      )
                    }
                    placeholder="e.g. Paint & materials ({sqm}sqm)"
                  />
                ) : (
                  <input
                    type="text"
                    className="w-full px-3 py-2 border-2 border-slate-200 rounded-xl focus:border-blue-600 outline-none"
                    value={tpl.materialsDetails || ''}
                    onChange={(e) =>
                      updateTemplateField(id, 'materialsDetails', e.target.value)
                    }
                    placeholder="e.g. Units & appliances"
                  />
                )}
                {id === 'decoration' || id === 'flooring' ? (
                  <p className="text-xs text-slate-500 mt-1">
                    You can use <code>{'{sqm}'}</code> in the text; it will be
                    replaced with the actual floor area.
                  </p>
                ) : null}
              </div>

              {/* SOURCE / LINKS */}
              <div className="mt-6 border-t border-slate-200 pt-4">
                <h3 className="text-sm font-semibold text-slate-800 mb-2">
                  Evidence / sources
                </h3>

                <div className="mb-3">
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Source summary text
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border-2 border-slate-200 rounded-xl focus:border-blue-600 outline-none"
                    value={tpl.source?.text || ''}
                    onChange={(e) => updateSourceText(id, e.target.value)}
                    placeholder="e.g. Based on Checkatrade & Knight Frank 2024 guides"
                  />
                </div>

                <div className="space-y-2">
                  {(tpl.source?.links || []).map((link, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center"
                    >
                      <input
                        type="text"
                        className="flex-1 px-3 py-2 border-2 border-slate-200 rounded-xl focus:border-blue-600 outline-none"
                        placeholder="Label (e.g. Checkatrade Kitchen Guide)"
                        value={link.label || ''}
                        onChange={(e) =>
                          updateSourceLink(id, index, 'label', e.target.value)
                        }
                      />
                      <input
                        type="text"
                        className="flex-[2] px-3 py-2 border-2 border-slate-200 rounded-xl focus:border-blue-600 outline-none"
                        placeholder="URL"
                        value={link.url || ''}
                        onChange={(e) =>
                          updateSourceLink(id, index, 'url', e.target.value)
                        }
                      />
                      <button
                        type="button"
                        onClick={() => removeSourceLink(id, index)}
                        className="px-3 py-2 rounded-xl bg-red-100 text-red-700 text-sm font-semibold hover:bg-red-200"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => addSourceLink(id)}
                  className="mt-3 text-sm px-3 py-2 rounded-xl border border-dashed border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600"
                >
                  + Add source link
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
