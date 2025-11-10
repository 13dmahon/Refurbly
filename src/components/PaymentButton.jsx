import { useState } from 'react';
import { httpsCallable } from 'firebase/functions';
import { functions, auth } from '../config/firebase';
import { useAuth } from '../hooks/useAuth.jsx';
import { Capacitor } from '@capacitor/core';
import { Browser } from '@capacitor/browser';

export default function PaymentButton({ quoteData, compact = false, inCard = false }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { user } = useAuth();

  const handlePayment = async () => {
    console.log('=== PAYMENT STARTED ===');
    console.log('Platform:', Capacitor.getPlatform());
    
    if (!user) {
      setError('Please sign in first');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        throw new Error('Please sign in first');
      }

      await currentUser.getIdToken(true);
      
      console.log('Creating checkout session...');
      const createCheckout = httpsCallable(functions, 'createCheckoutSession');
      const result = await createCheckout({ quoteData });
      
      const { url } = result.data;
      console.log('Got checkout URL:', url);
      
      // On iOS/Android, open in external browser (Safari)
      if (Capacitor.isNativePlatform()) {
        console.log('Opening in Safari...');
        await Browser.open({ url });
        setLoading(false); // Stop loading since we opened external browser
      } else {
        // On web, redirect normally
        console.log('Redirecting in web...');
        window.location.href = url;
      }
      
    } catch (err) {
      console.error('Payment error:', err);
      setError('Payment failed. Please try again.');
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
        {loading ? 'Loading...' : '🔓 Unlock - £9.99'}
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
          {loading ? 'Loading...' : 'Unlock - £9.99'}
        </button>
        {error && <div className="mt-2 text-red-600 text-sm text-center">{error}</div>}
      </div>
    );
  }

  return (
    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="font-bold text-blue-900 text-sm">🔓 Unlock Full Breakdown</div>
          <div className="text-xs text-blue-700 truncate">Detailed costs & evidence</div>
        </div>
        <button
          onClick={handlePayment}
          disabled={loading || !user}
          className="bg-blue-600 text-white py-2 px-5 rounded-lg font-bold hover:bg-blue-700 transition disabled:opacity-50 whitespace-nowrap flex-shrink-0"
        >
          {loading ? '...' : '£9.99'}
        </button>
      </div>
      {error && <div className="mt-2 text-red-600 text-xs">{error}</div>}
      {!user && <div className="mt-2 text-amber-600 text-xs">Sign in to unlock</div>}
    </div>
  );
}
