import { useEffect, useState } from 'react';
import { Capacitor } from '@capacitor/core';
import { FirestoreWrapper } from '../services/firebase-wrapper';

const isNative = Capacitor.isNativePlatform();

export default function TestLanding() {
  const [uid, setUid] = useState(null);
  const [log, setLog] = useState([]);
  const [count, setCount] = useState(null);
  const add = (m) => setLog((prev) => [...prev, `${new Date().toLocaleTimeString()} — ${m}`]);

  const getUid = async () => {
    try {
      if (isNative) {
        const { FirebaseAuthentication } = await import('@capacitor-firebase/authentication');
        const res = await FirebaseAuthentication.getCurrentUser();
        return res?.user?.uid || null;
      } else {
        const { getAuth, onAuthStateChanged } = await import('firebase/auth');
        const auth = getAuth();
        if (auth.currentUser?.uid) return auth.currentUser.uid;
        return new Promise((resolve) => {
          const unsub = onAuthStateChanged(auth, (u) => { unsub(); resolve(u?.uid || null); });
        });
      }
    } catch (e) {
      add(`❌ getUid error: ${e?.message || e}`);
      return null;
    }
  };

  const runTest = async () => {
    add(`🔵 Starting diagnostics (platform: ${isNative ? 'iOS-native' : 'web'})`);
    const gotUid = await getUid();
    setUid(gotUid);
    if (!gotUid) { add('⚠️ No user logged in'); return; }
    add(`👤 UID: ${gotUid}`);

    try {
      add('📡 Fetching ALL quotes, will filter for your userId...');
      
      // Use the wrapper method that works on iOS
      const userQuotes = await FirestoreWrapper.getAllDocsFiltered(
        'quotes',
        (doc) => doc.userId === gotUid
      );

      const n = userQuotes.length;
      setCount(n);
      add(`✅ Found ${n} quotes for your user!`);
      
      if (n > 0) {
        add(`📋 First quote: ${userQuotes[0].location || 'No location'}`);
      }

    } catch (e) {
      add(`❌ Query error: ${e?.message || e}`);
    }
  };

  useEffect(() => { runTest(); }, []);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-5 mb-6">
        <h1 className="text-2xl font-bold mb-2">🔬 iOS Startup Diagnostics</h1>
        <p>Platform: <b>{isNative ? '📱 iOS (native)' : '🌐 Web'}</b></p>
        <p>User: {uid ? <b>{uid.substring(0, 20)}...</b> : <i>not signed in</i>}</p>
        <p>Quote docs found: {count === null ? <i>—</i> : <b>{count}</b>}</p>
        
        <div className="mt-3 flex gap-3">
          <button onClick={runTest} className="px-4 py-2 rounded bg-blue-600 text-white font-semibold">RUN AGAIN</button>
          <button onClick={() => setLog([])} className="px-4 py-2 rounded bg-gray-600 text-white font-semibold">CLEAR LOG</button>
        </div>
      </div>

      <div className="bg-gray-100 rounded p-3 font-mono text-sm max-h-96 overflow-y-auto">
        {log.length ? log.map((l, i) => <div key={i}>{l}</div>) : <div className="text-gray-500">Logs will appear here…</div>}
      </div>
    </div>
  );
}
