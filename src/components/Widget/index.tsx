import { FC, RefObject, useRef } from "react";
import { IWidget, WIDGET_SIZE } from "./types";
import { useGetWeatherCurrent } from "../../hooks/useGetWeatherCurrent";
import { useIsVisibleElement } from "../../hooks/useIsVisibleElement";
import ErrorMessage from "../ErrorMessage";
import Loader from "../Loader";
import WidgetContent from "../WidgetContent";

import styles from "./styles.module.css";

const Widget: FC<IWidget> = ({ size = WIDGET_SIZE.medium, className }) => {
  const ref: RefObject<HTMLDivElement> = useRef(null);

  const isVisible = useIsVisibleElement(ref);
  const { weather, isLoading, isError } = useGetWeatherCurrent({ isVisible });

  const getContent = () => {
    if (weather && size) {
      return <WidgetContent data={weather} isLoading={isLoading} size={size} />;
    } else if (isLoading) {
      return <Loader className={styles.loader} />;
    }

    if (isError) {
      return <ErrorMessage />;
    }
  };

  return (
    <div
      ref={ref}
      className={
        `${className ?? ""} ${styles[size]} ${styles.widget}` +
        " montserrat-alternates _normal _regular"
      }
    >
      {getContent()}
    </div>
  );
};

export default Widget;
