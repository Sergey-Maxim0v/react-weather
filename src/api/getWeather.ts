import buildUrlWithParams from "../utils/buildUrlWithParams";
import { URL_FORECAST } from "./listURL";
import { WEATHER_API_KEY } from "../constants/weatherApiKey";
import { IWeather } from "./typesWeather";

/**
 * @see https://www.weatherapi.com/api-explorer.aspx
 */
const getWeather = async ({
  lang,
  q,
  controller,
}: {
  lang: string;
  q: string;
  controller: AbortController;
}) => {
  const urlOptions = [
    { name: "q", value: q },
    { name: "lang", value: lang },
    { name: "key", value: WEATHER_API_KEY },
    { name: "days", value: "3" },
  ];

  const url = buildUrlWithParams({
    base: URL_FORECAST,
    options: urlOptions,
  });

  const res = await fetch(url, {
    signal: controller.signal,
    method: "GET",
  });

  if (!res.ok) {
    const error = await res.json();
    const errorArr = ["", res.status.toString()];

    if (error?.error?.code) {
      errorArr.push(error.error.code);
    }

    if (error?.error?.message) {
      errorArr.push(error.error.message);
    } else {
      errorArr.push("No error message");
    }

    throw new Error(errorArr.join(": "));
  }

  return res.json().then((data: IWeather) => ({
    data,
    ok: res.ok,
  }));
};

export default getWeather;
