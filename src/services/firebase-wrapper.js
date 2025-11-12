/**
 * Cross-platform Firebase wrapper for Capacitor (native) + Web SDK (browser)
 * Includes diagnostics for native getDocsWhere() to Firestore /diagnostics
 */
import { Capacitor } from '@capacitor/core';

const isNative = Capacitor.isNativePlatform();
const platform = Capacitor.getPlatform();

const serializeForNative = (data) => JSON.parse(JSON.stringify(data));

export const FirebaseAuthWrapper = {
  signIn: async (email, password) => {
    if (isNative) {
      const { FirebaseAuthentication } = await import('@capacitor-firebase/authentication');
      const result = await FirebaseAuthentication.signInWithEmailAndPassword({ email, password });
      return { user: result.user };
    } else {
      const { signInWithEmailAndPassword } = await import('firebase/auth');
      const { auth } = await import('../config/firebase');
      return await signInWithEmailAndPassword(auth, email, password);
    }
  },

  signUp: async (email, password) => {
    if (isNative) {
      const { FirebaseAuthentication } = await import('@capacitor-firebase/authentication');
      const result = await FirebaseAuthentication.createUserWithEmailAndPassword({ email, password });
      return { user: result.user };
    } else {
      const { createUserWithEmailAndPassword } = await import('firebase/auth');
      const { auth } = await import('../config/firebase');
      return await createUserWithEmailAndPassword(auth, email, password);
    }
  },

  signOut: async () => {
    if (isNative) {
      const { FirebaseAuthentication } = await import('@capacitor-firebase/authentication');
      await FirebaseAuthentication.signOut();
    } else {
      const { signOut } = await import('firebase/auth');
      const { auth } = await import('../config/firebase');
      await signOut(auth);
    }
  },

  onAuthStateChanged: (callback) => {
    if (isNative) {
      import('@capacitor-firebase/authentication').then(({ FirebaseAuthentication }) => {
        FirebaseAuthentication.addListener('authStateChange', (change) => {
          callback(change.user || null);
        });
        FirebaseAuthentication.getCurrentUser()
          .then((res) => callback(res.user || null))
          .catch(() => callback(null));
      });
      return () => {
        import('@capacitor-firebase/authentication').then(({ FirebaseAuthentication }) => {
          FirebaseAuthentication.removeAllListeners();
        });
      };
    } else {
      return (async () => {
        const { onAuthStateChanged } = await import('firebase/auth');
        const { auth } = await import('../config/firebase');
        return onAuthStateChanged(auth, (u) => callback(u || null));
      })();
    }
  },
};

export const FirestoreWrapper = {
  getDoc: async (collection, docId) => {
    if (isNative) {
      const { FirebaseFirestore } = await import('@capacitor-firebase/firestore');
      const result = await FirebaseFirestore.getDocument({ reference: `${collection}/${docId}` });
      return {
        exists: () => result?.snapshot?.exists,
        data: () => result?.snapshot?.data,
        id: docId,
      };
    } else {
      const { doc, getDoc } = await import('firebase/firestore');
      const { db } = await import('../config/firebase');
      const ref = doc(db, collection, docId);
      return await getDoc(ref);
    }
  },

  setDoc: async (collection, docId, data) => {
    if (isNative) {
      const { FirebaseFirestore } = await import('@capacitor-firebase/firestore');
      await FirebaseFirestore.setDocument({
        reference: `${collection}/${docId}`,
        data: serializeForNative(data),
      });
    } else {
      const { doc, setDoc } = await import('firebase/firestore');
      const { db } = await import('../config/firebase');
      await setDoc(doc(db, collection, docId), data);
    }
  },

  addDoc: async (collection, data) => {
    if (isNative) {
      const { FirebaseFirestore } = await import('@capacitor-firebase/firestore');
      const res = await FirebaseFirestore.addDocument({
        reference: collection,
        data: serializeForNative(data),
      });
      // Normalize return
      const ref = res?.reference;
      if (typeof ref === 'string') return { id: ref.split('/').pop(), path: ref };
      return res;
    } else {
      const { collection: coll, addDoc } = await import('firebase/firestore');
      const { db } = await import('../config/firebase');
      const ref = await addDoc(coll(db, collection), data);
      return { id: ref.id };
    }
  },

  updateDoc: async (collection, docId, data) => {
    if (isNative) {
      const { FirebaseFirestore } = await import('@capacitor-firebase/firestore');
      await FirebaseFirestore.updateDocument({
        reference: `${collection}/${docId}`,
        data: serializeForNative(data),
      });
    } else {
      const { doc, updateDoc } = await import('firebase/firestore');
      const { db } = await import('../config/firebase');
      await updateDoc(doc(db, collection, docId), data);
    }
  },

  deleteDoc: async (collection, docId) => {
    if (isNative) {
      const { FirebaseFirestore } = await import('@capacitor-firebase/firestore');
      await FirebaseFirestore.deleteDocument({ reference: `${collection}/${docId}` });
    } else {
      const { doc, deleteDoc } = await import('firebase/firestore');
      const { db } = await import('../config/firebase');
      await deleteDoc(doc(db, collection, docId));
    }
  },

  // Server-side filtered read; native branch writes diagnostics (before/after/error)
  getDocsWhere: async (collectionName, field, operator, value) => {
    if (isNative) {
      const { FirebaseFirestore } = await import('@capacitor-firebase/firestore');

      const queryConstraints = [
        { type: 'where', fieldPath: field, opStr: operator, value },
      ];

      // BEFORE diagnostics
      try {
        await FirebaseFirestore.addDocument({
          reference: 'diagnostics',
          data: { ts: Date.now(), src: 'native.getDocsWhere.before', collectionName, field, operator, value },
        });
      } catch (_) {}

      try {
        const result = await FirebaseFirestore.queryDocuments({
          reference: collectionName,
          queryConstraints,
        });

        const count = result?.snapshots?.length || 0;

        // AFTER diagnostics
        try {
          await FirebaseFirestore.addDocument({
            reference: 'diagnostics',
            data: {
              ts: Date.now(),
              src: 'native.getDocsWhere.after',
              count,
              firstDoc: count > 0 ? result.snapshots[0].data : null,
            },
          });
        } catch (_) {}

        return (result.snapshots || []).map((snap) => ({ id: snap.id, ...snap.data }));
      } catch (e) {
        // ERROR diagnostics
        try {
          await FirebaseFirestore.addDocument({
            reference: 'diagnostics',
            data: {
              ts: Date.now(),
              src: 'native.getDocsWhere.error',
              message: e?.message || String(e),
              code: e?.code || null,
            },
          });
        } catch (_) {}
        throw e;
      }
    } else {
      const { collection, query, where, getDocs } = await import('firebase/firestore');
      const { db } = await import('../config/firebase');
      const q = query(collection(db, collectionName), where(field, operator, value));
      const snap = await getDocs(q);
      const docs = [];
      snap.forEach((d) => docs.push({ id: d.id, ...d.data() }));
      return docs;
    }
  },
};
