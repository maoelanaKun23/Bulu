import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import style from "./Bar.module.scss"

const filter = createFilterOptions();

const Bar = () => {
  const [value, setValue] = React.useState(null);
  const [open, toggleOpen] = React.useState(false);

  const handleClose = () => {
    setDialogValue({
      name: '',
      desc: '',
    });
    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    name: '',
    desc: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue({
      name: dialogValue.name,
      desc: parseInt(dialogValue.year, 10),
    });
    handleClose();
  };

  return (
    <React.Fragment>
      <Autocomplete

        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            // timeout to avoid instant validation of the dialog's form.
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                name: newValue,
                desc: '',
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
              name: newValue.inputValue,
              desc: '',
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              name: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        id="free-solo-dialog-demo"
        options={productData}
        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.name;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option.name}</li>}
        sx={{ width: 560 }}
        freeSolo
        renderInput={(params) => <TextField {...params} label="Search Here" />}
      />
      {/* <Dialog className={style["bar"]} open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Add a new film</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Did you miss any film in our list? Please, add it!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={dialogValue.name}
              onChange={(event) =>
                setDialogValue({
                  ...dialogValue,
                  name: event.target.value,
                })
              }
              label="title"
              type="text"
              variant="standard"
            />
            <TextField
              margin="dense"
              id="name"
              value={dialogValue.year}
              onChange={(event) =>
                setDialogValue({
                  ...dialogValue,
                  desc: event.target.value,
                })
              }
              label="year"
              type="number"
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </form>
      </Dialog> */}
    </React.Fragment>
  );
}

export default Bar;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
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
    name: "Samsung Tab S7 FE Garansi Resmi Indonesia",
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
    name: "Samsung A13 Garansi Resmi Indonesia",
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
    name: "Samsung S22 Garansi Resmi Indonesia",
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
  {
    id: 1,
    imageurl:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/11/7/3d7a04c3-3558-416b-ab2b-593364359575.jpg.webp?ect=4g",
    name: "Samsung A04e RAM 3 ROM 32",
    price: "Rp.1.299.000",
    origin: "Jakarta Timur",
    terjual: "4.6 | Terjual 750+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Samsung Official",
    rt: "4.6",
    stok: 320,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,
  },
  {
    id: 2,
    imageurl:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/2/17/4d4714e4-9907-4df9-a45f-98d122826dfe.png.webp?ect=4g",
    name: "Samsung S23 5G RAM 8 ROM 256",
    price: "Rp.8.000.000",
    origin: "Kab.Cirebon",
    terjual: "4.0 | Terjual 150+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Samsung Official",
    rt: "4.0",
    stok: 43,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,
  },
  {
    id: 3,
    imageurl:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/11/15/4d509fff-b2de-485d-a9e8-d53a07af872a.jpg",
    name: "Samsung A53 5G RAM 8 ROM 256",
    price: "Rp.4.300.000",
    origin: "Kab.Kuningan",
    terjual: "4.6 | Terjual 250+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Samsung Official",
    rt: "4.6",
    stok: 490,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,
  },
  {
    id: 4,
    imageurl:
      "    https://images.tokopedia.net/img/cache/900/VqbcmM/2022/11/15/aa208a11-4b99-4df2-9fbc-9f09b1123556.jpg ",
    name: "Samsung A33 5G RAM 8 ROM 256",
    price: "Rp.3.200.000",
    origin: "Kab.Cirebon",
    terjual: "4.3 | Terjual 150+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Samsung Official",
    rt: "4.3",
    stok: 65,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,

  },
  {
    id: 5,
    imageurl:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/6/30/8905ec48-5711-41f9-97b5-5b58dfdf3d98.jpg",
    name: "Samsung A23 5G RAM 8 ROM 256",
    price: "Rp.2.800.000",
    origin: "Majalaya",
    terjual: "4.5 | Terjual 400+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Samsung Official",
    rt: "4.5",
    stok: 430,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,
  },
  {
    id: 6,
    imageurl:
      "        https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/8/4/543ea2d5-b910-4337-91d1-63ad21e648f4.png.webp?ect=4g ",
    name: "Samsung Tab S7 FE RAM 8 ROM 256",
    price: "Rp.5.780.000",
    origin: "Jakarta Barat",
    terjual: "4.3 | Terjual 700+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Samsung Official",
    rt: "4.3",
    stok: 39,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,

  },
  {
    id: 7,
    imageurl:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/3/29/c25dd35d-30e0-4c7e-94b7-8bc1fb2d8a29.jpg.webp?ect=4g",
    name: "Samsung A13 RAM 4 ROM 64",
    price: "Rp.2.199.000",
    origin: "Jakarta Selatan",
    terjual: "4.4 | Terjual 350+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Samsung Official",
    rt: "4.4",
    stok: 43,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,

  },
  {
    id: 8,
    imageurl: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/9/3/a295038e-c745-412f-8913-22800b5a5783.jpg",
    name: "Samsung S22 5G RAM 8 ROM 256",
    price: "Rp.7.499.000",
    origin: "Banda Aceh",
    terjual: "4.6 | Terjual 750+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Samsung Official",
    rt: "4.6",
    stok: 350,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,
  },
  {
    id: 9,
    imageurl: "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/6/18/8d57d75f-3a0e-4a83-9057-543a034b8ece.jpg",
    name: "Samsung A73 5G RAM 8 ROM 256",
    price: "Rp.4.890.000",
    origin: "Jakarta Utara",
    terjual: "4.0 | Terjual 150+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Samsung Official",
    rt: "4.0",
    stok: 350,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,
  },
  {
    id: 10,
    imageurl: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/6/11/a5c17934-4555-4597-8551-38d64d70baae.jpg",
    name: "Samsung S21 FE RAM 8 ROM 128",
    price: "Rp.8.199.000",
    origin: "Majalengka",
    terjual: "4.8 | Terjual 1Rb+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Samsung Official",
    rt: "4.8",
    stok: 350,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,
  },
  {
    id: 11,
    imageurl: "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/2/7/12177cdd-bd95-4b63-8610-105a06e0fceb.jpg",
    name: "Samsung S22 Ultra 5G RAM 12 ROM 256",
    price: "Rp.21.990.000",
    origin: "Jakarta Pusat",
    terjual: "4.7 | Terjual 150+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Samsung Official",
    rt: "4.7",
    stok: 50,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,

  },
  {
    id: 12,
    imageurl: "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/10/19/357b6e3b-b296-45dc-8e82-ad68a02be07b.jpg",
    name: "Samsung A04 RAM 4 ROM 64",
    price: "Rp.1.980.000",
    origin: "Kab.Cirebon",
    terjual: "4.9 | Terjual 350+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Samsung Official",
    rt: "4.9",
    stok: 350,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,
  },
  {
    id: 13,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/26/ad7c1d63-e020-49f1-9dcb-2caed421a96e.jpg",
    name: "Samsung A04s RAM 4 ROM 64",
    price: "Rp.1.980.000",
    origin: "Surabaya",
    terjual: "4.7 | Terjual 100+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Samsung Official",
    rt: "4.7",
    stok: 350,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,

  },
  {
    id: 14,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/8/11/60567092-33e4-4fcf-b9a3-92a9a0aeff89.jpg",
    name: "Samsung Z-fold 4 5G RAM 12 ROM 256",
    price: "Rp.21.180.000",
    origin: "Jakarta Timur",
    terjual: "4.6 | Terjual 1Rb+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Samsung Official",
    rt: "4.6",
    stok: 350,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,

  },
  {
    id: 15,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/6/22/a4770915-5c5b-41c2-a585-0f80f17190ee.jpg",
    name: "Samsung A03 Core RAM 4 ROM 64",
    price: "Rp.980.000",
    origin: "Kota Madiun",
    terjual: "4.6 | Terjual 750+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Samsung Official",
    rt: "4.6",
    stok: 350,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,
  },
  {
    id: 16,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/7/2dcb4bca-1ce6-4c5b-9a34-97efac070767.jpg",
    name: "Samsung A71 RAM 8 ROM 128",
    price: "Rp.2.663.000",
    origin: "Bogor Raya",
    terjual: "4.7 | Terjual 10Rb+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Samsung Official",
    rt: "4.7",
    stok: 350,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,
  },
  {
    id: 17,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/product-1/2020/6/21/3967478/3967478_e7d0a863-1aa9-4770-bda5-b83f4ee48c1b_700_700.jpg",
    name: "Samsung M21 RAM 4 ROM 64",
    price: "Rp.2.600.000",
    origin: "Banten",
    terjual: "4.0 | Terjual 150+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Samsung Official",
    rt: "4.0",
    stok: 350,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,
  },
  {
    id: 18,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/14/5ce5faa8-acec-43bf-8d68-d3daaee14305.png",
    name: "Samsung A51 RAM 8 ROM 128",
    price: "Rp.2.199.000",
    origin: "Kab.Bekasi",
    terjual: "4.5 | Terjual 1Rb+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Samsung Official",
    rt: "4.5",
    stok: 350,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,

  },
  {
    id: 19,
    imageurl: "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/3/23/6f5c4d90-da03-44fa-a7db-2bd89e7abc2b.jpg.webp?ect=4g",
    name: "Samsung A50s RAM 4 ROM 64",
    price: "Rp.2.399.000",
    origin: "Indramayu",
    terjual: "4.7 | Terjual 400+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Samsung Official",
    rt: "4.7",
    stok: 350,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,
  },
  {
    id: 20,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/product-1/2020/6/29/6049900/6049900_1460eb34-821d-447d-8c2b-ceacf0557ba7_1080_1080.jpg",
    name: "Samsung A21s RAM 4 ROM 64",
    price: "Rp.2.180.000",
    origin: "Tangerang",
    terjual: "4.6 | Terjual 100+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Samsung Official",
    rt: "4.6",
    stok: 350,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,

  },
  {
    id: 21,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/6/10/5ef1f26f-8af2-4957-9290-20efaf23377b.jpg",
    name: "Samsung A30s RAM 4 ROM 64",
    price: "Rp.2.099.000",
    origin: "Depok",
    terjual: "4.8 | Terjual 150+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Samsung Official",
    rt: "4.8",
    stok: 350,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,

  },
  {
    id: 1,
    imageurl:
      "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/26/ee4dea18-0d5a-451f-8db5-ff6d40a13da5.jpg",
    name: "Realme 9 RAM 8 ROM 128",
    price: "Rp.3.299.000",
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
    price: "Rp.2.000.000",
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
    price: "Rp.1.300.000",
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
    price: "Rp.1.200.000",
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
    price: "Rp.2.800.000",
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
    price: "Rp.1.780.000",
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
    price: "Rp.2.199.000",
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
    price: "Rp.2.499.000",
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
    price: "Rp.4.890.000",
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
    price: "Rp.2.199.000",
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
    price: "Rp.1.990.000",
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
    price: "Rp.1.980.000",
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
    price: "Rp.1.980.000",
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
    price: "Rp.2.180.000",
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
    price: "Rp.3.980.000",
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
    price: "Rp.2.663.000",
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
    price: "Rp.2.600.000",
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
    price: "Rp.2.199.000",
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
    price: "Rp.2.399.000",
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
    price: "Rp.2.180.000",
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
    price: "Rp.2.099.000",
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
  {
    id: 1,
    imageurl: "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/2/10/f9081189-16ab-448f-b8db-d04819ff97df.png",
    name: "Minyak goreng 2Lt Bimoli,Sunco,Tropical",
    price: "Rp.34.000",
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
    price: "Rp.10.000",
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
    price: "Rp.90.000",
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
    price: "Rp.200.000",
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
    price: "Rp.120.000",
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
    price: "Rp.180.000",
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
    price: "Rp.99.000",
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
  {
    id: 1,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/4/5749c8e5-030b-4921-9f6c-21c143a53411.jpg",
    name: "Mistery Box isi HP | Laptop",
    price: "Rp.1.299.000",
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
    price: "Rp.86.000",
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
    price: "Rp.40.000",
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
    price: "Rp.48.000",
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
    price: "Rp.73.000",
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
    price: "Rp.10.000",
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
    price: "Rp.57.000",
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
    price: "Rp.499.000",
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
    price: "Rp.8.000",
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
    price: "Rp.19.000",
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
    price: "Rp.290.000",
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
    price: "Rp.80.000",
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
    price: "Rp.190.000",
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
    price: "Rp.96.000",
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
    price: "Rp.70.000",
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
    price: "Rp.2.100.000",
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
    price: "Rp.500.000",
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
    price: "Rp.2.199.000",
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
    price: "Rp.23.000",
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
    price: "Rp.370.000",
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
    price: "Rp.29.000",
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
  {
    id: 1,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/3/6/c54b9b7b-cce3-45da-a849-0afa52a6426a.jpg",
    name: "Infinix Note 12 RAM 6 ROM 128",
    price: "Rp.1.299.000",
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
    price: "Rp.8.000.000",
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
    price: "Rp.4.300.000",
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
    price: "Rp.3.200.000",
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
    price: "Rp.2.800.000",
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
    price: "Rp.5.780.000",
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
    price: "Rp.2.199.000",
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
    price: "Rp.7.499.000",
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
    price: "Rp.4.890.000",
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
    price: "Rp.1.199.000",
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
    price: "Rp.21.990.000",
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
    price: "Rp.1.980.000",
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
    price: "Rp.1.980.000",
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
    price: "Rp.1.180.000",
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
    price: "Rp.980.000",
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
    price: "Rp.2.663.000",
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
    price: "Rp.2.600.000",
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
    price: "Rp.2.199.000",
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
    price: "Rp.2.399.000",
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
    price: "Rp.2.180.000",
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
    price: "Rp.2.099.000",
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
  {
    id: 1,
    imageurl:
      "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/28/88388d08-8264-4498-9678-029b9ebb9b34.png",
    name: "Redmi A1 RAM 4 ROM 64",
    price: "Rp.1.299.000",
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
    price: "Rp.4.000.000",
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
    price: "Rp.4.300.000",
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
    price: "Rp.3.200.000",
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
    price: "Rp.2.800.000",
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
    price: "Rp.1.780.000",
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
    price: "Rp.2.199.000",
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
    price: "Rp.7.499.000",
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
    price: "Rp.4.890.000",
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
    price: "Rp.1.199.000",
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
    price: "Rp.1.990.000",
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
    price: "Rp.1.980.000",
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
    price: "Rp.1.980.000",
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
    price: "Rp.2.180.000",
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
    price: "Rp.2.980.000",
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
    price: "Rp.663.000",
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
    price: "Rp.2.600.000",
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
    price: "Rp.799.000",
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
    price: "Rp.2.399.000",
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
    price: "Rp.3.180.000",
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
    price: "Rp.2.099.000",
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
  {
    id: 1,
    imageurl:
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/4/7/e1dbcc8f-7a26-4ab8-ab9c-860286d1dc20.jpg",
    name: "Sneakers  Sport | Cocok Untuk Running",
    price: "Rp.99.000",
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
    price: "Rp.80.000",
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
    price: "Rp.750.000",
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
    price: "Rp.25.000",
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
    price: "Rp.85.000",
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
    price: "Rp.30.000",
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
    price: "Rp.35.000",
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
    price: "Rp.54.000",
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
    price: "Rp.15.000",
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
    price: "Rp.24.000",
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
  {
    id: 1,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/13/9930f36b-25fa-43c7-a82b-dce2d7452fc3.jpg",
    name: "Oppo A57 5G RAM 4 ROM 128",
    price: "Rp.2.299.000",
    origin: "Jakarta Timur",
    terjual: "4.6 | Terjual 750+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Oppo Official",
    rt: "4.6",
    stok: 320,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,
  },
  {
    id: 2,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/29/e0f6096b-2b56-4edf-9bf7-52a0dfdc03b2.jpg",
    name: "Oppo A77s 5G RAM 4 ROM 128",
    price: "Rp.3.000.000",
    origin: "Kab.Cirebon",
    terjual: "4.0 | Terjual 150+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Oppo Official",
    rt: "4.0",
    stok: 320,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,
  },
  {
    id: 3,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/17/b157c4a8-ec52-4dc9-808d-164ef0fef286.jpg",
    name: "Oppo A55 RAM 4 ROM 128",
    price: "Rp.2.300.000",
    origin: "Kab.Kuningan",
    terjual: "4.6 | Terjual 250+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Oppo Official",
    rt: "4.6",
    stok: 320,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,
  },
  {
    id: 4,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/15/bd19014e-ded5-46b9-a175-dcf569a01e48.jpg",
    name: "Oppo A16 RAM 4 ROM 128",
    price: "Rp.1.200.000",
    origin: "Kab.Cirebon",
    terjual: "4.3 | Terjual 150+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Oppo Official",
    rt: "4.3",
    stok: 320,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,

  },
  {
    id: 5,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/13/36d47ab1-6024-4c2a-84f4-02ba025dc354.jpg",
    name: "Oppo A57 RAM 4 ROM 128",
    price: "Rp.2.200.000",
    origin: "Majalaya",
    terjual: "4.5 | Terjual 400+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Oppo Official",
    rt: "4.5",
    stok: 320,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,
  },
  {
    id: 6,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/2/26/3e335a4f-2f22-4357-b7c7-dd8e761916b0.jpg",
    name: "Oppo Reno 2Z RAM 4 ROM 128",
    price: "Rp.1.780.000",
    origin: "Jakarta Barat",
    terjual: "4.3 | Terjual 700+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Oppo Official",
    rt: "4.3",
    stok: 320,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,

  },
  {
    id: 7,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/26/3ba4fdfa-1663-4d0b-bc64-a8635c261534.jpg",
    name: "Oppo A16K RAM 4 ROM 128",
    price: "Rp.2.199.000",
    origin: "Jakarta Selatan",
    terjual: "4.4 | Terjual 350+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Oppo Official",
    rt: "4.4",
    stok: 320,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,

  },
  {
    id: 8,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/6/f4f56ebb-0b98-4a14-af4e-3e89c03d8e36.jpg",
    name: "Oppo A31 RAM 4 ROM 128",
    price: "Rp.1.499.000",
    origin: "Banda Aceh",
    terjual: "4.6 | Terjual 750+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Oppo Official",
    rt: "4.6",
    stok: 320,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,
  },
  {
    id: 9,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/4/11b343cb-7081-4828-8b0b-fb222c5baa2c.jpg",
    name: "Oppo Reno 8 5G RAM 4 ROM 128",
    price: "Rp.4.890.000",
    origin: "Jakarta Utara",
    terjual: "4.0 | Terjual 150+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Oppo Official",
    rt: "4.0",
    stok: 320,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,
  },
  {
    id: 10,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/4/24/fa66e015-d55f-423c-96e5-fd504fca4c88.jpg",
    name: "Oppo A96 RAM 4 ROM 128",
    price: "Rp.3.199.000",
    origin: "Majalengka",
    terjual: "4.8 | Terjual 1Rb+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Oppo Official",
    rt: "4.8",
    stok: 320,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,
  },
  {
    id: 11,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/5/e41aa3f6-f3c5-466e-adba-a895f32370ac.png",
    name: "Oppo A95 RAM 4 ROM 128",
    price: "Rp.2.990.000",
    origin: "Jakarta Pusat",
    terjual: "4.7 | Terjual 150+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Oppo Official",
    rt: "4.7",
    stok: 320,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,

  },
  {
    id: 12,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/product-1/2018/12/18/41842672/41842672_d2c0aa84-7f63-4efb-adc2-6cc097b1c1dd_2048_2048",
    name: "Oppo A37 RAM 2 ROM 16",
    price: "Rp.980.000",
    origin: "Kab.Cirebon",
    terjual: "4.9 | Terjual 350+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Oppo Official",
    rt: "4.9",
    stok: 320,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,
  },
  {
    id: 13,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/4/1/17531e9d-4cd8-4193-a0a0-7961d32c4238.jpg",
    name: "Oppo A16e RAM 4 ROM 64",
    price: "Rp.980.000",
    origin: "Surabaya",
    terjual: "4.7 | Terjual 100+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Oppo Official",
    rt: "4.7",
    stok: 320,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,

  },
  {
    id: 14,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/12/0fdc4a39-8df7-462c-b48b-e148634b426b.png",
    name: "Oppo A15s RAM 4 ROM 64",
    price: "Rp.1.180.000",
    origin: "Jakarta Timur",
    terjual: "4.6 | Terjual 1Rb+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Oppo Official",
    rt: "4.6",
    stok: 320,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,

  },
  {
    id: 15,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/8/28/b6c91d90-ad19-44be-b254-624b9848b20c.jpg",
    name: "Oppo Reno 8 RAM 4 ROM 128",
    price: "Rp.3.980.000",
    origin: "Kota Madiun",
    terjual: "4.6 | Terjual 750+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Oppo Official",
    rt: "4.6",
    stok: 320,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,
  },
  {
    id: 16,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/19/0ba8e037-edc5-4f91-84b2-7581c49713a0.jpg",
    name: "Oppo F1S RAM 4 ROM 128",
    price: "Rp.1.663.000",
    origin: "Bogor Raya",
    terjual: "4.7 | Terjual 10Rb+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Oppo Official",
    rt: "4.7",
    stok: 320,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,
  },
  {
    id: 17,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/6/5f153202-df2e-4119-9947-1a2bcfa48693.jpg",
    name: "Oppo F11 RAM 4 ROM 128",
    price: "Rp.2.600.000",
    origin: "Banten",
    terjual: "4.0 | Terjual 150+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Oppo Official",
    rt: "4.0",
    stok: 320,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,
  },
  {
    id: 18,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/5/1/3a80ec6e-00a7-4750-8a7b-19c9c5b68f34.jpg",
    name: "Oppo F5 RAM 3 ROM 32",
    price: "Rp.1.199.000",
    origin: "Kab.Bekasi",
    terjual: "4.5 | Terjual 1Rb+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Oppo Official",
    rt: "4.5",
    stok: 320,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,

  },
  {
    id: 19,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/6/d28cfc94-0295-49eb-9af7-bf663bfff24c.jpg",
    name: "Oppo F9 RAM 3 ROM 32",
    price: "Rp.1.399.000",
    origin: "Indramayu",
    terjual: "4.7 | Terjual 400+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Oppo Official",
    rt: "4.7",
    stok: 320,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,
  },
  {
    id: 20,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/12/6/d37f04a2-773c-4a44-94a1-9fabcea64f8a.jpg",
    name: "Oppo A5s RAM 3 ROM 32",
    price: "Rp.1.180.000",
    origin: "Tangerang",
    terjual: "4.6 | Terjual 100+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Oppo Official",
    rt: "4.6",
    stok: 320,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,

  },
  {
    id: 21,
    imageurl: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/8/19/afb7a1cf-05f1-4f59-8085-05a0abdd2f91.png",
    name: "Oppo F5 RAM 3 ROM 32",
    price: "Rp.1.099.000",
    origin: "Depok",
    terjual: "4.8 | Terjual 150+",
    kondisi: "Baru",
    berat: "1Kg",
    kategori: "Barang Elektronik",
    eta: "Peralatan Elektronik",
    tk: "Oppo Official",
    rt: "4.8",
    stok: 320,
    ds: <p>
      This item has no description because the seller did not provide a description for this product.

    </p>,

  },
  {
    id: 1,
    imageurl:
      "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/26/ee4dea18-0d5a-451f-8db5-ff6d40a13da5.jpg",
    name: "Realme 9 RAM 8 ROM 128",
    price: "Rp.3.299.000",
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
    price: "Rp.2.000.000",
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
    price: "Rp.1.300.000",
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
    price: "Rp.1.200.000",
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
    price: "Rp.2.800.000",
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
    price: "Rp.1.780.000",
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
    price: "Rp.2.199.000",
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
    price: "Rp.2.499.000",
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
    price: "Rp.4.890.000",
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
    price: "Rp.2.199.000",
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
    price: "Rp.1.990.000",
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
    price: "Rp.1.980.000",
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
    price: "Rp.1.980.000",
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
    price: "Rp.2.180.000",
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
    price: "Rp.3.980.000",
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
    price: "Rp.2.663.000",
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
    price: "Rp.2.600.000",
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
    price: "Rp.2.199.000",
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
    price: "Rp.2.399.000",
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
    price: "Rp.2.180.000",
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
    price: "Rp.2.099.000",
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