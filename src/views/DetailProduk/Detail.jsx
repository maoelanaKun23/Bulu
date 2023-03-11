import React, { useEffect, useState } from "react";
import { Grid, Container, Button, Popper, Card, Typography } from "@material-ui/core";
import { Layout } from "components";
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
import { Alert } from "@mui/material";
import StarRoundedIcon from '@mui/icons-material/StarRounded'; import Snackbar from '@mui/material/Snackbar';

import Ulasan from "components/Ulasan";
import style from "./Detail.module.scss";

const productData = [

    {
        id: 1,
        imageurl: "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2023/3/2/e2933721-00f0-47e9-ba9f-8601acfdec03.jpg",
        name: "Celana Chinos Panjang Pria X | L |M ",
        price: "Rp.99.000",
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
        price: "Rp.65.500",
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
        price: "Rp.15.000",
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
        price: "Rp.3.200.000",
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
        price: "Rp.68.000",
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
        name: "Samsung Tab S7 FE 8/128",
        price: "Rp.5.780.000",
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
        name: "Samsung A13 4/64 | 8/128",
        price: "Rp.2.199.000",
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
        name: "Samsung S22 5G 8/256 | 8/512 5G",
        price: "Rp.7.499.000",
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
        price: "Rp.49.000",
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
        price: "Rp.99.000",
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
        price: "Rp.70.000",
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
        price: "Rp.1.980.000",
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
        price: "Rp.1.680.000",
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
        price: "Rp.1.050.000",
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

const testData = [
    { bgcolor: "#f0d000", no: 1, completed: 80 },
    { bgcolor: "#f0d000", no: 1, completed: 40 },
    { bgcolor: "#f0d000", no: 1, completed: 8 },
    { bgcolor: "#f0d000", no: 1, completed: 13 },
    { bgcolor: "#f0d000", no: 1, completed: 5 },
];
const angka = [
    { no: 5 },
    { no: 4 },
    { no: 3 },
    { no: 2 },
    { no: 1 }
];


const Detail = () => {
    const { id } = useParams();
    const ambilObjek = productData.filter(params => params.id == id)[0];
    console.log(ambilObjek)
    const [count, setCount] = useState(0);
    const [stok, setStok] = useState(ambilObjek.stok);

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
        <Layout>
            <Container className={style["detail"]}>

                <Grid className={style["col-1"]}>
                    <Card className={style["cover-img"]}>
                        <img className={style["this-img"]} src={ambilObjek.imageurl} />
                    </Card>
                    <Grid className={style["ulasan"]}>
                        <Typography className={style["font-ulasan"]}>
                            ULASAN PEMBELI
                        </Typography>
                        <Grid className={style["star"]}>
                            <StarRoundedIcon className={style["icon-star"]} />
                            <Typography className={style["font-star"]}>
                                {ambilObjek.rt}
                            </Typography>
                            <Typography className={style["fon"]}>
                                /5.0
                            </Typography>
                        </Grid>
                        {angka.map((item, anka) => (
                            <Typography className={style["anka"]} key={anka}>{item.no}</Typography>
                        )

                        )}
                        <Grid className={style["progress"]}>

                            {testData.map((item, idx) => (
                                <Grid className={style["this-progress"]}>

                                    <StarRoundedIcon className={style["this-star"]} />
                                    <Testing key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

                <Grid className={style["this-col-2"]}>
                    <Grid className={style["col-2"]}>
                        <Typography className={style["this-title"]}>{ambilObjek.name} </Typography>
                        <Typography className={style["price"]}>{ambilObjek.price}</Typography>
                        <hr color="#F0F0F0" size="2" />
                        <Grid className={style["content-desc"]}>
                            <Desc 
                            ambilObjek={ambilObjek}
                            />
                        </Grid>

                        <hr color="#F0F0F0" size="2" />
                        <Grid className={style["profile"]}>

                            <AccountCircleIcon className={style["picture"]} />
                            <Grid className={style["pro"]}>
                                <Typography className={style["toko"]}><VerifiedIcon className={style["icon-place"]} />{ambilObjek.tk}</Typography>
                                <Typography className={style["on"]}>.Online</Typography>
                            </Grid>
                            {follow ?
                                (

                                    <Grid onClick={() => setFollow(false)} className={style["btn-follow"]}>
                                        <Button className={style["btn-1"]}>Unfollow</Button>

                                        <Snackbar

                                            open={buka}
                                            autoHideDuration={2500}
                                            onClose={handleTutup}
                                        // message="Terimakasih telah mengikuti toko kami !"

                                        >
                                            <Alert action={action} severity="success" sx={{ width: '100%' }}>
                                                Terimakasih telah mengikuti toko kami !
                                            </Alert>
                                        </Snackbar>
                                    </Grid>


                                ) :
                                (
                                    <Grid onClick={() => setFollow(true)} className={style["btn-follow"]}>
                                        <Button onClick={handleklik} className={style["btn-1"]}>Follow</Button>

                                    </Grid>
                                )

                            }

                        </Grid>
                        <Grid className={style["bot-pro"]}>
                            <Grid className={style["chat"]}>
                                <Grid className={style["icon"]}>
                                    <ChatOutlinedIcon className={style["icon-chat"]} />
                                </Grid> &nbsp;
                                <Typography className={style["font-chat"]}>Chat</Typography>

                            </Grid>
                            <Grid className={style["solid"]}></Grid>
                            <Grid className={style["share"]}>
                                <Grid className={style["icon-1"]}>
                                    <ShareIcon className={style["icon-share"]} />
                                </Grid> &nbsp;
                                <Typography className={style["font-share"]}>Share</Typography>

                            </Grid>
                        </Grid>
                        <hr color="#F0F0F0" size="2" />

                        <Grid className={style["Desc"]}>
                            <Typography className={style["head"]}>
                                Pengiriman
                            </Typography>
                            <Grid className={style["asal-1"]}>
                                <Grid className={style["asal-icon"]}>
                                    <LocationOnOutlinedIcon className={style["icon"]} />
                                </Grid> &nbsp;
                                <Typography className={style["asal"]}>

                                    Dikirim dari {ambilObjek.origin}
                                </Typography>
                            </Grid>
                            <Grid className={style["asal-1"]}>
                                <Grid className={style["asal-icon"]}>
                                    <LocalShippingOutlinedIcon className={style["icon"]} />
                                </Grid> &nbsp;
                                <Typography className={style["asal"]}>

                                    Ongkir Reguler 8 rb - 11,5 rb
                                </Typography>
                            </Grid>

                            <Grid className={style["kurir"]}>
                                <Typography className={style["font-kurir"]}>
                                    Kurir Lainnya :
                                </Typography>&nbsp;
                                <Grid className={style["kurir-1"]}>
                                    <Kurir className={style["ku"]} /> <COD className={style["rir"]} />
                                </Grid>&nbsp;
                                <Typography className={style["this-font-kurir"]}>
                                    Lihat Pilihan Kurir
                                </Typography>

                            </Grid>
                        </Grid>
                        <hr color="#F0F0F0" size="2" />
                        <Grid className={style["Desc"]}>
                            <Typography className={style["head"]}>
                                Beli di aplikasi, makin banyak promo!
                            </Typography>
                            <Grid className={style["asal-1"]}>
                                <Grid className={style["shoot"]}>
                                    <ScreenshotOutlinedIcon className={style["icon-shoot"]} />
                                </Grid> &nbsp;
                                <Grid className={style["this-asal"]}>
                                    <Typography className={style["asal-font"]}>

                                        Scan QR-nya untuk lihat barang ini di aplikasi BuluBuLu. Bebas ongkir, lho~
                                    </Typography>
                                </Grid>
                                <Grid className={style["btn-qr"]}>
                                    <Button className={style["this-btn-qr"]}>
                                        <QrCodeScannerOutlinedIcon className={style["icon-qr"]} />
                                        <Typography className={style["font-qr"]}>Scan QR</Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <hr color="#F0F0F0" size="2" />
                        <Grid className={style["Desc"]}>
                            <Grid className={style["asal-1"]}>
                                <Typography className={style["asal"]}>
                                    Ada masalah dengan produk ini ?
                                </Typography>&nbsp;
                                <Grid className={style["report-icon"]}>
                                    <ReportProblemOutlinedIcon className={style["icon-warn"]} /> &nbsp;
                                    <Typography className={style["warn"]}>
                                        Laporkan
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <hr color="#F0F0F0" size="2" />

                        <Grid>

                            <Ulasan />

                        </Grid>




                    </Grid>


                </Grid>
                <Grid className={style["col-3"]}>
                    <Card className={style["cover"]}>
                        <Typography className={style["title"]}>Atur jumlah dan catatan</Typography>
                        <Grid className={style["main"]}>
                            <Grid className={style["jumlah"]}>
                                <Button
                                    cursor="pointer"
                                    disabled={count === 0}
                                    onClick={() => {
                                        setCount(count - 1);
                                        setStok(ambilObjek.stok + 1)
                                    }}
                                >
                                    <RemoveIcon
                                    />
                                </Button>
                                <Grid className={style["angka"]}>
                                    <Typography className={style["font-angka"]}>
                                        {count}
                                    </Typography>
                                </Grid>
                                <Button cursor="pointer" onClick={() => {
                                    setCount(count + 1);
                                    setStok(ambilObjek.stok - 1)
                                }}>
                                    <AddIcon
                                    />
                                </Button>
                            </Grid>
                            <Typography className={style["stok"]}>Stok total : {ambilObjek.stok} </Typography>
                        </Grid>
                        <Grid className={style["catatan"]}>
                            {isEdit ?
                                (
                                    <Typography
                                        onClick={() => setIsEdit(false)}
                                        className={style["cat-2"]}>Batalkan catatan</Typography>
                                ) :
                                (
                                    <Typography onClick={() => setIsEdit(true)}
                                        className={style["cat"]}>Tambahkan catatan</Typography>
                                )


                            }



                            {isEdit ?
                                (
                                    <input className={style["field"]} type="text" />
                                ) : null

                            }


                        </Grid>
                        {
                            count ?
                                <Typography className={style["sub"]}>Sub Total : {ambilObjek.price}</Typography>
                                :
                                <Typography className={style["sub"]}>Sub Total : 0 </Typography>

                            }

                        <Grid className={style["button"]}>
                            <Button className={style["beli"]}>

                                <Typography className={style["font-beli"]}>
                                    Beli
                                </Typography>
                            </Button>
                            <Button className={style["keranjang"]}>
                                <Typography className={style["font-keranjang"]}>
                                    + Keranjang
                                </Typography>
                            </Button>
                        </Grid>

                    </Card>
                </Grid>










            </Container >

        </Layout >
    );
};

export default Detail;
