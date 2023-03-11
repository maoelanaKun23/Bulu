import React from 'react'
import { Grid, Typography, Button, Card } from '@material-ui/core'
import GradeIcon from '@mui/icons-material/Grade';
import VerifiedIcon from '@mui/icons-material/Verified';
import CardContent from '@mui/material/CardContent';

import style from "./Pencarian.module.scss";

const productData = [
    {
        id: 1,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/4/5749c8e5-030b-4921-9f6c-21c143a53411.jpg",
        name: "Mistery Box",
        price: "Rp.1.299.000",
        origin: "Jakarta Timur",
        terjual: "4.6 | Terjual 750+"
    },
    {
        id: 2,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/3/24/88853417-fcdb-4b69-89c1-6b6c51b85881.jpg",
        name: "Peralatan Pembersih",
        price: "Rp.86.000",
        origin: "Kab.Cirebon",
        terjual: "4.0 | Terjual 150+"
    },
    {
        id: 3,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/8/13/8792b2b4-4049-4484-8789-7cd66a431662.jpg",
        name: "Pengusir Serangga",
        price: "Rp.40.000",
        origin: "Kab.Kuningan",
        terjual: "4.6 | Terjual 250+"
    },
    {
        id: 4,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/3/18/516232ab-c29b-4c32-bc5c-4c5e82e5be49.jpg",
        name: "Timbangan Digital",
        price: "Rp.48.000",
        origin: "Kab.Cirebon",
        terjual: "4.3 | Terjual 150+"

    },
    {
        id: 5,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/10/28/cfc5ae36-9e98-427f-b415-0b0af1e44dfa.jpg",
        name: "Alat asah listrik",
        price: "Rp.73.000",
        origin: "Majalaya",
        terjual: "4.5 | Terjual 400+"
    },
    {
        id: 6,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/product-1/2020/7/9/107439541/107439541_f204a1ec-6601-4c7c-b734-e017191b7545_1080_1080",
        name: "Batrei Alkaline",
        price: "Rp.10.000",
        origin: "Jakarta Barat",
        terjual: "4.3 | Terjual 700+"

    },
    {
        id: 7,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/9/30/42002ae3-faef-48e6-9ebb-2434696d2223.png",
        name: "Tempat Tissue Toilet",
        price: "Rp.57.000",
        origin: "Jakarta Selatan",
        terjual: "4.4 | Terjual 350+"

    },

]

const productData2 = [
    {
        id: 1,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2022/12/24/8de19e1b-79fb-46cc-bd44-db160ba61900.jpg",
        name: "Krisbow Set 42Pcs",
        price: "Rp.499.000",
        origin: "Banda Aceh",
        terjual: "4.6 | Terjual 750+"
    },
    {
        id: 2,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/19/d7fc20e3-b918-4fa5-ac95-372f63367881.jpg",
        name: "Sapu mini rumah",
        price: "Rp.8.000",
        origin: "Jakarta Utara",
        terjual: "4.0 | Terjual 150+"
    },
    {
        id: 3,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2021/9/4/f58df3f0-ee5e-4f28-bd36-0553cef43bef.jpg",
        name: "Kanebo Lap",
        price: "Rp.19.000",
        origin: "Majalengka",
        terjual: "4.8 | Terjual 1Rb+"
    },
    {
        id: 4,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/product-1/2020/7/5/23343362/23343362_2fe7ef61-7e45-4e6a-843e-0b038cd15233_402_402",
        name: "Alat Pel set",
        price: "Rp.290.000",
        origin: "Jakarta Pusat",
        terjual: "4.7 | Terjual 150+"

    },
    {
        id: 5,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/10/8/1acebe03-2c01-4470-af0b-a0cac292fe7f.jpg",
        name: "Cetak Banner",
        price: "Rp.80.000",
        origin: "Kab.Cirebon",
        terjual: "4.9 | Terjual 350+"
    },
    {
        id: 6,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/10/22dbfbde-d1cb-4dab-8e76-3a6d765f1913.jpg",
        name: "Peralatan Berkebun",
        price: "Rp.190.000",
        origin: "Surabaya",
        terjual: "4.7 | Terjual 100+"

    },
    {
        id: 7,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2023/2/26/cc0924f7-341d-4e0c-a42e-63fabe972b88.jpg",
        name: "Rak sekat kloset",
        price: "Rp.96.000",
        origin: "Jakarta Timur",
        terjual: "4.6 | Terjual 1Rb+"

    },

]

const productData3 = [
    {
        id: 1,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/4/9d61dda1-3268-41a9-8048-6dc1f54e3338.jpg",
        name: "HUmidifier",
        price: "Rp.70.000",
        origin: "Kota Madiun",
        terjual: "4.6 | Terjual 750+"
    },
    {
        id: 2,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2020/8/21/1532257d-901a-4d48-9f2a-eee199120e1c.jpg",
        name: "Filter air sumur",
        price: "Rp.2.100.000",
        origin: "Bogor Raya",
        terjual: "4.7 | Terjual 10Rb+"
    },
    {
        id: 3,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/5/a3990609-59b0-4ffc-a6f3-f101f581cf6e.jpg",
        name: "Pompa air listrik",
        price: "Rp.500.000",
        origin: "Banten",
        terjual: "4.0 | Terjual 150+"
    },
    {
        id: 4,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/14/5ce5faa8-acec-43bf-8d68-d3daaee14305.png",
        name: "Samsung A51",
        price: "Rp.2.199.000",
        origin: "Kab.Bekasi",
        terjual: "4.5 | Terjual 1Rb+"

    },
    {
        id: 5,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/3/4/69194fd6-3226-479c-8616-745ea74d1586.jpg",
        name: "Tempredglass antispy",
        price: "Rp.2.000",
        origin: "Indramayu",
        terjual: "4.7 | Terjual 400+"
    },
    {
        id: 6,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2022/9/12/b513fa8e-d3bc-49d1-9aa6-c4ae635f08a2.jpg",
        name: "Troli Bagasi",
        price: "Rp.370.000",
        origin: "Tangerang",
        terjual: "4.6 | Terjual 100+"

    },
    {
        id: 7,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/5/13/69650c0c-6d4f-41ed-9d8b-c93566ef3ea7.png",
        name: "Softcase A30s",
        price: "Rp.29.000",
        origin: "Depok",
        terjual: "4.8 | Terjual 150+"

    },

]

const Pencarian = () => {
    return (
        <div>
            
            <Grid className={style["cntn"]}>
                {productData.map((item, index) => {
                    return (
                        <Grid key={index} className={style["main"]}>

                            <Card className={style["Card"]}>
                                <img className={style["img-content"]} src={item.imageurl} />
                                <CardContent className={style["Card-bottom"]} >
                                    <Typography className={style["Desc"]}>
                                        {item.name}
                                    </Typography>


                                </CardContent>
                                <Grid className={style["Price"]}>
                                    {item.price}
                                </Grid>

                                <Grid className={style["Origin"]}>
                                    <VerifiedIcon className={style["icon-place"]} />&nbsp;{item.origin}
                                </Grid>
                                <Grid className={style["terjual"]}>
                                    <GradeIcon className={style["icon-item"]} />
                                    <Typography className={style["item"]}>
                                        {item.terjual}
                                    </Typography>
                                </Grid>
                            </Card>

                        </Grid>
                    )
                })}

            </Grid>
            <Grid className={style["cntn"]}>
                {productData2.map((item, index) => {
                    return (
                        <Grid key={index} className={style["main"]}>

                            <Card className={style["Card"]}>
                                <img className={style["img-content"]} src={item.imageurl} />
                                <CardContent className={style["Card-bottom"]} >
                                    <Typography className={style["Desc"]}>
                                        {item.name}
                                    </Typography>


                                </CardContent>
                                <Grid className={style["Price"]}>
                                    {item.price}
                                </Grid>

                                <Grid className={style["Origin"]}>
                                    <VerifiedIcon className={style["icon-place"]} />&nbsp;{item.origin}
                                </Grid>
                                <Grid className={style["terjual"]}>
                                    <GradeIcon className={style["icon-item"]} />
                                    <Typography className={style["item"]}>
                                        {item.terjual}
                                    </Typography>
                                </Grid>
                            </Card>


                        </Grid>
                    )
                })}

            </Grid>

            <Grid className={style["cntn"]}>
                {productData3.map((item, index) => {
                    return (
                        <Grid key={index} className={style["main"]}>

                            <Card className={style["Card"]}>
                                <img className={style["img-content"]} src={item.imageurl} />
                                <CardContent className={style["Card-bottom"]} >
                                    <Typography className={style["Desc"]}>
                                        {item.name}
                                    </Typography>


                                </CardContent>
                                <Grid className={style["Price"]}>
                                    {item.price}
                                </Grid>

                                <Grid className={style["Origin"]}>
                                    <VerifiedIcon className={style["icon-place"]} />&nbsp;{item.origin}
                                </Grid>
                                <Grid className={style["terjual"]}>
                                    <GradeIcon className={style["icon-item"]} />
                                    <Typography className={style["item"]}>
                                        {item.terjual}
                                    </Typography>
                                </Grid>
                            </Card>

                        </Grid>
                    )
                })}

            </Grid>
        </div>
    )
}

export default Pencarian;


