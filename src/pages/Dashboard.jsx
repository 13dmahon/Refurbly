import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { loadQuotes, deleteQuote } from '../services/quotes';

function Dashboard({ onSelectQuote, onUpgrade, isPremium }) {
  const { user } = useAuth();
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const refresh = async () => {
    if (!user || !isPremium) return;
    setLoading(true);
    setError('');
    try {
      const data = await loadQuotes(user.uid);
      setQuotes(data);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to load quotes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.uid, isPremium]);

  if (!user) {
    return (
      <section className="bg-white rounded-lg shadow p-4">
        <p className="text-sm">
          Please log in to see your saved quotes.
        </p>
      </section>
    );
  }

  if (!isPremium) {
    return (
      <section className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Premium feature</h2>
        <p className="text-sm mb-3">
          Viewing and managing saved quotes is a Premium feature.
        </p>
        <button
          type="button"
          onClick={onUpgrade}
          className="inline-flex items-center px-4 py-2 rounded bg-blue-600 text-white text-sm font-medium"
        >
          Go Premium (Stripe)
        </button>
      </section>
    );
  }

  return (
    <section className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold">My quotes</h2>
        <button
          type="button"
          onClick={refresh}
          className="text-sm text-blue-600 underline"
        >
          Refresh
        </button>
      </div>

      {loading && <p className="text-sm">Loading…</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}

      {!loading && quotes.length === 0 && (
        <p className="text-sm text-slate-500">
          No quotes yet. Create one from the main page.
        </p>
      )}

      <ul className="divide-y divide-slate-200">
        {quotes.map((q) => (
          <li key={q.id} className="py-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">
                {q.rooms} room(s) – {q.refurbLevel}
              </p>
              {q.total && (
                <p className="text-xs text-slate-600">
                  Total: £{q.total.toLocaleString()}
                </p>
              )}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="text-xs text-blue-600 underline"
                onClick={() => onSelectQuote?.(q)}
              >
                View
              </button>
              <button
                type="button"
                className="text-xs text-red-600 underline"
                onClick={async () => {
                  if (!window.confirm('Delete this quote?')) return;
                  await deleteQuote(q.id);
                  await refresh();
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Dashboard;
