import React, { useEffect, useState } from 'react'
import { Grid, Typography, Button, Card } from '@material-ui/core'
import GradeIcon from '@mui/icons-material/Grade';
import VerifiedIcon from '@mui/icons-material/Verified';
import CardContent from '@mui/material/CardContent';
import { useHistory } from 'react-router';
import API from 'api/productData';
import { FormatRupiah } from "@arismun/format-rupiah";

import style from "./Harian.module.scss";
import { TO_DETAIL_1 } from 'constants/routes';

// const productData = [
//     {
//         id: 1,
//         imageurl: "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/2/10/f9081189-16ab-448f-b8db-d04819ff97df.png",
//         name: "Minyak goreng 2Lt Bimoli,Sunco,Tropical",
//         price: "Rp.34.000",
//         origin: "Jakarta Timur",
//         terjual: "4.6 | Terjual 750+",
//         kondisi: "Baru",
//         berat: "1Kg",
//         kategori: "Kebutuhan Pokok",
//         eta: "Kebutuhan Pokok",
//         tk: "Salju Terbakar",
//         rt: "4.6",
//         stok: 2000,
//         ds: <p>
//             This item has no description because the seller did not provide a description for this product.

//         </p>,
//     },
//     {
//         id: 2,
//         imageurl: "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2021/8/16/9d2c15a1-b7e1-498b-aaaf-f9ec002af959.jpg",
//         name: "Sunlight 210 ML Pouch",
//         price: "Rp.10.000",
//         origin: "Kab.Cirebon",
//         terjual: "4.0 | Terjual 150+",
//         kondisi: "Baru",
//         berat: "1Kg",
//         kategori: "Kebutuhan Pokok",
//         eta: "Kebutuhan Pokok",
//         tk: "Isabella",
//         rt: "4.0",
//         stok: 900,
//         ds: <p>
//             This item has no description because the seller did not provide a description for this product.

//         </p>,
//     },
//     {
//         id: 3,
//         imageurl: "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/8/18/46da38f2-979a-4e16-94d8-b0229de64f8b.jpg",
//         name: "Olive Oil 500ML Fresh dari Alam",
//         price: "Rp.90.000",
//         origin: "Kab.Kuningan",
//         terjual: "4.6 | Terjual 250+",
//         kondisi: "Baru",
//         berat: "1Kg",
//         kategori: "Kebutuhan Pokok",
//         eta: "Kebutuhan Pokok",
//         tk: "Daun hijau",
//         rt: "4.6",
//         stok: 100,
//         ds: <p>
//             This item has no description because the seller did not provide a description for this product.

//         </p>,
//     },
//     {
//         id: 4,
//         imageurl: "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/12/13/d95eeaab-1454-4a04-b468-17c02544bf6c.jpg.webp?ect=4g",
//         name: "Beras Fukumi 10Kg | Beras Jepang Pilihan dan Berkualitas",
//         price: "Rp.200.000",
//         origin: "Kab.Cirebon",
//         terjual: "4.3 | Terjual 150+",
//         kondisi: "Baru",
//         berat: "10Kg",
//         kategori: "Kebutuhan Pokok",
//         eta: "Kebutuhan Pokok",
//         tk: "Salju Terbakar",
//         rt: "4.3",
//         stok: 50,
//         ds: <p>
//             This item has no description because the seller did not provide a description for this product.

//         </p>,

//     },
//     {
//         id: 5,
//         imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/11/30/08b490ab-0a9f-43f5-bcc7-ec1aff87325c.jpg.webp?ect=4g",
//         name: "Daging Yoshinoya | Daging Berkualitas Pilihan",
//         price: "Rp.120.000",
//         origin: "Majalaya",
//         terjual: "4.5 | Terjual 400+",
//         kondisi: "Baru",
//         berat: "1Kg",
//         kategori: "Kebutuhan Pokok",
//         eta: "Kebutuhan Pokok",
//         tk: "Fresh Beef",
//         rt: "4.5",
//         stok: 350,
//         ds: <p>
//             This item has no description because the seller did not provide a description for this product.

//         </p>,
//     },
//     {
//         id: 6,
//         imageurl: "https://images.tokopedia.net/img/cache/700/product-1/2020/1/8/562980006/562980006_57c48718-6f4a-4431-b91d-5b5aa9abc0d9_1080_1080.jpg.webp?ect=4g",
//         name: "Wagyu Mess 1Kg | Daging sapi pilihan Berkualitas",
//         price: "Rp.180.000",
//         origin: "Jakarta Barat",
//         terjual: "4.3 | Terjual 700+",
//         kondisi: "Baru",
//         berat: "1Kg",
//         kategori: "Kebutuhan Pokok",
//         eta: "Kebutuhan Pokok",
//         tk: "Fresh Beef",
//         rt: "4.3",
//         stok: 350,
//         ds: <p>
//             This item has no description because the seller did not provide a description for this product.

//         </p>,

//     },
//     {
//         id: 7,
//         imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/1/2/b9dd328f-47cb-4111-b406-7034e3f4bcf1.jpg.webp?ect=4g",
//         name: "Glucose syrup 75ML- Dari bahan alami ",
//         price: "Rp.99.000",
//         origin: "Jakarta Selatan",
//         terjual: "4.4 | Terjual 350+",
//         kondisi: "Baru",
//         berat: "1Kg",
//         kategori: "Kebutuhan Pokok",
//         eta: "Kebutuhan Pokok",
//         tk: "GratataMi",
//         rt: "4.4",
//         stok: 350,
//         ds: <p>
//             This item has no description because the seller did not provide a description for this product.

//         </p>,

//     },

// ]





const Harian = () => {
    const history = useHistory();
    const [harian, SetHarian] = useState([])
    const detail = (name) => {
        history.push(`${TO_DETAIL_1}/${name}`)
        localStorage.removeItem("inputValue")
    }

    useEffect(() => {
        API.get('/productData1')
            .then(res => {
                SetHarian(res.data)
            })
    }, []);

    return (
        <div className={style["cntnt"]}>

            <Grid className={style["cntn"]}>
                {harian.map((item, index) => {
                    return (
                        <Grid key={index} className={style["main"]}>

                            <Card onClick={() => detail(item.name)} className={style["Card"]}>
                                <img className={style["img-content"]} src={item.imageurl} />
                                <CardContent className={style["Card-bottom"]} >
                                    <Typography className={style["Desc"]}>
                                        {item.name}
                                    </Typography>


                                </CardContent>
                                <Grid className={style["Price"]}>
                                    <FormatRupiah value={item.price}/>
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


