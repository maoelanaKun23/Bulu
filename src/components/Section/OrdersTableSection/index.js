import React, { useMemo, useCallback } from "react";
import { Grid } from "@material-ui/core";
import { Status } from "components";
// import {
//   RightArrow,
//   LeftArrow,
//   DoubleRightArrow,
//   DoubleLeftArrow
// } from "assets/icons";
import { NavLink as RouterLink } from "react-router-dom";
import data from "../../../dummy/data-order-table";
import { ORDERS_TO_DETAIL } from "constants/routes";
import { CTable } from "components/CustomTable";
import style from "./OrderTableSection.module.scss";

const statusShipmentCheck = status => {
  switch (status) {
    case "Confirmed":
      return "gray";
    case "Start Unloading":
      return "orange";
    case "Completed":
      return "green";
    default:
      return "white";
  }
};

const OrderTable = () => {
  const columns = useMemo(
    () => [
      {
        accessor: "modalUnit",
        disableFilters: true,
        Header: () => (
          <span className={style["table-head-modalUnit"]}>Modal Unit</span>
        ),
        Cell: ({ row }) => {
          const { modalUnit } = row.original;

          return (
            <span className={style["table-cell-modalUnit"]}>{modalUnit}</span>
          );
        }
      },
      {
        accessor: "serialNumber",
        disableFilters: true,
        Header: () => (
          <span className={style["table-head-serialNumber"]}>
            Serial Number
          </span>
        ),
        Cell: ({ row }) => {
          const { serialNumber } = row.original;

          return (
            <RouterLink
              style={{ textDecoration: "none" }}
              to={`${ORDERS_TO_DETAIL}/${serialNumber}`}
            >
              <span className={style["table-cell-serialNumber"]}>
                {serialNumber}
              </span>
            </RouterLink>
          );
        }
      },
      {
        accessor: "plannedLoading",
        disableFilters: true,
        Header: () => (
          <span className={style["table-head-plannedLoading"]}>
            Planned Loading
          </span>
        ),
        Cell: ({ row }) => {
          const { plannedLoading } = row.original;

          return (
            <>
              <div className={style["table-cell-plannedLoading-day"]}>
                {plannedLoading.date}
              </div>
              <div className={style["table-cell-plannedLoading-clock"]}>
                {plannedLoading.time}
              </div>
            </>
          );
        }
      },
      {
        accessor: "origin",
        disableFilters: true,
        Header: () => (
          <span className={style["table-head-origin"]}>Origin</span>
        ),
        Cell: ({ row }) => {
          const { origin } = row.original;

          return <span className={style["table-cell-origin"]}>{origin}</span>;
        }
      },
      {
        accessor: "destination",
        disableFilters: true,
        Header: () => (
          <span className={style["table-head-destination"]}>Destination</span>
        ),
        Cell: ({ row }) => {
          const { destination } = row.original;

          return (
            <span className={style["table-cell-destination"]}>
              {destination}
            </span>
          );
        }
      },
      {
        accessor: "vendor",
        disableFilters: true,
        Header: () => (
          <span className={style["table-head-vendor"]}>Vendor</span>
        ),
        Cell: ({ row }) => {
          const { vendor } = row.original;

          return <span className={style["table-cell-vendor"]}>{vendor}</span>;
        }
      },
      {
        accessor: "licensePlate",
        disableFilters: true,
        Header: () => (
          <span className={style["table-head-licensePlate"]}>
            License Plate
          </span>
        ),
        Cell: ({ row }) => {
          const { licensePlate } = row.original;

          return (
            <span className={style["table-cell-licensePlate"]}>
              {licensePlate}
            </span>
          );
        }
      },
      {
        accessor: "vessel",
        disableFilters: true,
        Header: () => (
          <span className={style["table-head-vessel"]}>Vessel</span>
        ),
        Cell: ({ row }) => {
          const { vessel } = row.original;

          return <span className={style["table-cell-vessel"]}>{vessel}</span>;
        }
      },
      {
        accessor: "statusShipment",
        disableFilters: true,
        Header: () => (
          <span className={style["table-head-statusShipment"]}>
            Status Shipment
          </span>
        ),
        Cell: ({ row }) => {
          const { statusShipment } = row.original;

          return (
            <div className={style["table-cell-statusShipment"]}>
              <Status.DotStatus
                colorType={statusShipmentCheck(statusShipment)}
                text={statusShipment}
              />
            </div>
          );
        }
      }
    ],
    []
  );

  const headerProps = useCallback(
    () => ({
      className: style["row-header-table"]
    }),
    []
  );
  return (
    <div className={style.section}>
      <Grid item>
        <CTable
          data={data}
          columns={columns}
          getHeaderProps={headerProps}
          pagination={{
            perPageSize: 5,
            pageSizeOptions: [10, 20]
          }}
        />
      </Grid>

      {/* <div className={style.paging}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Grid
              spacing={1}
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item>
                <div>Show</div>
              </Grid>
              <Grid item>
                <Field.DropdownField text="6" />
              </Grid>
              <Grid item>
                <div>Entries</div>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid
              spacing={1}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <img
                  className={style.doubleArrow}
                  src={DoubleLeftArrow}
                  alt="Double Left Icon"
                />
              </Grid>
              <Grid item>
                <img
                  className={style.arrow}
                  src={LeftArrow}
                  alt="Left Arrow Icon"
                />
              </Grid>
              <Grid item>
                <div className={style.field}>1</div>
              </Grid>
              <Grid item>
                <img
                  className={style.arrow}
                  src={RightArrow}
                  alt="Right Arrow Icon"
                />
              </Grid>
              <Grid item>
                <img
                  className={style.doubleArrow}
                  src={DoubleRightArrow}
                  alt="Double Right Arrow Icon"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div> */}
    </div>
  );
};

export default OrderTable;
