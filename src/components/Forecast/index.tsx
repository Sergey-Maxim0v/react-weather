import { FC } from "react";
import { IForecast } from "./types";
import { useGetForecast } from "../../hooks/useGetForecast";

import styles from "./styles.module.css";

const Forecast: FC<IForecast> = ({ className }) => {
  const { data } = useGetForecast();

  console.log(data);

  return (
    <div className={`${className ?? ""} ${styles.forecast}`}>
      TODO: list forecast
    </div>
  );
};

export default Forecast;
