import * as cn from "classnames";
import * as React from "react";
import * as styles from "./styles.css";

export interface IAdProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  style?: object;
}

const Ad = ({
  children,
  id,
  className,
  style,
}: IAdProps) => (
  <div
    id={id}
    className={cn(styles.ad, className)}
    style={style}
  >
    <div className={styles.adLabel}>
      Advertisement
    </div>

    {children}
  </div>
);

export default Ad;
