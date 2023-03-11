import React from 'react'
import { Card, Grid, Typography, Button } from '@material-ui/core';
import samsung from "./samsung.png";
import Oppo from "./oppo.png"
import xiao from "./xiaologo.png"
import xi from "./xi.png"
import real from "./realme.png"
import style from "./ProdElek.module.scss";
import { NavLink } from 'react-router-dom';
import { INFINIX, OPPO, REALME, SAMSUNG, XIAOMI } from 'constants/routes';
const ProdElek = () => {
    return (
        <div className={style["this-content"]}>
            <Typography>&nbsp;</Typography>
            <Typography>&nbsp;</Typography>
            <Typography>&nbsp;</Typography>
            <Typography>&nbsp;</Typography>
            <Typography>&nbsp;</Typography>
            <Typography>&nbsp;</Typography>
            <Grid className={style["main"]}>

                <Grid className={style["content"]}>
                    <img className={style["img"]} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1000px-Samsung_Logo.svg.png" />
                </Grid>

                <Grid className={style["Card"]}>
                    <img className={style["img-content"]} src={samsung} />
                    <NavLink className={style["samsung"]}
                        to={`${SAMSUNG}`}>
                        <Button className={style["btn-samsung"]}>Beli</Button>
                    </NavLink>

                </Grid>
            </Grid>
            {/* ========================================== */}
            <Grid className={style["main"]}>
                <Grid className={style["content2"]}>
                    <img className={style["img2"]} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/OPPO_LOGO_2019.svg/2560px-OPPO_LOGO_2019.svg.png" />
                </Grid>

                <Grid className={style["Card2"]}>
                    <img className={style["img-content2"]} src={Oppo} />
                    <NavLink className={style["oppo"]}
                        to={`${OPPO}`}>
                        <Button className={style["btn-oppo"]}>Beli</Button>
                    </NavLink>

                </Grid>
            </Grid>
            {/* ========================================== */}
            <Grid className={style["main"]}>
                <Grid className={style["content3"]}>
                    <img className={style["img3"]} src={xiao} />
                </Grid>

                <Grid className={style["Card3"]}>
                    <img className={style["img-content3"]} src={xi} />
                    <NavLink className={style["xiao"]}
                        to={`${XIAOMI}`}>
                        <Button className={style["btn-xiao"]}>Beli</Button>
                    </NavLink>

                </Grid>
            </Grid>
            {/* ========================================== */}
            <Grid className={style["main"]}>
                <Grid className={style["content4"]}>
                    <img className={style["img4"]} src="data:image/png;base64,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" />
                </Grid>

                <Grid className={style["Card4"]}>
                    <img className={style["img-content4"]} src={real} />
                    <NavLink className={style["realme"]}
                        to={`${REALME}`}>
                        <Button className={style["btn-realme"]}>Beli</Button>
                    </NavLink>

                </Grid>
            </Grid>
            {/* ========================================== */}
            <Grid className={style["main"]}>
                <Grid className={style["content5"]}>
                    <img className={style["img5"]} src="https://upload.wikimedia.org/wikipedia/id/c/c9/Infinix_Logo.png" />
                </Grid>

                <Grid className={style["Card5"]}>
                    <img className={style["img-content5"]} src="https://id.infinixmobility.com/fileadmin/assets/v/hot/hot20_5g/list/hot205g_list.png" />
                    <NavLink className={style["infi"]}
                        to={`${INFINIX}`}>
                        <Button className={style["btn-infi"]}>Beli</Button>
                    </NavLink>

                </Grid>
            </Grid>



        </div>
    )
}

export default ProdElek