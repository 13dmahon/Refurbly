import { useState, useEffect } from 'react';
import { FirestoreWrapper } from './services/firebase-wrapper';
import { useAuth } from './hooks/useAuth.jsx';
import HomePage from './components/HomePage';
import Refurbly from './components/Refurbly';
import QuoteDetail from './components/QuoteDetail';
import PaymentButton from './components/PaymentButton';
import ProfileDropdown from './components/ProfileDropdown';
import SimpleTest from './components/SimpleTest';

function App() {
  const { user, loading, logout, isPremium } = useAuth();
  const [currentView, setCurrentView] = useState('home');
  const [savedQuotes, setSavedQuotes] = useState([]);
  const [loadingQuotes, setLoadingQuotes] = useState(false);
  const [selectedQuoteId, setSelectedQuoteId] = useState(null);
  const [editingQuote, setEditingQuote] = useState(null);

  const maxQuotes = isPremium ? 10 : 5;

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
      console.log('📋 [iOS-SAFE] Loading ALL quotes for user:', user.uid);
      const userQuotes = await FirestoreWrapper.getDocsWhere(
        'quotes', 'userId', '==', user.uid,
        [{ type: 'orderBy', field: 'createdAt', direction: 'desc' }]
      );
      console.log(`✅ Found ${userQuotes.length} quotes`);
      userQuotes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setSavedQuotes(userQuotes);
    } catch (error) {
      console.error('❌ Error loading quotes:', error);
    } finally {
      setLoadingQuotes(false);
    }
  };

  const handleDeleteQuote = async (quoteId) => {
    if (!window.confirm('Are you sure you want to delete this quote?')) return;
    
    try {
      await FirestoreWrapper.deleteDoc('quotes', quoteId);
      setSavedQuotes(quotes => quotes.filter(q => q.id !== quoteId));
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
    console.log("Quote saved! Reloading and navigating to dashboard...");
    // Always reload quotes after save
    setCurrentView("dashboard");
    if (true) {
      loadSavedQuotes();
    }
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
          <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
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
                  onClick={() => setCurrentView('test')}
                  className="px-4 py-2 bg-red-500 text-white font-bold hover:bg-red-600 rounded-lg transition"
                >
                  🧪 TEST
                </button>
                <button
                  onClick={() => {
                    setEditingQuote(null);
                    setCurrentView('dashboard');
                  }}
                  className="px-4 py-2 text-blue-600 font-semibold hover:bg-blue-50 rounded-lg transition"
                >
                  My Quotes
                </button>
                <ProfileDropdown onLogout={handleLogout} />
              </div>
            )}
          </div>

          <div className="p-6">
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

      {currentView === 'test' && user && <SimpleTest />}

      {currentView === 'dashboard' && (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-gray-900">My Saved Quotes</h1>
              <p className="text-sm text-gray-600">
                {savedQuotes.length} / {maxQuotes} quotes used
                {isPremium && <span className="ml-2 text-green-600 font-semibold">✓ Premium</span>}
              </p>
            </div>
            <ProfileDropdown onLogout={handleLogout} />
          </div>

          <div className="p-6">
            <div className="max-w-6xl mx-auto">
              {!isPremium && savedQuotes.length >= 5 && (
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 mb-6 text-white shadow-xl">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2">You've reached your free quote limit!</h2>
                      <p className="text-blue-100 mb-4">
                        Upgrade to Premium to save up to 10 quotes, get full breakdowns, and edit your saved quotes.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center min-w-[250px]">
                      <div className="text-3xl font-bold text-gray-900 mb-2">£9.99</div>
                      <div className="text-sm text-gray-600 mb-4">One-time payment</div>
                      <PaymentButton quoteData={{}} />
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <button
                  onClick={() => {
                    if (!isPremium && savedQuotes.length >= 5) {
                      alert('You\'ve reached your free limit of 5 quotes. Upgrade to Premium to save more!');
                      return;
                    }
                    if (isPremium && savedQuotes.length >= 10) {
                      alert('You\'ve reached the maximum of 10 saved quotes. Please delete some quotes to add new ones.');
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
                  <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 max-w-2xl mx-auto">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">✨</span>
                      <h3 className="text-xl font-bold text-blue-900">Upgrade to Premium - £9.99</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span><span className="text-gray-700">Detailed room breakdowns</span></div>
                      <div className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span><span className="text-gray-700">Labour hours & rates</span></div>
                      <div className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span><span className="text-gray-700">Material costs & evidence</span></div>
                      <div className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span><span className="text-gray-700">Unlimited saved quotes</span></div>
                      <div className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span><span className="text-gray-700">PDF export & sharing</span></div>
                      <div className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span><span className="text-gray-700">Lifetime access</span></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedQuotes.map((quote) => (
                    <div key={quote.id} className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition">
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
                          <span className="font-semibold capitalize">{quote.quality}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Refurb level:</span>
                          <span className="font-semibold capitalize">{quote.refurbLevel}</span>
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
                          <PaymentButton quoteData={quote} inCard={true} />
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
