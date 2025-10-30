import { useState } from 'react';
import AuthModal from './AuthModal';

export default function HomePage({ onStartCalculator }) {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* Logo/Icon */}
          <div className="flex justify-center">
            <div className="bg-blue-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-lg">
              🏠
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-gray-900">
              Refurbly
            </h1>
            <p className="text-xl text-gray-600">
              Get instant refurbishment estimates
            </p>
            <p className="text-lg text-gray-500">
              Powered by real UK trade rates
            </p>
          </div>

          {/* Buttons */}
          <div className="space-y-4 max-w-md mx-auto">
            {/* Login/Sign Up Button */}
            <button
              onClick={() => setShowAuthModal(true)}
              className="w-full bg-white border-2 border-gray-200 text-gray-900 py-4 px-6 rounded-xl font-semibold hover:border-blue-500 hover:bg-blue-50 transition shadow-sm flex items-center justify-center gap-3 group"
            >
              <span className="text-2xl">👤</span>
              <div className="text-left">
                <div className="font-bold">Login / Sign Up</div>
                <div className="text-sm text-gray-500 font-normal">Access your saved quotes</div>
              </div>
            </button>

            {/* Start Calculator Button */}
            <button
              onClick={onStartCalculator}
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg flex items-center justify-center gap-3"
            >
              <span className="text-2xl">🚀</span>
              <div className="text-left">
                <div className="font-bold">Start Calculator</div>
                <div className="text-sm text-blue-100 font-normal">No login required</div>
              </div>
            </button>
          </div>

          {/* Footer */}
          <div className="pt-8 text-sm text-gray-500">
            <p>For estate agents and property professionals</p>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={() => {
          // After successful login, user will be redirected by App.jsx
        }}
      />
    </>
  );
}
