import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth.jsx';

export default function ProfileDropdown() {
  const { user, isPremium, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [contactMessage, setContactMessage] = useState('');
  const [sending, setSending] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    
    // TODO: Add email sending functionality
    alert('Thanks for your message! We\'ll get back to you soon.');
    setContactMessage('');
    setShowContact(false);
    setSending(false);
  };

  if (!user) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
      >
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
          {user.email[0].toUpperCase()}
        </div>
        <span className="text-sm font-medium text-gray-700 hidden sm:block">
          {user.email.split('@')[0]}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-200 z-50">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                {user.email[0].toUpperCase()}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{user.email.split('@')[0]}</p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
              </div>
            </div>
            
            {isPremium ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-2 mt-3">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-lg">✓</span>
                  <span className="text-sm font-semibold text-green-800">Premium Account</span>
                </div>
                <p className="text-xs text-green-700 mt-1">Full access to all features</p>
              </div>
            ) : (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-2 mt-3">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">📋</span>
                  <span className="text-sm font-semibold text-gray-800">Free Account</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">Up to 5 saved quotes</p>
              </div>
            )}
          </div>

          <div className="p-2">
            <button
              onClick={() => {
                setShowContact(true);
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition text-sm text-gray-700"
            >
              📧 Contact Support
            </button>
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition text-sm text-red-600"
            >
              🚪 Sign Out
            </button>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {showContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Contact Support</h2>
              <button
                onClick={() => setShowContact(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleContactSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="text"
                  value={user.email}
                  disabled
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-600"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowContact(false)}
                  className="flex-1 px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={sending || !contactMessage.trim()}
                  className="flex-1 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition disabled:opacity-50"
                >
                  {sending ? 'Sending...' : 'Send'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
