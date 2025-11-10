import { useState } from 'react';
import AuthModal from './AuthModal';
import DiagnosticPage from './DiagnosticPage';

export default function HomePage({ onStartCalculator }) {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [logoTaps, setLogoTaps] = useState(0);
  const [showDiagnostics, setShowDiagnostics] = useState(false);

  const handleLogoTap = () => {
    const newTaps = logoTaps + 1;
    setLogoTaps(newTaps);
    if (newTaps >= 5) {
      setShowDiagnostics(true);
      setLogoTaps(0);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="flex justify-center">
            <div 
              onClick={handleLogoTap}
              className="bg-blue-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-lg cursor-pointer active:scale-95 transition"
            >
              🏠
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-gray-900">Refurbly</h1>
            <p className="text-xl text-gray-600">Get instant refurbishment estimates</p>
            <p className="text-lg text-gray-500">Powered by real UK trade rates</p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl">🎁</span>
              <span className="font-bold text-green-900 text-lg">5 FREE Quotes</span>
            </div>
            <p className="text-sm text-green-800">
              Sign up free to save up to 5 quotes. Upgrade to Premium (£9.99 one-time) for unlimited quotes + detailed room-by-room breakdowns.
            </p>
          </div>
          <div className="space-y-4 max-w-md mx-auto">
            <button onClick={() => setShowAuthModal(true)} className="w-full bg-white border-2 border-gray-200 text-gray-900 py-4 px-6 rounded-xl font-semibold hover:border-blue-500 hover:bg-blue-50 transition shadow-sm flex items-center justify-center gap-3 group">
              <span className="text-2xl">👤</span>
              <div className="text-left">
                <div className="font-bold">Login / Sign Up</div>
                <div className="text-sm text-gray-500 font-normal">Get 5 free saved quotes</div>
              </div>
            </button>
            <button onClick={onStartCalculator} className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg flex items-center justify-center gap-3">
              <span className="text-2xl">🚀</span>
              <div className="text-left">
                <div className="font-bold">Start Calculator</div>
                <div className="text-sm text-blue-100 font-normal">No login required</div>
              </div>
            </button>
          </div>
          <div className="pt-8 text-sm text-gray-500">
            <p>For estate agents and property professionals</p>
          </div>
        </div>
      </div>
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} onSuccess={() => {}} />
      {showDiagnostics && <DiagnosticPage onClose={() => setShowDiagnostics(false)} />}
    </>
  );
}
