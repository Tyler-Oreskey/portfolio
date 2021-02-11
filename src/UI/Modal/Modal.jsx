import React from "react";

import Backdrop from "../Backdrop/Backdrop";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import ButtonHoverExpand from "../../UI/Buttons/ButtonHoverExpand/ButtonHoverExpand";
import exit from "../../assets/images/icons/exit.png";

import classes from "./Modal.module.css";

const Modal = (props) => {
  const modalAnimation = props.show ? classes.ModalShow : classes.ModalHide;
  return (
    <Auxiliary>
      <Backdrop show={props.show} clicked={props.closeModal} />
      <div className={[classes.Modal, modalAnimation].join(" ")}>
        {props.children}
        <div className={classes.ModalExit}>
          <ButtonHoverExpand clicked={props.closeModal} image={exit} alt="x" />
        </div>
      </div>
    </Auxiliary>
  );
};

export default Modal;
