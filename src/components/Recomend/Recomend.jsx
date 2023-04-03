import React, { useEffect, useState , useRef} from "react";
import { Grid, Container, Button, Popper, Card, Typography } from "@material-ui/core";
import { useParams } from "react-router";
import { useHistory } from "react-router";
import RemoveIcon from '@mui/icons-material/Remove';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
import Chat from "components/Chat";
import { Alert } from "@mui/material";
import StarRoundedIcon from '@mui/icons-material/StarRounded'; import Snackbar from '@mui/material/Snackbar';
import { FormatRupiah } from "@arismun/format-rupiah";
import Ulasan from "components/Ulasan";
import style from "./Recomend.module.scss";
import { TO_CHECKOUT_03 } from "constants/routes";



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

const productData = [
    {
        id: 1,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/4/5749c8e5-030b-4921-9f6c-21c143a53411.jpg",
        name: "Mistery Box isi HP | Laptop",
        price: 1299000,
        origin: "Jakarta Timur",
        terjual: "4.6 | Terjual 750+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Maju Jaya",
        rt: "4.6",
        stok: 150,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 2,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/3/24/88853417-fcdb-4b69-89c1-6b6c51b85881.jpg",
        name: "Peralatan Pembersih Lengkap Satu-SET",
        price: 86000,
        origin: "Kab.Cirebon",
        terjual: "4.0 | Terjual 150+", kondisi: "Baru",
        berat: "1Kg",
        kategori: "Barang Elektronik",
        eta: "Peralatan Elektronik",
        tk: "Ratatoile",
        rt: "4.0",
        stok: 2000,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 3,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/8/13/8792b2b4-4049-4484-8789-7cd66a431662.jpg",
        name: "Pengusir Serangga | Serangga minggat",
        price: 40000,
        origin: "Kab.Kuningan",
        terjual: "4.6 | Terjual 250+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Peralatan Rumah tangga",
        eta: "Peralatan Rumah tangga",
        tk: "Bulu Oficial",
        rt: "4.6",
        stok: 200,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 4,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/3/18/516232ab-c29b-4c32-bc5c-4c5e82e5be49.jpg",
        name: "Timbangan Digital Input 24 VDC",
        price: 48000,
        origin: "Kab.Cirebon",
        terjual: "4.3 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Peralatan Rumah tangga",
        eta: "Peralatan Rumah tangga",
        tk: "Bulu Oficial",
        rt: "4.3",
        stok: 280,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 5,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/10/28/cfc5ae36-9e98-427f-b415-0b0af1e44dfa.jpg",
        name: "Alat asah listrik input 12 VDC",
        price: 73000,
        origin: "Majalaya",
        terjual: "4.5 | Terjual 400+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Peralatan Rumah tangga",
        eta: "Peralatan Rumah tangga",
        tk: "Bulu Oficial",
        rt: "4.5",
        stok: 200,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 6,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/product-1/2020/7/9/107439541/107439541_f204a1ec-6601-4c7c-b734-e017191b7545_1080_1080",
        name: "Batrei Alkaline Dijamin Awet",
        price: 10000,
        origin: "Jakarta Barat",
        terjual: "4.3 | Terjual 700+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Peralatan Rumah tangga",
        eta: "Peralatan Rumah tangga",
        tk: "Bulu Oficial",
        rt: "4.3",
        stok: 20,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 7,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/9/30/42002ae3-faef-48e6-9ebb-2434696d2223.png",
        name: "Tempat Tissue Toilet dengan Rollan",
        price: 57000,
        origin: "Jakarta Selatan",
        terjual: "4.4 | Terjual 350+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Peralatan Rumah tangga",
        eta: "Peralatan Rumah tangga",
        tk: "Bulu Oficial",
        rt: "4.4",
        stok: 700,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    }, {
        id: 8,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2022/12/24/8de19e1b-79fb-46cc-bd44-db160ba61900.jpg",
        name: "Krisbow Set 42Pcs Lengkap",
        price: 499000,
        origin: "Banda Aceh",
        terjual: "4.6 | Terjual 750+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Peralatan Rumah tangga",
        eta: "Peralatan Rumah tangga",
        tk: "Bulu Oficial",
        rt: "4.6",
        stok: 200,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 9,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/19/d7fc20e3-b918-4fa5-ac95-372f63367881.jpg",
        name: "Sapu mini rumah ukuran 30x20",
        price: 8000,
        origin: "Jakarta Utara",
        terjual: "4.0 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Peralatan Rumah tangga",
        eta: "Peralatan Rumah tangga",
        tk: "Bulu Oficial",
        rt: "4.0",
        stok: 90,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 10,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2021/9/4/f58df3f0-ee5e-4f28-bd36-0553cef43bef.jpg",
        name: "Kanebo Lap bahan tebal dan tidak luntur",
        price: 19000,
        origin: "Majalengka",
        terjual: "4.8 | Terjual 1Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Peralatan Rumah tangga",
        eta: "Peralatan Rumah tangga",
        tk: "Bulu Oficial",
        rt: "4.8",
        stok: 200,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 11,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/product-1/2020/7/5/23343362/23343362_2fe7ef61-7e45-4e6a-843e-0b038cd15233_402_402",
        name: "Alat Pel set pembersih rumah ",
        price: 290000,
        origin: "Jakarta Pusat",
        terjual: "4.7 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Peralatan Rumah tangga",
        eta: "Peralatan Rumah tangga",
        tk: "Bulu Oficial",
        rt: "4.7",
        stok: 3600,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 12,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/10/8/1acebe03-2c01-4470-af0b-a0cac292fe7f.jpg",
        name: "Cetak Banner Bebas Pilih Desain",
        price: 80000,
        origin: "Kab.Cirebon",
        terjual: "4.9 | Terjual 350+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Peralatan Rumah tangga",
        eta: "Peralatan Rumah tangga",
        tk: "Bulu Oficial",
        rt: "4.9",
        stok: 200,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 13,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/10/22dbfbde-d1cb-4dab-8e76-3a6d765f1913.jpg",
        name: "Peralatan Berkebun Lengkap 1-Set",
        price: 190000,
        origin: "Surabaya",
        terjual: "4.7 | Terjual 100+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Peralatan Rumah tangga",
        eta: "Peralatan Rumah tangga",
        tk: "Bulu Oficial",
        rt: "4.7",
        stok: 200,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 14,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2023/2/26/cc0924f7-341d-4e0c-a42e-63fabe972b88.jpg",
        name: "Rak sekat kloset isi 4 tumpukan",
        price: 96000,
        origin: "Jakarta Timur",
        terjual: "4.6 | Terjual 1Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Peralatan Rumah tangga",
        eta: "Peralatan Rumah tangga",
        tk: "Bulu Oficial",
        rt: "4.6",
        stok: 200,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 15,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/4/9d61dda1-3268-41a9-8048-6dc1f54e3338.jpg",
        name: "Humidifier Original Garansi",
        price: 70000,
        origin: "Kota Madiun",
        terjual: "4.6 | Terjual 750+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Peralatan Rumah tangga",
        eta: "Peralatan Rumah tangga",
        tk: "Bulu Oficial",
        rt: "4.6",
        stok: 200,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 16,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2020/8/21/1532257d-901a-4d48-9f2a-eee199120e1c.jpg",
        name: "Filter air sumur - Membersihkan air dari bakteri.",
        price: 2100000,
        origin: "Bogor Raya",
        terjual: "4.7 | Terjual 10Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Peralatan Rumah tangga",
        eta: "Peralatan Rumah tangga",
        tk: "Bulu Oficial",
        rt: "4.7",
        stok: 200,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 17,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/5/a3990609-59b0-4ffc-a6f3-f101f581cf6e.jpg",
        name: "Pompa air listrik Sanyo",
        price: 500000,
        origin: "Banten",
        terjual: "4.0 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Peralatan Rumah tangga",
        eta: "Peralatan Rumah tangga",
        tk: "Bulu Oficial",
        rt: "4.0",
        stok: 200,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 18,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/14/5ce5faa8-acec-43bf-8d68-d3daaee14305.png",
        name: "Samsung A51 RAM 8 ROM 128 Garansi Indonesia",
        price: 2199000,
        origin: "Kab.Bekasi",
        terjual: "4.5 | Terjual 1Rb+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Peralatan Rumah tangga",
        eta: "Peralatan Rumah tangga",
        tk: "Bulu Oficial",
        rt: "4.5",
        stok: 200,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 19,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/3/4/69194fd6-3226-479c-8616-745ea74d1586.jpg",
        name: "Tempredglass antispy - Privasi aman",
        price: 23000,
        origin: "Indramayu",
        terjual: "4.7 | Terjual 400+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Peralatan Rumah tangga",
        eta: "Peralatan Rumah tangga",
        tk: "Bulu Oficial",
        rt: "4.7",
        stok: 200,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,
    },
    {
        id: 20,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2022/9/12/b513fa8e-d3bc-49d1-9aa6-c4ae635f08a2.jpg",
        name: "Troli Bagasi ukuran Besar",
        price: 370000,
        origin: "Tangerang",
        terjual: "4.6 | Terjual 100+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Peralatan Rumah tangga",
        eta: "Peralatan Rumah tangga",
        tk: "Bulu Oficial",
        rt: "4.6",
        stok: 200,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },
    {
        id: 21,
        imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/5/13/69650c0c-6d4f-41ed-9d8b-c93566ef3ea7.png",
        name: "Softcase A30s Bisa Request Gambar",
        price: 29000,
        origin: "Depok",
        terjual: "4.8 | Terjual 150+",
        kondisi: "Baru",
        berat: "1Kg",
        kategori: "Peralatan Rumah tangga",
        eta: "Peralatan Rumah tangga",
        tk: "Bulu Oficial",
        rt: "4.8",
        stok: 453,
        ds: <p>
            This item has no description because the seller did not provide a description for this product.

        </p>,

    },

]

const Recomend = () => {
    const data = useRef();
    const { name } = useParams();
    const ambilObjek = productData.filter(params => params.name == name)[0];
    console.log(ambilObjek)
    const history = useHistory();
    const [count, setCount] = useState(0);
    const [stok, setStok] = useState(ambilObjek.stok);
    const handleBeli = () => {
        history.push(`${TO_CHECKOUT_03}/${name}`)
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
                    <Typography className={style["price"]}>
                        <FormatRupiah value=

                            {ambilObjek.price} /></Typography>
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
                                <Chat className={style["icon-chat"]} />
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
                                <input className={style["field"]} type="text" ref={data} />
                            ) : null

                        }


                    </Grid>
                    {
                        count ?
                            <Typography className={style["sub"]}>Sub Total :
                                <FormatRupiah value=
                                    {ambilObjek.price * count} /></Typography>
                            :
                            <Typography className={style["sub"]}>Sub Total : 0 </Typography>

                    }

                    <Grid className={style["button"]}>
                        <Button className={style["beli"]}>

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
                        </Button>
                        <Button onClick={cart} className={style["keranjang"]}>
                            <Typography className={style["font-keranjang"]}>
                                + Keranjang
                            </Typography>
                        </Button>
                    </Grid>

                </Card>
            </Grid>










        </Container >


    );
};

export default Recomend;
