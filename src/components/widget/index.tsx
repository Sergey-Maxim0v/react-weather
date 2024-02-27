import { IWidget, WIDGET_SIZE } from "./types";
import { FC } from "react";
import styles from "./styles.module.css";

const Widget: FC<IWidget> = ({ size = WIDGET_SIZE.medium, className }) => {
  return (
    <div className={`${className} ${styles[size]} ${styles.widget}`}>
      <p>TODO</p>
    </div>
  );
};

export default Widget;
