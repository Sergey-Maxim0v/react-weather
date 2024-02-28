import { useEffect, useState } from "react";
import { getCoordinates } from "../api/getCoordinates";

export interface IUseCoordinates {
  latitude: number;
  longitude: number;
}

export const useGetCoordinates = () => {
  const [coordinates, setCoordinates] = useState<IUseCoordinates>();

  useEffect(() => {
    const controller = new AbortController();

    getCoordinates(controller).then((r) =>
      setCoordinates({
        latitude: r.data.latitude,
        longitude: r.data.longitude,
      }),
    );

    return () => controller.abort();
  }, []);

  return coordinates;
};
