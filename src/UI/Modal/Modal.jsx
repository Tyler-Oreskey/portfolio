import React from "react";

import Backdrop from "../Backdrop/Backdrop";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <Auxiliary>
      <Backdrop show={props.show} clicked={props.closeModal} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Auxiliary>
  );
};

export default Modal;
