import { useState } from 'react';
import { httpsCallable } from 'firebase/functions';
import { functions, auth } from '../config/firebase';
import { useAuth } from '../hooks/useAuth.jsx';

export default function PaymentButton({ quoteData, compact = false, inCard = false }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { user } = useAuth();

  const handlePayment = async () => {
    if (!user) {
      setError('Please sign in first');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        throw new Error('Please sign in again');
      }

      await currentUser.getIdToken(true);
      
      const createCheckout = httpsCallable(functions, 'createCheckoutSession');
      const result = await createCheckout({ quoteData });
      
      const { url } = result.data;
      window.location.href = url;
      
    } catch (err) {
      console.error('Payment error:', err);
      
      if (err.code === 'unauthenticated') {
        setError('Please sign out and sign in again, then try payment.');
      } else {
        setError(err.message || 'Payment failed. Please try again.');
      }
      setLoading(false);
    }
  };

  if (compact) {
    return (
      <button
        onClick={handlePayment}
        disabled={loading || !user}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 text-sm"
      >
        {loading ? 'Loading...' : '🔓 Unlock Premium - £9.99'}
      </button>
    );
  }

  if (inCard) {
    return (
      <div>
        <button
          onClick={handlePayment}
          disabled={loading || !user}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg font-bold hover:from-blue-600 hover:to-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2 shadow-md"
        >
          <span className="text-xl">🔓</span>
          {loading ? 'Loading...' : 'Unlock Full Breakdown - £9.99'}
        </button>
        {error && <div className="mt-2 text-red-600 text-sm text-center">{error}</div>}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="text-4xl">🔓</div>
        <div className="flex-1">
          <h3 className="font-bold text-xl text-gray-900 mb-2">Unlock Full Breakdown</h3>
          <p className="text-gray-600 mb-3">See exact costs per room with labour rates, material costs, and source links</p>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-4 mb-4">
        <div className="font-semibold text-blue-900 mb-2">✨ Premium includes:</div>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>✓ Detailed room-by-room breakdown</li>
          <li>✓ Labour hours & rates per trade</li>
          <li>✓ Material costs with evidence sources</li>
          <li>✓ Unlimited saved quotes</li>
          <li>✓ PDF export & sharing</li>
          <li>✓ Lifetime access - one-time payment</li>
        </ul>
      </div>

      <button
        onClick={handlePayment}
        disabled={loading || !user}
        className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-blue-700 transition disabled:opacity-50 shadow-md"
      >
        {loading ? 'Redirecting to payment...' : 'Unlock Now - £9.99 one-time'}
      </button>

      {error && <div className="mt-3 text-red-600 text-sm text-center">{error}</div>}
      {!user && <div className="mt-3 text-amber-600 text-sm text-center">Please sign in first</div>}
    </div>
  );
}
