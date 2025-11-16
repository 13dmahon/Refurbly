import { useState, useEffect } from 'react';
import { FirestoreWrapper } from '../services/firebase-wrapper';
import { useAuth } from '../hooks/useAuth.jsx';

export default function QuoteDetail({ quoteId, onClose, onEdit }) {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isPremium } = useAuth();

  useEffect(() => {
    loadQuote();
  }, [quoteId]);

  const loadQuote = async () => {
    try {
      const docSnap = await FirestoreWrapper.getDoc('quotes', quoteId);
      
      if (docSnap.exists()) {
        setQuote({ id: quoteId, ...docSnap.data() });
      }
    } catch (error) {
      console.error('Error loading quote:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-4xl w-full">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading quote...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!quote) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-8">
        {/* Header */}
        <div className="border-b border-gray-200 p-6 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{quote.location || 'No location'}</h2>
            <p className="text-gray-600 mt-1">
              {quote.bedrooms} bed {quote.propertyType} • {quote.totalSqm} sqm • {quote.quality} quality
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Total Cost */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white mb-6">
            <div className="text-sm opacity-90 mb-1">Total Estimated Cost</div>
            <div className="text-4xl font-bold">£{quote.estimate?.toLocaleString() || '0'}</div>
            <div className="text-sm opacity-75 mt-2">Including 15% contingency</div>
          </div>

          {/* Premium Badge */}
          {isPremium && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6 flex items-center gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-green-800 font-semibold">Premium Account - Full breakdown unlocked</span>
            </div>
          )}

          {/* Breakdown */}
          {isPremium && quote.breakdown ? (
            <div className="space-y-3 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Cost Breakdown</h3>
              
              {quote.breakdown.decorationLabour && (
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div>
                    <span className="text-gray-900 font-medium">Decoration Labour</span>
                    <p className="text-sm text-gray-500">Professional painting throughout</p>
                  </div>
                  <span className="font-bold text-gray-900">£{quote.breakdown.decorationLabour.toLocaleString()}</span>
                </div>
              )}

              {quote.breakdown.flooringTotal && (
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div>
                    <span className="text-gray-900 font-medium">Flooring ({quote.totalSqm} sqm)</span>
                    <p className="text-sm text-gray-500">Materials and installation</p>
                  </div>
                  <span className="font-bold text-gray-900">£{Math.round(quote.breakdown.flooringTotal).toLocaleString()}</span>
                </div>
              )}

              {quote.breakdown.plastering && (
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div>
                    <span className="text-gray-900 font-medium">Plastering ({quote.totalSqm} sqm)</span>
                    <p className="text-sm text-gray-500">Walls and ceilings</p>
                  </div>
                  <span className="font-bold text-gray-900">£{Math.round(quote.breakdown.plastering).toLocaleString()}</span>
                </div>
              )}

              {quote.breakdown.kitchen && (
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div>
                    <span className="text-gray-900 font-medium">Kitchen Refurbishment</span>
                    <p className="text-sm text-gray-500">Complete kitchen renewal</p>
                  </div>
                  <span className="font-bold text-gray-900">£{quote.breakdown.kitchen.toLocaleString()}</span>
                </div>
              )}

              {quote.breakdown.bathrooms && (
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div>
                    <span className="text-gray-900 font-medium">Bathroom Refurbishment</span>
                    <p className="text-sm text-gray-500">{quote.bathrooms} bathroom(s)</p>
                  </div>
                  <span className="font-bold text-gray-900">£{quote.breakdown.bathrooms.toLocaleString()}</span>
                </div>
              )}

              {quote.breakdown.rewire && (
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div>
                    <span className="text-gray-900 font-medium">Full Electrical Rewire</span>
                    <p className="text-sm text-gray-500">Complete rewiring</p>
                  </div>
                  <span className="font-bold text-gray-900">£{quote.breakdown.rewire.toLocaleString()}</span>
                </div>
              )}

              {quote.breakdown.heating && (
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div>
                    <span className="text-gray-900 font-medium">New Heating System</span>
                    <p className="text-sm text-gray-500">Boiler and radiators</p>
                  </div>
                  <span className="font-bold text-gray-900">£{quote.breakdown.heating.toLocaleString()}</span>
                </div>
              )}

              {quote.breakdown.windows && (
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div>
                    <span className="text-gray-900 font-medium">Window Replacement</span>
                    <p className="text-sm text-gray-500">Double glazed throughout</p>
                  </div>
                  <span className="font-bold text-gray-900">£{quote.breakdown.windows.toLocaleString()}</span>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔒</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Upgrade to see full breakdown</h3>
                  <p className="text-gray-700 text-sm">
                    Premium members get detailed cost breakdowns showing decoration, flooring, plastering, and more.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Scope Details */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Project Scope</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Refurb Level</p>
                <p className="font-semibold capitalize">{quote.refurbLevel}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Quality</p>
                <p className="font-semibold capitalize">{quote.quality}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Kitchen</p>
                <p className="font-semibold">{quote.includeKitchen ? 'Included' : 'Not included'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Bathroom</p>
                <p className="font-semibold">{quote.includeBathroom ? 'Included' : 'Not included'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Rewire</p>
                <p className="font-semibold">{quote.includeRewire ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Heating</p>
                <p className="font-semibold">{quote.includeHeating ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Windows</p>
                <p className="font-semibold">{quote.includeWindows ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Created</p>
                <p className="font-semibold">{new Date(quote.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6 flex gap-3">
          {isPremium && (
            <button
              onClick={() => onEdit(quote)}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              ✏️ Edit Quote
            </button>
          )}
          <button
            onClick={onClose}
            className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
