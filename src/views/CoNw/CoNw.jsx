import React, { useEffect, useState } from "react";
import { Grid, Container, Button, Popper, Card, Typography } from "@material-ui/core";
import { LayoutCo } from "components";
import { useParams } from "react-router";
import Transaksi from "components/Transaksi";
import VerifiedIcon from '@mui/icons-material/Verified';
import Alamat from "components/Alamat";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormatRupiah } from "@arismun/format-rupiah";
import style from "./CoNw.module.scss";


const productData = [
    {
        id: 1,
        imageurl:
            "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/4/7/e1dbcc8f-7a26-4ab8-ab9c-860286d1dc20.jpg",
        name: "Sneakers  Sport | Cocok Untuk Running",
        price: 99000,
        origin: "Jakarta Timur",
        terjual: "4.6 | Terjual 750+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Perlengkapan Styling",
        eta: "Barang Styling",
        tk: "Cuan Me",
        rt: "4.6",
        stok: 2000,
        dprice: "Rp.150.000",

        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 2,
        imageurl:
            "https://lzd-img-global.slatic.net/g/p/dd217a35ebc5cd7cfd3dc3ccaf806efe.jpg_720x720q80.jpg_.webp",
        name: "Sport sneakers  | Cocok Untuk Running",
        price: 80000,
        origin: "Kab.Cirebon",
        terjual: "4.0 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Perlengkapan Styling",
        eta: "Barang Styling",
        tk: "Cuan Me",
        rt: "4.0",
        stok: 900,
        dprice: "Rp.340.000",

        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 3,
        imageurl:
            "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/29/285d2bfa-c69b-4bd9-97b2-1798b590614d.png",
        name: "Apple Watch | Original by Apple",
        price: 75000,
        origin: "Jakarta Pusat",
        terjual: "4.9 | Terjual 1Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Perlengkapan Styling",
        eta: "Barang Styling",
        tk: "Paradise",
        rt: "4.9",
        stok: 300,
        dprice: "Rp.2.150.000",

        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 4,
        imageurl:
            "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2022/10/17/71d8dfe7-ef2f-4ca9-ac7a-2bece543abfe.jpg",
        name: "Botol Minum Anak | Bahan Plastik Ramah Lingkungan",
        price: 25000,
        origin: "Kab.Bandung",
        terjual: "4.1 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Perlengkapan Rumah Tangga",
        eta: "Barang Anak",
        tk: "ParamoMe",
        rt: "4.1",
        stok: 2080,
        dprice: "Rp.100.000",

        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 5,
        imageurl:
            "https://cf.shopee.co.id/file/66fb1984428824adaf633228ccdddc4b",
        name: "Vans sneakers | Sepatu Kasual Cocok Untuk Kantor Dan Styling",
        price: 85000,
        origin: "Surabaya",
        terjual: "4.3 | Terjual 250+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Perlengkapan Styling",
        eta: "Barang Styling",
        tk: "Cuan Me",
        rt: "4.3",
        dprice: "Rp.180.000",

        stok: 80,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 6,
        imageurl:
            "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/6/4/1d9ee585-36a7-41d9-a5ad-3098e70e0a99.jpg",
        name: "T-Shirt Bahan Cotton Combad -30s",
        price: 30000,
        dprice: "Rp.50.000",

        origin: "Kota Medan",
        terjual: "4.5 | Terjual 650+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Perlengkapan Styling",
        eta: "Barang Styling",
        tk: "Cuan Me",
        rt: "4.5",
        stok: 500,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 7,
        imageurl:
            "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/5/10/0616d00a-90de-4655-8201-e3b1cd799105.jpg",
        name: "Sunglasses | Pelindung mata dari Sinar UV Matahari",
        price: 35000,
        dprice: "Rp.60.000",

        origin: "Majalaya",
        terjual: "4.2 | Terjual 210+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Perlengkapan Styling",
        eta: "Barang Styling",
        tk: "Cuan Me",
        rt: "4.2",
        stok: 2400,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 8,
        imageurl:
            "https://s3.ap-southeast-1.amazonaws.com/assets.femaledaily.com/images/post/5893e0568844915509f04395176a152b.jpg",
        name: "Dove cream -Pencerah Kulit | Terbukti Mencerahkan Kulit",
        price: 54000,
        dprice: "Rp.98.000",

        origin: "Jakarta Barat",
        terjual: "4.8 | Terjual 800+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Perlengkapan Proteksi",
        eta: "Perawatan Diri",
        tk: "Dove Official",
        rt: "4.8",
        stok: 7500,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 9,
        imageurl:
            "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/1/5/644b4052-d8d2-49dc-bd49-c6bbfa9c6b60.png",
        name: "Baso Aci Instan | Isi daging dan cuanki",
        price: 15000,
        dprice: "Rp.50.000",

        origin: "Majalaya",
        terjual: "4.2 | Terjual 210+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Makanan Instan",
        eta: "Makanan Instan",
        tk: "Cuan Me",
        rt: "4.2",
        stok: 450,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 10,
        imageurl:
            "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/11/5/4d0a860b-f517-46cd-aa80-3ced637d774a.jpg",
        name: "Dimsum Enak - Isi Daging Sapi (Sudah Termasuk Saus Dan Mayonaise)",
        price: 24000,
        dprice: "Rp.59.000",

        origin: "Jakarta Barat",
        terjual: "4.8 | Terjual 800+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Makanan Instan",
        eta: "Makanan Instan",
        tk: "Cuan Me",
        rt: "4.8",
        stok: 230,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
]



const CoNw = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const { id } = useParams();
    const ambilObj = productData.filter(params => params.id == id)[0];
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
                                            {ambilObj.price} /> x {totalBeli} </Typography>
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

                            <Transaksi
                                age={age}
                            />

                        </Grid>

                    </Card>
                </Grid>










            </Container >

        </LayoutCo >
    );
};

export default CoNw;
