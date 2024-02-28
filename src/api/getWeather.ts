import { URL_CURRENT } from "./listURL";
import buildUrlWithParams from "../utils/buildUrlWithParams";
import { IWeather, IWeatherResponse } from "./typesWeather";

const getWeather = async ({
  q,
  lang,
}: {
  q: string;
  lang: string;
}): Promise<IWeather> => {
  const controller = new AbortController();

  const url = buildUrlWithParams({
    base: URL_CURRENT,
    options: [
      { name: "q", value: q },
      { name: "lang", value: lang },
      { name: "key", value: "1e4a8256516046e3bcf202314242702" },
    ],
  });

  const res = await fetch<IWeatherResponse>(url, {
    signal: controller.signal,
    method: "GET",
  });

  const data = await res.json();

  return { data, cancel: () => controller.abort(), ok: res.ok };
};

export default getWeather;
