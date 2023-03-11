import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const data = [
    {
        no:4,
    },
] 

const BasicRating = () => {
    
    const [nilai, setNilai] = React.useState(4);
    
    const [value, setValue] = React.useState(nilai);

    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            
            <Rating
                name="read-only"
                value={value}
                readOnly
            // onChange={(event, newValue) => {
            //   setValue(newValue);
            // }}
            />
            
            
        </Box>
    );
}

export default BasicRating;