import React from "react";
import style from "./OrderDetailsTableSection.module.scss";
import { Grid } from "@material-ui/core";
import { PDF } from "assets/images";

const OrderDetailsTable = () => {
  return (
    <table className={style.section}>
      <tbody>
        <tr>
          <th>Description</th>
          <th>Upload From</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
        <tr>
          <td>
            <Grid
              spacing={1}
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item>
                <div className={style.desc}>POL</div>
              </Grid>
              <Grid item>
                <img src={PDF} alt="PDF Icon" />
              </Grid>
            </Grid>
          </td>
          <td>Mitra App</td>
          <td>Ongoing to Destination</td>
          <td>22 April 2022, 21:17 WIB</td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderDetailsTable;
