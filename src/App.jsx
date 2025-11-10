import { useState } from 'react'

function App() {
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignIn = async () => {
    setLoading(true)
    setError('')
    try {
      console.log('🔥 Attempting native Firebase sign in...')
      const { FirebaseAuthentication } = await import('@capacitor-firebase/authentication')
      const result = await FirebaseAuthentication.signInWithEmailAndPassword({ 
        email, 
        password 
      })
      console.log('✅ Sign in successful!', result.user)
      setUser(result.user)
    } catch (err) {
      console.error('❌ Sign in failed:', err)
      setError(err.message || 'Sign in failed')
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    try {
      const { FirebaseAuthentication } = await import('@capacitor-firebase/authentication')
      await FirebaseAuthentication.signOut()
      setUser(null)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div style={{ padding: '40px', maxWidth: '400px', margin: '0 auto', fontFamily: 'system-ui' }}>
      <h1 style={{ textAlign: 'center' }}>🔥 Firebase Test</h1>
      
      {user ? (
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '18px', color: 'green' }}>✅ Logged in!</p>
          <p>Email: {user.email}</p>
          <button 
            onClick={handleSignOut}
            style={{ padding: '12px 24px', fontSize: '16px', cursor: 'pointer' }}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <input 
            type="email" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '12px', marginBottom: '10px', fontSize: '16px', boxSizing: 'border-box' }}
          />
          <input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '12px', marginBottom: '10px', fontSize: '16px', boxSizing: 'border-box' }}
          />
          <button 
            onClick={handleSignIn}
            disabled={loading}
            style={{ width: '100%', padding: '12px', fontSize: '16px', cursor: 'pointer' }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </div>
      )}
      
      {error && (
        <p style={{ color: 'red', marginTop: '20px', padding: '10px', background: '#fee', borderRadius: '4px' }}>
          ❌ {error}
        </p>
      )}
    </div>
  )
}

export default App
