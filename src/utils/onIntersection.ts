export interface IOnIntersection {
  element: HTMLElement;
  visibleCallback: () => void;
  hiddenCallback: () => void;
  threshold?: IntersectionObserverInit["threshold"];
  rootMargin?: IntersectionObserverInit["rootMargin"];
}

/**
 * @see https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API
 */
export const onIntersection = ({
  element,
  visibleCallback,
  hiddenCallback,
  threshold = 0.4,
  rootMargin = "0px",
}: IOnIntersection) => {
  const options = {
    root: null,
    rootMargin: rootMargin,
    threshold: threshold,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        visibleCallback();
      } else {
        hiddenCallback();
      }
    });
  }, options as IntersectionObserverInit);

  observer.observe(element);
};
