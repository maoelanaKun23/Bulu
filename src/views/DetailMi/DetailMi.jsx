import React, { useEffect, useState } from "react";
import { Grid, Container, Button, Popper, Card, Typography } from "@material-ui/core";
import { Layout } from "components";
import { useParams } from "react-router";
import RemoveIcon from '@mui/icons-material/Remove';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import ShareIcon from '@mui/icons-material/Share';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Kurir from "components/ModHover";
import COD from "components/COD";
import { FormatRupiah } from "@arismun/format-rupiah";
import Desc from "components/DescProd";
import ScreenshotOutlinedIcon from '@mui/icons-material/ScreenshotOutlined';
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import Testing from "components/Testing";
import { Alert } from "@mui/material";
import Chat from "components/Chat";
import StarRoundedIcon from '@mui/icons-material/StarRounded'; import Snackbar from '@mui/material/Snackbar';
import { useHistory } from "react-router";
import Ulasan from "components/Ulasan";
import style from "./DetailMi.module.scss";
import { TO_CHECKOUT_MI } from "constants/routes";
import { useRef } from "react";

const productData = [
    {
        id: 1,
        imageurl:
            "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/28/88388d08-8264-4498-9678-029b9ebb9b34.png",
        name: "Redmi A1 RAM 4 ROM 64",
        price: 1299000,
        origin: "Jakarta Timur",
        terjual: "4.6 | Terjual 750+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Xiaomi Official",
        rt: "4.6",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 2,
        imageurl:
            "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/28/224757ba-5d40-4080-aaf9-de9005f97296.jpg",
        name: "Xiaomi 12 Lite RAM 4 ROM 64",
        price: 4000000,
        origin: "Kab.Cirebon",
        terjual: "4.0 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Xiaomi Official",
        rt: "4.0",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 3,
        imageurl:
            "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/11/30/385b4650-8577-4980-9873-215c5374921c.jpg",
        name: "Xiaomi 12T RAM 4 ROM 64",
        price: 4300000,
        origin: "Kab.Kuningan",
        terjual: "4.6 | Terjual 250+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Xiaomi Official",
        rt: "4.6",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 4,
        imageurl:
            "    https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/1/17/bec25350-5ca7-4af9-8c2d-a86fc7fda7b9.jpg ",
        name: "Poco M5s RAM 4 ROM 64",
        price: 3200000,
        origin: "Kab.Cirebon",
        terjual: "4.3 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Xiaomi Official",
        rt: "4.3",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 5,
        imageurl:
            "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/8/95f9c4a4-7915-44f6-a737-0d0499332863.jpg",
        name: "Mi Mix RAM 4 ROM 64",
        price: 2800000,
        origin: "Majalaya",
        terjual: "4.5 | Terjual 400+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Xiaomi Official",
        rt: "4.5",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 6,
        imageurl:
            "        https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/2/19/a75e256a-d37e-48d9-8fed-1a8115902f28.png ",
        name: "Redmi 10 RAM 4 ROM 64",
        price: 1780000,
        origin: "Jakarta Barat",
        terjual: "4.3 | Terjual 700+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Xiaomi Official",
        rt: "4.3",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 7,
        imageurl:
            "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/1/17/55b1e74c-e9dc-492c-90a2-7149d05f6009.jpg",
        name: "Redmi 10C RAM 4 ROM 64",
        price: 2199000,
        origin: "Jakarta Selatan",
        terjual: "4.4 | Terjual 350+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Xiaomi Official",
        rt: "4.4",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 8,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/11/1/714f93fd-0d42-49a1-80d7-4ed047ade596.jpg",
        name: "Poco F4 RAM 4 ROM 64",
        price: 7499000,
        origin: "Banda Aceh",
        terjual: "4.6 | Terjual 750+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Xiaomi Official",
        rt: "4.6",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 9,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/6/28/f26f77c2-1cfc-4935-8441-be41e9edb0a8.jpg",
        name: "Poco M4 Pro RAM 4 ROM 64",
        price: 4890000,
        origin: "Jakarta Utara",
        terjual: "4.0 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Xiaomi Official",
        rt: "4.0",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 10,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/12/eecb96c9-bd7b-4a4a-829b-cfe078d97bc5.jpg",
        name: "Redmi 10A RAM 2 ROM 32",
        price: 1199000,
        origin: "Majalengka",
        terjual: "4.8 | Terjual 1Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Xiaomi Official",
        rt: "4.8",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 11,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/8/18/1ce3c3bf-732a-439e-b3a5-354934828b54.jpg",
        name: "Redmi 6 RAM 4 ROM 64",
        price: 1199000,
        origin: "Jakarta Pusat",
        terjual: "4.7 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Xiaomi Official",
        rt: "4.7",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 12,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/11/1ae9ea4d-ea1c-4641-9451-4d0b78b9f0a7.jpg",
        name: "Poco C40 RAM 4 ROM 64",
        price: 1980000,
        origin: "Kab.Cirebon",
        terjual: "4.9 | Terjual 350+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Xiaomi Official",
        rt: "4.9",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 13,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/8/21/68e41426-645e-44c7-983a-a04522e73056.png",
        name: "Xiaomi Note 8 RAM 4 ROM 64",
        price: 1980000,
        origin: "Surabaya",
        terjual: "4.7 | Terjual 100+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Xiaomi Official",
        rt: "4.7",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 14,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/11/7/72b1c731-adfe-4b82-9a96-ef743bbe546d.jpg",
        name: "Poco M3 Pro RAM 4 ROM 64",
        price: 2180000,
        origin: "Jakarta Timur",
        terjual: "4.6 | Terjual 1Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Xiaomi Official",
        rt: "4.6",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 15,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/3/17/b8573d8f-2ffe-43da-b1da-5494ae3c5635.jpg",
        name: "Redmi NOte 11 RAM 4 ROM 128",
        price: 2980000,
        origin: "Kota Madiun",
        terjual: "4.6 | Terjual 750+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Xiaomi Official",
        rt: "4.6",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 16,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/31/7d021b98-0cb3-4bcd-8a51-c88fb0bebd4a.jpg",
        name: "Redmi 5A RAM 2 ROM 16",
        price: 663000,
        origin: "Bogor Raya",
        terjual: "4.7 | Terjual 10Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Xiaomi Official",
        rt: "4.7",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 17,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/1/4/cab10e2f-8c5d-4387-990a-5a0d13591529.jpg",
        name: "Redmi Pad RAM 4 ROM 64",
        price: 2600000,
        origin: "Banten",
        terjual: "4.0 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Xiaomi Official",
        rt: "4.0",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 18,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/5/10/3523a4f5-d181-4333-9ee3-2f326a9b6182.jpg",
        name: "Redmi 4A RAM 4 ROM 64",
        price: 799000,
        origin: "Kab.Bekasi",
        terjual: "4.5 | Terjual 1Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Xiaomi Official",
        rt: "4.5",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 19,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/11/8/7b7d84e2-6fe6-449e-b8e5-fc36a63208c1.png",
        name: "Poco M5 RAM 4 ROM 64",
        price: 2399000,
        origin: "Indramayu",
        terjual: "4.7 | Terjual 400+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Xiaomi Official",
        rt: "4.7",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 20,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/13/91cac4d4-595e-4851-9705-2cc8054d37c5.jpg",
        name: "Note 11 Pro RAM 6 ROM 128",
        price: 3180000,
        origin: "Tangerang",
        terjual: "4.6 | Terjual 100+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Xiaomi Official",
        rt: "4.6",
        stok: 350,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 21,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/30/c8380587-acda-46a0-8fa8-e3b2bc1014d3.jpg",
        name: "Redmi 9C RAM 4 ROM 64",
        price: 2099000,
        origin: "Depok",
        terjual: "4.8 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Xiaomi Official",
        rt: "4.8",
        stok: 350,
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


const DetailMi = () => {
    const data = useRef();
    const { name } = useParams();
    const ambilObjek = productData.filter(params => params.name == name)[0];
    console.log(ambilObjek)
    const history = useHistory();
    const [count, setCount] = useState(0);
    const [stok, setStok] = useState(ambilObjek.stok);
    const handleBeli = () => {
        history.push(`${TO_CHECKOUT_MI}/${name}`)
        localStorage.setItem("hargaBeli", (ambilObjek.price * count))
        localStorage.setItem("jumlah", count)
        console.log(data.current.value, "initial value")
        localStorage.setItem("inputValue", data.current.value)
    }
    // useEffect( () => {setStok(Prev => Prev-count)} , [count])
    const cart = () => {
        localStorage.setItem("nama", (ambilObjek.name))
        localStorage.setItem("harga", (ambilObjek.price * count))
        localStorage.setItem("gambar", (ambilObjek.imageurl))
        localStorage.setItem("hargaAwal", (ambilObjek.price))
        localStorage.setItem("jumlah", count)

    }
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
                        <Typography className={style["price"]}><FormatRupiah value={ambilObjek.price} /></Typography>
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
                                    <Chat className={style["icon-chat"]} />                                </Grid> &nbsp;
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
                                    <input ref={data} className={style["field"]} type="text" />
                                ) : null

                            }


                        </Grid>
                        {
                            count ?
                                <Typography className={style["sub"]}>Sub Total : <FormatRupiah value={ambilObjek.price * count} /></Typography>
                                :
                                <Typography className={style["sub"]}>Sub Total : 0 </Typography>

                        }

                        <Grid className={style["button"]}>
                            {
                                count ?
                                    <Button onClick={handleBeli} className={style["beli"]}>

                                        <Typography className={style["font-beli"]}>
                                            Beli
                                        </Typography>
                                    </Button>

                                    :
                                    <Button className={style["beli"]}>

                                        <Typography className={style["font-beli"]}>
                                            Beli
                                        </Typography>
                                    </Button>
                            }
                            <Button onClick={cart} className={style["keranjang"]}>
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

export default DetailMi;
