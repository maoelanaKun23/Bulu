import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@material-ui/core';
import style from "./Desc.module.scss"
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Desc = ({ambilObjek}) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs

                    value={value} onChange={handleChange}
                    sx={{
                        "& text:active ": { Color: "gold" },
                    }}
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: "#F0D000",

                        }
                    }}


                >
                    <Tab text-Transform="uppercase" label="Detail" {...a11yProps(0)} />
                    <Tab label="Info Penting" {...a11yProps(1)} />
                    {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                </Tabs>
            </Box>
            <TabPanel className={style["tab-1"]} value={value} index={0}>
                <Grid className={style["parents"]}>
                    <Grid className={style["child"]}>
                        <Grid className={style["con-1"]} >
                            <Typography className={style["kondisi"]}>Kondisi :
                            </Typography>&nbsp;
                            <Typography className={style["baru"]}>
                                {ambilObjek.kondisi}
                            </Typography>
                        </Grid>
                        <Grid className={style["con-1"]} >
                            <Typography className={style["kondisi"]}>Berat Satuan :
                            </Typography>&nbsp;
                            <Typography className={style["baru"]}>
                                {ambilObjek.berat}
                            </Typography>
                        </Grid>
                        <Grid className={style["con-1"]} >
                            <Typography className={style["kategori"]}>Kategori :
                            </Typography>&nbsp;
                            <Typography className={style["item"]}>
                                {ambilObjek.kategori}
                            </Typography>
                        </Grid>
                        <Grid className={style["con-1"]} >
                            <Typography className={style["kategori"]}>Etalase :
                            </Typography>&nbsp;
                            <Typography className={style["item"]}>
                                {ambilObjek.eta}                            </Typography>
                        </Grid>
                        <Grid className={style["con-1"]} >
                            <Typography className={style["ds"]}>
                                {ambilObjek.ds}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel className={style["tab-2"]} value={value} index={1}>
                <Grid className={style["ini-info"]}>
                    <Grid className={style["ini-child"]}>
                        <Typography className={style["info"]}>Kebijakan Pengembalian Produk</Typography>
                        <Typography className={style["info-2"]}>

                            Untuk pembeli yang mengalami masalah/ keluhan pada produknya, bisa langsung melakukan komplain ke kami melalui cara sbb :
                            Pembelian yang belum melakukan review, bisa langsung melaporkan dengan tiket komplain (pusat resolusi) ketika barang sudah sampai. Kami akan bantu proses penyelesaian masalah yang dialami oleh pembeli dan akan di respon melalui pusat resolusi yang telah disediakan
                        </Typography>
                        <Typography className={style["info"]}>Ketentuan Garansi Produk</Typography>
                        <Typography className={style["info-2"]}>

                            Kebijakan / Ketentuan Garansi Produk :
                            1.Pergantian Barang Atau Tukar Unit dapat dilakukan apabila barang yang diretur tanpa cacat / lecet,Mohon Dus jgn ditulis/dilakban/plester dll...


                            2. Mohon ditulis keterangan kerusakan dikertas dan dimasukin kedalam dus (dalam paket returannya)


                            3. Untuk Barang Garansi Resmi bisa langsung ke tempat service centernya sendiri selama produk tersebut masih dalam masa garansi


                            4. Human Eror ( Kena Cairan,Jatuh,Lcd Bergaris dan pecah) = VOID / Garansi ditolak


                            5. Mohon dikirim fullset bila masih dalam waktu jangka dekat pembeliannya.
                        </Typography>
                    </Grid>
                </Grid>
            </TabPanel>
            {/* <TabPanel value={value} index={2}>
                Item Three
            </TabPanel> */}
        </Box>
    );
}

export default Desc;