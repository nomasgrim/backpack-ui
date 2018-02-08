import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./styles.css";
import { colors } from "../../../../backpack-ui-styles";

const ShareButton = (props) => {
  const attributes = Object.assign({}, props);

  delete attributes.network;

  const href = {
    email: "mailto:?subject=&body=",
    facebook: "https://www.facebook.com/sharer/sharer.php?u=",
    facebookMessenger: "fb-messenger://share/?link=",
    reddit: "http://www.reddit.com/submit/?url=",
    twitter: "https://twitter.com/intent/tweet?text=&url=&via=",
  };

  return (
    <a
      {...attributes}
      role="button"
      href={href[props.network]}
      className={cn(
        styles.default,
        styles[props.network],
        attributes.className,
      )}
    >
      {attributes.children}
    </a>
  );
}

ShareButton.propTypes = {
  network: PropTypes.oneOf([
    "email",
    "facebook",
    "facebookMessenger",
    "pinterest",
    "reddit",
    "twitter",
    "whatsapp",
  ]).isRequired,
};

export default ShareButton;
