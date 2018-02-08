import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./styles.css";

function getAriaAttributes(label) {
  const aria = {};

  if (label) {
    aria["aria-label"] = label;
  } else {
    aria["aria-hidden"] = "true";
  }

  return aria;
}

const Icon = (props) => {
  const attributes = Object.assign({}, props);
  const aria = getAriaAttributes(props.label);

  delete attributes.fill;
  delete attributes.height;
  delete attributes.label;
  delete attributes.width;

  return (
    <svg
      {...attributes}
      {...aria}
      className={cn(
        styles.icon,
        props.className,
      )}
      style={{
        fill: props.fill,
        height: props.height || props.width,
        width: props.width || props.height,
      }}
      viewBox={props.viewBox}
    >
      {props.children}
    </svg>
  );
}

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fill: PropTypes.string,
  height: PropTypes.string,
  label: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.string,
};

Icon.defaultProps = {
  viewBox: "0 0 32 32",
};

export default Icon;
