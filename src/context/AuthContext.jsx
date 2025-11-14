import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { auth, db } from '../services/firebaseClient';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  doc,
  onSnapshot,
  setDoc,
  serverTimestamp,
} from 'firebase/firestore';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [initialising, setInitialising] = useState(true);
  const [profileLoading, setProfileLoading] = useState(false);

  useEffect(() => {
    let unsubProfile;

    const unsubAuth = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);

      if (unsubProfile) {
        unsubProfile();
        unsubProfile = undefined;
      }

      if (!firebaseUser) {
        setProfile(null);
        setInitialising(false);
        return;
      }

      setProfileLoading(true);
      const ref = doc(db, 'users', firebaseUser.uid);

      unsubProfile = onSnapshot(
        ref,
        async (snap) => {
          if (!snap.exists()) {
            try {
              await setDoc(
                ref,
                {
                  email: firebaseUser.email || null,
                  isPremium: false,
                  createdAt: serverTimestamp(),
                },
                { merge: true }
              );
            } catch (err) {
              console.error('Error creating user profile doc', err);
            }
            setProfile(null);
          } else {
            setProfile({ id: snap.id, ...snap.data() });
          }
          setProfileLoading(false);
          setInitialising(false);
        },
        (error) => {
          console.error('Error listening to user profile', error);
          setProfileLoading(false);
          setInitialising(false);
        }
      );
    });

    return () => {
      if (unsubProfile) unsubProfile();
      unsubAuth();
    };
  }, []);

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const signOutUser = () => signOut(auth);

  const isPremium = !!profile?.isPremium;

  const value = {
    user,
    profile,
    isPremium,
    initialising,
    profileLoading,
    signUp,
    signIn,
    signOut: signOutUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
