import React, { useEffect, useState, useRef } from "react";
import { Grid, Container, Button, Popper, Card, Typography } from "@material-ui/core";
import { Layout } from "components";
import { useParams } from "react-router";
import { useHistory } from "react-router";
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
import StarRoundedIcon from '@mui/icons-material/StarRounded'; import Snackbar from '@mui/material/Snackbar';
import Chat from "components/Chat";
import Ulasan from "components/Ulasan";
import style from "./PenggunaBaru.module.scss";
import { TO_CHECKOUT_NW } from "constants/routes";



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

const PenggunaBaru = () => {
    const data = useRef();
    const { id } = useParams();
    const ambilObjek = productData.filter(params => params.id == id)[0];
    console.log(ambilObjek)
    const history = useHistory();
    const [count, setCount] = useState(0);
    const [stok, setStok] = useState(ambilObjek.stok);
    const handleBeli = () => {
        history.push(`${TO_CHECKOUT_NW}/${id}`)
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
                            {ambilObjek.price} /> </Typography>
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
                            <Typography className={style["sub"]}>Sub Total : <FormatRupiah value={ambilObjek.price * count}/> </Typography>
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

export default PenggunaBaru;
