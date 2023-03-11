import React from 'react'
import { Typography, Card, Grid, Button } from '@material-ui/core'
import BasicTabs from 'components/TabCard';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Kategori from 'components/Kategori';
import ClassIcon from '@mui/icons-material/Class';
import style from "./ProdElc.module.scss";
const ProdElc = () => {
  return (
    <div>

      <Card className={style["card"]}>
        <Grid className={style["kate"]}>
          <Grid className={style["gori"]}>
          <Typography className={style["font-kategori"]}>Kategori Pilihan </Typography>
            <Kategori />
          </Grid>
          <Grid className={style["tablist"]}>

            <Typography className={style["font"]}>Top Up & Tagihan </Typography>
            <BasicTabs />
          </Grid>
        </Grid>

        <Grid className={style["btn-list"]}>

          <Button className={style["this-btn"]} variant="outlined">

            <ClassIcon className={style["this-icon"]} />&nbsp; Kategori

          </Button>

          <Button className={style["this-btn"]} variant="outlined"><PhoneAndroidIcon />&nbsp;Handphone & Tablet</Button>
          <Button className={style["this-btn"]} variant="outlined"><CurrencyExchangeIcon />&nbsp;Top Up & Tagihan</Button>
          <Button className={style["this-btn"]} variant="outlined"><FlightTakeoffIcon />&nbsp;Travel & Entertainment</Button>
          <Button className={style["this-btn"]} variant="outlined"><MonetizationOnIcon />&nbsp;Keuangan</Button>
          <Button className={style["this-btn"]} variant="outlined"><PhonelinkIcon />&nbsp;Komputer & Laptop</Button>
        </Grid>
      </Card>
    </div>
  )
}

export default ProdElc