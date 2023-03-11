import React from 'react'
import { Grid, Typography, Card, Button } from '@material-ui/core'
import GradeIcon from '@mui/icons-material/Grade';
import VerifiedIcon from '@mui/icons-material/Verified';
import CardContent from '@mui/material/CardContent';

import style from "./PhInfinix.module.scss";

const productData = [
    {
        id: 1,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/3/6/c54b9b7b-cce3-45da-a849-0afa52a6426a.jpg",
        name: "Infinix Note 12",
        price: "Rp.1.299.000",
        origin: "Jakarta Timur",
        terjual: "4.6 | Terjual 750+"
    },
    {
        id: 2,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/5/7/aa7abaca-601d-46c1-8aff-bfa6c1685ecb.jpg",
        name: "Infinix Hot 12i",
        price: "Rp.8.000.000",
        origin: "Kab.Cirebon",
        terjual: "4.0 | Terjual 150+"
    },
    {
        id: 3,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/3/6/74602327-2eaa-4f90-a479-5271e88559b4.jpg",
        name: "Infinix Smart 6",
        price: "Rp.4.300.000",
        origin: "Kab.Kuningan",
        terjual: "4.6 | Terjual 250+"
    },
    {
        id: 4,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/2/7ba8c99b-b0b6-4605-80c5-bdd5b1ea0c3a.png",
        name: "Infinix Hot 12 Pro",
        price: "Rp.3.200.000",
        origin: "Kab.Cirebon",
        terjual: "4.3 | Terjual 150+"

    },
    {
        id: 5,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/2/13/cf771539-e4f8-4ee8-90c0-020e47325a33.jpg",
        name: "Infinix Zero 5",
        price: "Rp.2.800.000",
        origin: "Majalaya",
        terjual: "4.5 | Terjual 400+"
    },
    {
        id: 6,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/14/62c22e8e-7700-4c40-819a-cf975a7ebd84.jpg",
        name: "Infinix Hot 20i",
        price: "Rp.5.780.000",
        origin: "Jakarta Barat",
        terjual: "4.3 | Terjual 700+"

    },
    {
        id: 7,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/11/26/6f6ad6a1-625f-4bbc-b270-16e4663c6d58.jpg",
        name: "Infinix Note 12",
        price: "Rp.2.199.000",
        origin: "Jakarta Selatan",
        terjual: "4.4 | Terjual 350+"

    },

]

const productData2 = [
    {
        id: 1,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/9/4c6ef291-d3a3-4bc9-8bbc-4430f8f2090f.jpg",
        name: "Infinix Note 12",
        price: "Rp.7.499.000",
        origin: "Banda Aceh",
        terjual: "4.6 | Terjual 750+"
    },
    {
        id: 2,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/2/16/3212f001-78b3-4f1b-b77b-9264aa5b0907.jpg",
        name: "Infinix Hot 20s",
        price: "Rp.4.890.000",
        origin: "Jakarta Utara",
        terjual: "4.0 | Terjual 150+"
    },
    {
        id: 3,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/2/13/4ace6d5a-46fc-47dd-a003-5c204f4b806f.jpg",
        name: "Infinix Note 11",
        price: "Rp.1.199.000",
        origin: "Majalengka",
        terjual: "4.8 | Terjual 1Rb+"
    },
    {
        id: 4,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/2/26/7331f7e4-998b-436f-85f4-0e0eab51dbde.jpg",
        name: "Infinix Hote 11 Play",
        price: "Rp.21.990.000",
        origin: "Jakarta Pusat",
        terjual: "4.7 | Terjual 150+"

    },
    {
        id: 5,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/1/c29c1a86-c066-48aa-b800-9a876b7caa68.jpg",
        name: "Infinix Note 12",
        price: "Rp.1.980.000",
        origin: "Kab.Cirebon",
        terjual: "4.9 | Terjual 350+"
    },
    {
        id: 6,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/8/23/563cd9f9-49ce-4dfb-a50d-a35a584db16c.jpg",
        name: "Infinix Smart 6 Plus",
        price: "Rp.1.980.000",
        origin: "Surabaya",
        terjual: "4.7 | Terjual 100+"

    },
    {
        id: 7,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/5/31/6c084200-1634-43d8-877d-26559da7f0db.jpg",
        name: "Infinix Hot 11s",
        price: "Rp.1.180.000",
        origin: "Jakarta Timur",
        terjual: "4.6 | Terjual 1Rb+"

    },

]

const productData3 = [
    {
        id: 1,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/11/21/ab8dc565-246e-4f63-8354-46dcef76d970.jpg",
        name: "Infinix Smart 6 Plus ",
        price: "Rp.980.000",
        origin: "Kota Madiun",
        terjual: "4.6 | Terjual 750+"
    },
    {
        id: 2,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/28/8de57102-cd9e-4ff0-bb95-186f7e9fca90.jpg",
        name: "Infinix Note 10 Pro",
        price: "Rp.2.663.000",
        origin: "Bogor Raya",
        terjual: "4.7 | Terjual 10Rb+"
    },
    {
        id: 3,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/1/11/6030ec17-27c3-4ea6-92f5-d11aa97c9dca.jpg",
        name: "Infinix Zero Ultra",
        price: "Rp.2.600.000",
        origin: "Banten",
        terjual: "4.0 | Terjual 150+"
    },
    {
        id: 4,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/19/abe7fb5f-2ba1-4f9e-ba67-8b23a213ed52.jpg",
        name: "Infinix Zero x Pro",
        price: "Rp.2.199.000",
        origin: "Kab.Bekasi",
        terjual: "4.5 | Terjual 1Rb+"

    },
    {
        id: 5,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/3/4054c766-d41c-4447-ba9e-789e2a66f229.jpg",
        name: "Infinix i-tel vision",
        price: "Rp.2.399.000",
        origin: "Indramayu",
        terjual: "4.7 | Terjual 400+"
    },
    {
        id: 6,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/30/47541ace-e9bf-4b2b-8fd9-9653abcf7988.jpg",
        name: "Infinix Hot 20s",
        price: "Rp.2.180.000",
        origin: "Tangerang",
        terjual: "4.6 | Terjual 100+"

    },
    {
        id: 7,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/18/b95f1d9a-7351-42c1-a53e-c873897325be.png",
        name: "Infinix Hot 12i",
        price: "Rp.2.099.000",
        origin: "Depok",
        terjual: "4.8 | Terjual 150+"

    },

]

const PhInfinix = () => {
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

export default PhInfinix;


