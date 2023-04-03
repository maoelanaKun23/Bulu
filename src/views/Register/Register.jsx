import React, { useState } from "react";
import axios from "axios";
import { Form, Formik } from "formik";
import { Button, Container, Grid, Typography, Box } from "@material-ui/core";
import { InputPassword, InputText } from "components/Input";
import { NavLink } from "react-router-dom";
import Parallax from "components/Parallax/Parallax";
import { toast } from "react-toastify";

import styles from "./Register.module.scss";
import { useHistory } from "react-router-dom";
import { LOGIN } from "constants/routes";

const Register = () => {
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [name, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const initialValues = {
        email: "",
        phone: "",
        name: "",
        password: "",
      };
    const history = useHistory();

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (name === null || name === '') {
            isproceed = false;
            errormessage += ' Fullname';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }

        if (!isproceed) {
            toast.warning(errormessage)
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

            } else {
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        }
        return isproceed;
    }


    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = { email, phone, name, password, };
        if (IsValidate()) {
            //console.log(regobj);
            fetch("http://localhost:3005/dataAkun", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                toast.success('Registered successfully.')
                history.push(`${LOGIN}`)
            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });
        }
    }
    return (
        <>
            <Box>
                <Container>
                    <Grid>
                        <Parallax />
                    </Grid>
                    <Grid className={styles["Register"]}>
                        <h1 className={styles["RegisterTitle"]}>Create new Account</h1>
                        <p className={styles["TextAlready"]}>Already Registered?&nbsp;
                            <NavLink to={LOGIN} className={styles["TextAlready"]}>
                                Login
                            </NavLink>
                        </p>
                        <Formik initialValues={initialValues}>
                            {(formik) => {
                                return (
                                    <Form>
                                        <InputText label="NAME" name="name" type="text"
                                            value={name} onChange={e => namechange(e.target.value)}
                                        />
                                        <InputText label="EMAIL" name="email" type="email"
                                            value={email} onChange={e => emailchange(e.target.value)} />
                                        <InputText
                                            label="PHONE NUMBER"
                                            name="phoneNumber"
                                            type="number"
                                            value={phone} onChange={e => phonechange(e.target.value)}
                                        />
                                        <InputPassword label="PASSWORD" name="password"
                                            value={password} onChange={e => passwordchange(e.target.value)}
                                        />
                                        <Grid onClick={handlesubmit} className={styles["ButtonRegister"]}>
                                            <Button  className={styles["ContentRegister"]}>
                                                <Typography className={styles["TButton"]}>
                                                    Sign Up
                                                </Typography>
                                            </Button>
                                        </Grid>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Register;
