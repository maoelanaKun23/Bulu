import React, { useState } from "react";
import { Grid, Container, Button, Card, Typography } from "@material-ui/core";
import { Layout } from "components";
import { useParams } from "react-router";
import RemoveIcon from '@mui/icons-material/Remove';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import { FormatRupiah } from "@arismun/format-rupiah";
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
import { useHistory } from "react-router";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Snackbar from '@mui/material/Snackbar';
import Chat from "components/Chat";
import Ulasan from "components/Ulasan";
import style from "./DetailFx.module.scss";
import { TO_CHECKOUT_FX } from "constants/routes";
import { useRef } from "react";

const productData = [
    {
        id: 1,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/3/6/c54b9b7b-cce3-45da-a849-0afa52a6426a.jpg",
        name: "Infinix Note 12 RAM 6 ROM 128",
        price: 1299000,
        origin: "Jakarta Timur",
        terjual: "4.6 | Terjual 750+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Infinix Official",
        rt: "4.6",
        stok: 327,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 2,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/5/7/aa7abaca-601d-46c1-8aff-bfa6c1685ecb.jpg",
        name: "Infinix Hot 12i RAM 4 ROM 128",
        price: 8000000,
        origin: "Kab.Cirebon",
        terjual: "4.0 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Infinix Official",
        rt: "4.0",
        stok: 327,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 3,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/3/6/74602327-2eaa-4f90-a479-5271e88559b4.jpg",
        name: "Infinix Smart 6 RAM 4 ROM 128",
        price: 4300000,
        origin: "Kab.Kuningan",
        terjual: "4.6 | Terjual 250+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Infinix Official",
        rt: "4.6",
        stok: 327,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 4,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/2/7ba8c99b-b0b6-4605-80c5-bdd5b1ea0c3a.png",
        name: "Infinix Hot 12 Pro RAM 4 ROM 64",
        price: 3200000,
        origin: "Kab.Cirebon",
        terjual: "4.3 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Infinix Official",
        rt: "4.3",
        stok: 327,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 5,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/2/13/cf771539-e4f8-4ee8-90c0-020e47325a33.jpg",
        name: "Infinix Zero 5 RAM 4 ROM 64",
        price: 2800000,
        origin: "Majalaya",
        terjual: "4.5 | Terjual 400+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Infinix Official",
        rt: "4.5",
        stok: 327,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 6,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/14/62c22e8e-7700-4c40-819a-cf975a7ebd84.jpg",
        name: "Infinix Hot 20i RAM 4 ROM 64",
        price: 5780000,
        origin: "Jakarta Barat",
        terjual: "4.3 | Terjual 700+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Infinix Official",
        rt: "4.3",
        stok: 327,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 7,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/11/26/6f6ad6a1-625f-4bbc-b270-16e4663c6d58.jpg",
        name: "Infinix Note 12 RAM 4 ROM 64",
        price: 2199000,
        origin: "Jakarta Selatan",
        terjual: "4.4 | Terjual 350+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Infinix Official",
        rt: "4.4",
        stok: 327,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 8,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/9/4c6ef291-d3a3-4bc9-8bbc-4430f8f2090f.jpg",
        name: "Infinix Note 12 RAM 4 ROM 64",
        price: 7499000,
        origin: "Banda Aceh",
        terjual: "4.6 | Terjual 750+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Infinix Official",
        rt: "4.6",
        stok: 327,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 9,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/2/16/3212f001-78b3-4f1b-b77b-9264aa5b0907.jpg",
        name: "Infinix Hot 20s RAM 4 ROM 64",
        price: 4890000,
        origin: "Jakarta Utara",
        terjual: "4.0 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Infinix Official",
        rt: "4.0",
        stok: 327,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 10,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/2/13/4ace6d5a-46fc-47dd-a003-5c204f4b806f.jpg",
        name: "Infinix Note 11 RAM 4 ROM 64",
        price: 1190000,
        origin: "Majalengka",
        terjual: "4.8 | Terjual 1Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Infinix Official",
        rt: "4.8",
        stok: 327,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 11,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/2/26/7331f7e4-998b-436f-85f4-0e0eab51dbde.jpg",
        name: "Infinix Hote 11 Play RAM 4 ROM 64",
        price: 21990000,
        origin: "Jakarta Pusat",
        terjual: "4.7 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Infinix Official",
        rt: "4.7",
        stok: 327,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 12,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/1/c29c1a86-c066-48aa-b800-9a876b7caa68.jpg",
        name: "Infinix Note 12 RAM 4 ROM 64",
        price: 1980000,
        origin: "Kab.Cirebon",
        terjual: "4.9 | Terjual 350+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Infinix Official",
        rt: "4.9",
        stok: 327,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 13,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/8/23/563cd9f9-49ce-4dfb-a50d-a35a584db16c.jpg",
        name: "Infinix Smart 6 Plus RAM 4 ROM 64",
        price: 1980000,
        origin: "Surabaya",
        terjual: "4.7 | Terjual 100+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Infinix Official",
        rt: "4.7",
        stok: 327,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 14,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/5/31/6c084200-1634-43d8-877d-26559da7f0db.jpg",
        name: "Infinix Hot 11s RAM 4 ROM 64",
        price: 1180000,
        origin: "Jakarta Timur",
        terjual: "4.6 | Terjual 1Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Infinix Official",
        rt: "4.6",
        stok: 327,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 15,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/11/21/ab8dc565-246e-4f63-8354-46dcef76d970.jpg",
        name: "Infinix Smart 6 Plus RAM 4 ROM 32",
        price: 980000,
        origin: "Kota Madiun",
        terjual: "4.6 | Terjual 750+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Infinix Official",
        rt: "4.6",
        stok: 327,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 16,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/28/8de57102-cd9e-4ff0-bb95-186f7e9fca90.jpg",
        name: "Infinix Note 10 Pro RAM 4 ROM 64",
        price: 2663000,
        origin: "Bogor Raya",
        terjual: "4.7 | Terjual 10Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Infinix Official",
        rt: "4.7",
        stok: 327,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 17,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/1/11/6030ec17-27c3-4ea6-92f5-d11aa97c9dca.jpg",
        name: "Infinix Zero Ultra RAM 4 ROM 64",
        price: 2600000,
        origin: "Banten",
        terjual: "4.0 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Infinix Official",
        rt: "4.0",
        stok: 327,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 18,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/19/abe7fb5f-2ba1-4f9e-ba67-8b23a213ed52.jpg",
        name: "Infinix Zero x Pro RAM 4 ROM 64",
        price: 2199000,
        origin: "Kab.Bekasi",
        terjual: "4.5 | Terjual 1Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Infinix Official",
        rt: "4.5",
        stok: 327,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 19,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/3/4054c766-d41c-4447-ba9e-789e2a66f229.jpg",
        name: "Infinix i-tel vision RAM 4 ROM 64",
        price: 2399000,
        origin: "Indramayu",
        terjual: "4.7 | Terjual 400+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Infinix Official",
        rt: "4.7",
        stok: 327,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 20,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/30/47541ace-e9bf-4b2b-8fd9-9653abcf7988.jpg",
        name: "Infinix Hot 20s RAM 8 ROM 128",
        price: 2180000,
        origin: "Tangerang",
        terjual: "4.6 | Terjual 100+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Infinix Official",
        rt: "4.6",
        stok: 327,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 21,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/18/b95f1d9a-7351-42c1-a53e-c873897325be.png",
        name: "Infinix Hot 12i RAM 4 ROM 64",
        price: 2099000,
        origin: "Depok",
        terjual: "4.8 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Infinix Official",
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


const DetailFx = () => {
    const data = useRef();
    const { name } = useParams();
    const ambilObjek = productData.filter(params => params.name == name)[0];
    console.log(ambilObjek)
    const [count, setCount] = useState(0);
    const [stok, setStok] = useState(ambilObjek.stok);
    const history = useHistory();
    const handleBeli = () => {
        history.push(`${TO_CHECKOUT_FX}/${name}`)
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

export default DetailFx;
