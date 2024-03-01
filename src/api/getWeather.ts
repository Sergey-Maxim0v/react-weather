import buildUrlWithParams from "../utils/buildUrlWithParams";
import { URL_FORECAST } from "./listURL";
import { WEATHER_API_KEY } from "../constants/weatherApiKey";
import { IWeather } from "./typesWeather";

const getWeather = async ({
  lang,
  q,
  controller,
  hour,
}: {
  lang: string;
  q: string;
  controller: AbortController;
  hour?: string;
}) => {
  const urlOptions = [
    { name: "q", value: q },
    { name: "lang", value: lang },
    { name: "key", value: WEATHER_API_KEY },
    { name: "days", value: "3" },
  ];

  if (hour) {
    urlOptions.push({ name: "hour", value: hour });
  }

  const url = buildUrlWithParams({
    base: URL_FORECAST,
    options: urlOptions,
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

export default getWeather;
