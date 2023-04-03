import React, { useEffect, useState } from "react";
import { Grid, Container, Button, Popper, Card, Typography } from "@material-ui/core";
import {  LayoutCo } from "components";
import { useParams } from "react-router";
import RemoveIcon from '@mui/icons-material/Remove';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AddIcon from '@mui/icons-material/Add';
import ShareIcon from '@mui/icons-material/Share';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Kurir from "components/ModHover";
import COD from "components/COD";
import Desc from "components/DescProd";
import ScreenshotOutlinedIcon from '@mui/icons-material/ScreenshotOutlined';
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import Testing from "components/Testing";
import Alamat from "components/Alamat";
import { Alert } from "@mui/material";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Snackbar from '@mui/material/Snackbar';

import Ulasan from "components/Ulasan";
import style from "./CartPage.module.scss";


const productData = [
    {
        id: 1,
        imageurl:
            "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/11/7/3d7a04c3-3558-416b-ab2b-593364359575.jpg.webp?ect=4g",
        name: "Samsung A04e RAM 3 ROM 32",
        price: "Rp.1.299.000",
        origin: "Jakarta Timur",
        terjual: "4.6 | Terjual 750+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Samsung Official",
        rt: "4.6",
        stok: 320,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 2,
        imageurl:
            "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/2/17/4d4714e4-9907-4df9-a45f-98d122826dfe.png.webp?ect=4g",
        name: "Samsung S23 5G RAM 8 ROM 256",
        price: "Rp.8.000.000",
        origin: "Kab.Cirebon",
        terjual: "4.0 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Samsung Official",
        rt: "4.0",
        stok: 43,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 3,
        imageurl:
            "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/11/15/4d509fff-b2de-485d-a9e8-d53a07af872a.jpg",
        name: "Samsung A53 5G RAM 8 ROM 256",
        price: "Rp.4.300.000",
        origin: "Kab.Kuningan",
        terjual: "4.6 | Terjual 250+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Samsung Official",
        rt: "4.6",
        stok: 490,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 4,
        imageurl:
            "    https://images.tokopedia.net/img/cache/900/VqbcmM/2022/11/15/aa208a11-4b99-4df2-9fbc-9f09b1123556.jpg ",
        name: "Samsung A33 5G RAM 8 ROM 256",
        price: "Rp.3.200.000",
        origin: "Kab.Cirebon",
        terjual: "4.3 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Samsung Official",
        rt: "4.3",
        stok: 65,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 5,
        imageurl:
            "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/6/30/8905ec48-5711-41f9-97b5-5b58dfdf3d98.jpg",
        name: "Samsung A23 5G RAM 8 ROM 256",
        price: "Rp.2.800.000",
        origin: "Majalaya",
        terjual: "4.5 | Terjual 400+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Samsung Official",
        rt: "4.5",
        stok: 430,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 6,
        imageurl:
            "        https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/8/4/543ea2d5-b910-4337-91d1-63ad21e648f4.png.webp?ect=4g ",
        name: "Samsung Tab S7 FE RAM 8 ROM 256",
        price: "Rp.5.780.000",
        origin: "Jakarta Barat",
        terjual: "4.3 | Terjual 700+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Samsung Official",
        rt: "4.3",
        stok: 39,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 7,
        imageurl:
            "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/3/29/c25dd35d-30e0-4c7e-94b7-8bc1fb2d8a29.jpg.webp?ect=4g",
        name: "Samsung A13 RAM 4 ROM 64",
        price: "Rp.2.199.000",
        origin: "Jakarta Selatan",
        terjual: "4.4 | Terjual 350+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Samsung Official",
        rt: "4.4",
        stok: 43,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 8,
        imageurl: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/9/3/a295038e-c745-412f-8913-22800b5a5783.jpg",
        name: "Samsung S22 5G RAM 8 ROM 256",
        price: "Rp.7.499.000",
        origin: "Banda Aceh",
        terjual: "4.6 | Terjual 750+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Samsung Official",
        rt: "4.6",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 9,
        imageurl: "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/6/18/8d57d75f-3a0e-4a83-9057-543a034b8ece.jpg",
        name: "Samsung A73 5G RAM 8 ROM 256",
        price: "Rp.4.890.000",
        origin: "Jakarta Utara",
        terjual: "4.0 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Samsung Official",
        rt: "4.0",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 10,
        imageurl: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/6/11/a5c17934-4555-4597-8551-38d64d70baae.jpg",
        name: "Samsung S21 FE RAM 8 ROM 128",
        price: "Rp.8.199.000",
        origin: "Majalengka",
        terjual: "4.8 | Terjual 1Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Samsung Official",
        rt: "4.8",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 11,
        imageurl: "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/2/7/12177cdd-bd95-4b63-8610-105a06e0fceb.jpg",
        name: "Samsung S22 Ultra 5G RAM 12 ROM 256",
        price: "Rp.21.990.000",
        origin: "Jakarta Pusat",
        terjual: "4.7 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Samsung Official",
        rt: "4.7",
        stok: 50,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 12,
        imageurl: "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/10/19/357b6e3b-b296-45dc-8e82-ad68a02be07b.jpg",
        name: "Samsung A04 RAM 4 ROM 64",
        price: "Rp.1.980.000",
        origin: "Kab.Cirebon",
        terjual: "4.9 | Terjual 350+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Samsung Official",
        rt: "4.9",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 13,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/26/ad7c1d63-e020-49f1-9dcb-2caed421a96e.jpg",
        name: "Samsung A04s RAM 4 ROM 64",
        price: "Rp.1.980.000",
        origin: "Surabaya",
        terjual: "4.7 | Terjual 100+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Samsung Official",
        rt: "4.7",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 14,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/8/11/60567092-33e4-4fcf-b9a3-92a9a0aeff89.jpg",
        name: "Samsung Z-fold 4 5G RAM 12 ROM 256",
        price: "Rp.21.180.000",
        origin: "Jakarta Timur",
        terjual: "4.6 | Terjual 1Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Samsung Official",
        rt: "4.6",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 15,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/6/22/a4770915-5c5b-41c2-a585-0f80f17190ee.jpg",
        name: "Samsung A03 Core RAM 4 ROM 64",
        price: "Rp.980.000",
        origin: "Kota Madiun",
        terjual: "4.6 | Terjual 750+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Samsung Official",
        rt: "4.6",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 16,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/7/2dcb4bca-1ce6-4c5b-9a34-97efac070767.jpg",
        name: "Samsung A71 RAM 8 ROM 128",
        price: "Rp.2.663.000",
        origin: "Bogor Raya",
        terjual: "4.7 | Terjual 10Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Samsung Official",
        rt: "4.7",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 17,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/product-1/2020/6/21/3967478/3967478_e7d0a863-1aa9-4770-bda5-b83f4ee48c1b_700_700.jpg",
        name: "Samsung M21 RAM 4 ROM 64",
        price: "Rp.2.600.000",
        origin: "Banten",
        terjual: "4.0 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Samsung Official",
        rt: "4.0",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 18,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/14/5ce5faa8-acec-43bf-8d68-d3daaee14305.png",
        name: "Samsung A51 RAM 8 ROM 128",
        price: "Rp.2.199.000",
        origin: "Kab.Bekasi",
        terjual: "4.5 | Terjual 1Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Samsung Official",
        rt: "4.5",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 19,
        imageurl: "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/3/23/6f5c4d90-da03-44fa-a7db-2bd89e7abc2b.jpg.webp?ect=4g",
        name: "Samsung A50s RAM 4 ROM 64",
        price: "Rp.2.399.000",
        origin: "Indramayu",
        terjual: "4.7 | Terjual 400+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Samsung Official",
        rt: "4.7",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 20,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/product-1/2020/6/29/6049900/6049900_1460eb34-821d-447d-8c2b-ceacf0557ba7_1080_1080.jpg",
        name: "Samsung A21s RAM 4 ROM 64",
        price: "Rp.2.180.000",
        origin: "Tangerang",
        terjual: "4.6 | Terjual 100+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Samsung Official",
        rt: "4.6",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 21,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/6/10/5ef1f26f-8af2-4957-9290-20efaf23377b.jpg",
        name: "Samsung A30s RAM 4 ROM 64",
        price: "Rp.2.099.000",
        origin: "Depok",
        terjual: "4.8 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Samsung Official",
        rt: "4.8",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },

]



const CartPage = () => {
    const { name } = useParams();
    const ambilObj = productData.filter(params => params.name == name)[0];
    const [count, setCount] = useState(0);
    // const [stok, setStok] = useState(ambilObjek.stok);

    // useEffect( () => {setStok(Prev => Prev-count)} , [count])

    const [isEdit, setIsEdit] = useState(false);
    const [follow, setFollow] = useState(false);

    const [buka, setBuka] = React.useState(false);

    const handleklik = () => {
        setBuka(true);
    };

    const handleTutup = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setBuka(false);
    };

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleTutup}>
                BATAL
            </Button>
            {/* <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleTutup}
            >
                <CloseIcon fontSize="small" />
            </IconButton> */}
        </React.Fragment>
    );


    return (
        <LayoutCo>
            <Container className={style["detail"]}>



                <Grid className={style["this-col-2"]}>
                    <Grid className={style["col-2"]}>
                        <Typography className={style["this-title"]}>CheckOut </Typography>
                        <Typography className={style["price"]}>Alamat Pengiriman</Typography>
                        <hr color="#F0F0F0" size="2" />


                        <Alamat />



                        <hr color="#F0F0F0" size="2" />
                        <Grid className={style["bot-pro"]}>
                            <Grid className={style["chat"]}>

                                <Typography className={style["font-chat"]}>Pilih Alamat Lain</Typography>

                            </Grid>
                            <Grid className={style["solid"]}></Grid>
                            <Grid className={style["share"]}>

                                <Typography className={style["font-share"]}>Kirim Ke Beberapa Alamat</Typography>

                            </Grid>
                        </Grid>
                        <hr color="#F0F0F0" size="2" />

                        <Grid className={style["Desc"]}>
                            <Grid className={style["pro"]}>
                                <Typography className={style["toko"]}><VerifiedIcon className={style["icon-place"]} />{ambilObj.tk}</Typography>
                            </Grid>
                            <Grid className={style["asal-1"]}>
                                <Typography className={style["asal"]}>

                                   {ambilObj.origin}
                                </Typography>
                            </Grid>
                            <Grid className={style["cv"]}>
                                <Card className={style["cover-img"]}>
                                    <img className={style["this-img"]} src={ambilObj.imageurl} />
                                </Card>
                                <Grid className={style["deskripsi"]}>
                                    <Typography className={style["dk"]}>{ambilObj.name}</Typography>
                                    <Typography className={style["hg"]}>{ambilObj.price}</Typography>
                                </Grid>
                                <Grid className={style["deskripsi2"]}>
                                    <Typography className={style["hg2"]}>Pilih Pengiriman</Typography>
                                    <select className={style["opsimain"]} >
                                        <option value="null">Pilih</option>
                                        <option value="Instan">Instan (3 Jam) Rp.40.000</option>
                                        <option value="Same Day">Same Day (6 Jam) Rp.30.000</option>
                                        <option value="Reguler">Reguler(2 Hari) Rp.12.0000</option>
                                        <option value="Kargo">Kargo(3 Hari) Rp.55.0000</option>
                                        <option value="Ekonomi">Ekonomi(5 Hari) Rp.11.0000</option>

                                    </select>
                                </Grid>
                            </Grid>







                        </Grid>
                        <hr color="#F0F0F0" size="2" />











                    </Grid>


                </Grid>
                <Grid className={style["col-3"]}>
                    <Card className={style["cover"]}>

                        <Typography className={style["sub"]}>Ringkasan Belanja </Typography>
                        <hr color="#F0F0F0" size="2" />
                        <Typography className={style["sub"]}>Total Harga : {ambilObj.price} </Typography>
                        <Typography className={style["sub"]}>Biaya Proteksi Produk : 0 </Typography>

                        <hr color="#F0F0F0" size="2" />
                        <Typography className={style["sub"]}>Total Tagihan : {ambilObj.price} </Typography>

                        <Grid className={style["button"]}>

                            <Button className={style["beli"]}>

                                <Typography className={style["font-beli"]}>
                                    Pilih Pembayaran
                                </Typography>
                            </Button>

                        </Grid>

                    </Card>
                </Grid>










            </Container >

        </LayoutCo >
    );
};

export default Cartpage;
