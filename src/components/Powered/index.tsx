import { FC } from "react";
import { IPowered } from "./types";
import styles from "./styles.module.css";

const Powered: FC<IPowered> = ({ className }) => {
  return (
    <p className={className}>
      Powered by
      <a
        className={styles.link}
        href="https://www.weatherapi.com/"
        title="Free Weather API"
      >
        WeatherAPI.com
      </a>
      and
      <a
        className={styles.link}
        href="https://ipapi.co/"
        title="Free Weather API"
      >
        ipapi.co
      </a>
    </p>
  );
};

export default Powered;
