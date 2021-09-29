import React from "react";
import classes from "./Input.module.scss";

const Input = (props) => {
  return <input {...props} className={classes.post__input} />;
};

export default Input;
