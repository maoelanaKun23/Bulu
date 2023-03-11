import React from "react";
import style from "./MoreFilterSection.module.scss";
import { Grid } from "@material-ui/core";
import { Field } from "components";

const MoreFilterSection = () => {
  return (
    <div className={style.section}>
      <Grid
        spacing={4}
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {/* Loading Date and Time */}
        <Grid item xs={4}>
          <Grid
            spacing={4}
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
          >
            <Grid item>
              <div className={style.title}>Loading Date and Time</div>
            </Grid>
            <Grid item xs={10}>
              <div className={style.label}>Origin</div>
              <Field.SearchTextField placeholder="Origin" outline />
            </Grid>
            <Grid item xs={10}>
              <div className={style.label}>Destination</div>
              <Field.SearchTextField placeholder="Destination" outline />
            </Grid>
          </Grid>
        </Grid>

        {/* Others */}
        <Grid item xs={8}>
          <Grid
            spacing={4}
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-end"
          >
            {/* Left Section */}
            <Grid item xs={6}>
              <Grid
                spacing={4}
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="stretch"
              >
                <Grid item>
                  <div className={style.title}>Others</div>
                </Grid>
                <Grid item xs={10}>
                  <div className={style.label}>Order Type</div>
                  <Field.SearchTextField placeholder="Order Type" outline />
                </Grid>
                <Grid item xs={10}>
                  <div className={style.label}>Truck Type</div>
                  <Field.SearchTextField placeholder="Truck Type" outline />
                </Grid>
              </Grid>
            </Grid>

            {/* Right Section */}
            <Grid item xs={6}>
              <Grid
                spacing={4}
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="stretch"
              >
                <Grid item xs={10}>
                  <div className={style.label}>Vendor</div>
                  <Field.SearchTextField placeholder="Vendor" outline />
                </Grid>
                <Grid item xs={10}>
                  <div className={style.label}>Route Type</div>
                  <Field.DropdownOutlineField placeholder="Choose Route Type" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MoreFilterSection;
