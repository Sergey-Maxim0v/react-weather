import { URL_CURRENT } from "./listURL";
import buildUrlWithParams from "../utils/buildUrlWithParams";
import { IGetWeather, IWeatherResponse } from "./typesWeather";

const getWeather = async ({
  q,
  lang,
}: {
  q: string;
  lang: string;
}): Promise<IGetWeather> => {
  const controller = new AbortController();

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
    cancel: () => controller.abort(),
    ok: res.ok,
  }));
};

export default getWeather;
