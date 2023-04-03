import React, { useEffect, useState } from "react";
import { Grid, Container, Button, Popper, Card, Typography } from "@material-ui/core";
import { LayoutCo } from "components";
import { useParams } from "react-router";
import VerifiedIcon from '@mui/icons-material/Verified';
import Transaksi from "components/Transaksi";
import Alamat from "components/Alamat";
import Box from '@mui/material/Box';
import { FormatRupiah } from "@arismun/format-rupiah";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import style from "./Co1.module.scss";


const productData = [
    {
        id: 1,
        imageurl: "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/2/10/f9081189-16ab-448f-b8db-d04819ff97df.png",
        name: "Minyak goreng 2Lt Bimoli,Sunco,Tropical",
        price: 34000,
        origin: "Jakarta Timur",
        terjual: "4.6 | Terjual 750+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Kebutuhan Pokok",
        eta: "Kebutuhan Pokok",
        tk: "Salju Terbakar",
        rt: "4.6",
        stok: 2000,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 2,
        imageurl: "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2021/8/16/9d2c15a1-b7e1-498b-aaaf-f9ec002af959.jpg",
        name: "Sunlight 210 ML Pouch",
        price: 10000,
        origin: "Kab.Cirebon",
        terjual: "4.0 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Kebutuhan Pokok",
        eta: "Kebutuhan Pokok",
        tk: "Isabella",
        rt: "4.0",
        stok: 900,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 3,
        imageurl: "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/8/18/46da38f2-979a-4e16-94d8-b0229de64f8b.jpg",
        name: "Olive Oil 500ML Fresh dari Alam",
        price: 90000,
        origin: "Kab.Kuningan",
        terjual: "4.6 | Terjual 250+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Kebutuhan Pokok",
        eta: "Kebutuhan Pokok",
        tk: "Daun hijau",
        rt: "4.6",
        stok: 100,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 4,
        imageurl: "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/12/13/d95eeaab-1454-4a04-b468-17c02544bf6c.jpg.webp?ect=4g",
        name: "Beras Fukumi 10Kg | Beras Jepang Pilihan dan Berkualitas",
        price: 200000,
        origin: "Kab.Cirebon",
        terjual: "4.3 | Terjual 150+",
        kondisi: "Baru",
        berat: "10Kg",
        kategori: "Kebutuhan Pokok",
        eta: "Kebutuhan Pokok",
        tk: "Salju Terbakar",
        rt: "4.3",
        stok: 50,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 5,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/11/30/08b490ab-0a9f-43f5-bcc7-ec1aff87325c.jpg.webp?ect=4g",
        name: "Daging Yoshinoya | Daging Berkualitas Pilihan",
        price: 120000,
        origin: "Majalaya",
        terjual: "4.5 | Terjual 400+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Kebutuhan Pokok",
        eta: "Kebutuhan Pokok",
        tk: "Fresh Beef",
        rt: "4.5",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 6,
        imageurl: "https://images.tokopedia.net/img/cache/700/product-1/2020/1/8/562980006/562980006_57c48718-6f4a-4431-b91d-5b5aa9abc0d9_1080_1080.jpg.webp?ect=4g",
        name: "Wagyu Mess 1Kg | Daging sapi pilihan Berkualitas",
        price: 180000,
        origin: "Jakarta Barat",
        terjual: "4.3 | Terjual 700+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Kebutuhan Pokok",
        eta: "Kebutuhan Pokok",
        tk: "Fresh Beef",
        rt: "4.3",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 7,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/1/2/b9dd328f-47cb-4111-b406-7034e3f4bcf1.jpg.webp?ect=4g",
        name: "Glucose syrup 75ML- Dari bahan alami ",
        price: 99000,
        origin: "Jakarta Selatan",
        terjual: "4.4 | Terjual 350+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Kebutuhan Pokok",
        eta: "Kebutuhan Pokok",
        tk: "GratataMi",
        rt: "4.4",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },

]



const Co1 = ({ total }) => {
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
    const totalCekout = localStorage.getItem("hargaBeli")
    const totalBeli = localStorage.getItem("jumlah")
    const totalTagihan = parseInt(totalCekout) + parseInt(age)
    const catatan = localStorage.getItem("inputValue")

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
                                    <Typography className={style["hg"]}>
                                        <FormatRupiah value=
                                            {ambilObj.price} /> x {totalBeli} </Typography>
                                            <Typography>Catatan: {catatan}</Typography>
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
                        <Typography className={style["sub"]}>Total Harga :<FormatRupiah value={totalCekout} /> </Typography>
                        {
                            age ?
                                <Typography className={style["sub"]}>Biaya Pengiriman : <FormatRupiah value={age} /> </Typography>
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

export default Co1;
