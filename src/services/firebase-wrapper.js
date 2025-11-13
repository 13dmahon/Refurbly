/**
 * Cross-platform Firebase wrapper for Capacitor + Web SDK
 * Web Auth first (for Firestore), mirrors to Native on iOS
 * ALL Firestore operations use Web SDK (native queries not implemented)
 */

import { Capacitor } from '@capacitor/core';

const isNative = Capacitor.isNativePlatform();
const serializeForNative = (data) => JSON.parse(JSON.stringify(data));

// ---- Web Auth (with persistence) ----
let persistenceSet = false;
const webAuth = async () => {
  const { getAuth, setPersistence, browserLocalPersistence } = await import('firebase/auth');
  const { auth } = await import('../config/firebase');
  if (!persistenceSet) {
    await setPersistence(auth, browserLocalPersistence);
    persistenceSet = true;
  }
  return auth;
};

// ---- Native Auth ----
const nativeAuth = async () => {
  const { FirebaseAuthentication } = await import('@capacitor-firebase/authentication');
  return FirebaseAuthentication;
};

// ---- Web Firestore (always) ----
const webFirestore = async () => {
  const { db } = await import('../config/firebase');
  return { db };
};

// ---- Helpers ----
const getNativeUser = async () => {
  if (!isNative) return null;
  try {
    const na = await nativeAuth();
    const { user } = await na.getCurrentUser();
    return user ?? null;
  } catch {
    return null;
  }
};

const sameUid = (a, b) => !!a && !!b && a === b;

// ---- AUTH WRAPPER ----
export const FirebaseAuthWrapper = {
  signIn: async (email, password) => {
    console.log('🔐 [1/2] Signing in to Web Auth...');
    const { signInWithEmailAndPassword } = await import('firebase/auth');
    const auth = await webAuth();
    const webCred = await signInWithEmailAndPassword(auth, email, password);
    const webUid = webCred.user?.uid;
    console.log('✅ [1/2] Web Auth signed in:', webUid);

    if (isNative) {
      console.log('🔐 [2/2] Mirroring to Native Auth...');
      try {
        const na = await nativeAuth();
        const nu = await getNativeUser();
        if (!sameUid(webUid, nu?.uid)) {
          await na.signInWithEmailAndPassword({ email, password });
          console.log('✅ [2/2] Native Auth signed in');
        } else {
          console.log('ℹ️ [2/2] Native Auth already signed in');
        }
      } catch (e) {
        console.warn('[auth] Native mirror failed (non-critical):', e);
      }
    }
    return { user: webCred.user };
  },

  signUp: async (email, password) => {
    console.log('🔐 [1/2] Signing up with Web Auth...');
    const { createUserWithEmailAndPassword } = await import('firebase/auth');
    const auth = await webAuth();
    const webCred = await createUserWithEmailAndPassword(auth, email, password);
    const webUid = webCred.user?.uid;
    console.log('✅ [1/2] Web Auth created:', webUid);

    if (isNative) {
      console.log('🔐 [2/2] Mirroring to Native Auth...');
      try {
        const na = await nativeAuth();
        const nu = await getNativeUser();
        if (!sameUid(webUid, nu?.uid)) {
          await na.createUserWithEmailAndPassword({ email, password });
          console.log('✅ [2/2] Native Auth created');
        } else {
          console.log('ℹ️ [2/2] Native Auth already exists');
        }
      } catch (e) {
        console.warn('[auth] Native mirror failed (non-critical):', e);
      }
    }
    return { user: webCred.user };
  },

  signOut: async () => {
    console.log('🔐 Signing out...');
    const { signOut } = await import('firebase/auth');
    const auth = await webAuth();
    await signOut(auth);

    if (isNative) {
      try {
        const na = await nativeAuth();
        await na.signOut();
        console.log('✅ Signed out from both Web and Native');
      } catch (e) {
        console.warn('[auth] Native sign-out warning:', e);
      }
    } else {
      console.log('✅ Signed out from Web');
    }
  },

  onAuthStateChanged: (callback) => {
    let unsub = () => {};
    (async () => {
      const { onAuthStateChanged } = await import('firebase/auth');
      const auth = await webAuth();
      console.log('🔐 Setting up auth listener...');
      unsub = onAuthStateChanged(auth, async (webUser) => {
        console.log('🔐 Auth state changed:', webUser?.uid || 'null');
        if (isNative && !webUser) {
          try {
            const nu = await getNativeUser();
            if (nu) {
              const na = await nativeAuth();
              await na.signOut();
              console.log('🧹 Cleaned up native session');
            }
          } catch (e) {
            console.warn('[auth] Native cleanup warning:', e);
          }
        }
        callback(webUser || null);
      });
    })();
    return () => unsub && unsub();
  },
};

// ---- FIRESTORE WRAPPER (Web SDK only) ----
export const FirestoreWrapper = {
  getDoc: async (collection, docId) => {
    console.log(`📄 getDoc: ${collection}/${docId}`);
    const { doc, getDoc } = await import('firebase/firestore');
    const { db } = await webFirestore();
    const ref = doc(db, collection, docId);
    return await getDoc(ref);
  },

  setDoc: async (collection, docId, data) => {
    console.log(`💾 setDoc: ${collection}/${docId}`);
    const { doc, setDoc } = await import('firebase/firestore');
    const { db } = await webFirestore();
    await setDoc(doc(db, collection, docId), data);
  },

  addDoc: async (collection, data) => {
    console.log(`➕ addDoc: ${collection}`);
    const { collection: coll, addDoc } = await import('firebase/firestore');
    const { db } = await webFirestore();
    const ref = await addDoc(coll(db, collection), data);
    console.log(`✅ Created doc: ${ref.id}`);
    return { id: ref.id };
  },

  updateDoc: async (collection, docId, data) => {
    console.log(`📝 updateDoc: ${collection}/${docId}`);
    const { doc, updateDoc } = await import('firebase/firestore');
    const { db } = await webFirestore();
    await updateDoc(doc(db, collection, docId), data);
  },

  deleteDoc: async (collection, docId) => {
    console.log(`🗑️ deleteDoc: ${collection}/${docId}`);
    const { doc, deleteDoc } = await import('firebase/firestore');
    const { db } = await webFirestore();
    await deleteDoc(doc(db, collection, docId));
  },

  getDocsWhere: async (collectionName, field, operator, value) => {
    console.log(`🔍 getDocsWhere: ${collectionName} where ${field} ${operator} ${value}`);
    const { collection, query, where, getDocs } = await import('firebase/firestore');
    const { db } = await webFirestore();
    const q = query(collection(db, collectionName), where(field, operator, value));
    const snapshot = await getDocs(q);
    const docs = [];
    snapshot.forEach(d => docs.push({ id: d.id, ...d.data() }));
    console.log(`✅ Found ${docs.length} docs`);
    return docs;
  },
};
