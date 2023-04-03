import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Rute from 'components/Rute';
import { Grid } from '@mui/material';
import statusData from "../../dummy/data-status-detail.js";
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { Timeline } from "components";

import style from "./TbRute.module.scss"

const TbRute = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            {
                open ?

                    <Grid className={style["track"]}
                        onClick={handleClick}>
                        <ArrowDropDownRoundedIcon className={style["icon"]} />

                        <Typography className={style["font"]}>Tracking Pesanan...  </Typography>
                    </Grid>
                    :
                    <Grid className={style["track"]}
                        onClick={handleClick}>
                        <ArrowDropUpRoundedIcon className={style["icon"]} />

                        <Typography className={style["font"]}>Tracking Pesanan...  </Typography>
                    </Grid>


            }



            <Popover
                className={style["popover"]}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Timeline.StatusTimeline

                    datas={statusData} />
            </Popover>
        </div>
    );
}

export default TbRute;