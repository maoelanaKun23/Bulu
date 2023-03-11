import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { TextField, Grid, Button } from '@material-ui/core';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import style from "./TabCard.module.scss"
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BasicTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '120%' }} className={style["this-box"]}>
      <Box sx={{ borderBottom: 1, borderColor: '#B7B7B7;' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Pulsa" {...a11yProps(0)} />
          <Tab label="Paket Data" {...a11yProps(1)} />
          <Tab label="Listrik PLN" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid className={style["tel"]}>
          <Grid className={style["telepon"]}>
            <Typography className={style["notel"]}>Nomor Telepon</Typography>
            <input variant='outlined' className={style["input-field"]} type="text" placeholder="089524376277" />
          </Grid>
          <Grid className={style["opsi"]}>
            <Typography className={style["nominal"]}>Nominal</Typography>
            <select className={style["opsimain"]} >
              <option value="null">Pilih</option>
              <option value="rigatoni">5000-Rp.7000</option>
              <option value="dave">10000-Rp.11500</option>
              <option value="pumpernickel">12000-Rp.13500</option>
              <option value="reeses">15000-Rp.17000</option>
              <option value="rigatoni">20000-Rp.21000</option>
              <option value="dave">30000-Rp.31500</option>
              <option value="pumpernickel">50000-Rp.51500</option>
              <option value="reeses">100000-Rp.101000</option>
            </select>
          </Grid>
          <Grid className={style["btn"]}>
            <Button className={style["btn-beli"]}>
              <Typography className={style["font-btn"]}>
                Beli
              </Typography>
            </Button>
          </Grid>
        </Grid>



      </TabPanel>
      <TabPanel value={value} index={1}>

        <Grid className={style["tel"]}>
          <Grid className={style["telepon"]}>
            <Typography className={style["notel"]}>Nomor Telepon</Typography>
            <input variant='outlined' className={style["input-field"]} type="text" placeholder="089524376277" />
          </Grid>
          <Grid className={style["opsi"]}>
            <Typography className={style["nominal"]}>Nominal</Typography>
            <select className={style["opsimain"]} >
              <option value="null">Pilih</option>
              <option value="rigatoni">Happy 1GB</option>
              <option value="dave">Happy 5GB</option>
              <option value="pumpernickel">Happy 10GB</option>
              <option value="reeses">Happy 15GB</option>
              <option value="rigatoni">AON 5GB</option>
              <option value="dave">AON 25GB</option>
              <option value="pumpernickel">AON 35GB</option>
              <option value="reeses">AON 55GB</option>
            </select>
          </Grid>
          <Grid className={style["btn"]}>
            <Button className={style["btn-beli"]}>
              <Typography className={style["font-btn"]}>
                Beli
              </Typography>
            </Button>
          </Grid>
        </Grid>






      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid className={style["token"]}>
          <Grid className={style["cnt"]}>
            <Typography className={style["this-nominal"]}>Jenis Produk Listrik</Typography>
            <select className={style["opsi-main"]} >
              <option >Token Listrik</option>
              <option >Tagihan Listrik</option>
              <option >PLN Non-Taglis</option>


            </select>
          </Grid>
          <Grid className={style["id-pelanggan"]}>
            <Typography className={style["nometer"]}>No Meter/ID Pel</Typography>
            <input variant='outlined' className={style["field"]} type="text" placeholder="089524376277" />
          </Grid>
          <Grid className={style["cnt"]}>
            <Typography className={style["this-nominal"]}>Nominal</Typography>
            <select className={style["opsi-main"]} >
              <option >Rp.20.000</option>
              <option >Rp.50.000</option>
              <option >Rp.70.000</option>
              <option >Rp.100.000</option>
              <option >Rp.150.000</option>
              <option >Rp.300.000</option>
              <option >Rp.500.000</option>
              <option >Rp.750.000</option>
              <option >Rp.1.000.000</option>

            </select>
          </Grid>
          <Grid className={style["btn"]}>
            <Button className={style["btn-beli"]}>
              <Typography className={style["font-btn"]}>
                Bayar
              </Typography>
            </Button>
          </Grid>
        </Grid>




      </TabPanel>
    </Box>
  );
}

export default BasicTabs;