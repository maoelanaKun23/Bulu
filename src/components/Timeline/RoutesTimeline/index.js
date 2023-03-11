import React, { useState } from "react";
import style from "./RoutesTimeline.module.scss";
import { Close } from "@material-ui/icons";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputLabel,
  Paper,
  TextField
} from "@material-ui/core";
// import { Status } from "components";

const DotIcon = status => {
  switch (status) {
    case "Pickup":
      return "li-blue";
    case "Dropoff":
      return "li-green";
    default:
      return "li-white";
  }
};

const RoutesTimeline = ({ datas }) => {
  const [showModal, setShowModal] = useState(false);

  const renderModal = () => {
    const data_label = [
      "Vendor",
      "License Plate",
      "Driver",
      "Phone Driver",
      "Latitude",
      "Longitude"
    ];

    return (
      <Dialog open={showModal} onClose={() => setShowModal(false)} fullWidth>
        <DialogTitle disableTypography className={style["header-modal"]}>
          Edit Routes
          <IconButton onClick={() => setShowModal(false)}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Paper component="form" elevation={0}>
            {data_label.map((item, index) => {
              return (
                <Box key={index} className={style["text-input"]}>
                  <InputLabel className={style["label"]}>{item}</InputLabel>
                  <TextField fullWidth variant="outlined" />
                </Box>
              );
            })}
          </Paper>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className={style.routesTimeline}>
      <ul>
        {datas &&
          datas.map((data, index) => (
            <li className={DotIcon(data.status)} key={index}>
              <Grid
                spacing={1}
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                {/* Company Name */}
                <Grid item>
                  <Grid
                    container
                    spacing={2}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Grid item>
                      <div className={style.companyName}>{data.nama}</div>
                    </Grid>
                    <Grid item>
                      <Button
                        classes={{ root: style.btnEdit }}
                        onClick={() => setShowModal(true)}
                      >
                        Edit
                      </Button>
                    </Grid>
                    {renderModal()}
                  </Grid>
                </Grid>

                {/* Address */}
                <Grid item>
                  <div className={style.address}>{data.alamat}</div>
                </Grid>

                {/* Datetime 
                dihilangkan terlebih dahulu karena tanggal dari SAP
                */}
              </Grid>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RoutesTimeline;
