import { IWidget, WIDGET_SIZE } from "./types";
import { FC, useEffect } from "react";
import styles from "./styles.module.css";
import getWeather from "../../api/getWeather";
import getCoordinates from "../../api/getCoordinates";

const Widget: FC<IWidget> = ({ size = WIDGET_SIZE.medium, className }) => {
  useEffect(() => {
    // TODO: hook
    getWeather({ q: "52.7324 , 41.4313", lang: "ru" }).then((r) =>
      console.log(r.data.current),
    );
  }, []);

  useEffect(() => {
    // TODO: hook
    getCoordinates().then((r) =>
      console.log(r.data.latitude, r.data.longitude),
    );
  }, []);

  return (
    <div className={`${className} ${styles[size]} ${styles.widget}`}>
      <p>TODO</p>
    </div>
  );
};

export default Widget;
