import { useState, useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import { FirestoreWrapper } from '../services/firebase-wrapper';
import { useAuth } from '../hooks/useAuth';

// This component only works on iOS with proper IAP setup
// For now, it's a placeholder that shows "Coming Soon" until you set up StoreKit

const PRODUCT_ID = 'premium_lifetime';

export default function ApplePaymentButton() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const isIOS = Capacitor.getPlatform() === 'ios';

  const handlePurchase = async () => {
    if (!user) {
      alert('Please sign in first to purchase premium.');
      return;
    }

    setLoading(true);
    
    try {
      // TODO: Implement actual StoreKit purchase flow after App Store Connect setup
      alert('Apple In-App Purchase coming soon! For now, please use the web version at refurbly.com to unlock premium.');
      
      // PLACEHOLDER - This will be replaced with real IAP code after you:
      // 1. Create the product in App Store Connect
      // 2. Install expo-in-app-purchases
      // 3. Test in sandbox
      
    } catch (error) {
      console.error('Purchase error:', error);
      alert('Purchase failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isIOS) {
    return null; // Don't render on web/Android
  }

  return (
    <div className="space-y-3">
      <button
        onClick={handlePurchase}
        disabled={loading}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="animate-spin">⏳</span> Processing...
          </span>
        ) : (
          <span>🔓 Unlock Premium - £9.99</span>
        )}
      </button>

      <p className="text-sm text-gray-700 text-center font-semibold">
        ✨ One-time purchase • Lifetime access • No subscription
      </p>

      <p className="text-xs text-gray-500 text-center leading-relaxed">
        Unlock detailed room-by-room breakdowns with labour rates, material costs, and industry sources. Edit quotes and save up to 10.
      </p>

      <p className="text-xs text-blue-600 text-center">
        💡 For immediate access, visit refurbly.com on any browser
      </p>
    </div>
  );
}