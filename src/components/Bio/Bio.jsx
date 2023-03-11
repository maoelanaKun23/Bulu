import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Card, Grid, Typography } from '@mui/material';
import style from "./Bio.module.scss";

const Bio = () => {
  const dataBio = [
    {
      nama: "Yusuf Maulana",
      ttl: "06-Maret-2003",
      jk: "Pria",
      email: "maoelanakun23@gmail.com",
      nohp: "089524376377"

    }
  ]
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);


  const [edit, setEdit] = useState(false);
  const [edit2, setEdit2] = useState(false);
  const [edit3, setEdit3] = useState(false);
  const [edit4, setEdit4] = useState(false);
  const [edit5, setEdit5] = useState(false);

  return (
    <div className={style["col"]}>
      <Grid className={style["col-1"]}>
        <Card className={style["card"]}>
          {imageUrl && selectedImage && (
            <Box className={style["box-card"]} mt={2} textAlign="center">

              <img src={imageUrl} className={style["image"]} alt={selectedImage.name} height="100px" />
            </Box>
          )}


        </Card>
        <br />
        <input

          accept="image/*"
          type="file"
          id="select-image"
          style={{ display: "none" }}
          onChange={(e) => setSelectedImage(e.target.files[0])}
        />
        <label htmlFor="select-image">
          <Button variant="contained" color="primary" component="span">
            Tambahkan Foto
          </Button>
        </label>
      </Grid>
      <Grid className={style["col-2"]}>
        {dataBio.map((item, index) => {
          return (
            <React.Fragment key={index} >
              <Grid className={style["f"]}>
                <Grid className={style["f-1"]}>
                  <Typography className={style["font-head"]}>Nama   </Typography>
                  <Typography className={style["font-head"]}>Tanggal Lahir   </Typography>
                  <Typography className={style["font-head"]}>Jenis Kelamin  </Typography>
                  <Typography className={style["font-head"]}>Nomor HP   </Typography>
                  <Typography className={style["font-head"]}>Email  </Typography>

                </Grid>
                <Grid className={style["f-2"]}>
                  {
                    edit ?
                      <Typography contenteditable="true" className={style["font"]}> {item.nama}
                        <Typography
                          onClick={() => setEdit(false)}
                          className={style["btn-font"]}>Save</Typography>
                      </Typography> :
                      <Typography className={style["font"]}> {item.nama}
                        <Typography
                          onClick={() => setEdit(true)}
                          className={style["btn-font"]}>Ubah</Typography>
                      </Typography>
                  }
                  {
                    edit2 ?
                      <Typography contenteditable="true" className={style["font"]}> {item.ttl}
                        <Typography
                          onClick={() => setEdit2(false)}
                          className={style["btn-font"]}>Save</Typography>
                      </Typography> :
                      <Typography className={style["font"]}> {item.ttl}
                        <Typography
                          onClick={() => setEdit2(true)}
                          className={style["btn-font"]}>Ubah</Typography>
                      </Typography>
                  }
                  {
                    edit3 ?
                      <Typography contenteditable="true" className={style["font"]}> {item.jk}
                        <Typography
                          onClick={() => setEdit3(false)}
                          className={style["btn-font"]}>Save</Typography>
                      </Typography> :
                      <Typography className={style["font"]}> {item.jk}
                        <Typography
                          onClick={() => setEdit3(true)}
                          className={style["btn-font"]}>Ubah</Typography>
                      </Typography>
                  }
                  {
                    edit4 ?
                      <Typography contenteditable="true" className={style["font"]}> {item.nohp}
                        <Typography
                          onClick={() => setEdit4(false)}
                          className={style["btn-font"]}>Save</Typography>
                      </Typography> :
                      <Typography className={style["font"]}> {item.nohp}
                        <Typography
                          onClick={() => setEdit4(true)}
                          className={style["btn-font"]}>Ubah</Typography>
                      </Typography>
                  }
                  {
                    edit5 ?
                      <Typography contenteditable="true" className={style["font"]}> {item.email}
                        <Typography
                          onClick={() => setEdit5(false)}
                          className={style["btn-font"]}>Save</Typography>
                      </Typography> :
                      <Typography className={style["font"]}> {item.email}
                        <Typography
                          onClick={() => setEdit5(true)}
                          className={style["btn-font"]}>Ubah</Typography>
                      </Typography>
                  }





                </Grid>



              </Grid>
            </React.Fragment>
          )
        })}


      </Grid>
    </div>
  )
}

export default Bio




