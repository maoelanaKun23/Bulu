import React from 'react';
import { Card, Grid, Typography } from '@material-ui/core';

import tas from "./img/tas.png";
import pika from "./img/pika.png";
import makan from "./img/makan.png";
import sp from "./img/sp.png";
import style from "./Kategori.module.scss";

const product = [
    {
        imageUrl: "https://i.pinimg.com/564x/b6/e9/87/b6e987182472650078856fc50f3c2fcc.jpg",
        desc: "Sepatu"
    },
    {
        imageUrl: "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/3/13/cd138cce-3b91-4cd4-b6a6-aef7d061538a.jpg",
        desc: "Makanan Ringan"
    },
    {
        imageUrl: "https://i.pinimg.com/564x/dd/a7/66/dda766ca7404e950bc930049b713d744.jpg",

        desc: "Figure"
    },
    {
        imageUrl: "https://i.pinimg.com/564x/54/86/91/5486912ae4d150107af89c8be48baaf8.jpg",
        desc: "Tas Wanita"
    },
    {
        imageUrl: "https://jadistore.com/wp-content/uploads/2018/04/sandisk-cruzer-blade.jpg",
        desc: "Flash Disk"
    }

]

const Kategori = () => {
    return (
        <div className={style["this-card"]}>
            {product.map((item, index) => {
                return (
                    <React.Fragment key={index}>

                        <Card className={style["card"]}>
                            <img src={item.imageUrl} className={style["img"]} />
                            <Typography className={style["font"]}>{item.desc}</Typography>
                        </Card>


                    </React.Fragment>
                )
            })}

        </div>
    )
}

export default Kategori