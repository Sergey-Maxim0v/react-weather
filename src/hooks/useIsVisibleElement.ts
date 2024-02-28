import { onIntersection } from "../utils/onIntersection";
import { RefObject, useEffect, useState } from "react";

export const useIsVisibleElement = (
  containerRef: RefObject<HTMLDivElement>,
) => {
  const [isVisibleComponent, setIsVisibleComponent] = useState(true);

  useEffect(() => {
    containerRef.current &&
      onIntersection({
        element: containerRef.current,
        visibleCallback: () => setIsVisibleComponent(true),
        hiddenCallback: () => setIsVisibleComponent(false),
      });
  }, [containerRef]);

  return isVisibleComponent;
};
