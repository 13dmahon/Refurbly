import { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged 
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('🔐 [1/3] Setting up Firebase Auth listener...');
    
    // AGGRESSIVE 5-second timeout
    const timeoutId = setTimeout(() => {
      console.error('⏰ TIMEOUT: Firebase Auth did not respond in 30 seconds');
      setError('Firebase connection timeout. Please check your internet connection.');
      setLoading(false);
    }, 30000);

    try {
      const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        clearTimeout(timeoutId);
        console.log('🔐 [2/3] Auth state changed:', firebaseUser?.email || 'no user');
        
        if (firebaseUser) {
          setUser(firebaseUser);
          
          try {
            const userDocRef = doc(db, 'users', firebaseUser.uid);
            const userDoc = await getDoc(userDocRef);
            
            if (userDoc.exists()) {
              const userData = userDoc.data();
              setIsPremium(userData.isPremium === true);
              console.log('✅ User is premium:', userData.isPremium);
            } else {
              console.log('⚠️ No user document found');
              setIsPremium(false);
            }
          } catch (error) {
            console.error('❌ Error fetching user data:', error);
            setIsPremium(false);
          }
        } else {
          console.log('👤 No user logged in');
          setUser(null);
          setIsPremium(false);
        }
        
        setLoading(false);
        console.log('🔐 [3/3] Auth initialization complete');
      });

      return () => {
        clearTimeout(timeoutId);
        unsubscribe();
      };
    } catch (error) {
      console.error('❌ FATAL: Failed to setup auth listener:', error);
      setError('Failed to initialize authentication: ' + error.message);
      setLoading(false);
      clearTimeout(timeoutId);
    }
  }, []);

  const login = async (email, password) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const userDocRef = doc(db, 'users', result.user.uid);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      setIsPremium(userDoc.data().isPremium === true);
    }
    return result;
  };

  const signup = async (email, password) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, 'users', result.user.uid), {
      email: email,
      isPremium: false,
      createdAt: new Date().toISOString(),
    });
    setIsPremium(false);
    return result;
  };

  const logout = () => signOut(auth);

  const value = {
    user,
    isPremium,
    loading,
    error,
    login,
    signup,
    logout,
  };

  // Show error overlay if Firebase fails
  if (error) {
    return (
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '20px' }}>⚠️</div>
        <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Connection Error</h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>{error}</p>
        <button 
          onClick={() => window.location.reload()}
          style={{
            padding: '12px 24px',
            backgroundColor: '#3B82F6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
