import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 character, 1 upper case letter, 1 lower case letter, 1 numeric digit
// #Tanya to pak heri

export const loginSchema = yup.object().shape({
  email: yup.string().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please, input correct password" })
    .required("Required")
});
