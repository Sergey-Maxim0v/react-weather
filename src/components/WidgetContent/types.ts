import { IWeatherResponse } from "../../api/typesWeather";

export interface IWidgetContent {
  data: IWeatherResponse;
  className?: string;
}
