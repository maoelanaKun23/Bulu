import React from 'react'
import { Card, Grid, Typography } from '@mui/material'
import Chat from 'components/Chat'
import style from "./Banner.module.scss"

const Pesanan = () => {
    return (
        <div>
            <Card className={style["card"]}>
                <Grid className={style["head"]} >
                    <img
                        className={style["this-img"]}
                        src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2023/3/2/e2933721-00f0-47e9-ba9f-8601acfdec03.jpg"
                        alt="Pesanan"
                    />
                </Grid>
                <Grid className={style["content"]}>
                    <hr color="#F0F0F0" size="2" />
                    <Typography className={style["font"]}>Celana Chinos Panjang Pria X | L |M</Typography>
                    <Typography className={style["font"]}>Rp.99.000</Typography>
                    <hr color="#F0F0F0" size="2" />
                    <Typography className={style["font"]}>Catatan : Warna Hitam ukuran L , ya.</Typography>
                    <hr color="#F0F0F0" size="2" />
                    <Typography className={style["nama"]}>ID094672MC8Q379</Typography>
                    <hr color="#F0F0F0" size="2" />

                </Grid>
                <Grid className={style["content2"]}>
                    <Typography className={style["nama2"]}>Batalkan Pesanan</Typography>
                    <Grid className={style["chatfont"]}>
                        <Chat className={style["chat"]} />
                        <Typography className={style["font2"]}>Chat</Typography>
                    </Grid>


                </Grid>

            </Card>
        </div>
    )
}

export default Pesanan;