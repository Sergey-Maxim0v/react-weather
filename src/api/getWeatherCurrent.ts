import { URL_CURRENT } from "./listURL";
import buildUrlWithParams from "../utils/buildUrlWithParams";
import { IGetWeather, IWeatherResponse } from "./typesWeather";

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
      { name: "key", value: "1e4a8256516046e3bcf202314242702" },
    ],
  });

  const res = await fetch(url, {
    signal: controller.signal,
    method: "GET",
  });

  return res.json().then((data: IWeatherResponse) => ({
    data,
    ok: res.ok,
  }));
};
