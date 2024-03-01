import { IWeather } from "../../api/typesWeather";
import { WIDGET_SIZE } from "../Widget/types";

export interface IContentWeather {
  data: IWeather;
  size: WIDGET_SIZE;
  isLoading: boolean;
  className?: string;
}
