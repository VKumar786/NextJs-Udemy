import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = (props) => {
  const { title } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const deleteHandle = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleConfirmModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandle}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Backdrop onCancel={handleCloseModal} />}
      {modalIsOpen && (
        <Modal onCancel={handleCloseModal} onConfirm={handleConfirmModal} />
      )}
    </div>
  );
};

export default Todo;
