import { useState } from 'react';
import { httpsCallable } from 'firebase/functions';
import { functions } from '../config/firebase';
import { useAuth } from '../hooks/useAuth.jsx';
import { Capacitor } from '@capacitor/core';
import { Browser } from '@capacitor/browser';
import { FirebaseAuthWrapper } from '../services/firebase-wrapper';

const isNativePlatform = Capacitor.isNativePlatform?.() ?? false;

const callCheckoutSession = async (payload) => {
  if (isNativePlatform) {
    const idToken = await FirebaseAuthWrapper.getIdToken(true);
    if (!idToken) {
      throw new Error('Unable to authenticate payment. Please sign in again.');
    }

    const response = await fetch(
      'https://us-central1-ascension-app-e3d00.cloudfunctions.net/createCheckoutSession',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ data: payload }),
      }
    );

    let responseBody = {};
    try {
      responseBody = await response.json();
    } catch (_) {
      // Ignore JSON parse errors – handled below
    }

    if (!response.ok || responseBody.error) {
      const message = responseBody?.error?.message || responseBody?.error || 'Stripe checkout failed';
      throw new Error(message);
    }

    return responseBody.result ?? responseBody;
  }

  const createCheckout = httpsCallable(functions, 'createCheckoutSession');
  const result = await createCheckout(payload);
  return result.data || result.result || {};
};

export default function PaymentButton({ quoteData, compact = false, inCard = false }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { user } = useAuth();

  const handlePayment = async () => {
    console.log('=== PAYMENT STARTED ===');
    console.log('Platform:', Capacitor.getPlatform());
    console.log('🔐 Using useAuth user:', user);

    if (!user) {
      setError('Please sign in first');
      console.error('❌ No user in useAuth context');
      return;
    }

    setLoading(true);
    setError('');

    try {
      console.log('📡 Calling createCheckoutSession with quoteData:', {
        id: quoteData?.id,
        userId: quoteData?.userId,
      });

      const data = await callCheckoutSession({
        quoteData,
        user: {
          uid: user.uid,
          email: user.email,
        },
      });
      console.log('✅ Payment function result:', data);

      const url = data.url;
      if (!url) {
        throw new Error('No checkout URL returned from server');
      }

      console.log('🌐 Got checkout URL:', url);

      if (isNativePlatform) {
        console.log('📲 Opening in external browser (Safari)…');
        let dispatched = false;
        const notifyCheckoutFinished = () => {
          if (typeof window !== 'undefined' && !dispatched) {
            dispatched = true;
            window.dispatchEvent(new CustomEvent('refurbly:checkoutFinished'));
          }
        };

        let finishedListener;
        if (Browser.addListener) {
          try {
            finishedListener = await Browser.addListener('browserFinished', () => {
              notifyCheckoutFinished();
            });
          } catch (listenerError) {
            console.warn('Unable to attach browserFinished listener:', listenerError);
          }
        }

        try {
          await Browser.open({ url });
        } finally {
          await finishedListener?.remove?.();
          notifyCheckoutFinished();
        }
        setLoading(false);
      } else {
        console.log('🖥 Redirecting in web…');
        window.location.href = url;
      }
    } catch (err) {
      console.error('❌ Payment error RAW:', err);
      try {
        console.error('❌ Payment error JSON:', JSON.stringify(err, null, 2));
      } catch (_) {
        // ignore
      }

      let message = 'Payment failed. Please try again.';
      if (err && typeof err === 'object') {
        const code = err.code || err?.details?.code;
        const msg =
          err.message || err?.details?.message || err?.details || err?.errorMessage;
        console.error('❌ Payment error message:', msg);
        console.error('❌ Payment error code:', code);
        if (code === 'functions/unauthenticated') {
          message =
            'Payment failed because authentication was not sent. Please sign out and sign back in, then try again.';
        } else if (msg) {
          message = msg;
        }
      }

      setError(message);
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
          <div className="text-xs text-blue-700 truncate">Detailed costs &amp; evidence</div>
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
