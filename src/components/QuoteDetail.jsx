import { useState } from 'react';
import { FirestoreWrapper } from '../services/firebase-wrapper';
import { useAuth } from '../hooks/useAuth.jsx';
import PaymentButton from './PaymentButton';

export default function QuoteDetail({ quote, onClose, onEdit, onDelete }) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { isPremium } = useAuth();

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await FirestoreWrapper.deleteDoc?.('quotes', quote.id) || 
            (async () => {
              const { doc, deleteDoc } = await import('firebase/firestore');
              const { db } = await import('../config/firebase');
              await deleteDoc(doc(db, 'quotes', quote.id));
            })();
      onDelete(quote.id);
      onClose();
    } catch (error) {
      console.error('Error deleting quote:', error);
      alert('Failed to delete quote');
      setIsDeleting(false);
    }
  };

  // Check if this is a new format quote (has needsKitchen) or old format (has includeKitchen)
  const isNewFormat = quote.needsKitchen !== undefined;

  // Get what work is included
  const getWorkItems = () => {
    if (isNewFormat) {
      return [
        { label: 'Decoration', included: quote.needsDecoration },
        { label: 'Flooring', included: quote.needsFlooring },
        { label: 'Plastering', included: quote.needsPlastering },
        { label: 'Kitchen', included: quote.needsKitchen },
        { label: 'Bathroom(s)', included: quote.needsBathroom },
        { label: 'Rewire', included: quote.needsRewire },
        { label: 'Heating', included: quote.needsHeating },
        { label: 'Windows', included: quote.needsWindows },
      ].filter(item => item.included);
    } else {
      // Old format
      const items = [];
      if (quote.includeKitchen) items.push({ label: 'Kitchen', included: true });
      if (quote.includeBathroom) items.push({ label: 'Bathroom(s)', included: true });
      if (quote.includeRewire) items.push({ label: 'Rewire', included: true });
      if (quote.includeHeating) items.push({ label: 'Heating', included: true });
      if (quote.includeWindows) items.push({ label: 'Windows', included: true });
      return items;
    }
  };

  const workItems = getWorkItems();

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-2xl font-bold text-slate-900">Quote Details</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Property Info */}
          <div className="bg-slate-50 rounded-xl p-4">
            <h3 className="font-semibold text-slate-900 mb-3">Property Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Location:</span>
                <span className="font-semibold">{quote.location || 'Not specified'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Type:</span>
                <span className="font-semibold capitalize">{quote.propertyType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Bedrooms:</span>
                <span className="font-semibold">{quote.bedrooms}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Bathrooms:</span>
                <span className="font-semibold">{quote.bathrooms}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Quality:</span>
                <span className="font-semibold capitalize">{quote.quality}</span>
              </div>
            </div>
          </div>

          {/* Work Included */}
          <div className="bg-blue-50 rounded-xl p-4">
            <h3 className="font-semibold text-blue-900 mb-3">Work Included</h3>
            <div className="space-y-2">
              {workItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <span className="text-green-600">✓</span>
                  <span className="text-blue-900">{item.label}</span>
                </div>
              ))}
              {workItems.length === 0 && (
                <p className="text-sm text-blue-700">No specific work items recorded</p>
              )}
            </div>
          </div>

          {/* Estimate */}
          {isPremium ? (
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 text-white">
              <div className="text-sm opacity-90 mb-1">Total Estimate</div>
              <div className="text-4xl font-bold">
                £{(quote.estimate || 0).toLocaleString()}
              </div>
              <div className="text-sm opacity-75 mt-2">Including 15% contingency</div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
              <div className="text-sm opacity-90 mb-1">Estimated Cost Range</div>
              <div className="text-4xl font-bold">
                £{(quote.rangeMin || 0).toLocaleString()} - £{(quote.rangeMax || 0).toLocaleString()}
              </div>
              <div className="text-sm opacity-75 mt-2">Upgrade to see exact breakdown</div>
            </div>
          )}

          {/* Breakdown - Premium Only */}
          {isPremium && quote.breakdown && (
            <div className="space-y-4">
              {/* Labour */}
              {quote.breakdown.labour && Object.keys(quote.breakdown.labour).length > 0 && (
                <div className="bg-blue-50 rounded-xl p-4">
                  <h3 className="font-semibold text-blue-900 mb-3">Labour Costs</h3>
                  <div className="space-y-2">
                    {Object.entries(quote.breakdown.labour).map(([key, item]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <div>
                          <div className="text-blue-900 font-medium">{item.name || key}</div>
                          {item.hourlyRate && item.hours && (
                            <div className="text-blue-700 text-xs">
                              £{item.hourlyRate}/hr × {item.hours} hours
                            </div>
                          )}
                        </div>
                        <div className="font-bold text-blue-900">
                          £{Math.round(item.total || item).toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Materials */}
              {quote.breakdown.materials && Object.keys(quote.breakdown.materials).length > 0 && (
                <div className="bg-purple-50 rounded-xl p-4">
                  <h3 className="font-semibold text-purple-900 mb-3">Materials</h3>
                  <div className="space-y-2">
                    {Object.entries(quote.breakdown.materials).map(([key, item]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <div className="text-purple-900">{item.name || key}</div>
                        <div className="font-bold text-purple-900">
                          £{Math.round(item.amount || item).toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Upgrade CTA for non-premium */}
          {!isPremium && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="text-center">
                <p className="text-amber-900 font-semibold mb-3">
                  🔒 Unlock detailed breakdown
                </p>
                <PaymentButton />
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-slate-200">
            <button
              onClick={() => onEdit(quote)}
              className="flex-1 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all"
            >
              ✏️ Edit Quote
            </button>
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="px-4 py-3 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 font-semibold transition-all"
            >
              🗑️ Delete
            </button>
          </div>
        </div>
      </div>

      {/* Delete Confirmation */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Delete Quote?</h3>
            <p className="text-slate-600 mb-6">
              This action cannot be undone. Are you sure you want to delete this quote?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                disabled={isDeleting}
                className="flex-1 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="flex-1 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition-all disabled:opacity-50"
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
