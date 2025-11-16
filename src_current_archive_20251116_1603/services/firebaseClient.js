import { initializeApp } from 'firebase/app';
import {
  getAuth,
  browserLocalPersistence,
  setPersistence,
} from 'firebase/auth';
import {
  initializeFirestore,
  CACHE_SIZE_UNLIMITED,
} from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyBPvb63rhkyCJdsm0ZuPc6DbeG7ds-gD7c",
  authDomain: "ascension-app-e3d00.firebaseapp.com",
  projectId: "ascension-app-e3d00",
  storageBucket: "ascension-app-e3d00.firebasestorage.app",
  messagingSenderId: "942940274103",
  appId: "1:942940274103:ios:502983e5779d820167bc32",
  measurementId: "G-YN28QXJDE6"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence).catch(console.error);

const db = initializeFirestore(app, {
  cacheSizeBytes: CACHE_SIZE_UNLIMITED,
});

const functions = getFunctions(app, 'us-central1');

export { app, auth, db, functions };
