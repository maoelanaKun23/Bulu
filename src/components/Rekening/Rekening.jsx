import React from 'react'
import { Card, Grid, Typography } from '@mui/material'
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';
import style from "./Rekening.module.scss"

const Rekening = () => {
    return (
        <div>
            <Card className={style["card"]}>
                <AccountBalanceTwoToneIcon className={style["head"]} />
                <Grid className={style["content"]}>

                    <Typography className={style["font"]}>PT. BANK MULTIARTA SENTOSA</Typography>
                    <Typography className={style["font"]}>1001461048</Typography>
                    <Typography className={style["nama"]}>a.n YUSUF MAULANA</Typography>

                </Grid>
                <Grid className={style["content2"]}>
                    <Typography className={style["nama2"]}>Hapus</Typography>
                    <Typography className={style["font2"]}>Tambah Rekening</Typography>

                </Grid>

            </Card>
        </div>
    )
}

export default Rekening