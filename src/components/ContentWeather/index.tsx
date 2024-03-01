import Icon from "../Icon";
import { FC } from "react";
import { IContentWeather } from "./types";
import Loader from "../Loader";

import styles from "./styles.module.css";
import WindArrowIcon from "../windArrowIcon";
import { WIDGET_SIZE } from "../Widget/types";
import Forecast from "../Forecast";

const ContentWeather: FC<IContentWeather> = ({
  className,
  size,
  data,
  isLoading,
}) => {
  const windSpeed = Math.round((data.current.wind_kph * 5) / 18);
  const feelsLike = Math.round(data.current.feelslike_c);
  const temp = Math.round(data.current.temp_c);
  const pressure = Math.floor(data.current.pressure_in * 25.4);

  return (
    <div className={` ${styles[size]} ${className ?? ""} ${styles.content}`}>
      <p className={styles.city}>{data.location.name}</p>

      <div className={styles.iconRow}>
        {isLoading ? (
          <Loader className={styles.iconLoader} />
        ) : (
          <Icon
            link={"https:" + data.current.condition.icon}
            alt={data.current.condition.text}
            className={styles.icon}
          />
        )}
      </div>

      {size !== WIDGET_SIZE.small && (
        <p className={styles.name}>
          <span className={styles.description}>
            {data.current.condition.text}
          </span>
        </p>
      )}

      <p className={styles.temp}>
        <span className={styles.value}>{temp}</span>
        <span className={styles.unit}>C</span>
      </p>

      {size !== WIDGET_SIZE.small && (
        <p className={styles.feelslike}>
          <span className={styles.description}>Ощущается как</span>
          <span className={styles.value}>{feelsLike}</span>
          {/*<span className={styles.unit}>C</span>*/}
        </p>
      )}

      <div className={styles.wind}>
        <p className={styles.windSpeed}>
          <span className={styles.description}>Ветер</span>
          <span className={styles.value}>{windSpeed}</span>
          <span className={styles.unit}>м/с</span>
        </p>

        <WindArrowIcon
          className={styles.windDirection}
          degree={data.current.wind_degree}
        />
      </div>

      {size !== WIDGET_SIZE.small && (
        <div className={styles.pressure}>
          <span className={styles.description}>Атм. давление</span>
          <span className={styles.value}>{pressure}</span>
          <span className={styles.unit}>мм</span>
        </div>
      )}

      {size === WIDGET_SIZE.large &&
        data.forecast &&
        data.forecast.forecastday.length && (
          <Forecast
            data={data.forecast.forecastday}
            className={styles.forecast}
          />
        )}
    </div>
  );
};

export default ContentWeather;
