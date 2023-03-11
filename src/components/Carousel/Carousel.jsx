import React from 'react'
import Carousel from "react-multi-carousel";
import { Grid, Typography } from '@material-ui/core';
import "react-multi-carousel/lib/styles.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { productData } from './data';
import PlaceIcon from '@mui/icons-material/Place';
import styles from "./Carousel.module.scss";
import GradeIcon from '@mui/icons-material/Grade';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarRateIcon from '@mui/icons-material/StarRate';
import CardItem from 'components/Card/CardItem';

const Discount = () => {


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

        renderArrowsWhenDisabled={false}
        responsive={responsive}>
        {productData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Grid className={styles["this-main"]}>

                <Card 
                hoverable
                className={styles["content"]}>
                  <Grid className={styles["cover-img"]}>
                    <img
                      className={styles["this-img"]}
                      src={item.imageurl}
                      alt="alan walker"
                    />
                  </Grid>
                  <CardContent className={styles["Card-bottom"]} >
                    <Typography className={styles["Desc"]}>
                      {item.name}
                    </Typography>


                  </CardContent>
                  <Grid className={styles["Price"]}>
                    {item.price}
                  </Grid>

                  <Grid className={styles["Origin"]}>
                    <VerifiedIcon className={styles["icon-place"]} />&nbsp;{item.origin}
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