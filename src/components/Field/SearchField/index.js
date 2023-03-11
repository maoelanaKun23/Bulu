import React from "react";
import { PropTypes } from "prop-types";
import style from "./SearchField.module.scss";
import { Grid } from "@material-ui/core";
import { Search } from "assets/icons";

const SearchField = ({ placeholder }) => {
  const length = placeholder.length - 2;

  return (
    <div className={style.card}>
      <Grid
        spacing={1}
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item>
          <img src={Search} alt="Search" />
        </Grid>

        <Grid item>
          <input type="text" placeholder={placeholder} size={length} />
        </Grid>
      </Grid>
    </div>
  );
};

SearchField.propTypes = {
  placeholder: PropTypes.string
};

export default SearchField;
