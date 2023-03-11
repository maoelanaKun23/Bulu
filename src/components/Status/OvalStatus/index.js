import React from "react";
import style from "./OvalStatus.module.scss"
import { PropTypes } from "prop-types";

const OvalIcon = status => {
  switch (status) {
    case "Pickup":
      return "#49B2F2";
    case "Dropoff":
      return "#4FD955";
    default:
      return "white";
  }
};

const OvalStatus = ({ status }) => {
  return (
    <div className={style.ovalStatus} style={{ backgroundColor: OvalIcon(status) }}>
      {status}
    </div>
  );
};

OvalStatus.propTypes = {
  status: PropTypes.string.isRequired
}

export default OvalStatus;
