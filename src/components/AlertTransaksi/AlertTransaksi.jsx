import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Typography } from '@mui/material';
import styles from "./AlertTransaksi.module.scss";
const AlertTransaksi = () => {
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;

    const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const buttons = (
        <React.Fragment>

            <button onClick={handleClick({
                vertical: 'top',
                horizontal: 'center',
            })} className={styles["beli"]}>

                <Typography className={styles["font-beli"]}>
                    Bayar
                </Typography>
            </button>



        </React.Fragment>
    );

    return (
        <div>
            {buttons}
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message="Silahkan Pilih Pengiriman Terlebih Dahulu !"
                key={vertical + horizontal}
                autoHideDuration={2000}
            />
        </div>
    );
}

export default AlertTransaksi;