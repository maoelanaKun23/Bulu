import React, { useEffect, useState } from "react";
import { Grid, Container, Button, Popper, Card, Typography } from "@material-ui/core";
import { Layout } from "components";
import { useParams } from "react-router";
import RemoveIcon from '@mui/icons-material/Remove';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FormatRupiah } from "@arismun/format-rupiah";
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
import Chat from "components/Chat";
import Ulasan from "components/Ulasan";
import { useHistory } from "react-router";
import style from "./DetailRealme.module.scss";
import { TO_CHECKOUT_RL } from "constants/routes";
import { useRef } from "react";

const productData = [
    {
        id: 1,
        imageurl:
            "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/26/ee4dea18-0d5a-451f-8db5-ff6d40a13da5.jpg",
        name: "Realme 9 RAM 8 ROM 128",
        price: 3299000,
        origin: "Jakarta Timur",
        terjual: "4.6 | Terjual 750+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Realme Official",
        rt: "4.8",
        stok: 400,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 2,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/6/762313c3-a4bc-4d97-a79a-5e5a146db4e9.jpg",
        name: "Realme Narzo 50i RAM 8 ROM 128",
        price: 2000000,
        origin: "Kab.Cirebon",
        terjual: "4.0 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Realme Official",
        rt: "4.0",
        stok: 420,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 3,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/3/30/bd9cb25f-3551-4d89-9918-f7d32bcb933c.jpg",
        name: "Realme C35 RAM 8 ROM 128",
        price: 1300000,
        origin: "Kab.Kuningan",
        terjual: "4.6 | Terjual 250+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Realme Official",
        rt: "4.6",
        stok: 400,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 4,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/22/29e4d712-bf3c-4ba6-8108-d6864d337783.jpg",
        name: "Realme C30 RAM 8 ROM 128",
        price: 1200000,
        origin: "Kab.Cirebon",
        terjual: "4.3 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Realme Official",
        rt: "4.3",
        stok: 780,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 5,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/2/2/cc178bbe-e905-482b-b732-369016f2a93d.jpg",
        name: "Realme 10 Pro RAM 8 ROM 128",
        price: 2800000,
        origin: "Majalaya",
        terjual: "4.5 | Terjual 400+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Realme Official",
        rt: "4.5",
        stok: 400,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 6,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/11/16/ddd9f7fb-bda2-48ba-880c-d0acbd702070.jpg",
        name: "Realme C25Y RAM 8 ROM 128",
        price: 1780000,
        origin: "Jakarta Barat",
        terjual: "4.3 | Terjual 700+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Realme Official",
        rt: "4.3",
        stok: 400,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 7,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/14/6cab23cc-f315-475c-85d8-8d2758770e61.jpg",
        name: "Realme Narzo 50A RAM 8 ROM 128",
        price: 2199000,
        origin: "Jakarta Selatan",
        terjual: "4.4 | Terjual 350+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Realme Official",
        rt: "4.4",
        stok: 400,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 8,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/20/d3374368-7128-4297-9888-d12f6eaeed39.jpg",
        name: "Realme 10 RAM 8 ROM 128",
        price: 2499000,
        origin: "Banda Aceh",
        terjual: "4.6 | Terjual 750+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Realme Official",
        rt: "4.6",
        stok: 400,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 9,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/10/27/9f13d14e-1087-42b9-97b2-dff5829852cf.jpg",
        name: "Realme C11 RAM 4 ROM 64",
        price: 4890000,
        origin: "Jakarta Utara",
        terjual: "4.0 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Realme Official",
        rt: "4.0",
        stok: 420,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 10,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/11/9/9de64470-328e-4991-9272-cc4436de5ab1.jpg",
        name: "Realme C31 RAM 4 ROM 64",
        price: 2199000,
        origin: "Majalengka",
        terjual: "4.8 | Terjual 1Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Realme Official",
        rt: "4.8",
        stok: 400,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 11,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/20/b9f97060-51fe-4467-97c2-53cd5f22edda.jpg",
        name: "Realme C33 RAM 4 ROM 64",
        price: 1999000,
        origin: "Jakarta Pusat",
        terjual: "4.7 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Realme Official",
        rt: "4.7",
        stok: 400,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 12,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/6/5dd68d7f-24d5-476d-8572-b4ff4e45fa78.jpg",
        name: "Realme 8 Pro RAM 4 ROM 64",
        price: 1980000,
        origin: "Kab.Cirebon",
        terjual: "4.9 | Terjual 350+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Realme Official",
        rt: "4.9",
        stok: 400,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 13,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/6/09e7ff5b-1384-4b99-b3e6-4b002eaac82b.png",
        name: "Realme 9Pro+ RAM 4 ROM 64",
        price: 1980000,
        origin: "Surabaya",
        terjual: "4.7 | Terjual 100+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Realme Official",
        rt: "4.7",
        stok: 400,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 14,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/9/15/e0f5d5e1-de65-42b9-a4df-44867b28fe78.jpg",
        name: "Realme 7Pro RAM 4 ROM 64",
        price: 2180000,
        origin: "Jakarta Timur",
        terjual: "4.6 | Terjual 1Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Realme Official",
        rt: "4.6",
        stok: 400,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 15,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/1/4/350f0b4c-4b6d-4e2c-85f0-96b07cb26c31.jpg",
        name: "Realme 10 Pro RAM 8 ROM 128",
        price: 3980000,
        origin: "Kota Madiun",
        terjual: "4.6 | Terjual 750+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Realme Official",
        rt: "4.6",
        stok: 400,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 16,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/3/2/06d71c4c-02a4-4307-9b7a-74c515a1c573.jpg",
        name: "Realme Narzo 50A RAM 8 ROM 128",
        price: 2663000,
        origin: "Bogor Raya",
        terjual: "4.7 | Terjual 10Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Realme Official",
        rt: "4.7",
        stok: 327,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 17,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/3/7/deba62b1-83a5-415e-a6a6-b066f9eb445a.png",
        name: "Realme C55 RAM 8 ROM 128",
        price: 2600000,
        origin: "Banten",
        terjual: "4.0 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Realme Official",
        rt: "4.0",
        stok: 327,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 18,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/2/10/e26e3afe-72f5-4db9-9b7b-0940bf27add0.jpg",
        name: "Realme C30s RAM 8 ROM 128",
        price: 2199000,
        origin: "Kab.Bekasi",
        terjual: "4.5 | Terjual 1Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Realme Official",
        rt: "4.5",
        stok: 327,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 19,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/20/2eb1da5a-5d13-41ca-b971-daef62c72f62.jpg",
        name: "Realme GT Master RAM 8 ROM 128",
        price: 2399000,
        origin: "Indramayu",
        terjual: "4.7 | Terjual 400+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Realme Official",
        rt: "4.7",
        stok: 327,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 20,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/6/3/c29eeb36-1f36-4359-84aa-d9011646ed94.jpg",
        name: "Realme GT Neo RAM 8 ROM 128",
        price: 2180000,
        origin: "Tangerang",
        terjual: "4.6 | Terjual 100+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Realme Official",
        rt: "4.6",
        stok: 327,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 21,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/1/c9ef241b-db7f-4bc0-906d-572faf05bbfe.jpg",
        name: "Realme C11 RAM 8 ROM 128",
        price: 2090000,
        origin: "Depok",
        terjual: "4.8 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Realme Official",
        rt: "4.8",
        stok: 327,
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


const DetailR = () => {
    const data = useRef();
    const { name } = useParams();
    const ambilObjek = productData.filter(params => params.name == name)[0];
    console.log(ambilObjek)
    const [count, setCount] = useState(0);
    const [stok, setStok] = useState(ambilObjek.stok);
    const history = useHistory();
    const handleBeli = () => {
        history.push(`${TO_CHECKOUT_RL}/${name}`)
        localStorage.setItem("hargaBeli", (ambilObjek.price * count))
        localStorage.setItem("jumlah", count)
        console.log(data.current.value, "initial value")
        localStorage.setItem("inputValue", data.current.value)
    }
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
    const cart = () => {
        localStorage.setItem("nama", (ambilObjek.name))
        localStorage.setItem("harga", (ambilObjek.price * count))
        localStorage.setItem("gambar", (ambilObjek.imageurl))
        localStorage.setItem("hargaAwal", (ambilObjek.price))
        localStorage.setItem("jumlah", count)

    }
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
                                <Typography className={style["sub"]}>Sub Total :<FormatRupiah value={ambilObjek.price * count} /></Typography>
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

export default DetailR;
