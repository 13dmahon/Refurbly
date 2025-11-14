import { useEffect, useState } from 'react';
import { auth } from '../config/firebase';

export default function FirebaseDiagnostic() {
  const [logs, setLogs] = useState([]);

  const addLog = (msg) => {
    setLogs(prev => [...prev, `${new Date().toISOString().split('T')[1].slice(0, 8)} ${msg}`]);
    console.log(msg);
  };

  useEffect(() => {
    addLog('🔍 Starting Firebase diagnostic...');
    
    // Test 1: Can we reach Firebase servers?
    addLog('📡 Testing network connectivity...');
    fetch('https://www.google.com', { mode: 'no-cors' })
      .then(() => addLog('✅ Internet works'))
      .catch(e => addLog('❌ No internet: ' + e.message));

    // Test 2: Can we reach Firebase specifically?
    addLog('🔥 Testing Firebase servers...');
    fetch('https://firebaseapp.com', { mode: 'no-cors' })
      .then(() => addLog('✅ Firebase servers reachable'))
      .catch(e => addLog('❌ Firebase blocked: ' + e.message));

    // Test 3: Check auth object
    addLog('🔐 Checking auth object...');
    addLog(`Auth app name: ${auth.app.name}`);
    addLog(`Auth config: ${auth.config.apiKey.substring(0, 20)}...`);

    // Test 4: Try to initialize auth
    addLog('👤 Attempting auth initialization...');
    const timeout = setTimeout(() => {
      addLog('⏰ Auth listener timeout - never fired!');
    }, 3000);

    import('firebase/auth').then(({ onAuthStateChanged }) => {
      onAuthStateChanged(auth, (user) => {
        clearTimeout(timeout);
        addLog(`✅ Auth listener FIRED! User: ${user?.email || 'none'}`);
      });
    });

  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace', fontSize: '12px' }}>
      <h2>🔬 Firebase Diagnostic</h2>
      <div style={{ backgroundColor: '#000', color: '#0f0', padding: '10px', borderRadius: '8px', maxHeight: '80vh', overflow: 'auto' }}>
        {logs.map((log, i) => (
          <div key={i}>{log}</div>
        ))}
      </div>
    </div>
  );
}
