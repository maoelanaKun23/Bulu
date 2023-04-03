import React, { useEffect, useState } from "react";
import { Grid, Container, Button, Card, Typography } from "@material-ui/core";
import { LayoutCo } from "components";
import { useParams } from "react-router";
import VerifiedIcon from '@mui/icons-material/Verified';
import Alamat from "components/Alamat";
import Transaksi from "components/Transaksi";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormatRupiah } from "@arismun/format-rupiah";
import style from "./CoP.module.scss";


const productData = [
    {
        id: 1,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/13/9930f36b-25fa-43c7-a82b-dce2d7452fc3.jpg",
        name: "Oppo A57 5G RAM 4 ROM 128",
        price: 2299000,
        origin: "Jakarta Timur",
        terjual: "4.6 | Terjual 750+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Oppo Official",
        rt: "4.6",
        stok: 320,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 2,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/29/e0f6096b-2b56-4edf-9bf7-52a0dfdc03b2.jpg",
        name: "Oppo A77s 5G RAM 4 ROM 128",
        price: 3000000,
        origin: "Kab.Cirebon",
        terjual: "4.0 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Oppo Official",
        rt: "4.0",
        stok: 320,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 3,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/17/b157c4a8-ec52-4dc9-808d-164ef0fef286.jpg",
        name: "Oppo A55 RAM 4 ROM 128",
        price: 2300000,
        origin: "Kab.Kuningan",
        terjual: "4.6 | Terjual 250+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Oppo Official",
        rt: "4.6",
        stok: 320,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 4,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/15/bd19014e-ded5-46b9-a175-dcf569a01e48.jpg",
        name: "Oppo A16 RAM 4 ROM 128",
        price: 1200000,
        origin: "Kab.Cirebon",
        terjual: "4.3 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Oppo Official",
        rt: "4.3",
        stok: 320,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 5,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/13/36d47ab1-6024-4c2a-84f4-02ba025dc354.jpg",
        name: "Oppo A57 RAM 4 ROM 128",
        price: 2200000,
        origin: "Majalaya",
        terjual: "4.5 | Terjual 400+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Oppo Official",
        rt: "4.5",
        stok: 320,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 6,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/2/26/3e335a4f-2f22-4357-b7c7-dd8e761916b0.jpg",
        name: "Oppo Reno 2Z RAM 4 ROM 128",
        price: 1780000,
        origin: "Jakarta Barat",
        terjual: "4.3 | Terjual 700+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Oppo Official",
        rt: "4.3",
        stok: 320,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 7,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/26/3ba4fdfa-1663-4d0b-bc64-a8635c261534.jpg",
        name: "Oppo A16K RAM 4 ROM 128",
        price: 2199000,
        origin: "Jakarta Selatan",
        terjual: "4.4 | Terjual 350+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Oppo Official",
        rt: "4.4",
        stok: 320,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 8,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/6/f4f56ebb-0b98-4a14-af4e-3e89c03d8e36.jpg",
        name: "Oppo A31 RAM 4 ROM 128",
        price: 1499000,
        origin: "Banda Aceh",
        terjual: "4.6 | Terjual 750+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Oppo Official",
        rt: "4.6",
        stok: 320,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 9,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/4/11b343cb-7081-4828-8b0b-fb222c5baa2c.jpg",
        name: "Oppo Reno 8 5G RAM 4 ROM 128",
        price: 4890000,
        origin: "Jakarta Utara",
        terjual: "4.0 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Oppo Official",
        rt: "4.0",
        stok: 320,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 10,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/4/24/fa66e015-d55f-423c-96e5-fd504fca4c88.jpg",
        name: "Oppo A96 RAM 4 ROM 128",
        price: 3199000,
        origin: "Majalengka",
        terjual: "4.8 | Terjual 1Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Oppo Official",
        rt: "4.8",
        stok: 320,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 11,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/5/e41aa3f6-f3c5-466e-adba-a895f32370ac.png",
        name: "Oppo A95 RAM 4 ROM 128",
        price: 2990000,
        origin: "Jakarta Pusat",
        terjual: "4.7 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Oppo Official",
        rt: "4.7",
        stok: 320,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 12,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/product-1/2018/12/18/41842672/41842672_d2c0aa84-7f63-4efb-adc2-6cc097b1c1dd_2048_2048",
        name: "Oppo A37 RAM 2 ROM 16",
        price: 980000,
        origin: "Kab.Cirebon",
        terjual: "4.9 | Terjual 350+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Oppo Official",
        rt: "4.9",
        stok: 320,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 13,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/4/1/17531e9d-4cd8-4193-a0a0-7961d32c4238.jpg",
        name: "Oppo A16e RAM 4 ROM 64",
        price: 980000,
        origin: "Surabaya",
        terjual: "4.7 | Terjual 100+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Oppo Official",
        rt: "4.7",
        stok: 320,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 14,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/12/0fdc4a39-8df7-462c-b48b-e148634b426b.png",
        name: "Oppo A15s RAM 4 ROM 64",
        price: 1180000,
        origin: "Jakarta Timur",
        terjual: "4.6 | Terjual 1Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Oppo Official",
        rt: "4.6",
        stok: 320,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 15,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/8/28/b6c91d90-ad19-44be-b254-624b9848b20c.jpg",
        name: "Oppo Reno 8 RAM 4 ROM 128",
        price: 3980000,
        origin: "Kota Madiun",
        terjual: "4.6 | Terjual 750+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Oppo Official",
        rt: "4.6",
        stok: 320,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 16,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/19/0ba8e037-edc5-4f91-84b2-7581c49713a0.jpg",
        name: "Oppo F1S RAM 4 ROM 128",
        price: 1663000,
        origin: "Bogor Raya",
        terjual: "4.7 | Terjual 10Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Oppo Official",
        rt: "4.7",
        stok: 320,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 17,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/6/5f153202-df2e-4119-9947-1a2bcfa48693.jpg",
        name: "Oppo F11 RAM 4 ROM 128",
        price: 2600000,
        origin: "Banten",
        terjual: "4.0 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Oppo Official",
        rt: "4.0",
        stok: 320,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 18,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/5/1/3a80ec6e-00a7-4750-8a7b-19c9c5b68f34.jpg",
        name: "Oppo F5 RAM 3 ROM 32",
        price: 1199000,
        origin: "Kab.Bekasi",
        terjual: "4.5 | Terjual 1Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Oppo Official",
        rt: "4.5",
        stok: 320,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 19,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/6/d28cfc94-0295-49eb-9af7-bf663bfff24c.jpg",
        name: "Oppo F9 RAM 3 ROM 32",
        price: 1399000,
        origin: "Indramayu",
        terjual: "4.7 | Terjual 400+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Oppo Official",
        rt: "4.7",
        stok: 320,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 20,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/6/d37f04a2-773c-4a44-94a1-9fabcea64f8a.jpg",
        name: "Oppo A5s RAM 3 ROM 32",
        price: 1180000,
        origin: "Tangerang",
        terjual: "4.6 | Terjual 100+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Oppo Official",
        rt: "4.6",
        stok: 320,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 21,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/8/19/afb7a1cf-05f1-4f59-8085-05a0abdd2f91.png",
        name: "Oppo F5 RAM 3 ROM 32",
        price: 1099000,
        origin: "Depok",
        terjual: "4.8 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Oppo Official",
        rt: "4.8",
        stok: 320,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },

]



const CoP = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
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
    const totalCekout = localStorage.getItem("hargaBeli")
    const totalBeli = localStorage.getItem("jumlah")
    const totalTagihan = parseInt(totalCekout) + parseInt(age)
    const catatan = localStorage.getItem("inputValue")


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
                                    <Typography className={style["hg"]}>
                                        <FormatRupiah value=
                                            {ambilObj.price} /> x {totalBeli}</Typography>
                                            <Typography>Catatan : {catatan}</Typography>
                                </Grid>
                                <Box sx={{ minWidth: 250 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Pilih Pengiriman</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={40000}>Instan (3 Jam) Rp.40.000</MenuItem>
                                            <MenuItem value={30000}>Same Day (6 Jam) Rp.30.000</MenuItem>
                                            <MenuItem value={12000}>Reguler(2 Hari) Rp.12.000</MenuItem>
                                            <MenuItem value={55000}>Kargo(3 Hari) Rp.55.000</MenuItem>
                                            <MenuItem value={11000}>Ekonomi(5 Hari) Rp.11.000</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>







                        </Grid>
                        <hr color="#F0F0F0" size="2" />











                    </Grid>


                </Grid>
                <Grid className={style["col-3"]}>
                    <Card className={style["cover"]}>

                        <Typography className={style["sub"]}>Ringkasan Belanja </Typography>
                        <hr color="#F0F0F0" size="2" />
                        <Typography className={style["sub"]}>Total Harga : <FormatRupiah value={totalCekout} /> </Typography>
                        {
                            age ?
                                <Typography className={style["sub"]}>Biaya Pengiriman : <FormatRupiah value={age} />  </Typography>
                                :
                                <Typography className={style["sub"]}>Biaya Pengiriman : 0 </Typography>

                        }
                        <hr color="#F0F0F0" size="2" />
                        {
                            age ?
                                <Typography className={style["sub"]}>Total Tagihan : <FormatRupiah value={totalTagihan} /> </Typography>
                                :
                                <Typography className={style["sub"]}>Total Tagihan : <FormatRupiah value={totalCekout} /> </Typography>

                        }
                        <Grid className={style["button"]}>

                            <Transaksi age={age} />

                        </Grid>

                    </Card>
                </Grid>










            </Container >

        </LayoutCo >
    );
};

export default CoP;
