console.log('🔥 Starting Firebase init...')

import { initializeApp } from 'firebase/app'
import {
  initializeAuth,
  indexedDBLocalPersistence,
  browserPopupRedirectResolver,
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getFunctions } from 'firebase/functions'

console.log('🔥 Firebase imports loaded')

const firebaseConfig = {
  apiKey: "AIzaSyD07KVqjANE9V0V0RmycQU7Djum88Hr81w",
  authDomain: "ascension-app-e3d00.firebaseapp.com",
  projectId: "ascension-app-e3d00",
  storageBucket: "ascension-app-e3d00.firebasestorage.app",
  messagingSenderId: "942940274103",
  appId: "1:942940274103:web:a5305d30ac25da3967bc32",
  measurementId: "G-YN28QXJDE6"
}

console.log('🔥 Config ready')

const app = initializeApp(firebaseConfig)
console.log('✅ Firebase initialized')

export const auth = initializeAuth(app, {
  persistence: [indexedDBLocalPersistence],
  popupRedirectResolver: browserPopupRedirectResolver,
})
console.log('✅ Auth ready with IndexedDB persistence')

export const db = getFirestore(app)
console.log('✅ Firestore ready')

export const functions = getFunctions(app, 'us-central1')
console.log('✅ Functions ready')
