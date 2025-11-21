import { useState, useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import { Purchases } from '@revenuecat/purchases-capacitor';
import { FirestoreWrapper } from '../services/firebase-wrapper';
import { useAuth } from '../hooks/useAuth';

const REVENUECAT_API_KEY = 'appl_qXfdxBRudYmFMExigvXkKYtwVez';

export default function ApplePaymentButton() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');
  const [initError, setInitError] = useState('');

  const isIOS = Capacitor.getPlatform() === 'ios';

  useEffect(() => {
    if (isIOS && Capacitor.isNativePlatform() && user) {
      initializeRevenueCat();
    }
  }, [isIOS, user]);

  const initializeRevenueCat = async () => {
    try {
      console.log('🛒 Initializing RevenueCat...');
      
      await Purchases.configure({
        apiKey: REVENUECAT_API_KEY,
        appUserID: user.uid
      });
      
      console.log('✅ RevenueCat configured');

      const offerings = await Purchases.getOfferings();
      console.log('📦 Offerings:', offerings);

      if (offerings.current && offerings.current.availablePackages.length > 0) {
        const lifetimePackage = offerings.current.availablePackages.find(
          pkg => pkg.identifier === '$rc_lifetime'
        );
        
        if (lifetimePackage) {
          setProduct(lifetimePackage);
          console.log('✅ Loaded lifetime package:', lifetimePackage.product.title, lifetimePackage.product.priceString);
        } else {
          console.error('❌ Lifetime package not found');
          setInitError('Premium package not available. Please try again later.');
        }
      } else {
        console.error('❌ No offerings available');
        setInitError('No products available. Please try again later.');
      }

    } catch (error) {
      console.error('❌ RevenueCat initialization error:', error);
      setInitError('Unable to connect to App Store. Please try again later.');
    }
  };

  const handlePurchase = async () => {
    if (!product) {
      setError('Product not loaded. Please close and reopen the app.');
      return;
    }

    if (!user) {
      setError('Please sign in first to purchase premium.');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      console.log('🛒 Starting purchase...');
      
      const purchaseResult = await Purchases.purchasePackage({
        aPackage: product
      });

      console.log('✅ Purchase successful:', purchaseResult);

      await FirestoreWrapper.updateDoc('users', user.uid, {
        isPremium: true,
        premiumSince: new Date().toISOString(),
        paymentProvider: 'apple',
        purchaseType: 'lifetime',
        revenueCatUserId: purchaseResult.customerInfo.originalAppUserId,
        lastUpdated: new Date().toISOString()
      });

      console.log('✅ Firestore updated with premium status');

      setLoading(false);
      alert('🎉 Success! Premium activated!\n\nYou now have lifetime access to all features.');
      
      setTimeout(() => {
        window.location.reload();
      }, 1000);

    } catch (error) {
      console.error('❌ Purchase error:', error);
      setLoading(false);
      
      if (error.code === 'USER_CANCELLED') {
        setError('');
      } else if (error.message?.includes('already own')) {
        setError('You already own this! Try "Restore Purchase" below.');
      } else {
        setError(error.message || 'Purchase failed. Please try again.');
      }
    }
  };

  const handleRestorePurchases = async () => {
    if (!user) {
      setError('Please sign in first to restore purchases.');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      console.log('🔄 Restoring purchases...');
      
      const customerInfo = await Purchases.restorePurchases();
      console.log('📜 Customer info:', customerInfo);

      const hasLifetimeAccess = customerInfo.customerInfo.entitlements.active['pro'] !== undefined;

      if (hasLifetimeAccess) {
        console.log('✅ Found active entitlement');
        
        await FirestoreWrapper.updateDoc('users', user.uid, {
          isPremium: true,
          premiumSince: new Date().toISOString(),
          paymentProvider: 'apple',
          purchaseType: 'lifetime',
          restoredAt: new Date().toISOString(),
          revenueCatUserId: customerInfo.customerInfo.originalAppUserId
        });

        setLoading(false);
        alert('✅ Premium restored!\n\nYour lifetime access has been restored.');
        
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        
      } else {
        setLoading(false);
        setError('No premium purchase found for this Apple ID.');
      }
    } catch (error) {
      console.error('❌ Restore error:', error);
      setLoading(false);
      setError('Failed to restore purchases. Please try again.');
    }
  };

  if (!isIOS) {
    return null;
  }

  if (initError) {
    return (
      <div className="space-y-3">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-sm text-amber-800">{initError}</p>
          <p className="text-xs text-amber-700 mt-2">
            Please close and reopen the app, or contact support if the issue persists.
          </p>
        </div>
      </div>
    );
  }

  if (!product && !initError) {
    return (
      <div className="text-center py-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
        <p className="text-sm text-gray-600">Loading pricing...</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <button
        onClick={handlePurchase}
        disabled={loading || !product}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="animate-spin">⏳</span> Processing...
          </span>
        ) : (
          <span>🔓 Unlock Premium - {product?.product?.priceString || '£9.99'}</span>
        )}
      </button>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      <p className="text-sm text-gray-700 text-center font-semibold">
        ✨ One-time purchase • Lifetime access • No subscription
      </p>
      
      <button
        onClick={handleRestorePurchases}
        disabled={loading}
        className="w-full text-sm text-blue-600 hover:text-blue-700 underline font-medium disabled:opacity-50"
      >
        Already purchased? Restore Purchase
      </button>

      <p className="text-xs text-gray-500 text-center leading-relaxed">
        Unlock detailed room-by-room breakdowns with labour rates, material costs, and industry sources. Edit quotes and save up to 10.
      </p>

      <p className="text-xs text-gray-400 text-center">
        Payment will be charged to your Apple ID
      </p>
    </div>
  );
}
