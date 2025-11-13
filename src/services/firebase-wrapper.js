import { Capacitor } from '@capacitor/core'

const isNative = Capacitor.isNativePlatform?.() ?? false

const serializeForNative = (data) => {
  const result = {}
  for (const [key, value] of Object.entries(data)) {
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

// Normalize Firestore timestamps / dates / strings for sorting
const toMillis = (value) => {
  if (!value) return 0
  if (value instanceof Date) return value.getTime()
  if (typeof value === 'number') return value
  if (typeof value === 'string') {
    const t = Date.parse(value)
    return Number.isNaN(t) ? 0 : t
  }
  // Firestore Timestamp on web: has toDate()
  if (typeof value.toDate === 'function') {
    return value.toDate().getTime()
  }
  return 0
}

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
      const snap = await getDoc(doc(db, collectionName, docId))
      return snap
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
      // Plugin returns reference with an id
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
