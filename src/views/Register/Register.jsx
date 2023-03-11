import React from "react";
import { Form, Formik } from "formik";
import { Button, Container, Grid, Typography, Box } from "@material-ui/core";
import { Navbar } from "components";
import { InputPassword, InputText } from "components/Input";
import { NavLink } from "react-router-dom";
import styles from "./Register.module.scss";
import { LOGIN } from "constants/routes";

const Register = () => {
    const initialValues = {
        name: "",
        vendorName: "",
        email: "",
        phoneNumber: "",
        password: "",
    };
    return (
        <>
            <Box>
                <Container>
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
                                        <InputText label="NAME" name="name" type="text" />
                                        <InputText label="EMAIL" name="email" type="email" />
                                        <InputText
                                            label="PHONE NUMBER"
                                            name="phoneNumber"
                                            type="number"
                                        />
                                        <InputPassword label="PASSWORD" name="password" />
                                        <Grid className={styles["ButtonRegister"]}>
                                            <Button className={styles["ContentRegister"]}>
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
