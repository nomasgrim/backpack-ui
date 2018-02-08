import React from "react";
import cn from "classnames";
import styles from "./styles.css";

const Divider = (props) => {
  const attributes = Object.assign({}, props);

  return (
    <hr
      {...attributes}
      className={cn(
        styles.divider,
        attributes.className,
      )}
    />
  );
}

export default Divider;
