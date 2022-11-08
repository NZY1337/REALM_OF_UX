import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useErrorContext } from "../utils/contexts/error/errorContext";
import { removeComment } from "../utils/services/services";
import warning from "../assets/images/warning.svg";

const ModalAlert = () => {
  const { showModal, closeModal, handleDeleteComment } = useErrorContext();

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Body>
        <img src={warning} style={{ width: "100px", marginTop: "-50px" }} />
        <p className="mb-0 mt-2">
          Hold tight, are you sure you want to delete this ?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            handleDeleteComment();
            closeModal();
          }}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAlert;
