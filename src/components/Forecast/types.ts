import { IForecastDay } from "../../api/typesWeather";

export interface IForecast {
  data: IForecastDay[];
  isLoading: boolean;
  className?: string;
}