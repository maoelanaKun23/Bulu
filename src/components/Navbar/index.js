import React from "react";
import { Grid, Container } from "@material-ui/core";
import { Phone, Bell } from "../../assets/icons";
import { UTLogoBlack, Profile, BuluBulu } from "../../assets/images";
import { getFromLocalStorage } from "utils/userLocalServices";
import NavbarBot from "components/NavbarBot";
import Search from "components/Search";

import style from "./Navbar.module.scss";

const Navbar = () => {
  const isUserLog = getFromLocalStorage();
  return (
    <div className={style.navbar}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid item>
          <div className={style.navbarTop}>
            <Container>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Grid
                    spacing={1}
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Grid item>
                      <img src={Phone} alt="Phone Icon" />
                    </Grid>
                    <Grid item>
                      <a href="">
                        Download BuluBuLu Mobile App
                      </a>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid
                    spacing={2}
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Grid item>
                      <a href="">
                        Tentang BuluBuLu
                      </a>
                    </Grid>
                    <Grid item>
                      <a href="">
                        Mitra BuluBuLu
                      </a>
                    </Grid>
                    <Grid item>
                      <a href="">
                        Promo
                      </a>
                    </Grid>
                    <Grid item>
                      <a href="">
                        BuluBuLu Care
                      </a>
                    </Grid>
                    <Grid item>
                      <a href="">
                        How to Login
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </div>
        </Grid>
        <NavbarBot/>
        
        
      </Grid>
    </div>
  );
};

export default Navbar;
