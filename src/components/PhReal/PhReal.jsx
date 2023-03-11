import React from 'react'
import { Grid, Typography, Button, Card } from '@material-ui/core'
import GradeIcon from '@mui/icons-material/Grade';
import VerifiedIcon from '@mui/icons-material/Verified';
import CardContent from '@mui/material/CardContent';

import style from "./PhReal.module.scss";

const productData = [
    {
        id: 1,
        imageurl:
            "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/26/ee4dea18-0d5a-451f-8db5-ff6d40a13da5.jpg",
        name: "Realme 9",
        price: "Rp.3.299.000",
        origin: "Jakarta Timur",
        terjual: "4.6 | Terjual 750+"
    },
    {
        id: 2,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/6/762313c3-a4bc-4d97-a79a-5e5a146db4e9.jpg",
        name: "Realme Narzo 50i",
        price: "Rp.2.000.000",
        origin: "Kab.Cirebon",
        terjual: "4.0 | Terjual 150+"
    },
    {
        id: 3,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/3/30/bd9cb25f-3551-4d89-9918-f7d32bcb933c.jpg",
        name: "Realme C35",
        price: "Rp.1.300.000",
        origin: "Kab.Kuningan",
        terjual: "4.6 | Terjual 250+"
    },
    {
        id: 4,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/22/29e4d712-bf3c-4ba6-8108-d6864d337783.jpg",
        name: "Realme C30",
        price: "Rp.1.200.000",
        origin: "Kab.Cirebon",
        terjual: "4.3 | Terjual 150+"

    },
    {
        id: 5,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/2/2/cc178bbe-e905-482b-b732-369016f2a93d.jpg",
        name: "Realme 10 Pro",
        price: "Rp.2.800.000",
        origin: "Majalaya",
        terjual: "4.5 | Terjual 400+"
    },
    {
        id: 6,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/11/16/ddd9f7fb-bda2-48ba-880c-d0acbd702070.jpg",
        name: "Realme C25Y",
        price: "Rp.1.780.000",
        origin: "Jakarta Barat",
        terjual: "4.3 | Terjual 700+"

    },
    {
        id: 7,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/14/6cab23cc-f315-475c-85d8-8d2758770e61.jpg",
        name: "Realme Narzo 50A",
        price: "Rp.2.199.000",
        origin: "Jakarta Selatan",
        terjual: "4.4 | Terjual 350+"

    },

]

const productData2 = [
    {
        id: 1,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/20/d3374368-7128-4297-9888-d12f6eaeed39.jpg",
        name: "Realme 10",
        price: "Rp.2.499.000",
        origin: "Banda Aceh",
        terjual: "4.6 | Terjual 750+"
    },
    {
        id: 2,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/10/27/9f13d14e-1087-42b9-97b2-dff5829852cf.jpg",
        name: "Realme C11",
        price: "Rp.4.890.000",
        origin: "Jakarta Utara",
        terjual: "4.0 | Terjual 150+"
    },
    {
        id: 3,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/11/9/9de64470-328e-4991-9272-cc4436de5ab1.jpg",
        name: "Realme C31",
        price: "Rp.2.199.000",
        origin: "Majalengka",
        terjual: "4.8 | Terjual 1Rb+"
    },
    {
        id: 4,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/20/b9f97060-51fe-4467-97c2-53cd5f22edda.jpg",
        name: "Realme C33",
        price: "Rp.1.990.000",
        origin: "Jakarta Pusat",
        terjual: "4.7 | Terjual 150+"

    },
    {
        id: 5,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/6/5dd68d7f-24d5-476d-8572-b4ff4e45fa78.jpg",
        name: "Realme 8 Pro",
        price: "Rp.1.980.000",
        origin: "Kab.Cirebon",
        terjual: "4.9 | Terjual 350+"
    },
    {
        id: 6,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/6/09e7ff5b-1384-4b99-b3e6-4b002eaac82b.png",
        name: "Realme 9Pro+",
        price: "Rp.1.980.000",
        origin: "Surabaya",
        terjual: "4.7 | Terjual 100+"

    },
    {
        id: 7,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/9/15/e0f5d5e1-de65-42b9-a4df-44867b28fe78.jpg",
        name: "Realme 7Pro",
        price: "Rp.2.180.000",
        origin: "Jakarta Timur",
        terjual: "4.6 | Terjual 1Rb+"

    },

]

const productData3 = [
    {
        id: 1,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/1/4/350f0b4c-4b6d-4e2c-85f0-96b07cb26c31.jpg",
        name: "Realme 10 Pro",
        price: "Rp.3.980.000",
        origin: "Kota Madiun",
        terjual: "4.6 | Terjual 750+"
    },
    {
        id: 2,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/3/2/06d71c4c-02a4-4307-9b7a-74c515a1c573.jpg",
        name: "Realme Narzo 50A",
        price: "Rp.2.663.000",
        origin: "Bogor Raya",
        terjual: "4.7 | Terjual 10Rb+"
    },
    {
        id: 3,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/3/7/deba62b1-83a5-415e-a6a6-b066f9eb445a.png",
        name: "Realme C55",
        price: "Rp.2.600.000",
        origin: "Banten",
        terjual: "4.0 | Terjual 150+"
    },
    {
        id: 4,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/2/10/e26e3afe-72f5-4db9-9b7b-0940bf27add0.jpg",
        name: "Realme C30s",
        price: "Rp.2.199.000",
        origin: "Kab.Bekasi",
        terjual: "4.5 | Terjual 1Rb+"

    },
    {
        id: 5,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/20/2eb1da5a-5d13-41ca-b971-daef62c72f62.jpg",
        name: "Realme GT Master",
        price: "Rp.2.399.000",
        origin: "Indramayu",
        terjual: "4.7 | Terjual 400+"
    },
    {
        id: 6,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/6/3/c29eeb36-1f36-4359-84aa-d9011646ed94.jpg",
        name: "Realme GT Neo",
        price: "Rp.2.180.000",
        origin: "Tangerang",
        terjual: "4.6 | Terjual 100+"

    },
    {
        id: 7,
        imageurl:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/1/c9ef241b-db7f-4bc0-906d-572faf05bbfe.jpg",
        name: "Realme C11",
        price: "Rp.2.099.000",
        origin: "Depok",
        terjual: "4.8 | Terjual 150+"

    },

]

const PhReal = () => {
    return (
        <div>
            <Grid className={style["head"]}></Grid>
            <Grid className={style["head2"]}></Grid>
            <Grid className={style["cntn"]}>
                {productData.map((item, index) => {
                    return (
                        <Grid key={index} className={style["main"]}>

                            <Card
                            hoverable
                            className={style["Card"]}>
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
            <Grid className={style["see"]}>
                <Button className={style["btn-see"]}>
                    <Typography className={style["font-see"]}>Lihat Lebih Banyak ...</Typography>
                </Button>
            </Grid>
        </div>
    )
}

export default PhReal;


