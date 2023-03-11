import React from 'react'
import BasicRating from 'components/Rating'
import { Typography, Grid } from '@material-ui/core'
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import style from "./Ulasan.module.scss"

const dataUlasan = [
    {
        nama: "Erwin Smith",
        komen: "Barang bagus,sesuai gambar ,recomended seller. Terimakasih bakal jadi langganan kedepannya",
        waktu: " 1 Bulan yang lalu"
    },
    {
        nama: "Robert Wicaksono",
        komen: "Paket cepat sampai, kurir ramah. Tapi packing kurang aman, tolong lebih hati-hati lagi",
        waktu: " 3 Bulan yang lalu"
    },
    {
        nama: "Edward Newgate",
        komen: "Agak lama sampai ,tapi barang mantap. Bakal jadi langganan kedepannya terimakasih seller",
        waktu: " 4 Bulan yang lalu"
    },
    {
        nama: "Bian Simanjuntak",
        komen: "Mantap Barangnya , Thank's Seller. kedepannya bakal jadi langganan lagi nih.",
        waktu: " 5 Bulan yang lalu"
    },
    {
        nama: "Vhyns Smith",
        komen: "Mantap Barangnya ,kedepannya bakal jadi langganan lagi nih . Next Order disini lagi",
        waktu: " 5 Bulan yang lalu"
    }

]



const Ulasan = () => {
    return (
        <div className={style["this-head"]}>
            <hr color="#F0F0F0" size="2" />
            <Grid className={style["head"]}>
                <Typography className={style["font-head"]}>Ulasan Pilihan</Typography>

            </Grid>

            {dataUlasan.map((item, index) => {
                return (

                    <Grid key={index} className={style["ini-ulasan"]}>

                        <Grid className={style["bintang"]}>
                            <BasicRating />&nbsp;<Typography className={style["font-bintang"]}>{item.waktu}</Typography>
                        </Grid>
                        <Grid className={style["komen"]}>
                            <Grid className={style["akun"]}>
                                <AccountCircleTwoToneIcon className={style["icon-nama"]} />
                                <Typography className={style["nama"]}>{item.nama}</Typography>
                            </Grid>
                            <Typography className={style["font-komen"]}>{item.komen}</Typography>

                        </Grid>
                        <Grid className={style["icon-like"]}>
                            <ThumbUpOutlinedIcon className={style["this-icon-like"]} />
                            <Typography className={style["membantu"]}>Membantu</Typography>
                            
                            <Typography className={style["balasan"]}>Lihat Balasan</Typography>
                            <ExpandMoreOutlinedIcon className={style["icon-balasan"]} />
                        </Grid>
                        <hr color="#F0F0F0" size="2" />
                    </Grid>
                )
            })}
            <Typography className={style["seeall"]}>Lihat Semua Ulasan</Typography>
        </div>
    )
}

export default Ulasan