import { useEffect, useState } from "react";
import { getCoordinates } from "../api/getCoordinates";

export interface IUseCoordinates {
  latitude: number;
  longitude: number;
}

const defaultCoordinates: IUseCoordinates = {
  latitude: 55.752947,
  longitude: 37.621691,
};

export const useGetCoordinates = () => {
  const [coordinates, setCoordinates] = useState<IUseCoordinates | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await getCoordinates(controller);

        setCoordinates({
          latitude: response.data.latitude,
          longitude: response.data.longitude,
        });
        setError(undefined);
      } catch (error) {
        setError("ipapi.co: " + error);
        setCoordinates(defaultCoordinates);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData().catch((error) =>
      console.warn("Error: useGetCoordinates :::", error),
    );

    return () => {
      controller.abort();
    };
  }, []);

  return { coordinates, isLoading, error };
};
