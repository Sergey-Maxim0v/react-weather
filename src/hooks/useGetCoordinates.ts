import { useEffect, useState } from "react";
import { getCoordinates } from "../api/getCoordinates";

export interface IUseCoordinates {
  latitude: number;
  longitude: number;
}

export const useGetCoordinates = () => {
  const [coordinates, setCoordinates] = useState<IUseCoordinates | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await getCoordinates(controller);

        if (isMounted) {
          setCoordinates({
            latitude: response.data.latitude,
            longitude: response.data.longitude,
          });
          setIsError(false);
        }
      } catch (error) {
        if (isMounted) {
          setIsError(true);
          console.warn("Error: getCoordinates :::", error);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData().catch((error) =>
      console.warn("Error: useGetCoordinates :::", error),
    );

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return { coordinates, isLoading, isError };
};
