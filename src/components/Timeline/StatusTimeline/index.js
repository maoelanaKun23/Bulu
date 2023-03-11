import React from "react";
import "../Timeline.scss";
import style from "./StatusTimeline.module.scss";
import { Grid } from "@material-ui/core";

const DotIcon = status => {
  switch (status) {
    case "outgoing":
      return "li-outgoing";
    case "truck":
      return "li-truck";
    case "vessel":
      return "li-vessel";
    case "orange":
      return "li-orange";
    case "green":
      return "li-green";
    default:
      return "li-white";
  }
};

const StatusTimeline = ({ datas }) => {
  return (
    <div className={style.statusTimeline}>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <ul>
          {datas.map((data, index) => (
            <li className={DotIcon(data.info)} key={index}>
              <Grid item>
                <div className={style.header}>{data.status}</div>
              </Grid>
              <Grid item>
                <div className={style.status}>{data.time}</div>
              </Grid>
            </li>
          ))}
        </ul>
      </Grid>
    </div>
  );
};

export default StatusTimeline;
