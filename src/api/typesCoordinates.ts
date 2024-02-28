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
  ok: boolean;
}
