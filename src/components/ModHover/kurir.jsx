import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core';
import style from "./kurir.module.scss"

const Kurir = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div>
            <Grid className={style["judul"]}
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                <Typography
                    className={style["font-judul"]}

                >
                    Instan
                </Typography>
            </Grid>
            <Popover
                className={style["popover"]}
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Grid className={style["bot"]}>
                    <Typography className={style["font-bot"]} sx={{ p: 1 }}>Bisa terima barang di hari yang sama (khusus kurir tertentu)</Typography>
                </Grid>
            </Popover>
        </div>
    );
}

export default Kurir;