/**
 * Cross-platform Firebase wrapper for Capacitor (native) + Web SDK (browser)
 * Keeps Web Auth (for Firestore) and Native Auth (Capacitor) in sync.
 */

import { Capacitor } from '@capacitor/core';

const isNative = Capacitor.isNativePlatform();

const serializeForNative = (data) => JSON.parse(JSON.stringify(data));

// ---- lazy imports to keep bundle lean ----
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

const nativeAuth = async () => {
  const { FirebaseAuthentication } = await import('@capacitor-firebase/authentication');
  return FirebaseAuthentication;
};

const nativeFirestore = async () => {
  const { FirebaseFirestore } = await import('@capacitor-firebase/firestore');
  return FirebaseFirestore;
};

const webFirestore = async () => {
  const { db } = await import('../config/firebase');
  return { db };
};

// ---- small helpers ----
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

// ---- ready-gate for Web Auth (prevents early Firestore calls) ----
let readyResolved = false;
const readyPromise = (async () => {
  const { onAuthStateChanged } = await import('firebase/auth');
  const auth = await webAuth();
  return new Promise((resolve) => {
    const unsub = onAuthStateChanged(auth, () => {
      if (!readyResolved) {
        readyResolved = true;
        resolve();
      }
      unsub();
    });
    if (auth.currentUser || auth.currentUser === null) {
      readyResolved = true;
      resolve();
      unsub();
    }
  });
})();

export const authReady = async () => {
  await readyPromise;
};

// ---- AUTH WRAPPER ----
export const FirebaseAuthWrapper = {
  signIn: async (email, password) => {
    const { signInWithEmailAndPassword } = await import('firebase/auth');
    const auth = await webAuth();

    const webCred = await signInWithEmailAndPassword(auth, email, password);
    const webUid = webCred.user?.uid;

    if (isNative) {
      try {
        const na = await nativeAuth();
        const nu = await getNativeUser();
        if (!sameUid(webUid, nu?.uid)) {
          await na.signInWithEmailAndPassword({ email, password });
        }
      } catch (e) {
        console.warn('[auth] native mirror sign-in failed:', e);
      }
    }
    return { user: webCred.user };
  },

  signUp: async (email, password) => {
    const { createUserWithEmailAndPassword } = await import('firebase/auth');
    const auth = await webAuth();

    const webCred = await createUserWithEmailAndPassword(auth, email, password);
    const webUid = webCred.user?.uid;

    if (isNative) {
      try {
        const na = await nativeAuth();
        const nu = await getNativeUser();
        if (!sameUid(webUid, nu?.uid)) {
          await na.createUserWithEmailAndPassword({ email, password });
        }
      } catch (e) {
        console.warn('[auth] native mirror sign-up failed:', e);
      }
    }
    return { user: webCred.user };
  },

  signOut: async () => {
    const { signOut } = await import('firebase/auth');
    const auth = await webAuth();
    await signOut(auth);

    if (isNative) {
      try {
        const na = await nativeAuth();
        await na.signOut();
      } catch (e) {
        console.warn('[auth] native sign-out warning:', e);
      }
    }
  },

  onAuthStateChanged: (callback) => {
    let unsub = () => {};
    (async () => {
      const { onAuthStateChanged } = await import('firebase/auth');
      const auth = await webAuth();
      unsub = onAuthStateChanged(auth, async (webUser) => {
        if (isNative && !webUser) {
          try {
            const nu = await getNativeUser();
            if (nu) {
              const na = await nativeAuth();
              await na.signOut();
            }
          } catch (e) {
            console.warn('[auth] native clean-up on web logout:', e);
          }
        }
        callback(webUser || null);
      });
    })();
    return () => unsub && unsub();
  },
};

// ---- FIRESTORE WRAPPER ----
export const FirestoreWrapper = {
  getDoc: async (collection, docId) => {
    await authReady();
    if (isNative) {
      const ff = await nativeFirestore();
      const result = await ff.getDocument({ reference: `${collection}/${docId}` });
      return {
        exists: () => result?.snapshot?.exists,
        data: () => result?.snapshot?.data,
        id: docId,
      };
    } else {
      const { doc, getDoc } = await import('firebase/firestore');
      const { db } = await webFirestore();
      const ref = doc(db, collection, docId);
      return await getDoc(ref);
    }
  },

  setDoc: async (collection, docId, data) => {
    await authReady();
    if (isNative) {
      const ff = await nativeFirestore();
      await ff.setDocument({
        reference: `${collection}/${docId}`,
        data: serializeForNative(data),
      });
    } else {
      const { doc, setDoc } = await import('firebase/firestore');
      const { db } = await webFirestore();
      await setDoc(doc(db, collection, docId), data);
    }
  },

  addDoc: async (collection, data) => {
    await authReady();
    if (isNative) {
      const ff = await nativeFirestore();
      const res = await ff.addDocument({
        reference: collection,
        data: serializeForNative(data),
      });
      const ref = res?.reference;
      if (typeof ref === 'string') return { id: ref.split('/').pop(), path: ref };
      return res;
    } else {
      const { collection: coll, addDoc } = await import('firebase/firestore');
      const { db } = await webFirestore();
      const ref = await addDoc(coll(db, collection), data);
      return { id: ref.id };
    }
  },

  updateDoc: async (collection, docId, data) => {
    await authReady();
    if (isNative) {
      const ff = await nativeFirestore();
      await ff.updateDocument({
        reference: `${collection}/${docId}`,
        data: serializeForNative(data),
      });
    } else {
      const { doc, updateDoc } = await import('firebase/firestore');
      const { db } = await webFirestore();
      await updateDoc(doc(db, collection, docId), data);
    }
  },

  deleteDoc: async (collection, docId) => {
    await authReady();
    if (isNative) {
      const ff = await nativeFirestore();
      await ff.deleteDocument({ reference: `${collection}/${docId}` });
    } else {
      const { doc, deleteDoc } = await import('firebase/firestore');
      const { db } = await webFirestore();
      await deleteDoc(doc(db, collection, docId));
    }
  },

  getDocsWhere: async (collectionName, field, operator, value) => {
    await authReady();
    // Always use web SDK for queries (native queryDocuments not implemented on iOS)
    const { collection, query, where, getDocs } = await import('firebase/firestore');
    const { db } = await webFirestore();
    const q = query(collection(db, collectionName), where(field, operator, value));
    const snapshot = await getDocs(q);
    const docs = [];
    snapshot.forEach(d => docs.push({ id: d.id, ...d.data() }));
    return docs;
  },
};
