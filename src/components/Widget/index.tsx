import { FC, RefObject, useRef } from "react";
import { useGetWeatherCurrent } from "../../hooks/useGetWeatherCurrent";
import { IWidget, WIDGET_SIZE } from "./types";
import styles from "./styles.module.css";
import { useIsVisibleElement } from "../../hooks/useIsVisibleElement";
import ErrorMessage from "../ErrorMessage";
import Loader from "../Loader";
import WidgetContent from "../WidgetContent";

const Widget: FC<IWidget> = ({ size = WIDGET_SIZE.medium, className }) => {
  const ref: RefObject<HTMLDivElement> = useRef(null);

  const isVisible = useIsVisibleElement(ref);
  const { weather, isLoading, isError } = useGetWeatherCurrent({ isVisible });

  console.log(isLoading, isError, weather);

  const getContent = () => {
    if (weather) {
      return <WidgetContent data={weather} />;
    } else if (isLoading) {
      return <Loader />;
    }

    if (isError) {
      return <ErrorMessage />;
    }
  };

  return (
    <div ref={ref} className={`${className} ${styles[size]} ${styles.widget}`}>
      {getContent()}
    </div>
  );
};

export default Widget;
