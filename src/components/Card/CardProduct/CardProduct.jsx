import * as React from 'react';
import Card from '@mui/material/Card';
import DarkVariantExample from 'components/Carousel';
import Grid from '@mui/material/Grid';
import Discount from 'components/Carousel';
import styles from "./CardProduct.module.scss";

export default function ActionAreaCard() {
    return (
        <Card className={styles["this-cont"]} >
            {/* <Grid className={styles["this-card"]}>

            </Grid> */}
            <Grid className={styles["card-content"]}>
                <Discount />
            </Grid>

        </Card>
    );
}