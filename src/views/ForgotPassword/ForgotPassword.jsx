import { Button, Container, Grid, Typography } from "@material-ui/core";
import { Navbar } from "components";
import { InputText } from "components/Input";
import { Form, Formik } from "formik";
import React from "react";
import styles from "./ForgotPassword.module.scss";

const ForgotPassword = () => {
    const initialValues = {
        password: "",
        code: "",
    };
    return (
        <>
            
            <Container>
                <Grid className={styles["Cntr"]}>
                    <Grid className={styles["TextContain"]}>
                        <p className={styles["TextHead"]}>
                            Enter your new password, then enter <br />
                            the verification code we just sent
                            to:
                        </p>
                        <h4 className={styles["TelpText"]}>+6289524376377</h4>
                    </Grid>
                    <Formik initialValues={initialValues}>
                        {(formik) => {
                            return (
                                <Form>
                                    <InputText label="NEW PASSWORD" name="password" type="text" />
                                    <InputText
                                        label="VERIFICATION CODE"
                                        name="code"
                                        type="number"
                                    />
                                    <Button className={styles["ButtonSave"]}>
                                        <Typography className={styles["TxtButton"]}>
                                            Save Password
                                        </Typography>
                                    </Button>
                                </Form>
                            );
                        }}
                    </Formik>
                </Grid>
            </Container>
        </>
    );
};

export default ForgotPassword;
