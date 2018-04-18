import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

function ProviderLogo({ provider, className, style }) {
  const providers = {
    bdc: {
      name: "booking.com",
      image: "vendorLogo-bdc.png",
    },
    hostelworld: {
      name: "Hostelworld",
      image: "vendorLogo-hostelWorld.png",
    },
    opentable: {
      name: "OpenTable",
      image: "vendorLogo-openTable.png",
    },
    gadventures: {
      name: "G Adventures",
      image: "vendorLogo-gAdventures.png",
    },
    viator: {
      name: "Viator",
      image: "vendorLogo-viator.png",
    },
  };

  return (
    <img
      className={cn(className)}
      src={`https://s3.amazonaws.com/static-asset/assets/${providers[provider].image}`}
      style={style}
      alt={providers[provider].name}
    />
  );
}

ProviderLogo.propTypes = {
  provider: PropTypes.oneOf([
    "",
    "bdc",
    "hostelworld",
    "opentable",
    "gadventures",
    "viator",
  ]).isRequired,
  className: PropTypes.string,
  style: PropTypes.objectOf(
    PropTypes.string,
    PropTypes.number,
  ),
};

ProviderLogo.defaultProps = {
  provider: "",
  className: "",
  style: {},
};

export default ProviderLogo;
