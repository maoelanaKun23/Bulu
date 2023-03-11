import React from "react";
import { useField } from "formik";
import { FormLabel, TextField } from "@material-ui/core";
import styles from "./InputText.module.scss";

const InputText = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={styles["input-control"]}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <div className={styles["field"]}>
        <input className={styles["text-field"]} autoComplete="off" {...props} {...field} />
      </div>
    </div>
  );
};

export default InputText;
