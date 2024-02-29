import { IIcon } from "./types";
import { FC } from "react";

import styles from "./styles.module.css";

const Icon: FC<IIcon> = ({ className, link, alt }) => {
  return <img src={link} alt={alt} className={`${className} ${styles.icon}`} />;
};

export default Icon;
