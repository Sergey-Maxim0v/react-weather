import Icon from "../Icon";
import { FC } from "react";
import { IWidgetContent } from "./types";

import styles from "./styles.module.css";

const WidgetContent: FC<IWidgetContent> = ({ className, data }) => {
  return (
    <div className={`${className} ${styles.content}`}>
      <Icon
        link={"https:" + data.current.condition.icon}
        text={data.current.condition.text}
        className={styles.icon}
      />
      <p>TODO: ветер {data.current.wind_kph}</p>
      <p>TODO: направление ветра {data.current.wind_degree}</p>
      <p>TODO: направление ветра {data.current.wind_dir}</p>
      <p>TODO: осадки {data.current.precip_mm}</p>
      <p>TODO: давление {data.current.pressure_mb}</p>
      <p>TODO: {data.current.condition.text}</p>
      <p>TODO: температура {data.current.temp_c}</p>
      <p>TODO: {data.location.name}</p>

      <p>TODO: прогноз</p>
    </div>
  );
};

export default WidgetContent;
