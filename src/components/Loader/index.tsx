import { FC } from "react";
import { ILoader } from "./types";
import styles from "./styles.module.css";

const Loader: FC<ILoader> = ({ className }) => {
  return <div className={`${className} ${styles.loader}`}>TODO: Loader</div>;
};

export default Loader;
