import { useState } from 'react';
import { httpsCallable } from 'firebase/functions';
import { functions, auth } from '../config/firebase';
import { useAuth } from '../hooks/useAuth.jsx';

export default function PaymentButton({ quoteData }) {
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
      console.log('Creating checkout session...');
      
      const createCheckout = httpsCallable(functions, 'createCheckoutSession');
      const result = await createCheckout({ quoteData });
      
      console.log('Checkout session created:', result.data);
      
      const { url } = result.data;
      
      // Redirect directly to Stripe Checkout URL
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

  return (
    <div>
      <button
        onClick={handlePayment}
        disabled={loading || !user}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Redirecting to payment...' : 'Unlock Now - £9.99 one-time'}
      </button>
      {error && (
        <div className="mt-2 text-red-600 text-sm">
          {error}
        </div>
      )}
      {!user && (
        <div className="mt-2 text-amber-600 text-sm">
          Please sign in first to unlock premium features
        </div>
      )}
    </div>
  );
}
