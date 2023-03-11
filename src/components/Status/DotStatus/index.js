import React from "react";
import PropTypes from "prop-types";
import style from "./DotStatus.module.scss";
import { Grid } from "@material-ui/core";
import colorList from "constants/colorList";

const DotStatus = ({ colorType, border = false, text }) => {
  var color = colorList[colorType][0];
  var borderColor;

  if (border) {
    borderColor = colorList[colorType][1];
  } else {
    borderColor = colorList[colorType][0];
  }

  return (
    <div className={style["dot-container"]}>
      <Grid item>
        <div
          className={style.dot}
          style={{ backgroundColor: color, borderColor: borderColor }}
        />
      </Grid>

      <Grid>
        <div className={style.doStatus}>{text}</div>
      </Grid>
    </div>
  );
};

DotStatus.propTypes = {
  colorType: PropTypes.string.isRequired,
  border: PropTypes.bool,
  text: PropTypes.string.isRequired
};

export default DotStatus;
