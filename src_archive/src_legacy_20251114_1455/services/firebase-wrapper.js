import { Capacitor } from '@capacitor/core'

const isNative = Capacitor.isNativePlatform?.() ?? false

// ----- Shared helper: serialize data for native Firestore -----
const serializeForNative = (data) => {
  const result = {}
  for (const [key, value] of Object.entries(data ?? {})) {
    if (value instanceof Date) {
      result[key] = value.toISOString()
    } else if (typeof value === 'object' && value !== null) {
      result[key] = serializeForNative(value)
    } else {
      result[key] = value
    }
  }
  return result
}

// ----- Shared helper: normalize dates/timestamps for sorting -----
const toMillis = (value) => {
  if (!value) return 0
  if (value instanceof Date) return value.getTime()
  if (typeof value === 'number') return value
  if (typeof value === 'string') {
    const t = Date.parse(value)
    return Number.isNaN(t) ? 0 : t
  }
  // Firestore Timestamp (web) usually has toDate()
  if (value && typeof value.toDate === 'function') {
    return value.toDate().getTime()
  }
  return 0
}

// =======================
//  AUTH WRAPPER
// =======================

export const FirebaseAuthWrapper = {
  // Subscribe to auth state
  onAuthStateChanged: async (callback) => {
    if (isNative) {
      const { FirebaseAuthentication } = await import('@capacitor-firebase/authentication')
      const listener = await FirebaseAuthentication.addListener(
        'authStateChange',
        (event) => {
          callback(event.user ?? null)
        },
      )
      return () => {
        listener.remove()
      }
    } else {
      const { getAuth, onAuthStateChanged } = await import('firebase/auth')
      await import('../config/firebase') // ensure app is initialized
      const auth = getAuth()
      return onAuthStateChanged(auth, callback)
    }
  },

  // Sign in / log in
  signIn: async (email, password) => {
    if (isNative) {
      const { FirebaseAuthentication } = await import('@capacitor-firebase/authentication')
      const result = await FirebaseAuthentication.signInWithEmailAndPassword({
        email,
        password,
      })
      return result.user ?? null
    } else {
      const { getAuth, signInWithEmailAndPassword } = await import('firebase/auth')
      await import('../config/firebase')
      const auth = getAuth()
      const cred = await signInWithEmailAndPassword(auth, email, password)
      return cred.user
    }
  },

  // Sign up / register
  signUp: async (email, password) => {
    if (isNative) {
      const { FirebaseAuthentication } = await import('@capacitor-firebase/authentication')
      const result = await FirebaseAuthentication.createUserWithEmailAndPassword({
        email,
        password,
      })
      return result.user ?? null
    } else {
      const { getAuth, createUserWithEmailAndPassword } = await import('firebase/auth')
      await import('../config/firebase')
      const auth = getAuth()
      const cred = await createUserWithEmailAndPassword(auth, email, password)
      return cred.user
    }
  },

  // Get current user once
  getCurrentUser: async () => {
    if (isNative) {
      const { FirebaseAuthentication } = await import('@capacitor-firebase/authentication')
      const result = await FirebaseAuthentication.getCurrentUser()
      return result.user ?? null
    } else {
      const { getAuth } = await import('firebase/auth')
      await import('../config/firebase')
      const auth = getAuth()
      return auth.currentUser
    }
  },

  // Log out
  signOut: async () => {
    if (isNative) {
      const { FirebaseAuthentication } = await import('@capacitor-firebase/authentication')
      await FirebaseAuthentication.signOut()
    } else {
      const { getAuth, signOut } = await import('firebase/auth')
      await import('../config/firebase')
      const auth = getAuth()
      await signOut(auth)
    }
  },

  // Friendly aliases in case your code uses different names
  login: async (email, password) => FirebaseAuthWrapper.signIn(email, password),
  logout: async () => FirebaseAuthWrapper.signOut(),
  signup: async (email, password) => FirebaseAuthWrapper.signUp(email, password),
}

// =======================
//  FIRESTORE WRAPPER
// =======================

export const FirestoreWrapper = {
  getDoc: async (collectionName, docId) => {
    if (isNative) {
      const { FirebaseFirestore } = await import('@capacitor-firebase/firestore')
      const result = await FirebaseFirestore.getDocument({
        reference: `${collectionName}/${docId}`,
      })
      return {
        exists: () => !!result.snapshot,
        data: () => result.snapshot?.data ?? null,
        id: result.snapshot?.id ?? docId,
      }
    } else {
      const { doc, getDoc } = await import('firebase/firestore')
      const { db } = await import('../config/firebase')
      return await getDoc(doc(db, collectionName, docId))
    }
  },

  setDoc: async (collectionName, docId, data, options = {}) => {
    if (isNative) {
      const { FirebaseFirestore } = await import('@capacitor-firebase/firestore')
      await FirebaseFirestore.setDocument({
        reference: `${collectionName}/${docId}`,
        data: serializeForNative(data),
        merge: options.merge ?? false,
      })
    } else {
      const { doc, setDoc } = await import('firebase/firestore')
      const { db } = await import('../config/firebase')
      await setDoc(doc(db, collectionName, docId), data, options)
    }
  },

  addDoc: async (collectionName, data) => {
    if (isNative) {
      const { FirebaseFirestore } = await import('@capacitor-firebase/firestore')
      const result = await FirebaseFirestore.addDocument({
        reference: collectionName,
        data: serializeForNative(data),
      })
      return { id: result.reference?.id ?? null }
    } else {
      const { collection, addDoc } = await import('firebase/firestore')
      const { db } = await import('../config/firebase')
      return await addDoc(collection(db, collectionName), data)
    }
  },

  updateDoc: async (collectionName, docId, data) => {
    if (isNative) {
      const { FirebaseFirestore } = await import('@capacitor-firebase/firestore')
      await FirebaseFirestore.updateDocument({
        reference: `${collectionName}/${docId}`,
        data: serializeForNative(data),
      })
    } else {
      const { doc, updateDoc } = await import('firebase/firestore')
      const { db } = await import('../config/firebase')
      await updateDoc(doc(db, collectionName, docId), data)
    }
  },

  deleteDoc: async (collectionName, docId) => {
    if (isNative) {
      const { FirebaseFirestore } = await import('@capacitor-firebase/firestore')
      await FirebaseFirestore.deleteDocument({
        reference: `${collectionName}/${docId}`,
      })
    } else {
      const { doc, deleteDoc } = await import('firebase/firestore')
      const { db } = await import('../config/firebase')
      await deleteDoc(doc(db, collectionName, docId))
    }
  },

  // iOS-SAFE: Get quotes for a specific user
  getQuotesForUser: async (userId) => {
    if (isNative) {
      console.log(`📱 Native: getCollection + client-side filter for ${userId}`)
      const { FirebaseFirestore } = await import('@capacitor-firebase/firestore')
      const result = await FirebaseFirestore.getCollection({
        reference: 'quotes',
      })

      const allDocs = (result.snapshots ?? []).map((snap) => ({
        id: snap.id,
        ...snap.data,
      }))

      return allDocs
        .filter((doc) => doc.userId === userId)
        .sort((a, b) => toMillis(b.createdAt) - toMillis(a.createdAt))
    } else {
      console.log(`🌐 Web: query with where clause for ${userId}`)
      const { collection, query, where, orderBy, getDocs } = await import('firebase/firestore')
      const { db } = await import('../config/firebase')
      const q = query(
        collection(db, 'quotes'),
        where('userId', '==', userId),
        orderBy('createdAt', 'desc'),
      )
      const snapshot = await getDocs(q)
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    }
  },
}
