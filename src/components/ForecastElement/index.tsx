import { FC } from "react";
import { IForecastElement } from "./types";
import styles from "./styles.module.css";
import Icon from "../Icon";

const ForecastElement: FC<IForecastElement> = ({ weather, className }) => {
  const tempMin = Math.round(
    weather.hour.reduce((acc, el) => (el.temp_c < acc ? el.temp_c : acc), 0) ??
      0,
  );

  const tempMax = Math.round(
    weather.hour.reduce((acc, el) => (el.temp_c > acc ? el.temp_c : acc), 0) ??
      0,
  );

  const getDayText = () => {
    const date = new Date(weather.date ?? 0).toLocaleDateString();
    const today = new Date().toLocaleDateString();

    if (date === today) {
      return "Сегодня";
    }

    return date;
  };

  return (
    <div className={`${className ?? ""} ${styles.day}`}>
      <p className={styles.date}>{getDayText()}</p>

      <Icon
        link={"https:" + weather.day.condition.icon}
        alt={weather.day.condition.text}
        className={styles.icon}
      />

      <p className={styles.temp}>
        <span>{tempMin}</span>
        <span className={styles.unit}>C</span>
        <span>{tempMax}</span>
        <span className={styles.unit}>C</span>
      </p>
    </div>
  );
};

export default ForecastElement;
