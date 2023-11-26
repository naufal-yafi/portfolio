import { firebaseFirestoreDatabase } from "@service/firebaseSDK";
import { collection, getDocs, query, where } from "firebase/firestore";

const getByValue = async (
  firebaseCollection: string,
  fieldTarget: string,
  valueTarget: string | number,
) => {
  const queryAction = query(
    collection(firebaseFirestoreDatabase, firebaseCollection),
    where(fieldTarget, "==", valueTarget),
  );
  const snapshot = await getDocs(queryAction);

  const data: any[] = !snapshot.empty
    ? snapshot?.docs?.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    : [];

  return data;
};

export default getByValue;
