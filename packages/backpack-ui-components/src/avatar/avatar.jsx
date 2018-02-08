import React from "react";
import cn from "classnames";
import styles from "./styles.css";

const Avatar = (props) => {
  const attributes = Object.assign({}, props);

  delete attributes.size;

  // const Image = (
  //   <img
  //     {...attributes}
  //     className={cn(styles.avatar, attributes.className)}
  //   />
  // );

  // const AnchorImage = (
  //   <img
  //     style={[
  //       styles.default,
  //       styles.anchorImage,
  //     ]}
  //     src={src}
  //     alt={alt}
  //   />
  // );

  // const Anchor = (
  //   <a
  //     id={id}
  //     className={cn("Avatar", className)}
  //     style={[
  //       styles.default,
  //       styles.anchor,
  //       dimensions,
  //       style,
  //     ]}
  //     href={href}
  //   >
  //     {AnchorImage}
  //   </a>
  // );

  // return href ? Anchor : Image;

  return (
    <img
      {...attributes}
      className={cn(
        styles.avatar,
        styles[`avatar${props.size}`],
        attributes.className,
      )}
    />
  );
}

// Avatar.propTypes = {
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string,
//   size: PropTypes.oneOf([24, 40, 48, 80, 104]),
//   href: PropTypes.string,
//   id: PropTypes.string,
//   className: PropTypes.string,
//   style: propTypes.style,
// };

// Avatar.defaultProps = {
//   alt: "",
//   size: 80,
//   href: null,
//   id: null,
//   className: null,
//   style: null,
// };

export default Avatar;
