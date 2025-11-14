import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function SimpleTest() {
  const { user } = useAuth();
  const [status, setStatus] = useState([]);
  const [testInput, setTestInput] = useState('');

  const addStatus = (msg) => {
    setStatus(prev => [...prev, `${new Date().toLocaleTimeString()}: ${msg}`]);
  };

  useEffect(() => {
    const auth = getAuth();
    const unsub = onAuthStateChanged(auth, (u) => {
      addStatus(`[WEB AUTH] currentUser: ${u?.uid || 'null'}`);
    });
    return () => unsub();
  }, []);

  const testSave = async () => {
    addStatus('🔵 Starting save test...');
    try {
      addStatus(`[HOOK] User ID: ${user?.uid}`);
      
      const { collection, addDoc } = await import('firebase/firestore');
      const { db } = await import('../config/firebase');
      
      addStatus('📦 Firestore imports loaded');
      
      const result = await addDoc(collection(db, 'simple_test'), {
        text: testInput,
        userId: user.uid,
        timestamp: Date.now()
      });
      
      addStatus(`✅ SAVED! Doc ID: ${result.id}`);
    } catch (error) {
      addStatus(`❌ SAVE ERROR: ${error.message}`);
    }
  };

  const testRead = async () => {
    addStatus('🔵 Starting read test...');
    try {
      const { collection, query, where, getDocs } = await import('firebase/firestore');
      const { db } = await import('../config/firebase');
      
      const q = query(collection(db, 'simple_test'), where('userId', '==', user.uid));
      const snapshot = await getDocs(q);
      
      addStatus(`✅ Found ${snapshot.size} docs`);
      snapshot.forEach(doc => {
        addStatus(`📄 ${doc.data().text}`);
      });
    } catch (error) {
      addStatus(`❌ READ ERROR: ${error.message}`);
    }
  };

  if (!user) return <div className="p-6">Please login first</div>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-yellow-50 border-2 border-yellow-500 rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">🧪 Simple Firebase Test</h2>
        <p className="text-sm mb-4">Hook User: {user.uid}</p>
        
        <input
          type="text"
          value={testInput}
          onChange={(e) => setTestInput(e.target.value)}
          placeholder="Type something..."
          className="w-full p-3 border rounded mb-4"
        />
        
        <div className="flex gap-3 mb-4">
          <button
            onClick={testSave}
            className="px-6 py-3 bg-green-600 text-white rounded font-bold"
            disabled={!testInput}
          >
            1. SAVE
          </button>
          
          <button
            onClick={testRead}
            className="px-6 py-3 bg-blue-600 text-white rounded font-bold"
          >
            2. READ
          </button>
          
          <button
            onClick={() => setStatus([])}
            className="px-6 py-3 bg-gray-600 text-white rounded"
          >
            Clear
          </button>
        </div>
      </div>
      
      <div className="bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-sm space-y-1 max-h-96 overflow-y-auto">
        {status.length === 0 ? (
          <p>Status will appear here...</p>
        ) : (
          status.map((s, i) => <div key={i}>{s}</div>)
        )}
      </div>
    </div>
  );
}
