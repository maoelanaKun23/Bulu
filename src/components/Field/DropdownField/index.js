import React from "react";
import PropTypes from "prop-types";
import style from "./DropdownField.module.scss";
import { Grid } from "@material-ui/core";
import { DropdownArrowUp, DropdownArrowDown } from "assets/icons";

const DropdownField = ({ text, onClick, isSelected }) => {
  return (
    <div className={style.card} onClick={onClick}>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>{text}</Grid>

        <Grid item>
          <img
            src={isSelected ? DropdownArrowDown : DropdownArrowUp}
            alt="Arrow"
          />
        </Grid>
      </Grid>
    </div>
  );
};

DropdownField.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool
};

export default DropdownField;
