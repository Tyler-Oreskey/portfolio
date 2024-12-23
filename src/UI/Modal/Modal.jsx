import React from "react";

import Backdrop from "../Backdrop/Backdrop";
import ButtonHoverExpand from "../../UI/Buttons/ButtonHoverExpand/ButtonHoverExpand";
import exit from "../../assets/images/icons/exit.png";

import classes from "./Modal.module.css";

const Modal = (props) => {
  const modalAnimation = props.show ? classes.ModalShow : classes.ModalHide;

  return (
    <>
      <Backdrop show={props.show} clicked={props.closeModal} />
      <div className={[classes.Modal, modalAnimation].join(" ")}>
        {props.children}
        <div className={classes.ModalExit}>
          <ButtonHoverExpand clicked={props.closeModal} image={exit} alt="x" />
        </div>
      </div>
    </>
  );
};

export default Modal;
