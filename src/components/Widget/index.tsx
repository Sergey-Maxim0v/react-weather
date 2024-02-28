import { FC, RefObject, useRef } from "react";
import { useGetWeatherCurrent } from "../../hooks/useGetWeatherCurrent";
import { IWidget, WIDGET_SIZE } from "./types";
import styles from "./styles.module.css";
import { useIsVisibleElement } from "../../hooks/useIsVisibleElement";

const Widget: FC<IWidget> = ({ size = WIDGET_SIZE.medium, className }) => {
  const ref: RefObject<HTMLDivElement> = useRef(null);

  const isVisible = useIsVisibleElement(ref);
  const weather = useGetWeatherCurrent({ isVisible });

  console.log(isVisible);
  console.log(weather);

  return (
    <div ref={ref} className={`${className} ${styles[size]} ${styles.widget}`}>
      <p>TODO</p>
    </div>
  );
};

export default Widget;
