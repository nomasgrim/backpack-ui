import React from "react";
import cn from "classnames";
import styles from "./styles.css";
import { colors } from "../../../../backpack-ui-styles";

const Button = (props) => {
  const attributes = Object.assign({}, props);

  delete attributes.small;
  delete attributes.secondary;
  delete attributes.overlay;

  const Element = attributes.href ? "a" : "button";
  const role = Element === "a" ? "button" : null;

  return (
    <Element
      {...attributes}
      role={role}
      className={cn(
        styles.primary,
        props.secondary && styles.secondary,
        props.overlay && styles.overlay,
        props.small && styles.small,
        attributes.className,
      )}
    >
      {attributes.children}
    </Element>
  );
}

export default Button;
