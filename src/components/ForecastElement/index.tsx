import { FC } from "react";
import { IForecastElement } from "./types";
import styles from "./styles.module.css";

const ForecastElement: FC<IForecastElement> = ({ weather, className }) => {
  console.log(weather);

  return (
    <div className={`${className ?? ""} ${styles.day}`}>{weather.date}</div>
  );
};

export default ForecastElement;
