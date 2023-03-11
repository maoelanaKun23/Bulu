import React from "react";
import style from "./SearchTextField.module.scss";
import { PropTypes } from "prop-types";
import { Grid } from "@material-ui/core";
import classNames from "classnames";
import { Search } from "assets/icons";

const SearchTextField = ({ placeholder, outline = false }) => {
  return (
    <div
      className={classNames(
        style.textField,
        outline ? style.outline : style.filled
      )}
    >
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={11}>
          <input type="text" placeholder={`Search ${placeholder}`} />
        </Grid>
        <Grid item xs={1}>
          <img src={Search} alt="Search" />
        </Grid>
      </Grid>
    </div>
  );
};

SearchTextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  outline: PropTypes.bool
};

export default SearchTextField;
