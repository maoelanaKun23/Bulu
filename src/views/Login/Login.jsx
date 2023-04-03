import React, { useState, useEffect, useCallback } from "react";
import { Button, Container, TextField, Grid, Typography, Link, IconButton, } from "@material-ui/core";
import { NavbarCo } from "components";
import axios from "axios";
import {
  Alert,
  CircularProgress,
} from "@mui/material";

import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styles from "./Login.module.scss";
import moment from 'moment';
import Parallax from "components/Parallax/Parallax";
import { shallowEqual, useSelector } from 'react-redux';
import { BASE_URL, DASHBOARD, FORGOT_PASS, REGISTER } from "constants/routes";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginAttempt, setLoginAttempt] = useState();
  const [errorInput, setErrorInput] = useState(false);
  const [waitingMsgFailed, setWaitingMsgFailed] = useState()
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get('http://localhost:3005/dataAkun', {
        params: {
          email: email,
          password: password
        }
      });

      if (response.data.length > 0) {
        localStorage.setItem('user', JSON.stringify(response.data[0]));
        history.push(`${BASE_URL}`);
      } else {
        alert('Invalid email or password');
        setEmail('');
        setPassword('');
        setErrorInput(true);
        setLoginAttempt(oldState => oldState + 1);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  };

  const countdownTimer = tempo => {
    const timer = tempo;

    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = timer - now;
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (seconds >= 10) {
        setWaitingMsgFailed(`0${minutes} : ${seconds}`);
      } else if (seconds < 10) {
        setWaitingMsgFailed(`0${minutes} : 0${seconds}`);
      }

      if (distance < 0) {
        clearInterval(x);

        setErrorInput(false);
        setLoginAttempt(0);
      }
    }, 1000);
  };

  useEffect(() => {
    const tempo = moment(new Date()).add(1, 'minute');
    if (loginAttempt === 3) {
      countdownTimer(tempo);
    }
  }, [loginAttempt]);

  const renderAlert = () => {
    if (errorInput) {
      if (loginAttempt < 3) {
        return <Alert severity="error">Username or Password Invalid</Alert>;
      }
      if (loginAttempt === 3) {
        return (
          <Alert severity="error">
            You Failed 3 Times, please login after {waitingMsgFailed}
          </Alert>
        );
      }
    }
  };
 console.log(loginAttempt)
  return (
    <>
      <Container >
        <Grid className={styles["parallax"]}>
          <Parallax />
        </Grid>
        <Grid className={styles["Container"]}>
          <h1 className={styles["TextLogin"]}>Login</h1>
          <p className={styles["TextSign"]}>Don't have account?&nbsp;
            <NavLink to={REGISTER} className={styles["TextSign"]} >
              SignUp
            </NavLink>
          </p>
          <div className={styles["input-control"]}>
            <span className={styles["title"]}>EMAIL/PHONE NUMBER</span>
            <div className={styles["field"]}>
              <input
                className={styles["text-field"]}
                label="EMAIL/PHONE NUMBER"
                name="email"
                type="text"
                disabled={loginAttempt === 3}

                value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <span className={styles["title-pass"]}>PASSWORD</span>
            <div className={styles["field-pass"]}>
              <input
                type="password"
                className={styles["input-password"]}
                label="PASSWORD"
                name="password"
                disabled={loginAttempt === 3}

                value={password} onChange={(event) => setPassword(event.target.value)} />

            </div>
          </div>
          <Grid className={styles["ButtonLogin"]}>
            <Button
              onClick={handleSubmit}
              className={styles["Content"]}
            >
              {/* {isLoading ? <CircularProgress color="warning" /> : */}
              <Typography className={styles["TitleButton"]}>
                Login
              </Typography>
            </Button>
          </Grid>
          {renderAlert()}

          <Grid className={styles["ForgotPass"]}>
            <NavLink className={styles["ForgotPass"]} to={FORGOT_PASS}>
              Forgot Password
            </NavLink>
          </Grid>
        </Grid>
      </Container>

    </>
  );
};

export default Login;
