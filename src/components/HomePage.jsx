import { useState } from 'react';
import AuthModal from './AuthModal';
import DiagnosticPage from './DiagnosticPage';

export default function HomePage({ onStartCalculator, onLoginSuccess }) {
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
      <div className="min-h-screen relative overflow-hidden">
        {/* Background image */}
        <div 
          className="fixed inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        {/* Dark overlay */}
        <div className="fixed inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-blue-900/85 z-0" />
        
        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center space-y-8">
            {/* Logo */}
            <div className="flex justify-center">
              <div 
                onClick={handleLogoTap}
                className="bg-gradient-to-br from-blue-500 to-blue-700 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-2xl cursor-pointer active:scale-95 transition-all border border-white/20"
              >
                🏠
              </div>
            </div>
            
            {/* Title */}
            <div className="space-y-3">
              <h1 className="text-5xl font-extrabold text-white">Refurbly</h1>
              <p className="text-xl text-white/70">Get instant refurbishment estimates</p>
              <p className="text-base text-white/50">Powered by real UK trade rates</p>
            </div>
            
            {/* Free quotes badge - glass card */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl">🎁</span>
                <span className="font-bold text-white text-lg">5 FREE Quotes</span>
              </div>
              <p className="text-sm text-white/70">
                Sign up free to save up to 5 quotes. Upgrade to Premium (£9.99 one-time) for detailed room-by-room breakdowns.
              </p>
            </div>
            
            {/* Buttons */}
            <div className="space-y-3">
              <button 
                onClick={() => setShowAuthModal(true)} 
                className="w-full backdrop-blur-xl bg-white/10 border border-white/20 text-white py-4 px-6 rounded-xl font-semibold hover:bg-white/20 transition-all shadow-lg flex items-center justify-center gap-3"
              >
                <span className="text-2xl">👤</span>
                <div className="text-left">
                  <div className="font-bold">Login / Sign Up</div>
                  <div className="text-sm text-white/60 font-normal">Get 5 free saved quotes</div>
                </div>
              </button>
              
              <button 
                onClick={onStartCalculator} 
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-2xl flex items-center justify-center gap-3 border border-white/20"
              >
                <span className="text-2xl">🚀</span>
                <div className="text-left">
                  <div className="font-bold">Start Calculator</div>
                  <div className="text-sm text-blue-100 font-normal">No login required</div>
                </div>
              </button>
            </div>
            
            {/* Footer text */}
            <div className="pt-4 text-sm text-white/40">
              <p>For estate agents and property professionals</p>
            </div>
          </div>
        </div>
      </div>
      
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
        onSuccess={() => {
          setShowAuthModal(false);
          if (onLoginSuccess) onLoginSuccess();
        }} 
      />
      {showDiagnostics && <DiagnosticPage onClose={() => setShowDiagnostics(false)} />}
    </>
  );
}
