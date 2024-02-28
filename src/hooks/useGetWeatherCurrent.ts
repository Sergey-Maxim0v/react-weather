import { useEffect, useState } from "react";
import { getWeatherCurrent } from "../api/getWeatherCurrent";
import { useGetCoordinates } from "./useGetCoordinates";
import { IWeatherResponse } from "../api/typesWeather";

export const useGetWeatherCurrent = ({
  interval = 300000,
  isVisible,
}: {
  interval?: number;
  isVisible: boolean;
}) => {
  const [weather, setWeather] = useState<IWeatherResponse>();
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

    const fetchWeather = async () => {
      const controller = new AbortController();
      const q = `${coordinates.latitude},${coordinates.longitude}`;

      try {
        setIsLoading(true);

        const response = await getWeatherCurrent({
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
        isLoading && setIsLoading(false);
        controller.abort();
        timerId = setTimeout(fetchWeather, interval);
      }
    };

    fetchWeather().catch((error) =>
      console.warn("Error: useGetWeatherCurrent :::", error),
    );

    return () => {
      clearTimeout(timerId);
    };
  }, [coordinates, interval, isVisible]);

  return {
    weather,
    isLoading: isLoadingQ || isLoading,
    isError: isLErrorQ || isError,
  };
};
