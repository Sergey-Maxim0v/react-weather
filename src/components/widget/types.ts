export interface IWidget {
  size: WIDGET_SIZE;
  className?: string;
}

export enum WIDGET_SIZE {
  small = "_small",
  medium = "_medium",
  large = "_large",
}
