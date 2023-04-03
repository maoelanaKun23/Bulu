import React, { useEffect, useState } from "react";
import { Grid, Container, Button, Popper, Card, Typography } from "@material-ui/core";
import { LayoutCo } from "components";
import { useParams } from "react-router";
import Transaksi from "components/Transaksi";
import VerifiedIcon from '@mui/icons-material/Verified';
import Alamat from "components/Alamat";
import Box from '@mui/material/Box';
import { FormatRupiah } from "@arismun/format-rupiah";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import style from "./Co2.module.scss";


const productData = [

    {
        id: 1,
        imageurl: "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2023/3/2/e2933721-00f0-47e9-ba9f-8601acfdec03.jpg",
        name: "Celana Chinos Panjang Pria X | L |M ",
        price: 99000,
        origin: "Jakarta Timur",
        terjual: "4.6 | Terjual 750+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Fashion Pria",
        eta: "Celana Panjang Chinos",
        tk: "Galery Pria",
        rt: "4.6",
        stok: 750,
        ds: <p>
            Dimohon untuk memperhatikan Deskripsi produk kami agar tidak ada kesalahan dlm memilih barang
            <br />
            🤗Diskripsi Celana Chinos🤗
            <br />

            Spesifikasi :            <br />
            - Celana Chinos Pria            <br />
            - Bahan Katun Twill / Katun elastis            <br />
            - Ready Ukuran 27 - 38            <br />
            - READY WARNA : Hitam, Abu-Abu, krem muda, mokka            <br />
            - Detail ukuran lingkar pinggang (cm)            <br />
            <br />
            ✓ 27=Lingkar Pinggang (70)cm            <br />
            ✓ 28=Lingkar Pinggang (72)cm            <br />
            ✓ 29=Lingkar Pinggang (74)cm            <br />
            ✓ 30=Lingkar Pinggang (76)cm            <br />
            ✓ 31=Lingkar Pinggang (78)cm            <br />
            ✓ 32=Lingkar Pinggang (80)cm            <br />
            ✓ 33=Lingkar Pinggang (82)cm            <br />
            ✓ 34=Lingkar Pinggang (84)cm            <br />
            ✓ 35=Lingkar Pinggang (86)cm            <br />
            ✓ 36=Lingkar Pinggang (88)cm            <br />
            ✓ 37=Lingkar Pinggang (90)cm            <br />
            ✓ 38=Lingkar Pinggang (92)cm            <br />
            <br />
            - Panjang celana rata-rata 97-99cm disesuaikan dengan ukurannya.            <br />
            <br />
            Bahan sangat nyaman saat dipakai.            <br />
            NB : Untuk pemesanan harap sebutkan ukuran dan warna            <br />
            Happy Shopping            <br />
        </p>,
    },
    {
        id: 2,
        imageurl: "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/10/11/7312c766-39e3-4ebb-aca0-0244b2d9f003.jpg",
        name: "Madu Murni Safiya Herbal 650 gram Original Quality",
        price: 65000,
        origin: "Kab.Cirebon",
        terjual: "4.0 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Herbal Kesehatan",
        eta: "Herbal",
        tk: "Omnanio Jaya",
        rt: "4.0",
        stok: 1000,
        ds: <p>
            Manfaat Madu Murni untuk Kesehatan Tubuh dan Kecantikan :
            <br />
            - Menguatkan Sistem Imun Tubuh            <br />
            - Mampu Menjadi Sumber Energi Bagi Tubuh            <br />
            - Kandungan Antioksidan Tinggi yang Mampu Mencegah Kanker            <br />

            - Mengurangi Risiko Penyakit Jantung dan Stroke            <br />

            - Menekan Efek Buruk Kolesterol dalam Tubuh dan Berat Badan            <br />

            - Melembapkan kulit            <br />

            - Mengangkat sel kulit mati            <br />

            - Menghilangkan komedo            <br />

            - Menyamarkan noda bekas jerawat            <br />

            - Menghilangkan flek hitam            <br />

            - Mencegah penuaan dini dan membuat awet muda            <br />

        </p>,
    },
    {
        id: 3,
        imageurl: "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/11/1/2d957257-264b-4e1c-bc6b-f12bcf78c25e.jpg",
        name: "Tempat Sampah SL Plastic 42 Ltr Modern Tong Sampah Tertutup",
        price: 15000,
        origin: "Kab.Kuningan",
        terjual: "4.6 | Terjual 250+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Alat Kebersihan",
        eta: "Peralatan Rumah Tangga",
        tk: "Silalahi Muda",
        rt: "4.6",
        stok: 250,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 4,
        imageurl: "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/4/15/13308949-f212-4b6a-b3b0-e01c2e809c7d.jpg",
        name: "MICROWAVE OVEN GRILL INVERTER SAMSUNG - 30L",
        price: 3200000,
        origin: "Kab.Cirebon",
        terjual: "4.3 | Terjual 150+",
        kondisi: "Baru",
        berat: "5Kg",
        kategori: "Alat Masak",
        eta: "Peralatan Rumah Tangga",
        tk: "Rezeki Berkah",
        rt: "4.3",
        stok: 100,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 5,
        imageurl: "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/5/18/97c6cdd6-5c75-4268-a6fc-207d5d275ebf.jpg",
        name: "Philips Downlight LED Meson 59464 125 13W 65K Putih - Paket 2 Gratis 1",
        price: 68000,
        origin: "Majalaya",
        terjual: "4.5 | Terjual 400+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Alat Properti",
        eta: "Peralatan Properti",
        tk: "Sinar Bulan",
        rt: "4.5",
        stok: 1250,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 6,
        imageurl:
            "        https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/8/4/543ea2d5-b910-4337-91d1-63ad21e648f4.png.webp?ect=4g ",
        name: "Samsung Tab S7 FE Garansi Resmi Indonesia",
        price: 5780000,
        origin: "Jakarta Barat",
        terjual: "4.3 | Terjual 700+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "JilaJilo Cell",
        rt: "4.3",
        stok: 200,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 7,
        imageurl:
            "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/3/29/c25dd35d-30e0-4c7e-94b7-8bc1fb2d8a29.jpg.webp?ect=4g",
        name: "Samsung A13 Garansi Resmi Indonesia",
        price: 2199000,
        origin: "Jakarta Selatan",
        terjual: "4.4 | Terjual 350+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Merdeka Cell",
        rt: "4.3",
        stok: 2000,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 8,
        imageurl: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/9/3/a295038e-c745-412f-8913-22800b5a5783.jpg",
        name: "Samsung S22 Garansi Resmi Indonesia",
        price: 7499000,
        origin: "Banda Aceh",
        terjual: "4.6 | Terjual 750+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Merdeka Cell",
        rt: "4.6",
        stok: 2000,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 9,
        imageurl: "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/8/6/7cb4c9f5-8cdc-455b-8916-7bfba62a31fc.png",
        name: "Jas Hujan Raincoat Bahan Tebal",
        price: 49000,
        origin: "Jakarta Utara",
        terjual: "4.0 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Pribadi",
        eta: "Peralatan Outdoor",
        tk: "Ratu Simmamala",
        rt: "4.0",
        stok: 200,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 10,
        imageurl: "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2023/1/19/50522787-2391-4aaf-ac3e-ad884798c34b.jpg",
        name: "Tempat Lilin Aesthetic Cocok Buat Ruangan Santai",
        price: 99000,
        origin: "Majalengka",
        terjual: "4.8 | Terjual 1Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Properti",
        eta: "Peralatan Properti",
        tk: "Konsai Mila",
        rt: "4.8",
        stok: 600,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 11,
        imageurl: "https://images.tokopedia.net/img/cache/300-square/hDjmkQ/2022/10/6/efee668f-d0c3-4243-b04d-0ebec1c85802.jpg",
        name: "Wardh UV Shield - menjaga Kulit Tetap Aman Dari Sinar UV",
        price: 70000,
        origin: "Jakarta Pusat",
        terjual: "4.7 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Produk Kecantikan",
        eta: "Produk Kecantikan",
        tk: "Wardah Beauty",
        rt: "4.7",
        stok: 3000,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 12,
        imageurl: "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/12/30/f1d74f66-684f-4140-8c14-087f6fdc0f3b.jpg",
        name: "Kain Lap Microfiber Tebal dan halus",
        price: 1980000,
        origin: "Kab.Cirebon",
        terjual: "4.9 | Terjual 350+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Merdeka Cell",
        rt: "4.9",
        stok: 500,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 13,
        imageurl: "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/9/8/a5888bb4-847a-461d-846d-dac4c1ac4bd6.png",
        name: "Dispenser DDB-49 Hemat Listrik",
        price: 1680000,
        origin: "Surabaya",
        terjual: "4.7 | Terjual 100+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Mustika Jaya",
        rt: "4.7",
        stok: 90,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 14,
        imageurl: "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/6/21/5ce9510e-ec2e-4cf9-b4ef-75f42efe4a9e.jpg",
        name: "Dahua SDA1500-5 Mega Fixel",
        price: 1050000,
        origin: "Jakarta Timur",
        terjual: "4.6 | Terjual 1Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Maju Ramah",
        rt: "4.6",
        stok: 2000,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
]



const Co2 = () => {

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
                                    <Typography className={style["hg"]}><FormatRupiah value={ambilObj.price} /> x {totalBeli}</Typography>
                                    <br/>
                                    <Typography>Catatan : {catatan} </Typography>
                                </Grid>
                                {/* <Grid className={style["deskripsi2"]}>
                                    <Typography className={style["hg2"]}>Pilih Pengiriman</Typography>
                                    <select className={style["opsimain"]} >
                                        <option value="null">Pilih</option>
                                        <option value="Instan">Instan (3 Jam) Rp.40.000</option>
                                        <option value="Same Day">Same Day (6 Jam) Rp.30.000</option>
                                        <option value="Reguler">Reguler(2 Hari) Rp.12.0000</option>
                                        <option value="Kargo">Kargo(3 Hari) Rp.55.0000</option>
                                        <option value="Ekonomi">Ekonomi(5 Hari) Rp.11.0000</option>

                                    </select>
                                </Grid> */}
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

export default Co2;
