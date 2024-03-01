import { URL_CURRENT } from "./listURL";
import buildUrlWithParams from "../utils/buildUrlWithParams";
import { IGetWeather, IWeather } from "./typesWeather";
import { WEATHER_API_KEY } from "../constants/weatherApiKey";

export const getWeatherCurrent = async ({
  controller,
  q,
  lang = "ru",
}: {
  q: string;
  controller: AbortController;
  lang?: string;
}): Promise<IGetWeather> => {
  const url = buildUrlWithParams({
    base: URL_CURRENT,
    options: [
      { name: "q", value: q },
      { name: "lang", value: lang },
      { name: "key", value: WEATHER_API_KEY },
    ],
  });

  const res = await fetch(url, {
    signal: controller.signal,
    method: "GET",
  });

  return res.json().then((data: IWeather) => ({
    data,
    ok: res.ok,
  }));
};
