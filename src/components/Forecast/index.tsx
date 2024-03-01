import { FC } from "react";
import { IForecast } from "./types";

import styles from "./styles.module.css";
import ForecastElement from "../ForecastElement";

const Forecast: FC<IForecast> = ({ data, className }) => {
  return (
    <div className={`${className ?? ""} ${styles.forecast}`}>
      {data.map((day) => (
        <ForecastElement
          key={day.date}
          weather={day}
          className={styles.element}
        />
      ))}
    </div>
  );
};

export default Forecast;
