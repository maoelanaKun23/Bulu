import React, { useState } from "react";
import { useField } from "formik";
import {
  FormLabel,
  IconButton,
  InputAdornment,
  TextField,
  InputBase
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import styles from "./InputPassword.module.scss";

const InputPassword = ({ label, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [field, meta] = useField(props);
  return (
    <div className={styles["input-control"]}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <div className={styles["field-pass"]}>
        <input

          type={showPassword ? "text" : "password"}
          className={styles["input-password"]}
        />
        
          <IconButton
            className={styles["eye-icon"]}
            onClick={() => {
              setShowPassword((show) => !show);
            }}
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        
      </div>

    </div>
  );
};

export default InputPassword;
