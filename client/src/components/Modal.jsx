import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useErrorContext } from "../utils/contexts/error/errorContext";
import { removeComment } from "../utils/services/services";

const ModalAlert = () => {
  const { showModal, closeModal, handleDeleteComment } = useErrorContext();

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Body>
        Hold tight, are you sure you want to delete this ?
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
