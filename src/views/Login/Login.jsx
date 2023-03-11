import React from "react";
import { Button, Container, Grid, Typography, Card } from "@material-ui/core";
import { Navbar } from "components";
import { Formik, Form, useFormik } from "formik";
import { loginSchema } from "schemas/form";
// import { InputText } from "components/Input/InputText";
// import { InputPassword } from "components/Input/InputPassword";
import { InputText, InputPassword, } from "components/Input";
import { NavLink } from "react-router-dom";
import styles from "./Login.module.scss";
import { FORGOT_PASS, REGISTER } from "constants/routes";



const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: loginSchema,
  });
  return (
    <>

      <Container  >
        
          <Grid className={styles["Container"]}>
            <h1 className={styles["TextLogin"]}>Login</h1>
            <p className={styles["TextSign"]}>Don' have account?&nbsp;
              <NavLink to={REGISTER} className={styles["TextSign"]} >
                SignUp
              </NavLink>
            </p>
            {/* <form onSubmit={handleSubmit} autoComplete="off">
          <label htmlFor="email">Email / Phone Number</label>
          <input
            id="email"
            type="text"
            value={values.email}
            onChange={handleChange}
            className={errors.email ? styles["input-error"] : null}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            className={errors.password ? styles["input-error"] : null}
          />
          <button type="submit">Submit</button>
        </form> */}
            <Formik initialValues={initialValues}>
              {(formik) => {
                return (
                  <Form>
                    <InputText
                      label="EMAIL/PHONE NUMBER"
                      name="email"
                      type="text"
                    />
                    <InputPassword label="PASSWORD" name="password" />
                    <Grid className={styles["ButtonLogin"]}>
                      <Button className={styles["Content"]}>
                        <Typography className={styles["TitleButton"]}>
                          Login
                        </Typography>
                      </Button>
                    </Grid>
                    <Grid className={styles["ForgotPass"]}>
                      <NavLink to={FORGOT_PASS} className={styles["ForgotPass"]}>
                        Forgot Password
                      </NavLink>
                    </Grid>
                  </Form>
                );
              }}
            </Formik>
          
        </Grid>
      </Container>

    </>
  );
};

export default Login;
