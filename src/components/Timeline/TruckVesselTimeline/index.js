import React from "react";
import style from "./TruckVesselTimeline.module.scss"
import { Grid } from "@material-ui/core";

const DotIcon = index => {
  console.log(index)
  switch (index) {
    case 0:
      return "li-green-dark";
    default:
      return "li-gray";
  }
};

const TruckVesselTimeline = ({ datas }) => {
  return (
    <div className={style.truckVesselTimeline}>
      <ul>
        {datas.map((data, index) => (
          <li className={DotIcon(index)}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Grid item xs={9}>
                <Grid
                  container
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item><div className={style.boldText}>{data.status}</div></Grid>

                  <Grid item><div className={style.boldText}>by {data.updater}</div></Grid>

                  <Grid item><div className={style.grayText}>{data.length} Total</div></Grid>
                </Grid>
              </Grid>

              <Grid item xs={3}>
                <div className={style.grayText}>{data.time}</div>
              </Grid>
            </Grid>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TruckVesselTimeline;
