export interface IWeather {
  data: IWeatherResponse;
  cancel: VoidFunction;
  ok: boolean;
}

export enum WEATHER_CURRENT_KEYS {
  last_updated_epoch = "last_updated_epoch",
  last_updated = "last_updated",
  temp_c = "temp_c",
  temp_f = "temp_f",
  is_day = "is_day",
  condition = "condition",
  wind_mph = "wind_mph",
  wind_kph = "wind_kph",
  wind_degree = "wind_degree",
  wind_dir = "wind_dir",
  pressure_mb = "pressure_mb",
  pressure_in = "pressure_in",
  precip_mm = "precip_mm",
  precip_in = "precip_in",
  humidity = "humidity",
  cloud = "cloud",
  feelslike_c = "feelslike_c",
  feelslike_f = "feelslike_f",
  vis_km = "vis_km",
  vis_miles = "vis_miles",
  uv = "uv",
  gust_mph = "gust_mph",
  gust_kph = "gust_kph",
}

export enum WEATHER_LOCATION_KEYS {
  name = "name",
  region = "region",
  country = "country",
  lat = "lat",
  lon = "lon",
  tz_id = "tz_id",
  localtime_epoch = "localtime_epoch",
  localtime = "localtime",
}

export interface IWeatherResponse {
  location: { [key: WEATHER_LOCATION_KEYS]: string | number };
  current: {
    condition: { [key: WEATHER_CURRENT_KEYS.condition]: string | number };
    [key: WEATHER_CURRENT_KEYS]: string | number;
  };
}
