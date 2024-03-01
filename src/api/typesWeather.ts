export interface IGetWeather {
  data: IWeather;
  ok: boolean;
}

export interface IWeatherCondition {
  code: number;
  icon: string;
  text: string;
}

export interface IWeatherCurrent {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: 0 | 1;
  condition: IWeatherCondition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export interface IWeatherLocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: string;
  localtime: string;
}

export interface IForecastAstro {
  is_moon_up: number;
  is_sun_up: number;
  moon_illumination: number;
  moon_phase: string;
  moonrise: string;
  moonset: string;
  sunrise: string;
  sunset: string;
}

export interface IForecastDayWeather {
  avghumidity: number;
  avgtemp_c: number;
  avgtemp_f: number;
  avgvis_km: number;
  avgvis_miles: number;
  condition: IWeatherCondition;
  daily_chance_of_rain: number;
  daily_chance_of_snow: number;
  daily_will_it_rain: number;
  daily_will_it_snow: number;
  maxtemp_c: number;
  maxtemp_f: number;
  maxwind_kph: number;
  maxwind_mph: number;
  mintemp_c: number;
  mintemp_f: number;
  totalprecip_in: number;
  totalprecip_mm: number;
  totalsnow_cm: number;
  uv: number;
}

export interface IForecastHourWeather {
  time_epoch: string;
  time: number;
  temp_c: number;
  temp_f: number;
  is_day: 0 | 1;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  snow_cm: number;
  humidity: number;
  cloud: number;
  condition: IWeatherCondition;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
  short_rad: number;
  diff_rad: number;
}

export interface IForecastDay {
  astro: IForecastAstro;
  date: "string";
  date_epoch: number;
  day: IForecastDayWeather;
  hour: IForecastHourWeather[];
}

export interface IWeather {
  location: IWeatherLocation;
  current: IWeatherCurrent;
  forecast: { forecastday: IForecastDay[] };
}
