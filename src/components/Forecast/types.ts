import { IForecastDay } from "../../api/typesWeather";

export interface IForecast {
  data: IForecastDay[];
  className?: string;
}
