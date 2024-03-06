import React from "react";
import styles from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

const Modal = ({ children }) => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("..");
  };

  return (
    <>
      <div className={styles.backdrop} onClick={handleCancel} />

      <dialog open={true} className={styles.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
