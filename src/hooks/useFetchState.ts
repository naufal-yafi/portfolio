import { useEffect, useRef, useState } from "react";

const useFetchState = (
  callback: Function,
  ...firebaseCollection: string[] | number[]
) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [snapshot, setSnapshot]: any[] = useState([]);
  const errorMessage = useRef<string | null>(null);

  const fetchFirebase = async () => {
    try {
      const response =
        firebaseCollection.length >= 3
          ? await callback(
              firebaseCollection[0],
              firebaseCollection[1],
              firebaseCollection[2],
            )
          : await callback(firebaseCollection[0]);
      setSnapshot(response);
    } catch (error) {
      errorMessage.current = (error as Error).message;
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFirebase();
  });

  return {
    isLoading,
    snapshot,
    error: errorMessage.current,
  };
};

export default useFetchState;
