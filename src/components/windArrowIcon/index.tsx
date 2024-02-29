import { FC } from "react";
import { IWindArrowIcon } from "./types";

const WindArrowIcon: FC<IWindArrowIcon> = ({ degree, className }) => {
  return (
    <svg
      style={{
        transform: `rotateZ(${degree}deg)`,
        transition: "transform 0.3s",
      }}
      className={className ?? ""}
      fill="currentColor"
      height="800px"
      width="800px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 330 330"
      xmlSpace="preserve"
    >
      <path
        id="XMLID_21_"
        d="M213.107,41.894l-37.5-37.5c-5.857-5.858-15.355-5.858-21.213,0l-37.5,37.5
	c-4.29,4.29-5.573,10.742-3.252,16.347c2.322,5.605,7.792,9.26,13.858,9.26H150V315c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15
	V67.5h22.5c6.067,0,11.537-3.655,13.858-9.26C218.68,52.635,217.397,46.184,213.107,41.894z"
      />
    </svg>
  );
};

export default WindArrowIcon;
