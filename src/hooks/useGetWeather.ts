import { useEffect, useState } from "react";
import { IWeather } from "../api/typesWeather";
import { useGetCoordinates } from "./useGetCoordinates";
import getWeather from "../api/getWeather";

export const useGetWeather = ({
  interval = 300000,
  isVisible,
}: {
  interval?: number;
  isVisible: boolean;
}) => {
  const [weather, setWeather] = useState<IWeather>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const {
    coordinates,
    isLoading: isLoadingQ,
    isError: isLErrorQ,
  } = useGetCoordinates();

  useEffect(() => {
    if (
      !coordinates ||
      !coordinates.longitude ||
      !coordinates.latitude ||
      !isVisible
    ) {
      return;
    }

    let timerId: number;
    const controller = new AbortController();

    const fetchWeather = async () => {
      const q = `${coordinates.latitude},${coordinates.longitude}`;

      try {
        setIsLoading(true);

        const response = await getWeather({
          controller,
          q,
          lang: "ru",
        });

        if (response.ok) {
          setWeather(response.data);
        }
      } catch (error) {
        console.warn("Error: getWeatherCurrent :::", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
        timerId = setTimeout(fetchWeather, interval);
      }
    };

    fetchWeather().catch((error) =>
      console.warn("Error: useGetWeather :::", error),
    );

    return () => {
      controller?.abort();
      clearTimeout(timerId);
    };
  }, [coordinates, interval, isVisible]);

  return {
    weather,
    isLoading: isLoadingQ || isLoading,
    isError: isLErrorQ || isError,
  };
};
