import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ setIsVisible, children }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={() => setIsVisible(false)} />

      <dialog open={true} className={styles.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
