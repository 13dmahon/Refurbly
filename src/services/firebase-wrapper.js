/**
 * Firebase wrapper that uses native plugins on iOS/Android
 * and web SDK in browsers
 */
import { Capacitor } from '@capacitor/core'

const isNative = Capacitor.isNativePlatform()
const platform = Capacitor.getPlatform()

console.log(`🔥 Firebase Platform: ${platform} (native: ${isNative})`)

// Auth wrapper
export const FirebaseAuthWrapper = {
  // Sign in
  signIn: async (email, password) => {
    if (isNative) {
      const { FirebaseAuthentication } = await import('@capacitor-firebase/authentication')
      const result = await FirebaseAuthentication.signInWithEmailAndPassword({ email, password })
      return { user: result.user }
    } else {
      const { signInWithEmailAndPassword } = await import('firebase/auth')
      const { auth } = await import('../config/firebase')
      return await signInWithEmailAndPassword(auth, email, password)
    }
  },

  // Sign up
  signUp: async (email, password) => {
    if (isNative) {
      const { FirebaseAuthentication } = await import('@capacitor-firebase/authentication')
      const result = await FirebaseAuthentication.createUserWithEmailAndPassword({ email, password })
      return { user: result.user }
    } else {
      const { createUserWithEmailAndPassword } = await import('firebase/auth')
      const { auth } = await import('../config/firebase')
      return await createUserWithEmailAndPassword(auth, email, password)
    }
  },

  // Sign out
  signOut: async () => {
    if (isNative) {
      const { FirebaseAuthentication } = await import('@capacitor-firebase/authentication')
      await FirebaseAuthentication.signOut()
    } else {
      const { signOut } = await import('firebase/auth')
      const { auth } = await import('../config/firebase')
      await signOut(auth)
    }
  },

  // Listen to auth state changes
  onAuthStateChanged: (callback) => {
    if (isNative) {
      const { FirebaseAuthentication } = import('@capacitor-firebase/authentication').then(module => {
        // Add listener for native
        FirebaseAuthentication.addListener('authStateChange', (change) => {
          callback(change.user || null)
        })
        
        // Get current user immediately
        FirebaseAuthentication.getCurrentUser().then(result => {
          callback(result.user || null)
        })
        
        // Return unsubscribe function
        return () => {
          FirebaseAuthentication.removeAllListeners()
        }
      })
      
      return () => {} // placeholder
    } else {
      const { onAuthStateChanged } = require('firebase/auth')
      const { auth } = require('../config/firebase')
      return onAuthStateChanged(auth, callback)
    }
  },

  // Get current user
  getCurrentUser: async () => {
    if (isNative) {
      const { FirebaseAuthentication } = await import('@capacitor-firebase/authentication')
      const result = await FirebaseAuthentication.getCurrentUser()
      return result.user
    } else {
      const { auth } = await import('../config/firebase')
      return auth.currentUser
    }
  }
}

// Firestore wrapper
export const FirestoreWrapper = {
  // Get document
  getDoc: async (collection, docId) => {
    if (isNative) {
      const { FirebaseFirestore } = await import('@capacitor-firebase/firestore')
      const result = await FirebaseFirestore.getDocument({
        reference: `${collection}/${docId}`
      })
      return {
        exists: () => result.snapshot.exists,
        data: () => result.snapshot.data,
        id: docId
      }
    } else {
      const { doc, getDoc } = await import('firebase/firestore')
      const { db } = await import('../config/firebase')
      const docRef = doc(db, collection, docId)
      return await getDoc(docRef)
    }
  },

  // Set document
  setDoc: async (collection, docId, data) => {
    if (isNative) {
      const { FirebaseFirestore } = await import('@capacitor-firebase/firestore')
      await FirebaseFirestore.setDocument({
        reference: `${collection}/${docId}`,
        data: data
      })
    } else {
      const { doc, setDoc } = await import('firebase/firestore')
      const { db } = await import('../config/firebase')
      const docRef = doc(db, collection, docId)
      await setDoc(docRef, data)
    }
  },

  // Add document
  addDoc: async (collection, data) => {
    if (isNative) {
      const { FirebaseFirestore } = await import('@capacitor-firebase/firestore')
      const result = await FirebaseFirestore.addDocument({
        reference: collection,
        data: data
      })
      return { id: result.reference.split('/').pop() }
    } else {
      const { collection: fbCollection, addDoc } = await import('firebase/firestore')
      const { db } = await import('../config/firebase')
      const colRef = fbCollection(db, collection)
      return await addDoc(colRef, data)
    }
  },

  // Update document
  updateDoc: async (collection, docId, data) => {
    if (isNative) {
      const { FirebaseFirestore } = await import('@capacitor-firebase/firestore')
      await FirebaseFirestore.updateDocument({
        reference: `${collection}/${docId}`,
        data: data
      })
    } else {
      const { doc, updateDoc } = await import('firebase/firestore')
      const { db } = await import('../config/firebase')
      const docRef = doc(db, collection, docId)
      await updateDoc(docRef, data)
    }
  }
}
