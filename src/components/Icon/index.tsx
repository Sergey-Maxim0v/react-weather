import { IIcon } from "./types";
import { FC } from "react";

import styles from "./styles.module.css";

const Icon: FC<IIcon> = ({ className, link, text }) => {
  return (
    <img src={link} alt={text} className={`${className} ${styles.icon}`} />
  );
};

export default Icon;
