import React from 'react'
import { Grid, Typography, Card, Button } from '@material-ui/core'
import GradeIcon from '@mui/icons-material/Grade';
import VerifiedIcon from '@mui/icons-material/Verified';
import CardContent from '@mui/material/CardContent';
import { useHistory } from 'react-router';
import style from "./PhInfinix.module.scss";
import { FormatRupiah } from '@arismun/format-rupiah';
import { TO_DETAIL_FX } from 'constants/routes';

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

const PhInfinix = () => {
    const history = useHistory();
    const detail = (name) => {
        history.push(`${TO_DETAIL_FX}/${name}`)
        localStorage.removeItem("inputValue")

    }
    return (
        <div>
            <Grid className={style["head"]}></Grid>
            <Grid className={style["head2"]}></Grid>
            <Grid className={style["cntn"]}>
                {productData.map((item, index) => {
                    return (
                        <Grid key={index} className={style["main"]}>

                            <Card onClick={() => detail(item.name)} className={style["Card"]}>
                                <img className={style["img-content"]} src={item.imageurl} />
                                <CardContent className={style["Card-bottom"]} >
                                    <Typography className={style["Desc"]}>
                                        {item.name}
                                    </Typography>


                                </CardContent>
                                <Grid className={style["Price"]}>
                                    <FormatRupiah value=
                                        {item.price} />
                                </Grid>

                                <Grid className={style["Origin"]}>
                                    <VerifiedIcon className={style["icon-place"]} />&nbsp;{item.origin}
                                </Grid>
                                <Grid className={style["terjual"]}>
                                    <GradeIcon className={style["icon-item"]} />
                                    <Typography className={style["item"]}>
                                        {item.terjual}
                                    </Typography>
                                </Grid>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
            <Grid className={style["see"]}>
                <Button className={style["btn-see"]}>
                    <Typography className={style["font-see"]}>Lihat Lebih Banyak ...</Typography>
                </Button>
            </Grid>
        </div>

    )
}

export default PhInfinix;


