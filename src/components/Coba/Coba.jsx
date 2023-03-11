import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';

const PositionedPopper = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    const renderContent = () => {
        // if (placement === "top-start") {
        //     return <div>content 1</div>
        // }else if ( placement === "top"){
        //     return <div>content 2</div>
        // }else if ( placement === "top-end"){
        //     return <div>content 3</div>
        // }
        switch (placement) {
            case "top-start":
                return <div>content 1</div>
                break;
            case "top":
                return <div>content 2</div>
                break;
            case "top-end":
                return <div>content 3</div>
                break;
            default:
                
                return <div>content </div>
                
                break;
        }
    }
    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    return (
        <Box sx={{ width: 500 }}>
            <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            {renderContent()}
                            {/* <Typography sx={{ p: 2 }}>The content of the Popper.</Typography> */}
                        </Paper>
                    </Fade>
                )}
            </Popper>
            <Grid container justifyContent="center">
                <Grid item>
                    <Button onClick={handleClick('top-start')}>top-start</Button>
                    <Button onClick={handleClick('top')}>top</Button>
                    <Button onClick={handleClick('top-end')}>top-end</Button>
                </Grid>
            </Grid>


        </Box>
    );
}

export default PositionedPopper;