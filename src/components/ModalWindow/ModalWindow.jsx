import React from "react";
import classes from "./ModalWindow.module.scss";

const ModalWindow = ({ children }) => {
  return (
    <div className={[classes.ModalWindow, classes.active].join(' ')}>
      <div className={classes.ModalWindow__content}>{children}</div>
    </div>
  );
};

export default ModalWindow;
