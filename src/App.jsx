import { useState, useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import { FirestoreWrapper } from './services/firebase-wrapper';
import { useAuth } from './hooks/useAuth.jsx';
import HomePage from './components/HomePage';
import Refurbly from './components/Refurbly';
import QuoteDetail from './components/QuoteDetail';
import PaymentButton from './components/PaymentButton';
import ApplePaymentButton from './components/ApplePaymentButton';
import ProfileDropdown from './components/ProfileDropdown';
import PricingEditor from './admin/PricingEditor';

function App() {
  const { user, loading, logout, isPremium } = useAuth();
  const [currentView, setCurrentView] = useState('home');
  const [savedQuotes, setSavedQuotes] = useState([]);
  const [loadingQuotes, setLoadingQuotes] = useState(false);
  const [selectedQuoteId, setSelectedQuoteId] = useState(null);
  const [editingQuote, setEditingQuote] = useState(null);

  const maxQuotes = isPremium ? 10 : 5;

  const headerSafeAreaStyle = {
    paddingTop: 'calc(env(safe-area-inset-top, 20px) + 0.75rem)',
  };

  useEffect(() => {
    console.log('🔍 isPremium:', isPremium);
  }, [isPremium]);

  useEffect(() => {
    if (user && currentView === 'home') {
      setCurrentView('dashboard');
    }
  }, [user, currentView]);

  useEffect(() => {
    if (currentView === 'dashboard' && user) {
      loadSavedQuotes();
    }
  }, [currentView, user]);

  const loadSavedQuotes = async () => {
    if (!user) return;

    setLoadingQuotes(true);
    try {
      console.log('📋 Loading quotes for user:', user.uid);
      const userQuotes = await FirestoreWrapper.getQuotesForUser(user.uid);
      console.log(`✅ Found ${userQuotes.length} quotes`);
      setSavedQuotes(userQuotes);
    } catch (error) {
      console.error('❌ Error loading quotes:', error);
      alert('Failed to load quotes: ' + error.message);
    } finally {
      setLoadingQuotes(false);
    }
  };

  const handleDeleteQuote = async (quoteId) => {
    if (!window.confirm('Are you sure you want to delete this quote?')) return;

    try {
      await FirestoreWrapper.deleteDoc('quotes', quoteId);
      setSavedQuotes((quotes) => quotes.filter((q) => q.id !== quoteId));
    } catch (error) {
      console.error('Error deleting quote:', error);
      alert('Failed to delete quote');
    }
  };

  const handleEditQuote = (quote) => {
    setEditingQuote(quote);
    setSelectedQuoteId(null);
    setCurrentView('calculator');
  };

  const handleQuoteSaved = () => {
    console.log('Quote saved! Reloading and navigating to dashboard...');
    setCurrentView('dashboard');
    loadSavedQuotes();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const handleLogout = async () => {
    try {
      await logout();
      setCurrentView('home');
      setSavedQuotes([]);
      setEditingQuote(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // 🔥 ADMIN VIEW
  if (currentView === 'admin') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div
          className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center"
          style={headerSafeAreaStyle}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentView('dashboard')}
              className="text-2xl hover:opacity-70 transition"
            >
              ←
            </button>
            <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
          </div>
          <ProfileDropdown
            onLogout={handleLogout}
            onAdminClick={() => setCurrentView('admin')}
          />
        </div>

        <div className="p-6 pt-4 sm:pt-6">
          <PricingEditor />
        </div>
      </div>
    );
  }

  // 🔥 PREMIUM UNLOCK VIEW (iOS)
  if (currentView === 'unlock-premium') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div
          className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center"
          style={headerSafeAreaStyle}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentView('dashboard')}
              className="text-2xl hover:opacity-70 transition"
            >
              ←
            </button>
            <h1 className="text-xl font-bold text-gray-900">Unlock Premium</h1>
          </div>
          <ProfileDropdown
            onLogout={handleLogout}
            onAdminClick={() => setCurrentView('admin')}
          />
        </div>

        <div className="p-6 pt-8 max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🔓</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Unlock Full Breakdown
              </h2>
              <p className="text-gray-600">
                See exact costs per room with labour rates, material costs, and source links
              </p>
            </div>

            <ApplePaymentButton />

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4 text-center">
                ✨ What's Included:
              </h3>
              <div className="grid gap-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">Detailed Room Breakdowns</div>
                    <div className="text-gray-600">See exact costs for kitchen, bathrooms, flooring, etc.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">Labour Hours & Rates</div>
                    <div className="text-gray-600">Understand how many hours each job takes</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">Material Cost Evidence</div>
                    <div className="text-gray-600">Links to Checkatrade & Knight Frank sources</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">Edit & Adjust Quotes</div>
                    <div className="text-gray-600">Customize costs and add custom items</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">Save Up to 10 Quotes</div>
                    <div className="text-gray-600">Compare multiple properties</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {currentView === 'home' && (
        <HomePage
          onStartCalculator={() => setCurrentView('calculator')}
          onLoginSuccess={() => {
            console.log('🎯 Login success - navigating to dashboard');
            setCurrentView('dashboard');
          }}
        />
      )}

      {currentView === 'calculator' && (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <div
            className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center"
            style={headerSafeAreaStyle}
          >
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setEditingQuote(null);
                  setCurrentView(user ? 'dashboard' : 'home');
                }}
                className="text-2xl hover:opacity-70 transition"
              >
                🏠
              </button>
              <h1 className="text-xl font-bold text-gray-900">Refurbly</h1>
            </div>

            {!user && (
              <button
                onClick={() => setCurrentView('home')}
                className="px-4 py-2 text-blue-600 font-semibold hover:bg-blue-50 rounded-lg transition"
              >
                Sign In
              </button>
            )}

            {user && (
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    setEditingQuote(null);
                    setCurrentView('dashboard');
                  }}
                  className="px-4 py-2 text-blue-600 font-semibold hover:bg-blue-50 rounded-lg transition"
                >
                  My Quotes
                </button>
                <ProfileDropdown
                  onLogout={handleLogout}
                  onAdminClick={() => setCurrentView('admin')}
                />
              </div>
            )}
          </div>

          <div className="p-6 pt-5 sm:pt-7">
            <Refurbly
              onQuoteSaved={handleQuoteSaved}
              editingQuote={editingQuote}
              quotesCount={savedQuotes.length}
              maxQuotes={maxQuotes}
              onEditComplete={() => {
                setEditingQuote(null);
                setCurrentView('dashboard');
                loadSavedQuotes();
              }}
            />
          </div>
        </div>
      )}

      {currentView === 'dashboard' && (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <div
            className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center"
            style={headerSafeAreaStyle}
          >
            <div>
              <h1 className="text-xl font-bold text-gray-900">My Saved Quotes</h1>
              <p className="text-sm text-gray-600">
                {savedQuotes.length} / {maxQuotes} quotes used
                {isPremium && (
                  <span className="ml-2 text-green-600 font-semibold">✓ Premium</span>
                )}
              </p>
            </div>
            <ProfileDropdown
              onLogout={handleLogout}
              onAdminClick={() => setCurrentView('admin')}
            />
          </div>

          <div className="p-6 pt-5 sm:pt-7">
            <div className="max-w-6xl mx-auto">
              {!isPremium && savedQuotes.length >= 5 && (
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 mb-6 text-white shadow-xl">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2">
                        You've reached your free quote limit!
                      </h2>
                      <p className="text-blue-100 mb-4">
                        Upgrade to Premium to save up to 10 quotes, get full breakdowns, and
                        edit your saved quotes.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center min-w-[250px]">
                      <div className="text-3xl font-bold text-gray-900 mb-2">£9.99</div>
                      <div className="text-sm text-gray-600 mb-4">One-time payment</div>
                      {Capacitor.getPlatform() === 'ios' ? (
                        <button
                          onClick={() => setCurrentView('unlock-premium')}
                          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                          🔓 Unlock Premium
                        </button>
                      ) : (
                        <PaymentButton quoteData={{}} />
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <button
                  onClick={() => {
                    if (!isPremium && savedQuotes.length >= 5) {
                      alert(
                        "You've reached your free limit of 5 quotes. Upgrade to Premium to save more!",
                      );
                      return;
                    }
                    if (isPremium && savedQuotes.length >= 10) {
                      alert(
                        "You've reached the maximum of 10 saved quotes. Please delete some quotes to add new ones.",
                      );
                      return;
                    }
                    setEditingQuote(null);
                    setCurrentView('calculator');
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  + Create New Quote
                </button>
              </div>

              {loadingQuotes ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="mt-4 text-gray-600">Loading quotes...</p>
                </div>
              ) : savedQuotes.length === 0 ? (
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <div className="text-6xl mb-4">📋</div>
                  <h2 className="text-2xl font-bold mb-2">No saved quotes yet</h2>
                  <p className="text-gray-600 mb-6">
                    Create your first quote to see it here
                  </p>
                  
                  {/* Show different content based on premium status */}
                  {isPremium ? (
                    <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 max-w-2xl mx-auto">
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="text-3xl">🎉</span>
                        <h3 className="text-xl font-bold text-green-800">
                          Welcome to Premium!
                        </h3>
                      </div>
                      <p className="text-green-700 mb-4">
                        You have full access to all features. Create your first quote to get started!
                      </p>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span className="text-gray-700">Detailed room breakdowns</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span className="text-gray-700">Labour hours & rates</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span className="text-gray-700">Material costs & evidence</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span className="text-gray-700">Save up to 10 quotes</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 max-w-2xl mx-auto">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">✨</span>
                        <h3 className="text-xl font-bold text-blue-900">
                          Upgrade to Premium - £9.99
                        </h3>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm mb-6">
                        <div className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span className="text-gray-700">Detailed room breakdowns</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span className="text-gray-700">Labour hours & rates</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span className="text-gray-700">Material costs & evidence</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span className="text-gray-700">Save up to 10 quotes</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span className="text-gray-700">PDF export & sharing</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-gray-700">Lifetime access</span>
                        </div>
                      </div>
                      
                      {Capacitor.getPlatform() === 'ios' ? (
                        <button
                          onClick={() => setCurrentView('unlock-premium')}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition"
                        >
                          🔓 Unlock Premium - £9.99
                        </button>
                      ) : (
                        <PaymentButton quoteData={{}} compact={true} />
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedQuotes.map((quote) => (
                    <div
                      key={quote.id}
                      className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-gray-900 truncate">
                            {quote.location || 'No location'}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {quote.bedrooms} bed {quote.propertyType}
                          </p>
                        </div>
                        <button
                          onClick={() => handleDeleteQuote(quote.id)}
                          className="text-red-500 hover:text-red-700 text-xl ml-2"
                          title="Delete quote"
                        >
                          🗑️
                        </button>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Floor area:</span>
                          <span className="font-semibold">{quote.totalSqm} sqm</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Quality:</span>
                          <span className="font-semibold capitalize">
                            {quote.quality}
                          </span>
                        </div>
                      </div>

                      <div className="border-t pt-4 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Total estimate:</span>
                          <span className="text-2xl font-bold text-blue-600">
                            £{quote.estimate?.toLocaleString() || '0'}
                          </span>
                        </div>

                        <div className="text-xs text-gray-500 mt-2">
                          Saved: {new Date(quote.createdAt).toLocaleDateString()}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        {isPremium ? (
                          <>
                            <button
                              onClick={() => setSelectedQuoteId(quote.id)}
                              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
                            >
                              📊 View Details
                            </button>
                            <button
                              onClick={() => handleEditQuote(quote)}
                              className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition"
                            >
                              ✏️ Edit
                            </button>
                          </>
                        ) : (
                          Capacitor.getPlatform() === 'ios' ? (
                            <button
                              onClick={() => setCurrentView('unlock-premium')}
                              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg font-bold hover:from-blue-600 hover:to-blue-700 transition flex items-center justify-center gap-2 shadow-md"
                            >
                              <span className="text-xl">🔓</span>
                              Unlock - £9.99
                            </button>
                          ) : (
                            <PaymentButton quoteData={quote} inCard={true} />
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {selectedQuoteId && (
        <QuoteDetail
          quoteId={selectedQuoteId}
          onClose={() => setSelectedQuoteId(null)}
          onEdit={handleEditQuote}
        />
      )}
    </>
  );
}

export default App;
