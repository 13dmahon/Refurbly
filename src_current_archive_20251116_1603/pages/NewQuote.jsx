import React, { useState } from 'react';
import { calculateQuote } from '../services/pricing';

function NewQuote({ onQuoteCalculated }) {
  const [rooms, setRooms] = useState(2);
  const [refurbLevel, setRefurbLevel] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();

    const quote = calculateQuote({
      rooms: Number(rooms) || 0,
      refurbLevel,
    });

    onQuoteCalculated?.(quote);
  };

  return (
    <section className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-3">New refurbishment quote</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Number of rooms
          </label>
          <input
            type="number"
            min={1}
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            className="border rounded px-3 py-2 w-full"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Refurbishment level
          </label>
          <select
            value={refurbLevel}
            onChange={(e) => setRefurbLevel(e.target.value)}
            className="border rounded px-3 py-2 w-full"
          >
            <option value="light">Light</option>
            <option value="medium">Medium</option>
            <option value="full">Full</option>
          </select>
        </div>

        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 rounded bg-blue-600 text-white text-sm font-medium"
        >
          Calculate quote
        </button>
      </form>
    </section>
  );
}

export default NewQuote;
