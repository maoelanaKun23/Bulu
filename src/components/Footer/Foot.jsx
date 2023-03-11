import React from 'react'
import ReactDOM from 'react-dom';
import { ReactSocialMediaIcons } from 'react-social-media-icons';
import { Grid, Typography, } from '@material-ui/core';
import logo from "./logo.png"
import style from "./Footer.module.scss";
const Foot = () => {
  return (
    <div>
      <Grid className={style["foot"]}>
        <Grid>
          <Grid className={style["par-1"]}>
            <Typography className={style["head"]}>BuluBuLu</Typography>
            <Typography className={style["font"]}>Tentang BuluBuLu</Typography>
            <Typography className={style["font"]}>Hak Kekayaan Intelektual</Typography>
            <Typography className={style["font"]}>Karir</Typography>
            <Typography className={style["font"]}>Blog</Typography>
            <Typography className={style["font"]}>Bride Story</Typography>
            <Typography className={style["font"]}>BuluBuLu Affiliate Program</Typography>
            <Typography className={style["font"]}>BuluBuLu Parents</Typography>
            <Typography className={style["font"]}>Mitra Blog</Typography>
            <Typography className={style["font"]}>BuluBuLu B2B Digital</Typography>
          </Grid>
          <Grid className={style["par-2"]}>
            <Typography className={style["head"]}>Beli</Typography>
            <Typography className={style["font"]}>Tagihan & Top Up</Typography>
            <Typography className={style["font"]}>Tukar Tambah Handphone</Typography>
            <Typography className={style["font"]}>BuluBuLu COD</Typography>
          </Grid>
        </Grid>
        <Grid>
          <Grid className={style["par-1"]}>
            <Typography className={style["head"]}>Jual</Typography>
            <Typography className={style["font"]}>Pusat Edukasi Seller</Typography>
            <Typography className={style["font"]}>Mitra Bullers</Typography>
            <Typography className={style["font"]}>Daftar Official Store</Typography>
          </Grid>
          <Grid className={style["par-2"]}>
            <Typography className={style["head"]}>Bantuan dan Panduan</Typography>
            <Typography className={style["font"]}>Syarat dan Ketentuan</Typography>
            <Typography className={style["font"]}>Kebijakan Privasi</Typography>
            <Typography className={style["font"]}>Mitra</Typography>
          </Grid>
          <Grid className={style["par-2"]}>
            <Typography className={style["head"]}>Keamanan & Privasi</Typography>
            <Typography className={style["font"]}>*......</Typography>

          </Grid>
        </Grid>
        <Grid>
          <Grid className={style["par-1"]}>
            <Typography className={style["head"]}>Ikuti Kami</Typography>
            <Grid className={style["icon"]}>
              <Grid>
                <ReactSocialMediaIcons borderColor="" icon="facebook" iconColor="" backgroundColor="#ffff" url="https://instagram.com/maoelanakunn_?igshid=YmMyMTA2M2Y=" size="25" />
              </Grid>
              <Grid>
                <ReactSocialMediaIcons borderColor="rgba(0,0,0,0.25)" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" url="https://instagram.com/maoelanakunn_?igshid=YmMyMTA2M2Y=" size="25" />
              </Grid>
              <Grid>
                <ReactSocialMediaIcons borderColor="#9900cc" icon="instagram" url="https://instagram.com/maoelanakunn_?igshid=YmMyMTA2M2Y=" size="25" />
              </Grid>
              <Grid>
                <ReactSocialMediaIcons icon="youtube" url="https://instagram.com/maoelanakunn_?igshid=YmMyMTA2M2Y=" size="25" />
              </Grid>
            </Grid>
          </Grid>

        </Grid>
        <Grid className={style["par-0"]}>
          <Grid className={style["par-0"]}>
            
            <Grid className={style["logo"]}>
              <img className={style["this-logo"]} src={logo} />
              <Typography className={style["this-head"]}>PT.BuluBuLu Indonesia</Typography>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </div>
  )
}

export default Foot