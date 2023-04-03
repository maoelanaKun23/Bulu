
import React, { useState, useRef } from "react";
import { useHistory } from 'react-router-dom'
import { Grid, Container, Button, Card, Typography } from "@material-ui/core";
import { FormatRupiah } from "@arismun/format-rupiah";
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
import Desc from "components/DescProd";
import ScreenshotOutlinedIcon from '@mui/icons-material/ScreenshotOutlined';
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import Testing from "components/Testing";
import { Alert } from "@mui/material";
import StarRoundedIcon from '@mui/icons-material/StarRounded'; import Snackbar from '@mui/material/Snackbar';
import Chat from "components/Chat";
import Ulasan from "components/Ulasan";
import style from "./DetailDiskon.module.scss";
import { TO_CHECKOUT_01, } from "constants/routes";



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

const DetailDiskon = () => {
    const data = useRef();

    const { name } = useParams();
    const history = useHistory();
    const ambilObjek = productData.filter(params => params.name == name)[0];
    console.log(ambilObjek)
    const [count, setCount] = useState(0);
    const [stok, setStok] = useState(ambilObjek.stok);
    const [hasil, setHasil] = useState()
    const [isEdit, setIsEdit] = useState(false);
    console.log(isEdit)
    const [follow, setFollow] = useState(false);
    const [buka, setBuka] = React.useState(false);
    const handleklik = () => {
        setBuka(true);
    };
    const hapusCatat = () => {
        setCount(count + 1);
        setStok(ambilObjek.stok - 1)
        localStorage.removeItem("inputValue")
    }

    const handleTutup = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setBuka(false);
    };
    const [userName, setUserName] = useState();
    const handleChange = (event) => {
        const values = [...userName]
        values[event.target.name] = event.target.value
        setUserName(values)

    };
    const handleBeli = () => {
        history.push(`${TO_CHECKOUT_01}/${name}`)
        localStorage.setItem("hargaBeli", (ambilObjek.price * count))
        localStorage.setItem("jumlah", count)
        localStorage.setItem("Username", (userName));
        console.log(data.current.value, "initial value")
        localStorage.setItem("inputValue", data.current.value)
        

    }
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
        </React.Fragment>
    );


    return (
        <>
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
                            <FormatRupiah
                                value=
                                {ambilObjek.price} />

                        </Typography>
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
                                    < FormatRupiah value={ambilObjek.price * count} />


                                </Typography>
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

        </>
    );
};

export default DetailDiskon;

