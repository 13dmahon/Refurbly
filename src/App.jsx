import React, { useState } from 'react';
import NewQuote from './pages/NewQuote';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import { AuthProvider, useAuth } from './context/AuthContext';
import { createQuote } from './services/quotes';
import { startCheckout } from './services/payments';

function AppShell() {
  const { user, initialising, signOut } = useAuth();
  const [view, setView] = useState('quote'); // 'quote' | 'dashboard' | 'auth'
  const [quoteResult, setQuoteResult] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleQuoteCalculated = (quote) => {
    setQuoteResult(quote);
    setSaveMessage('');
  };

  const handleSaveQuote = async () => {
    if (!user) {
      setSaveMessage('Please log in to save quotes.');
      setView('auth');
      return;
    }
    if (!quoteResult) return;

    try {
      setSaving(true);
      const id = await createQuote(user.uid, quoteResult);
      setSaveMessage(`Quote saved (id: ${id.slice(0, 6)}…)`);
    } catch (err) {
      console.error(err);
      setSaveMessage(err.message || 'Failed to save quote');
    } finally {
      setSaving(false);
    }
  };

  const handleGoPremium = async () => {
    if (!quoteResult) {
      alert('Create a quote first to start checkout');
      return;
    }
    try {
      await startCheckout(quoteResult, user || null);
    } catch (err) {
      console.error(err);
      alert(err.message || 'Failed to start checkout');
    }
  };

  const headerSubtitle = (() => {
    if (initialising) return 'Checking sign-in status…';
    if (user) return `Signed in as ${user.email || user.uid}`;
    return 'Not signed in';
  })();

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="bg-blue-600 text-white py-4 px-6 shadow flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Refurbly</h1>
          <p className="text-sm opacity-80">
            Quick refurbishment quote calculator (clean rebuild)
          </p>
          <p className="text-xs opacity-75 mt-1">{headerSubtitle}</p>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <button
            type="button"
            className={`px-3 py-1 rounded ${
              view === 'quote' ? 'bg-white text-blue-600' : 'bg-blue-500'
            }`}
            onClick={() => setView('quote')}
          >
            New quote
          </button>
          <button
            type="button"
            className={`px-3 py-1 rounded ${
              view === 'dashboard' ? 'bg-white text-blue-600' : 'bg-blue-500'
            }`}
            onClick={() => setView('dashboard')}
          >
            My quotes
          </button>
          {user ? (
            <button
              type="button"
              className="px-3 py-1 rounded bg-blue-500"
              onClick={() => signOut()}
            >
              Log out
            </button>
          ) : (
            <button
              type="button"
              className={`px-3 py-1 rounded ${
                view === 'auth' ? 'bg-white text-blue-600' : 'bg-blue-500'
              }`}
              onClick={() => setView('auth')}
            >
              Log in / Sign up
            </button>
          )}
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-6 space-y-6">
        {view === 'quote' && (
          <>
            <NewQuote onQuoteCalculated={handleQuoteCalculated} />

            {quoteResult && (
              <section className="mt-6 bg-white rounded-lg shadow p-4">
                <h2 className="text-lg font-semibold mb-2">
                  Quick summary
                </h2>
                <p className="text-sm">
                  Rooms: <strong>{quoteResult.rooms}</strong> · Level:{' '}
                  <strong>{quoteResult.refurbLevel}</strong>
                </p>
                <p className="mt-2 text-base">
                  Estimated total:{' '}
                  <strong>£{quoteResult.total.toLocaleString()}</strong>
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={handleSaveQuote}
                    disabled={saving}
                    className="inline-flex items-center px-4 py-2 rounded bg-blue-600 text-white text-sm font-medium disabled:opacity-60"
                  >
                    {saving ? 'Saving…' : 'Save quote'}
                  </button>
                  <button
                    type="button"
                    onClick={handleGoPremium}
                    className="inline-flex items-center px-4 py-2 rounded border border-blue-600 text-blue-600 text-sm font-medium bg-white"
                  >
                    Go Premium (Stripe)
                  </button>
                </div>

                {saveMessage && (
                  <p className="mt-3 text-sm text-slate-700">
                    {saveMessage}
                  </p>
                )}
              </section>
            )}
          </>
        )}

        {view === 'dashboard' && (
          <Dashboard
            onSelectQuote={(q) => {
              setQuoteResult(q);
              setView('quote');
            }}
          />
        )}

        {view === 'auth' && (
          <AuthPage onDone={() => setView('quote')} />
        )}
      </main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppShell />
    </AuthProvider>
  );
}

export default App;
