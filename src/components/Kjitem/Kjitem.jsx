import React, {useState} from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import { FormatRupiah } from '@arismun/format-rupiah';
import { Button, Grid } from '@mui/material';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';
import style from "./Kjitem.module.scss"

const nama = localStorage.getItem("nama")
const harga = localStorage.getItem("harga")
const gambar = localStorage.getItem("gambar")
const hargaAwal = localStorage.getItem("hargaAwal")
const berapa = localStorage.getItem("jumlah")
// const data = () => {
//     localStorage.getItem("nama")
//     localStorage.getItem("harga")
//     localStorage.getItem("gambar")
// }
// const [ oke, setOke] = useState()
// console.log(oke)

const hapus = () => {
    localStorage.clear()
    // localStorage.removeItem("nama");
    // localStorage.removeItem("gambar");
    // localStorage.removeItem("harga");
}


const Kjitem = () => {
    return (
        <Sheet
            variant="outlined"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                width: 350,
                maxHeight: 550,
                borderRadius: 'sm',
            }}
        >
            <List sx={{ py: 'var(--ListDivider-gap)' }}>


                <ListItem>
                    <ListItemButton sx={{ gap: 2 }}>
                        <AspectRatio
                            sx={{ flexBasis: 150, borderRadius: 'sm', overflow: 'auto' }}
                        >
                            <img
                                src={`${gambar}?w=120&fit=crop&auto=format`}
                                srcSet={`${gambar}?w=120&fit=crop&auto=format&dpr=2 2x`}
                                alt={nama}
                            />
                        </AspectRatio>
                        <ListItemContent>
                            <Typography fontWeight="md">{nama}</Typography>
                            <Typography level="body2"><FormatRupiah value={hargaAwal} /> x {berapa}</Typography>
                        </ListItemContent>
                    </ListItemButton>
                </ListItem>


            </List>
            <Grid className={style["fnt"]}>
                <Typography className={style["total"]}>Total : <FormatRupiah value={harga} /></Typography>
            </Grid>
            <Grid className={style["btn-0"]}>
                <Button className={style["btn"]}>Beli</Button>
            </Grid>
            <Grid onclick={hapus} className={style["btn-0"]}>
                <Button  className={style["btn"]}>Hapus</Button>
            </Grid>
            <br />
        </Sheet>
    );
}
export default Kjitem;