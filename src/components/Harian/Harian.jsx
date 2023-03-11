import React from 'react'
import { Grid, Typography, Button, Card } from '@material-ui/core'
import GradeIcon from '@mui/icons-material/Grade';
import VerifiedIcon from '@mui/icons-material/Verified';
import CardContent from '@mui/material/CardContent';

import style from "./Harian.module.scss";

const productData = [
    {
        id: 1,
        imageurl:"https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/2/10/f9081189-16ab-448f-b8db-d04819ff97df.png",
        name: "Minyak goreng 2Lt",
        price: "Rp.34.000",
        origin: "Jakarta Timur",
        terjual: "4.6 | Terjual 750+"
    },
    {
        id: 2,
        imageurl:"https://images.tokopedia.net/img/cache/250-square/VqbcmM/2021/8/16/9d2c15a1-b7e1-498b-aaaf-f9ec002af959.jpg",
        name: "Sunlight 250 ML",
        price: "Rp.10.000",
        origin: "Kab.Cirebon",
        terjual: "4.0 | Terjual 150+"
    },
    {
        id: 3,
        imageurl:"https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/8/18/46da38f2-979a-4e16-94d8-b0229de64f8b.jpg",
        name: "Olive Oil 500ML",
        price: "Rp.90.000",
        origin: "Kab.Kuningan",
        terjual: "4.6 | Terjual 250+"
    },
    {
        id: 4,
        imageurl:"https://images.tokopedia.net/img/cache/700/VqbcmM/2022/12/13/d95eeaab-1454-4a04-b468-17c02544bf6c.jpg.webp?ect=4g",
        name: "Beras Fukumi 10Kg",
        price: "Rp.200.000",
        origin: "Kab.Cirebon",
        terjual: "4.3 | Terjual 150+"

    },
    {
        id: 5,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/11/30/08b490ab-0a9f-43f5-bcc7-ec1aff87325c.jpg.webp?ect=4g",
        name: "Daging Yoshinoya",
        price: "Rp.120.000",
        origin: "Majalaya",
        terjual: "4.5 | Terjual 400+"
    },
    {
        id: 6,
        imageurl:"https://images.tokopedia.net/img/cache/700/product-1/2020/1/8/562980006/562980006_57c48718-6f4a-4431-b91d-5b5aa9abc0d9_1080_1080.jpg.webp?ect=4g",
        name: "Wagyu Mess 1Kg",
        price: "Rp.180.000",
        origin: "Jakarta Barat",
        terjual: "4.3 | Terjual 700+"

    },
    {
        id: 7,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/1/2/b9dd328f-47cb-4111-b406-7034e3f4bcf1.jpg.webp?ect=4g",
        name: "Glucose syrup 75ML",
        price: "Rp.99.000",
        origin: "Jakarta Selatan",
        terjual: "4.4 | Terjual 350+"

    },

]

const productData2 = [
    {
        id: 1,
        imageurl: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/9/3/a295038e-c745-412f-8913-22800b5a5783.jpg",
        name: "Samsung S22 5G",
        price: "Rp.7.499.000",
        origin: "Banda Aceh",
        terjual: "4.6 | Terjual 750+"
    },
    {
        id: 2,
        imageurl: "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/6/18/8d57d75f-3a0e-4a83-9057-543a034b8ece.jpg",
        name: "Samsung A73 5G",
        price: "Rp.4.890.000",
        origin: "Jakarta Utara",
        terjual: "4.0 | Terjual 150+"
    },
    {
        id: 3,
        imageurl: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/6/11/a5c17934-4555-4597-8551-38d64d70baae.jpg",
        name: "Samsung S21 FE",
        price: "Rp.8.199.000",
        origin: "Majalengka",
        terjual: "4.8 | Terjual 1Rb+"
    },
    {
        id: 4,
        imageurl: "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/2/7/12177cdd-bd95-4b63-8610-105a06e0fceb.jpg",
        name: "Samsung S22 Ultra 5G",
        price: "Rp.21.990.000",
        origin: "Jakarta Pusat",
        terjual: "4.7 | Terjual 150+"

    },
    {
        id: 5,
        imageurl: "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/10/19/357b6e3b-b296-45dc-8e82-ad68a02be07b.jpg",
        name: "Samsung A04",
        price: "Rp.1.980.000",
        origin: "Kab.Cirebon",
        terjual: "4.9 | Terjual 350+"
    },
    {
        id: 6,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/26/ad7c1d63-e020-49f1-9dcb-2caed421a96e.jpg",
        name: "Samsung A04s",
        price: "Rp.1.980.000",
        origin: "Surabaya",
        terjual: "4.7 | Terjual 100+"

    },
    {
        id: 7,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/8/11/60567092-33e4-4fcf-b9a3-92a9a0aeff89.jpg",
        name: "Samsung Z-fold 4 5G",
        price: "Rp.21.180.000",
        origin: "Jakarta Timur",
        terjual: "4.6 | Terjual 1Rb+"

    },

]

const productData3 = [
    {
        id: 1,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/6/22/a4770915-5c5b-41c2-a585-0f80f17190ee.jpg",
        name: "Samsung A03 Core",
        price: "Rp.980.000",
        origin: "Kota Madiun",
        terjual: "4.6 | Terjual 750+"
    },
    {
        id: 2,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/7/2dcb4bca-1ce6-4c5b-9a34-97efac070767.jpg",
        name: "Samsung A71",
        price: "Rp.2.663.000",
        origin: "Bogor Raya",
        terjual: "4.7 | Terjual 10Rb+"
    },
    {
        id: 3,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/product-1/2020/6/21/3967478/3967478_e7d0a863-1aa9-4770-bda5-b83f4ee48c1b_700_700.jpg",
        name: "Samsung M21",
        price: "Rp.2.600.000",
        origin: "Banten",
        terjual: "4.0 | Terjual 150+"
    },
    {
        id: 4,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/14/5ce5faa8-acec-43bf-8d68-d3daaee14305.png",
        name: "Samsung A51",
        price: "Rp.2.199.000",
        origin: "Kab.Bekasi",
        terjual: "4.5 | Terjual 1Rb+"

    },
    {
        id: 5,
        imageurl: "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/3/23/6f5c4d90-da03-44fa-a7db-2bd89e7abc2b.jpg.webp?ect=4g",
        name: "Samsung A50s",
        price: "Rp.2.399.000",
        origin: "Indramayu",
        terjual: "4.7 | Terjual 400+"
    },
    {
        id: 6,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/product-1/2020/6/29/6049900/6049900_1460eb34-821d-447d-8c2b-ceacf0557ba7_1080_1080.jpg",
        name: "Samsung A21s",
        price: "Rp.2.180.000",
        origin: "Tangerang",
        terjual: "4.6 | Terjual 100+"

    },
    {
        id: 7,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/6/10/5ef1f26f-8af2-4957-9290-20efaf23377b.jpg",
        name: "Samsung A30s",
        price: "Rp.2.099.000",
        origin: "Depok",
        terjual: "4.8 | Terjual 150+"

    },

]

const Harian = () => {
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
            {/* <Grid className={style["cntn"]}>
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

            </Grid> */}

            {/* <Grid className={style["cntn"]}>
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

            </Grid> */}
        </div>
    )
}

export default Harian;


