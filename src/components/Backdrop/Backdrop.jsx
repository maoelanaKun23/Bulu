import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Backdropp = ({open}) => {

    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress size={80} style={{'color': '#F0D000'}} />
            </Backdrop>
        </div>
    );
}
export default Backdropp;