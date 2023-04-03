import React,{useState, useEffect} from 'react'
import Carousel from "react-multi-carousel";
import { Grid, Typography } from '@material-ui/core';
import "react-multi-carousel/lib/styles.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useHistory } from 'react-router';
import API from 'api/productData';
import styles from "./Carousel.module.scss";
import { FormatRupiah } from '@arismun/format-rupiah';
import GradeIcon from '@mui/icons-material/Grade';
import { TO_DETAIL_NEW } from 'constants/routes';

const Discount = () => {
  const history = useHistory();
  const detail = (id) => {
    history.push(`${TO_DETAIL_NEW}/${id}`)
    localStorage.removeItem("inputValue")

  }
  const [penggunaBaru, SetPenggunaBaru] = useState([]);
  useEffect(() => {
    API.get('/penggunaBaru')
      .then(res => {
        SetPenggunaBaru(res.data)
      })
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 250 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 250, min: 0 },
      items: 1
    }
  };
  return (

    <Grid className={styles["box"]}>
      <Carousel
        className={styles["car"]}
        autoPlaySpeed={1500}
        centerMode

        renderArrowsWhenDisabled={true}
        responsive={responsive}>
        {penggunaBaru.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Grid className={styles["this-main"]}>

                <Card
                  onClick={() => detail(item.id)}
                  className={styles["content"]}>
                  <Grid className={styles["cover-img"]}>
                    <img
                      className={styles["this-img"]}
                      src={item.imageurl}
                      alt="Diskon Pengguna Baru"
                    />
                  </Grid>
                  <CardContent className={styles["Card-bottom"]} >
                    <Typography className={styles["Desc"]}>
                      {item.name}
                    </Typography>


                  </CardContent>
                  <Grid className={styles["Price"]}>
                    <FormatRupiah value=
                    {item.price}/>
                  </Grid>

                  <Grid className={styles["Origin"]}>
                    {item.dprice}
                    {/* <VerifiedIcon className={styles["icon-place"]} />&nbsp;{item.origin} */}
                  </Grid>
                  <Grid className={styles["terjual"]}>
                    <GradeIcon className={styles["icon-item"]} />
                    <Typography className={styles["item"]}>
                      {item.terjual}
                    </Typography>
                  </Grid>
                </Card>
              </Grid>
            </React.Fragment>
          )
        })}














      </Carousel>
    </Grid>
  )
}

export default Discount;