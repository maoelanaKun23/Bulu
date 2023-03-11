import React from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import styles from "./FormAdd.module.scss";

const FormAdd = ({ open, onClose }) => {
  return (
    <>
      <Dialog
        maxWidth="xl"
        open={open}
        onClose={onClose}
        aria-labelledby="form-add"
      >
        <DialogTitle
          disableTypography
          id="form-add"
          className={styles["header-form-add"]}
        >
          <span className={styles["title"]}>Add Staging</span>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Paper component="form" elevation={0}>
            <Box className={styles["row-form-add"]}>
              <Typography className={styles["number-form"]}>1</Typography>
              <div>
                <div className={styles["row-form"]}>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Dari
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Ke
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Moda
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Truck/Vessel Type
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Truck/Vessel ID
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                </div>
                <div className={styles["row-form"]}>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Truck/Vissel PIC
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Truck/Vissel PIC Number
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                </div>
                <div className={styles["row-form"]}>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Plan Loading
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Plan Unloading
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                </div>
              </div>
            </Box>
            <Box className={styles["row-form-add"]}>
              <Typography className={styles["number-form"]}>2</Typography>
              <div>
                <div className={styles["row-form"]}>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Dari
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Ke
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Moda
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Truck/Vessel Type
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Truck/Vessel ID
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                </div>
                <div className={styles["row-form"]}>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Truck/Vissel PIC
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Truck/Vissel PIC Number
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                </div>
                <div className={styles["row-form"]}>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Plan Loading
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Plan Unloading
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                </div>
              </div>
            </Box>
            <Box className={styles["row-form-add"]}>
              <Typography className={styles["number-form"]}>3</Typography>
              <div>
                <div className={styles["row-form"]}>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Dari
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Ke
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Moda
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Truck/Vessel Type
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Truck/Vessel ID
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                </div>
                <div className={styles["row-form"]}>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Truck/Vissel PIC
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Truck/Vissel PIC Number
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                </div>
                <div className={styles["row-form"]}>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Plan Loading
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                  <div className={styles["wrapper-input"]}>
                    <InputLabel className={styles["input-label"]}>
                      Plan Unloading
                    </InputLabel>
                    <TextField variant="outlined" fullWidth />
                  </div>
                </div>
              </div>
            </Box>
          </Paper>
        </DialogContent>
        <DialogActions position="center">
          <div className={styles["btn-action-cancel"]} onClick={onClose}>
            Cancel
          </div>
          <div className={styles["btn-action-submit"]} onClick={onClose}>
            Submit
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FormAdd;
