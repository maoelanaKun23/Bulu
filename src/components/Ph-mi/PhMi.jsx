import React from 'react'
import { Grid, Typography, Button, Card } from '@material-ui/core'
import GradeIcon from '@mui/icons-material/Grade';
import VerifiedIcon from '@mui/icons-material/Verified';
import CardContent from '@mui/material/CardContent';

import style from "./PhMi.module.scss";

const productData = [
    {
        id: 1,
        imageurl:
            "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/28/88388d08-8264-4498-9678-029b9ebb9b34.png",
        name: "Redmi A1",
        price: "Rp.1.299.000",
        origin: "Jakarta Timur",
        terjual: "4.6 | Terjual 750+"
    },
    {
        id: 2,
        imageurl:
            "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/28/224757ba-5d40-4080-aaf9-de9005f97296.jpg",
        name: "Xiaomi 12 Lite",
        price: "Rp.4.000.000",
        origin: "Kab.Cirebon",
        terjual: "4.0 | Terjual 150+"
    },
    {
        id: 3,
        imageurl:
            "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/11/30/385b4650-8577-4980-9873-215c5374921c.jpg",
        name: "Xiaomi 12T",
        price: "Rp.4.300.000",
        origin: "Kab.Kuningan",
        terjual: "4.6 | Terjual 250+"
    },
    {
        id: 4,
        imageurl:
            "    https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/1/17/bec25350-5ca7-4af9-8c2d-a86fc7fda7b9.jpg ",
        name: "Poco M5s",
        price: "Rp.3.200.000",
        origin: "Kab.Cirebon",
        terjual: "4.3 | Terjual 150+"

    },
    {
        id: 5,
        imageurl:
            "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/8/95f9c4a4-7915-44f6-a737-0d0499332863.jpg",
        name: "Mi Mix",
        price: "Rp.2.800.000",
        origin: "Majalaya",
        terjual: "4.5 | Terjual 400+"
    },
    {
        id: 6,
        imageurl:
            "        https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/2/19/a75e256a-d37e-48d9-8fed-1a8115902f28.png ",
        name: "Redmi 10",
        price: "Rp.1.780.000",
        origin: "Jakarta Barat",
        terjual: "4.3 | Terjual 700+"

    },
    {
        id: 7,
        imageurl:
            "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/1/17/55b1e74c-e9dc-492c-90a2-7149d05f6009.jpg",
        name: "Redmi 10C",
        price: "Rp.2.199.000",
        origin: "Jakarta Selatan",
        terjual: "4.4 | Terjual 350+"

    },

]

const productData2 = [
    {
        id: 1,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/11/1/714f93fd-0d42-49a1-80d7-4ed047ade596.jpg",
        name: "Poco F4",
        price: "Rp.7.499.000",
        origin: "Banda Aceh",
        terjual: "4.6 | Terjual 750+"
    },
    {
        id: 2,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/6/28/f26f77c2-1cfc-4935-8441-be41e9edb0a8.jpg",
        name: "Poco M4 Pro",
        price: "Rp.4.890.000",
        origin: "Jakarta Utara",
        terjual: "4.0 | Terjual 150+"
    },
    {
        id: 3,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/12/eecb96c9-bd7b-4a4a-829b-cfe078d97bc5.jpg",
        name: "Redmi 10A",
        price: "Rp.1.199.000",
        origin: "Majalengka",
        terjual: "4.8 | Terjual 1Rb+"
    },
    {
        id: 4,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/8/18/1ce3c3bf-732a-439e-b3a5-354934828b54.jpg",
        name: "Redmi 6",
        price: "Rp.1.990.000",
        origin: "Jakarta Pusat",
        terjual: "4.7 | Terjual 150+"

    },
    {
        id: 5,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/11/1ae9ea4d-ea1c-4641-9451-4d0b78b9f0a7.jpg",
        name: "Poco C40",
        price: "Rp.1.980.000",
        origin: "Kab.Cirebon",
        terjual: "4.9 | Terjual 350+"
    },
    {
        id: 6,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/8/21/68e41426-645e-44c7-983a-a04522e73056.png",
        name: "Xiaomi Note 8",
        price: "Rp.1.980.000",
        origin: "Surabaya",
        terjual: "4.7 | Terjual 100+"

    },
    {
        id: 7,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/11/7/72b1c731-adfe-4b82-9a96-ef743bbe546d.jpg",
        name: "Poco M3 Pro",
        price: "Rp.2.180.000",
        origin: "Jakarta Timur",
        terjual: "4.6 | Terjual 1Rb+"

    },

]

const productData3 = [
    {
        id: 1,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/3/17/b8573d8f-2ffe-43da-b1da-5494ae3c5635.jpg",
        name: "Redmi NOte 11",
        price: "Rp.2.980.000",
        origin: "Kota Madiun",
        terjual: "4.6 | Terjual 750+"
    },
    {
        id: 2,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/31/7d021b98-0cb3-4bcd-8a51-c88fb0bebd4a.jpg",
        name: "Redmi 5A",
        price: "Rp.663.000",
        origin: "Bogor Raya",
        terjual: "4.7 | Terjual 10Rb+"
    },
    {
        id: 3,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/1/4/cab10e2f-8c5d-4387-990a-5a0d13591529.jpg",
        name: "Redmi Pad",
        price: "Rp.2.600.000",
        origin: "Banten",
        terjual: "4.0 | Terjual 150+"
    },
    {
        id: 4,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/5/10/3523a4f5-d181-4333-9ee3-2f326a9b6182.jpg",
        name: "Redmi 4A 2/16",
        price: "Rp.799.000",
        origin: "Kab.Bekasi",
        terjual: "4.5 | Terjual 1Rb+"

    },
    {
        id: 5,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/11/8/7b7d84e2-6fe6-449e-b8e5-fc36a63208c1.png",
        name: "Poco M5",
        price: "Rp.2.399.000",
        origin: "Indramayu",
        terjual: "4.7 | Terjual 400+"
    },
    {
        id: 6,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/13/91cac4d4-595e-4851-9705-2cc8054d37c5.jpg",
        name: "Note 11 Pro",
        price: "Rp.3.180.000",
        origin: "Tangerang",
        terjual: "4.6 | Terjual 100+"

    },
    {
        id: 7,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/30/c8380587-acda-46a0-8fa8-e3b2bc1014d3.jpg",
        name: "Redmi 9C",
        price: "Rp.2.099.000",
        origin: "Depok",
        terjual: "4.8 | Terjual 150+"

    },

]

const PhMi = () => {
    return (
        <div>
            <Grid className={style["head"]}></Grid>
            <Grid className={style["head2"]}></Grid>
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
            <Grid className={style["see"]}>
                <Button className={style["btn-see"]}>
                    <Typography className={style["font-see"]}>Lihat Lebih Banyak ...</Typography>
                </Button>
            </Grid>
        </div>
    )
}

export default PhMi;


