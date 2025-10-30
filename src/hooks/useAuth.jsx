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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      console.log('🔥 Auth state changed:', firebaseUser?.email);
      
      if (firebaseUser) {
        setUser(firebaseUser);
        
        // Fetch premium status from Firestore
        try {
          const userDocRef = doc(db, 'users', firebaseUser.uid);
          const userDoc = await getDoc(userDocRef);
          
          if (userDoc.exists()) {
            const userData = userDoc.data();
            console.log('📄 User document data:', userData);
            setIsPremium(userData.isPremium === true);
            console.log('✅ isPremium set to:', userData.isPremium);
          } else {
            console.log('❌ No user document found');
            setIsPremium(false);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          setIsPremium(false);
        }
      } else {
        setUser(null);
        setIsPremium(false);
      }
      
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    
    // Fetch premium status immediately after login
    const userDocRef = doc(db, 'users', result.user.uid);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      setIsPremium(userDoc.data().isPremium === true);
    }
    
    return result;
  };

  const signup = async (email, password) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    
    // Create user document with free tier
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
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
