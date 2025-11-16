import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  serverTimestamp,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from './firebaseClient';

const QUOTES_COLLECTION = 'quotes';

export async function createQuote(userId, quoteData) {
  if (!userId) throw new Error('Cannot save quote without userId');

  const docRef = await addDoc(collection(db, QUOTES_COLLECTION), {
    userId,
    ...quoteData,
    status: 'draft',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return docRef.id;
}

export async function loadQuotes(userId) {
  if (!userId) return [];

  const q = query(
    collection(db, QUOTES_COLLECTION),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  );

  const snap = await getDocs(q);
  return snap.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  }));
}

export async function deleteQuote(quoteId) {
  if (!quoteId) return;
  await deleteDoc(doc(db, QUOTES_COLLECTION, quoteId));
}
