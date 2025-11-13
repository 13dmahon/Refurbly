import { Capacitor } from '@capacitor/core'

const isNative = Capacitor.isNativePlatform()

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

export const FirestoreWrapper = {
  getDoc: async (collection, docId) => {
    if (isNative) {
      console.log(`📱 Native getDoc: ${collection}/${docId}`)
      const { FirebaseFirestore } = await import('@capacitor-firebase/firestore')
      const result = await FirebaseFirestore.getDocument({
        reference: `${collection}/${docId}`
      })
      return {
        exists: () => !!result.snapshot,
        data: () => result.snapshot?.data || null
      }
    } else {
      const { doc, getDoc } = await import('firebase/firestore')
      const { db } = await import('../config/firebase')
      const docRef = doc(db, collection, docId)
      return await getDoc(docRef)
    }
  },

  setDoc: async (collection, docId, data, options = {}) => {
    if (isNative) {
      console.log(`📱 Native setDoc: ${collection}/${docId}`, data)
      const { FirebaseFirestore } = await import('@capacitor-firebase/firestore')
      const serializedData = serializeForNative(data)
      await FirebaseFirestore.setDocument({
        reference: `${collection}/${docId}`,
        data: serializedData,
        merge: options.merge || false
      })
      console.log('✅ Native setDoc complete')
    } else {
      const { doc, setDoc } = await import('firebase/firestore')
      const { db } = await import('../config/firebase')
      const docRef = doc(db, collection, docId)
      await setDoc(docRef, data, options)
    }
  },

  addDoc: async (collection, data) => {
    if (isNative) {
      console.log(`📱 Native addDoc: ${collection}`, data)
      const { FirebaseFirestore } = await import('@capacitor-firebase/firestore')
      const serializedData = serializeForNative(data)
      const result = await FirebaseFirestore.addDocument({
        reference: collection,
        data: serializedData
      })
      console.log('✅ Native addDoc complete, id:', result.reference?.id)
      return { id: result.reference?.id }
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
  },

  // NEW: Get all docs from a collection and filter client-side
  // This works on iOS since queryDocuments doesn't
  getAllDocsFiltered: async (collection, filterFn) => {
    if (isNative) {
      console.log(`📱 Native getCollection: ${collection}`)
      const { FirebaseFirestore } = await import('@capacitor-firebase/firestore')
      const result = await FirebaseFirestore.getCollection({
        reference: collection
      })
      console.log(`✅ Native got ${result.snapshots?.length || 0} docs`)
      const allDocs = (result.snapshots || []).map(snap => ({
        id: snap.id,
        ...snap.data
      }))
      // Apply client-side filter
      return filterFn ? allDocs.filter(filterFn) : allDocs
    } else {
      const { collection: fbCollection, getDocs } = await import('firebase/firestore')
      const { db } = await import('../config/firebase')
      const colRef = fbCollection(db, collection)
      const snapshot = await getDocs(colRef)
      const docs = []
      snapshot.forEach(doc => {
        docs.push({ id: doc.id, ...doc.data() })
      })
      return filterFn ? docs.filter(filterFn) : docs
    }
  }
}
