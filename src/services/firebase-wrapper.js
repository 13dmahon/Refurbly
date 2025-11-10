/**
 * Firebase wrapper that uses native plugins on iOS/Android
 * and web SDK in browsers
 */
import { Capacitor } from '@capacitor/core'

const isNative = Capacitor.isNativePlatform()
const platform = Capacitor.getPlatform()

console.log(`🔥 Firebase Platform: ${platform} (native: ${isNative})`)

// Helper to serialize data for native Firestore
const serializeForNative = (data) => {
  return JSON.parse(JSON.stringify(data))
}

// Auth wrapper
export const FirebaseAuthWrapper = {
  signIn: async (email, password) => {
    if (isNative) {
      console.log('📱 Native sign in...')
      const { FirebaseAuthentication } = await import('@capacitor-firebase/authentication')
      const result = await FirebaseAuthentication.signInWithEmailAndPassword({ email, password })
      return { user: result.user }
    } else {
      console.log('🌐 Web sign in...')
      const { signInWithEmailAndPassword } = await import('firebase/auth')
      const { auth } = await import('../config/firebase')
      return await signInWithEmailAndPassword(auth, email, password)
    }
  },

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

  onAuthStateChanged: (callback) => {
    if (isNative) {
      console.log('📱 Setting up NATIVE auth listener')
      
      import('@capacitor-firebase/authentication').then(({ FirebaseAuthentication }) => {
        FirebaseAuthentication.addListener('authStateChange', (change) => {
          console.log('📱 Native auth state changed:', change.user)
          callback(change.user || null)
        })
        
        FirebaseAuthentication.getCurrentUser().then(result => {
          console.log('📱 Current native user:', result.user)
          callback(result.user || null)
        }).catch(err => {
          console.log('📱 No current user:', err)
          callback(null)
        })
      })
      
      return () => {
        import('@capacitor-firebase/authentication').then(({ FirebaseAuthentication }) => {
          FirebaseAuthentication.removeAllListeners()
        })
      }
    } else {
      console.log('🌐 Setting up WEB auth listener')
      // FIX: Use async import instead of require
      let unsubscribe = () => {}
      import('firebase/auth').then(({ onAuthStateChanged }) => {
        import('../config/firebase').then(({ auth }) => {
          unsubscribe = onAuthStateChanged(auth, callback)
        })
      })
      return () => unsubscribe()
    }
  },

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
  getDoc: async (collection, docId) => {
    if (isNative) {
      console.log(`📱 Native getDoc: ${collection}/${docId}`)
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

  setDoc: async (collection, docId, data) => {
    if (isNative) {
      console.log(`📱 Native setDoc: ${collection}/${docId}`, data)
      const { FirebaseFirestore } = await import('@capacitor-firebase/firestore')
      const serializedData = serializeForNative(data)
      await FirebaseFirestore.setDocument({
        reference: `${collection}/${docId}`,
        data: serializedData
      })
      console.log('✅ Native setDoc complete')
    } else {
      const { doc, setDoc } = await import('firebase/firestore')
      const { db } = await import('../config/firebase')
      const docRef = doc(db, collection, docId)
      await setDoc(docRef, data)
    }
  },

  addDoc: async (collection, data) => {
    if (isNative) {
      console.log(`📱 Native addDoc to: ${collection}`, data)
      const { FirebaseFirestore } = await import('@capacitor-firebase/firestore')
      const serializedData = serializeForNative(data)
      console.log('📱 Serialized data:', serializedData)
      const result = await FirebaseFirestore.addDocument({
        reference: collection,
        data: serializedData
      })
      console.log('✅ Native addDoc complete:', result)
      return { id: result.reference.split('/').pop() }
    } else {
      const { collection: fbCollection, addDoc } = await import('firebase/firestore')
      const { db } = await import('../config/firebase')
      const colRef = fbCollection(db, collection)
      return await addDoc(colRef, data)
    }
  },

  updateDoc: async (collection, docId, data) => {
    if (isNative) {
      console.log(`📱 Native updateDoc: ${collection}/${docId}`, data)
      const { FirebaseFirestore } = await import('@capacitor-firebase/firestore')
      const serializedData = serializeForNative(data)
      await FirebaseFirestore.updateDocument({
        reference: `${collection}/${docId}`,
        data: serializedData
      })
      console.log('✅ Native updateDoc complete')
    } else {
      const { doc, updateDoc } = await import('firebase/firestore')
      const { db } = await import('../config/firebase')
      const docRef = doc(db, collection, docId)
      await updateDoc(docRef, data)
    }
  }
}
