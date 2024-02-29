import { IWeatherResponse } from "../../api/typesWeather";
import { WIDGET_SIZE } from "../Widget/types";

export interface IWidgetContent {
  data: IWeatherResponse;
  size: WIDGET_SIZE;
  isLoading?: boolean;
  className?: string;
}
