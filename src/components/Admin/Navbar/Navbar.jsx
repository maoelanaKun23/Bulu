import React from "react";
import { Grid, Container } from "@material-ui/core";
import { Phone, Bell } from "assets/icons";
import { UTLogoBlack, Profile } from "assets/images";
import styles from "./Navbar.module.scss";

const NavbarMaster = () => {
  return (
    <div className={styles.navbar}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid item>
          <div className={styles.navbarTop}>
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
                      <a href="https://utconnect.unitedtractors.com/">
                        Download UT Connect Mobile App
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
                      <a href="https://utconnect.unitedtractors.com/">
                        About UT Connect
                      </a>
                    </Grid>
                    <Grid item>
                      <a href="https://utconnect.unitedtractors.com/">
                        How to Login
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </div>
        </Grid>

        <Grid item>
          <div className={styles.navbarBottom}>
            <Container>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <img
                    className={styles.logo}
                    src={UTLogoBlack}
                    alt="Logo UT"
                  />
                </Grid>

                <Grid item>
                  <Grid
                    spacing={4}
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <Grid item>
                      <img
                        className={styles.icNotification}
                        src={Bell}
                        alt="Bell Icon"
                      />
                    </Grid>
                    <Grid item>
                      <img
                        className={styles.profile}
                        src={Profile}
                        alt="Profile Icon"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default NavbarMaster;
