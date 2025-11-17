import { Capacitor } from '@capacitor/core'

const isNative = Capacitor.isNativePlatform?.() ?? false

console.log(`🔥 Firebase Wrapper - Platform: ${isNative ? 'NATIVE iOS' : 'WEB'}`)

// =======================
//  USE WEB SDK FOR EVERYTHING
// =======================

export const FirebaseAuthWrapper = {
  onAuthStateChanged: async (callback) => {
    const { getAuth, onAuthStateChanged } = await import('firebase/auth')
    await import('../config/firebase')
    const auth = getAuth()
    return onAuthStateChanged(auth, callback)
  },

  signIn: async (email, password) => {
    const { getAuth, signInWithEmailAndPassword } = await import('firebase/auth')
    await import('../config/firebase')
    const auth = getAuth()
    return await signInWithEmailAndPassword(auth, email, password)
  },

  signUp: async (email, password) => {
    const { getAuth, createUserWithEmailAndPassword } = await import('firebase/auth')
    await import('../config/firebase')
    const auth = getAuth()
    return await createUserWithEmailAndPassword(auth, email, password)
  },

  getCurrentUser: async () => {
    const { getAuth } = await import('firebase/auth')
    await import('../config/firebase')
    const auth = getAuth()
    return auth.currentUser
  },

  getIdToken: async (forceRefresh = false) => {
    const { getAuth } = await import('firebase/auth')
    await import('../config/firebase')
    const auth = getAuth()
    if (!auth.currentUser) return null
    return await auth.currentUser.getIdToken(forceRefresh)
  },

  signOut: async () => {
    const { getAuth, signOut } = await import('firebase/auth')
    await import('../config/firebase')
    const auth = getAuth()
    await signOut(auth)
  },

  login: async (email, password) => FirebaseAuthWrapper.signIn(email, password),
  logout: async () => FirebaseAuthWrapper.signOut(),
  signup: async (email, password) => FirebaseAuthWrapper.signUp(email, password),
}

export const FirestoreWrapper = {
  getDoc: async (collectionName, docId) => {
    const { doc, getDoc } = await import('firebase/firestore')
    const { db } = await import('../config/firebase')
    return await getDoc(doc(db, collectionName, docId))
  },

  setDoc: async (collectionName, docId, data, options = {}) => {
    const { doc, setDoc } = await import('firebase/firestore')
    const { db } = await import('../config/firebase')
    await setDoc(doc(db, collectionName, docId), data, options)
  },

  addDoc: async (collectionName, data) => {
    const { collection, addDoc } = await import('firebase/firestore')
    const { db } = await import('../config/firebase')
    return await addDoc(collection(db, collectionName), data)
  },

  updateDoc: async (collectionName, docId, data) => {
    const { doc, updateDoc } = await import('firebase/firestore')
    const { db } = await import('../config/firebase')
    await updateDoc(doc(db, collectionName, docId), data)
  },

  deleteDoc: async (collectionName, docId) => {
    const { doc, deleteDoc } = await import('firebase/firestore')
    const { db } = await import('../config/firebase')
    await deleteDoc(doc(db, collectionName, docId))
  },

  getQuotesForUser: async (userId) => {
    console.log(`📱 Querying quotes for ${userId} using Web SDK`)
    const { collection, query, where, orderBy, getDocs } = await import('firebase/firestore')
    const { db } = await import('../config/firebase')
    
    const q = query(
      collection(db, 'quotes'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc'),
    )
    
    const snapshot = await getDocs(q)
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  },
}
