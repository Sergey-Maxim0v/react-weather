import { ICoordinatesData, IGetCoordinates } from "./typesCoordinates";
import { URL_IPAPI_CO } from "./listURL";

export const getCoordinates = async (
  controller: AbortController,
): Promise<IGetCoordinates> => {
  const res = await fetch(URL_IPAPI_CO, {
    signal: controller.signal,
    method: "GET",
  });

  return res.json().then((resJson: ICoordinatesData) => ({
    data: { latitude: resJson.latitude, longitude: resJson.longitude },
    ok: res.ok,
  }));
};
