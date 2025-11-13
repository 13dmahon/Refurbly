console.log('🔥 Starting Firebase init...')

import { initializeApp } from 'firebase/app'
import { initializeAuth, browserLocalPersistence } from 'firebase/auth'
import { initializeFirestore, CACHE_SIZE_UNLIMITED } from 'firebase/firestore'
import { getFunctions } from 'firebase/functions'

console.log('🔥 Firebase imports loaded')

const firebaseConfig = {
  apiKey: "AIzaSyBPvb63rhkyCJdsm0ZuPc6DbeG7ds-gD7c",
  authDomain: "ascension-app-e3d00.firebaseapp.com",
  projectId: "ascension-app-e3d00",
  storageBucket: "ascension-app-e3d00.firebasestorage.app",
  messagingSenderId: "942940274103",
  appId: "1:942940274103:ios:502983e5779d820167bc32",
  measurementId: "G-YN28QXJDE6"
}

console.log('🔥 Config ready')

const app = initializeApp(firebaseConfig)
console.log('✅ Firebase initialized')

export const auth = initializeAuth(app, {})
console.log('✅ Auth ready')

export const db = initializeFirestore(app, {
  cacheSizeBytes: CACHE_SIZE_UNLIMITED
})
console.log('✅ Firestore ready with unlimited cache')

export const functions = getFunctions(app, 'us-central1')
console.log('✅ Functions ready')
