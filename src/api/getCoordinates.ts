export interface ICoordinatesData {
  latitude: number;
  longitude: number;
  [key: string]: string | number;
}

export interface IGetCoordinates {
  data: {
    latitude: ICoordinatesData["latitude"];
    longitude: ICoordinatesData["longitude"];
  };
  cancel: VoidFunction;
  ok: boolean;
}

const getCoordinates = async (): Promise<IGetCoordinates> => {
  const controller = new AbortController();

  const url = "https://ipapi.co/json/";

  const res = await fetch(url, {
    signal: controller.signal,
    method: "GET",
  });

  return res.json().then((resJson: ICoordinatesData) => ({
    data: { latitude: resJson.latitude, longitude: resJson.longitude },
    cancel: () => controller.abort(),
    ok: res.ok,
  }));
};

export default getCoordinates;
