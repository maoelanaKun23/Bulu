import React from "react";
import style from "./CheckboxStatus.module.scss"
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

const CheckboxStatus = ({ name, value, label }) => {
  return (
    <div className={style.checkbox}>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item>
          <input type="checkbox" name={name} value={value} />
        </Grid>
        <Grid item>{label}</Grid>
      </Grid>
    </div>
  );
};

CheckboxStatus.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired
};

export default CheckboxStatus;
