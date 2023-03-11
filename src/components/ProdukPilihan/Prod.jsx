import React from 'react'
import ProdElek from 'components/ProdElek'
import style from "./Prod.module.scss";
import { Grid, Typography, } from '@material-ui/core';
const Prod = () => {
    return (
        <div>
            <Grid className={style["Prod"]}>
                <Typography className={style["font"]}>Produk Pilihan</Typography>
                
                    <ProdElek />
               
                <Grid className={style["bottom"]}>

                </Grid>
            </Grid>

        </div>
    )
}

export default Prod