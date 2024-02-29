import Icon from "../Icon";
import { FC } from "react";
import { IWidgetContent } from "./types";
import Loader from "../Loader";

import styles from "./styles.module.css";
import WindArrowIcon from "../windArrowIcon";
import { WIDGET_SIZE } from "../Widget/types";

const WidgetContent: FC<IWidgetContent> = ({
  className,
  size,
  data,
  isLoading,
}) => {
  const windSpeed = Math.round((data.current.wind_kph * 5) / 18);
  const temp = Math.round(data.current.temp_c);

  const isName = data.current.condition.text.length < 15;

  return (
    <div className={` ${styles[size]} ${className ?? ""} ${styles.content}`}>
      <p className={styles.city}>{data.location.name}</p>

      <div className={styles.iconRow}>
        {isLoading ? (
          <Loader className={styles.iconLoader} />
        ) : (
          <Icon
            link={"https:" + data.current.condition.icon}
            text={data.current.condition.text}
            className={styles.icon}
          />
        )}
      </div>

      {isName && size !== WIDGET_SIZE.small && (
        <p className={styles.name}>{data.current.condition.text}</p>
      )}

      <p className={styles.temp}>
        <span>{temp}</span>
        <span className={styles.unit}>C</span>
      </p>

      <div className={styles.wind}>
        <p className={styles.windSpeed}>
          <span>{windSpeed}</span>
          <span className={styles.unit}>м/с</span>
        </p>

        <p className={styles.windDirection}>
          <WindArrowIcon degree={data.current.wind_degree} />
          {/*<span className={styles.unit}>{data.current.wind_dir}</span>*/}
        </p>
      </div>

      {/*<p>TODO: осадки {data.current.precip_mm}</p>*/}
      {/*<p>TODO: давление {data.current.pressure_mb}</p>*/}

      {/*<p>TODO: прогноз</p>*/}
    </div>
  );
};

export default WidgetContent;
