import { FC, RefObject, useRef } from "react";
import { IWidget, WIDGET_SIZE } from "./types";
import { useIsVisibleElement } from "../../hooks/useIsVisibleElement";
import ErrorMessage from "../ErrorMessage";
import Loader from "../Loader";
import ContentWeather from "../ContentWeather";

import styles from "./styles.module.css";
import { useGetWeather } from "../../hooks/useGetWeather";

const Widget: FC<IWidget> = ({ size = WIDGET_SIZE.medium, className }) => {
  const ref: RefObject<HTMLDivElement> = useRef(null);

  const isVisible = useIsVisibleElement(ref);
  const { weather, isLoading, error } = useGetWeather({ isVisible });

  const getContent = () => {
    if (weather && size) {
      return (
        <ContentWeather data={weather} isLoading={isLoading} size={size} />
      );
    } else if (isLoading) {
      return <Loader className={styles.loader} />;
    }

    if (error) {
      return <ErrorMessage errorMessage={error} />;
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
