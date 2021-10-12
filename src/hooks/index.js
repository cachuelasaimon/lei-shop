import { useEffect, useState } from "react";
import { firestore } from "../firebaseUtils/utils";

export const useFirestore = (collection, type, queryParameter) => {
  const [docs, setDocs] = useState(null);

  useEffect(() => {
    if (!collection || !type || !queryParameter) {
      return;
    }
    const getDocs = async () => {
      const collectionRef = firestore
        .collection(collection)
        .where(queryParameter, "==", type);
      const DBitems = await collectionRef.get();
      const documents = [];
      DBitems.forEach((item) => {
        documents.push({ id: item.id, ...item.data() });
      });
      setDocs(documents);
    };

    try {
      getDocs();
    } catch (err) {
      console.log(err);
    }
  }, [collection, type, queryParameter]);

  return { docs };
};
export const useFirestoreDoc = (documentRef) => {
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    const getDoc = async () => {
      const docRef = firestore.doc(documentRef);
      const document = await docRef.get();
      if (document) setDoc({ id: document.id, ...document.data() });
    };

    try {
      getDoc();
    } catch (err) {
      console.log(err);
    }
  }, [documentRef]);

  return { doc };
};

// export const useFirestore = (collection, type) => {
//   const [docs, setDocs] = useState(null);

//   useEffect(() => {
//     if (!collection || !type) {
//       return;
//     }
//     const unsub = firestore
//       .collection(collection)
//       .where("type", "==", type)
//       .onSnapshot((DBitems) => {
//         let documents = [];
//         DBitems.forEach((item) => {
//           documents.push({ id: item.id, ...item.data() });
//         });
//         setDocs(documents);
//       });

//     return () => unsub();
//   }, [collection, type]);

//   return { docs };
// };
