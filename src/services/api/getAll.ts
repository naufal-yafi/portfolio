import { firebaseFirestoreDatabase } from "@service/firebaseSDK";
import { collection, getDocs } from "firebase/firestore";

const getAll = async (firebaseCollection: string) => {
  const queryAction = collection(firebaseFirestoreDatabase, firebaseCollection);
  const snapshot = await getDocs(queryAction);

  const data: any[] = !snapshot.empty
    ? snapshot?.docs?.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    : [];

  return data;
};

export default getAll;
