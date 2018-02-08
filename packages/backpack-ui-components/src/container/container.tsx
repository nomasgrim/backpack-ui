import * as cn from "classnames";
import * as React from "react";
import * as styles from "./styles.css";

export interface IContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  style?: object;
}

const Container = ({
  children,
  id,
  className,
  style,
}: IContainerProps) => (
  <div
    id={id}
    className={cn(styles.container, className)}
    style={style}
  >
    {children}
  </div>
);

export default Container;
