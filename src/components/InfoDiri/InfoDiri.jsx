import React from 'react'
import { Card, Grid,Button,Typography } from '@mui/material';
import TabsDiri from 'components/TabsDiri';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { NavLink } from 'react-router-dom';
import style from "./InfoDiri.module.scss";
import { BASE_URL } from 'constants/routes';
const InfoDiri = () => {
    return (
        <div>
            {/* <NavLink className={style["NavBack"]} to={`${BASE_URL}`}>
                <Button className={style["BackButton"]}>
                    <KeyboardBackspaceRoundedIcon /><Typography className={style["Back"]}>
                        Kembali
                    </Typography>
                </Button>
            </NavLink> */}
            <Grid className={style["main"]}>
                <Card className={style["card"]}>
                    &nbsp;
                </Card>

                <Card className={style["card-2"]}>
                    <TabsDiri />

                </Card>
            </Grid>
        </div>
    )
}

export default InfoDiri