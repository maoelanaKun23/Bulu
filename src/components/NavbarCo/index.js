import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {  BuluBulu } from "../../assets/images";
import { NavLink } from 'react-router-dom';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import style from "./NavbarCo.module.scss"
import {  BASE_URL } from 'constants/routes';

const NavbarCo = () => {
    return (
        <Grid className={style["content"]}>
            <img className={style["logo"]} src={BuluBulu} alt="Logo Kami" />
            <NavLink className={style["NavBack"]} to={`${BASE_URL}`}>
                <Button className={style["BackButton"]}>
                    <KeyboardBackspaceRoundedIcon /><Typography className={style["Back"]}>
                        Kembali
                    </Typography>
                </Button>
            </NavLink>
        </Grid >
    )
}
export default NavbarCo;