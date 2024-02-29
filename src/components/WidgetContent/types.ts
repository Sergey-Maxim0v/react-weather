import { IWeatherResponse } from "../../api/typesWeather";
import { IWidget } from "../Widget/types";

export interface IWidgetContent {
  data: IWeatherResponse;
  size: IWidget["size"];
  isLoading?: boolean;
  className?: string;
}
