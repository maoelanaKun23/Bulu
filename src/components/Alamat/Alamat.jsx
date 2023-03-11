import React from 'react'
import { Card, Grid, Typography } from '@mui/material'
import style from "./Alamat.module.scss"

const Alamat = () => {
    return (
        <div>
            <Card className={style["card"]}>
                <Grid className={style["content"]}>
                    <Typography className={style["head"]}>Rumah</Typography>
                    <Typography className={style["nama"]}>Yusuf Maulana</Typography>
                    <Typography className={style["font"]}>089524376377</Typography>
                    <Typography className={style["font"]}>Jl. Dusun Satu, Lebakwangi, Kabupaten Kuningan, Jawa Barat, 45574 (Sindang Sinor RT.02 RW.01)</Typography>
                    <Grid className={style["content2"]}>
                        <Typography className={style["nama2"]}>Share</Typography>
                        <Typography className={style["nama2"]}>Ubah Alamat</Typography>
                        
                    </Grid>
                </Grid>

            </Card>
        </div>
    )
}

export default Alamat