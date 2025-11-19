import { createContext, useContext, useState, useEffect } from 'react';
import { FirebaseAuthWrapper, FirestoreWrapper } from '../services/firebase-wrapper';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('🔐 [1/2] Setting up auth listener...');
    
    const unsubscribePromise = FirebaseAuthWrapper.onAuthStateChanged(async (firebaseUser) => {
      console.log('🔐 [2/2] Auth state:', firebaseUser?.email || 'no user');
      
      if (firebaseUser) {
        setUser(firebaseUser);
        
        try {
          const userDoc = await FirestoreWrapper.getDoc('users', firebaseUser.uid);
          
          if (userDoc.exists()) {
            const userData = userDoc.data();
            const premiumStatus = userData.isPremium === true;
            setIsPremium(premiumStatus);
            console.log('✅ Premium status:', premiumStatus);
            
            // Log payment info if available
            if (premiumStatus) {
              console.log('💳 Payment provider:', userData.paymentProvider || 'unknown');
              console.log('📅 Premium since:', userData.premiumSince || 'unknown');
            }
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
      console.log('✅ Auth complete');
    });

    return () => {
      if (unsubscribePromise && typeof unsubscribePromise.then === 'function') {
        unsubscribePromise.then(unsub => unsub && unsub());
      } else if (typeof unsubscribePromise === 'function') {
        unsubscribePromise();
      }
    };
  }, []);

  const login = async (email, password) => {
    const result = await FirebaseAuthWrapper.signIn(email, password);
    const userDoc = await FirestoreWrapper.getDoc('users', result.user.uid);
    if (userDoc.exists()) {
      setIsPremium(userDoc.data().isPremium === true);
    }
    return result;
  };

  const signup = async (email, password) => {
    const result = await FirebaseAuthWrapper.signUp(email, password);
    await FirestoreWrapper.setDoc('users', result.user.uid, {
      email: email,
      isPremium: false,
      createdAt: new Date().toISOString(),
    });
    setIsPremium(false);
    return result;
  };

  const logout = () => FirebaseAuthWrapper.signOut();

  const value = {
    user,
    isPremium,
    loading,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}