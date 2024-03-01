import { IForecastDay } from "../../api/typesWeather";

export interface IForecastElement {
  weather: IForecastDay;
  className?: string;
}
