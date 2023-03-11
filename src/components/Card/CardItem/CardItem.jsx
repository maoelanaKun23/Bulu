import React from 'react'
import Card from '@mui/material/Card';
import Countdown from 'react-countdown';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PlaceIcon from '@mui/icons-material/Place';
import ActionAreaCard from '../CardProduct';
import Discount from 'components/Carousel';
import SearchBar from "material-ui-search-bar";
import styles from "./CardItem.module.scss";
import { Button } from '@material-ui/core';

const CardItem = () => {
    return (
        <Grid>
            
            <hr color="#F0F0F0" size="4" />
            <br />

            {/* <SearchBar
            // value={this.state.value}
            // onChange={(newValue) => this.setState({ value: newValue })}
            // onRequestSearch={() => doSomethingWith(this.state.value)}
            />
            <br /> */}
            
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