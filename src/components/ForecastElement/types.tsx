import { IForecastDay } from "../../api/typesWeather";

export interface IForecastElement {
  weather: IForecastDay;
  isLoading: boolean;
  className?: string;
}
