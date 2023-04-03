import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { BASE_URL, DASHBOARD } from 'constants/routes';
import Backdropp from 'components/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import AlertTransaksi from 'components/AlertTransaksi';
import styles from "./Transaksi.module.scss"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    height: 298,
    bgcolor: '#FFFFFF',
    border: '1px solid #D9D9D9',
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
};

const Transaksi = ({ age }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const history = useHistory();
    const handleClose = () => {
        setOpen(false)
        history.push(`${BASE_URL}`)
    };


    const [loading, setLoading] = React.useState(false);
    const [query, setQuery] = React.useState('idle');
    const timerRef = React.useRef();

    React.useEffect(
        () => () => {
            clearTimeout(timerRef.current);
        },
        [],
    );

    const handleClickLoading = () => {
        setLoading((prevLoading) => !prevLoading);
    };

    const handleClickQuery = () => {
        setOpen(true)
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        if (query !== 'idle') {
            setQuery('idle');
            return;
        }

        setQuery('progress');
        timerRef.current = window.setTimeout(() => {
            setQuery('success');
        }, 2000);
    };

    return (
        <div>


            {
                age ?

                    <button onClick={handleClickQuery} className={styles["beli"]}>

                        <Typography onClick={handleClickQuery} className={styles["font-beli"]}>
                            Bayar
                        </Typography>
                    </button>

                    :
                    <AlertTransaksi/>

            }





            {query === 'success' ?
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>

                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Box sx={{ height: 40 }}>
                                    <Fade
                                        in={loading}
                                        style={{
                                            transitionDelay: loading ? '800ms' : '0ms',
                                        }}
                                        unmountOnExit
                                    >
                                        <CircularProgress />
                                    </Fade>
                                </Box>

                                <Box sx={{ height: 40 }}>

                                    <div className={styles["scs"]} >
                                        <img className={styles["sukses"]} src='https://handshakestudios.com/wp-content/uploads/2018/04/handshake_icon_highfive_v16.gif' />
                                        <Typography className={styles["font-sukses"]}>Selamat, Transaksi anda berhasil !</Typography>
                                        <NavLink className={styles["NavBack"]} to={`${DASHBOARD}`}>
                                            <Button className={styles["BackButton"]}>
                                                <Typography className={styles["Back"]}>
                                                    Kembali
                                                </Typography>
                                            </Button>
                                        </NavLink>
                                    </div>

                                </Box>


                            </Box>
                        </Box>
                    </Fade>
                </Modal>
                :
                <Backdropp
                    open={open}
                    handleClickQuery={handleClickQuery} />
            }
        </div>
    );
}

export default Transaksi;