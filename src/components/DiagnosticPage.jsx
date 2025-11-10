import { useState } from 'react';
import { auth, db, functions } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';
import { Capacitor } from '@capacitor/core';

export default function DiagnosticPage({ onClose }) {
  const [results, setResults] = useState([]);
  const [running, setRunning] = useState(false);

  const addResult = (test, status, message) => {
    setResults(prev => [...prev, { test, status, message }]);
  };

  const runDiagnostics = async () => {
    setResults([]);
    setRunning(true);
    
    addResult('Platform', 'info', Capacitor.getPlatform());
    
    const user = auth.currentUser;
    if (user) {
      addResult('Auth', 'success', `Logged in as ${user.email}`);
    } else {
      addResult('Auth', 'error', 'Not logged in');
      setRunning(false);
      return;
    }
    
    try {
      const token = await user.getIdToken(true);
      addResult('Token', 'success', `Got token (${token.substring(0, 20)}...)`);
    } catch (err) {
      addResult('Token', 'error', err.message);
      setRunning(false);
      return;
    }
    
    try {
      const testDoc = await addDoc(collection(db, 'diagnostics'), {
        test: true,
        timestamp: new Date().toISOString(),
        platform: Capacitor.getPlatform()
      });
      addResult('Firestore Write', 'success', `Doc created: ${testDoc.id}`);
    } catch (err) {
      addResult('Firestore Write', 'error', err.message);
    }
    
    try {
      const testFunction = httpsCallable(functions, 'createCheckoutSession');
      await testFunction({ quoteData: { test: true } });
      addResult('Cloud Function', 'success', 'Function callable');
    } catch (err) {
      addResult('Cloud Function', 'error', `${err.code}: ${err.message}`);
    }
    
    setRunning(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">🔧 System Diagnostics</h1>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">✕</button>
        </div>
        
        <button
          onClick={runDiagnostics}
          disabled={running}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold mb-6 disabled:opacity-50"
        >
          {running ? 'Running...' : 'Run Diagnostics'}
        </button>

        <div className="space-y-2">
          {results.map((result, i) => (
            <div
              key={i}
              className={`p-4 rounded-lg ${
                result.status === 'success' ? 'bg-green-50 border-green-200' :
                result.status === 'error' ? 'bg-red-50 border-red-200' :
                'bg-blue-50 border-blue-200'
              } border-2`}
            >
              <div className="font-bold">
                {result.status === 'success' ? '✅' : result.status === 'error' ? '❌' : 'ℹ️'}
                {' '}{result.test}
              </div>
              <div className="text-sm mt-1 font-mono break-all">{result.message}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
