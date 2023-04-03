import React from 'react'
import Card from '@mui/material/Card';
import Countdown from 'react-countdown';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ActionAreaCard from '../CardProduct';
import styles from "./CardItem.module.scss";
import { Button } from '@material-ui/core';

const CardItem = () => {
    return (
        <Grid>
            <hr color="#F0F0F0" size="4" />
            <br />
            <Grid className={styles["head"]}>
                <Grid className={styles["font"]}>
                    <Typography className={styles["font-style"]}>Traktiran Pengguna Baru</Typography>
                </Grid>
                <Typography className={styles["expired"]}>Berakhir dalam</Typography>
                <Countdown date={Date.now() + 10000000} className={styles["Countdown"]} />
                <Button className={styles["see"]}>
                    <Typography className={styles["see-all"]}>Lihat semua...</Typography>
                </Button>
            </Grid>
            <Card className={styles["card-content"]}>
                <Grid className={styles["this-card"]}>
                    <ActionAreaCard className={styles["this"]}/>
                </Grid>
            </Card>
            <hr color="#F0F0F0" size="4" />
        </Grid>
    )
}

export default CardItem