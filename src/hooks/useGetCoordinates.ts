import { useEffect, useState } from "react";
import { getCoordinates } from "../api/getCoordinates";

export interface IUseCoordinates {
  latitude: number;
  longitude: number;
}

export const useGetCoordinates = () => {
  const [coordinates, setCoordinates] = useState<IUseCoordinates>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    getCoordinates(controller)
      .then((r) =>
        setCoordinates({
          latitude: r.data.latitude,
          longitude: r.data.longitude,
        }),
      )
      .catch((error) => {
        setIsError(true);
        console.warn("Error: useGetCoordinates :::", error);
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, []);

  return { coordinates, isLoading, isError };
};
