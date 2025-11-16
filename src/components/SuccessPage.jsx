import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirestoreWrapper } from '../services/firebase-wrapper';
import { useAuth } from '../hooks/useAuth.jsx';

export default function SuccessPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const upgradeToPremium = async () => {
      if (user) {
        await FirestoreWrapper.setDoc('users', user.uid, {
          isPremium: true,
          upgradedAt: new Date().toISOString(),
        }, { merge: true });
      }
    };

    upgradeToPremium();

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = '/';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [user]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to Premium!
          </h1>
          <p className="text-gray-600">
            Your payment was successful. You now have access to all premium features!
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">What's Unlocked:</h2>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <div>
                <p className="font-semibold text-gray-900">Save up to 10 quotes</p>
                <p className="text-sm text-gray-600">Increased from 5 free quotes</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <p className="font-semibold text-gray-900">Full cost breakdown</p>
                <p className="text-sm text-gray-600">See detailed costs for decoration, flooring, plastering, kitchen, bathroom, and extras</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">✏️</span>
              <div>
                <p className="font-semibold text-gray-900">Edit saved quotes</p>
                <p className="text-sm text-gray-600">Update any quote and see costs recalculate instantly</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">🔨</span>
              <div>
                <p className="font-semibold text-gray-900">Local contractor contacts</p>
                <p className="text-sm text-gray-600">Coming soon - connect with trusted tradespeople</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">📄</span>
              <div>
                <p className="font-semibold text-gray-900">PDF export</p>
                <p className="text-sm text-gray-600">Coming soon - download professional quotes</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-2">
            Redirecting to your dashboard in <span className="font-bold text-blue-600">{countdown}</span> seconds...
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Go to Dashboard Now →
          </button>
        </div>
      </div>
    </div>
  );
}
