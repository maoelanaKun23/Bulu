import React from 'react';
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
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
// import { PDF } from "assets/images";
import styles from './FormAdd.module.scss';

const FormEdit = ({ open, onClose, file, onChangeFile }) => {
  return (
    <>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-edit">
        <DialogTitle
          disableTypography
          id="form-edit"
          className={styles['header-form-edit']}
        >
          <span className={styles['title']}>Update Status</span>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Paper component="form" elevation={0}>
            <Box className={styles['row-form-edit']}>
              <div className={styles['wrapper-input']}>
                <InputLabel className={styles['input-label']}>
                  Status
                </InputLabel>
                <TextField fullWidth variant="outlined" />
              </div>
            </Box>

            <Box className={styles['row-form-edit']}>
              <div className={styles['wrapper-input']}>
                <InputLabel className={styles['input-label']}>Waktu</InputLabel>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <TextField
                    placeholder="Tanggal"
                    style={{ width: '50%', marginRight: '10px' }}
                    variant="outlined"
                  />
                  <TextField
                    placeholder="Jam"
                    style={{ width: '50%' }}
                    variant="outlined"
                  />
                </div>
              </div>
            </Box>

            <Box className={styles['row-form-edit']}>
              <div className={styles['wrapper-input']}>
                <InputLabel className={styles['input-label']}>
                  Remarks
                </InputLabel>
                <TextField fullWidth variant="outlined" />
              </div>
            </Box>

            <Box className={styles['row-form-edit']}>
              <div className={styles['wrapper-input']}>
                <InputLabel className={styles['input-label']}>
                  Upload File
                </InputLabel>
                <input
                  data-testId="fileInput"
                  accept="application/pdf"
                  style={{ display: 'none' }}
                  id="input-btn-file"
                  type="file"
                  name="file"
                  onChange={onChangeFile}
                />
                <label
                  htmlFor="input-btn-file"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <div className={styles['btn-action-uploadFile']}>
                    {file?.name || 'Browse...'}
                  </div>
                </label>
              </div>
            </Box>
          </Paper>
        </DialogContent>
        <DialogActions position="center">
          <div className={styles['btn-action-cancel']} onClick={onClose}>
            Cancel
          </div>
          <div className={styles['btn-action-submit']} onClick={onClose}>
            Submit
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FormEdit;
