import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid, Card } from '@mui/material';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchBar from "material-ui-search-bar";
import { NavLink } from 'react-router-dom';
import { LOGIN } from 'constants/routes';

import Modal from '@mui/material/Modal';

import styles from "./Lok.module.scss";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 300,
    bgcolor: '#FFFFFF',
    border: '1px solid #D9D9D9',
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
};

const Lok = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Grid className={styles["icon-this"]}>

                <LocationOnIcon className={styles["icon"]} onClick={handleOpen} />
                <Typography className={styles["to"]}>Dikirim Ke</Typography>
            </Grid>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid className={styles["main"]}>
                        <Typography className={styles["head"]}>
                            Mau Kirim Belanjaan Kemana ?
                        </Typography>
                        <Typography className={styles["font"]}>
                            Biar pengalaman belanjamu lebih baik, pilih alamat dulu.
                        </Typography>
                    </Grid>
                    <Grid className={styles["cardmain"]}>
                        <Card className={styles["card"]}>
                            <Grid className={styles["content"]}>
                                <Typography className={styles["head-card"]}>
                                    Masuk
                                </Typography>
                                <Typography className={styles["font-card"]}>
                                    Masuk dulu biar bisa memilih alamat pengirimanmu
                                </Typography>
                            </Grid>
                            <NavLink className={styles["bt"]}to={`${LOGIN}`}>
                                <Button className={styles["btn-card"]}>
                                    <Typography underlined="none" className={styles["btn-title"]}>Masuk</Typography>
                                    </Button>
                            </NavLink>
                        </Card>
                    </Grid>
                    <br />

                    <hr />
                    <Grid className={styles["main-content"]}>
                        <Typography className={styles["head-font"]}>
                            Mau Pake Cara Lain ?
                        </Typography>
                        <Grid className={style["bar"]}>
                            <SearchBar
                                placeholder='Cari Lokasi disini'

                            // value={this.state.value}
                            // onChange={(newValue) => this.setState({ value: newValue })}
                            // onRequestSearch={() => doSomethingWith(this.state.value)}
                            />
                        </Grid>
                    </Grid>
                    {/* <Typography className={style["font"]}>Mau Pake Cara Lain ?</Typography>
                    <Grid className={style["this-bar"]}>

                        <SearchBar
                            placeholder='Cari Lokasi disini'
                            className={style["bar"]}
                        // value={this.state.value}
                        // onChange={(newValue) => this.setState({ value: newValue })}
                        // onRequestSearch={() => doSomethingWith(this.state.value)}
                        />
                    </Grid> */}
                </Box>
            </Modal>
        </div>
    );
}

export default Lok;