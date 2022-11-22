import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import warning from "../assets/images/warning.svg";

const ModalTest = ({ showModal, handleTriggerModal, children }) => {
  return (
    <Modal show={showModal} onHide={() => handleTriggerModal(false)}>
      <Modal.Body>
        <img src={warning} style={{ width: "100px", marginTop: "-50px" }} />
        <p className="mb-0 mt-2">
          Hold tight, are you sure you want to delete this ?
        </p>
      </Modal.Body>
      <Modal.Footer>
        {children}
        <Button variant="secondary" onClick={() => handleTriggerModal(false)}>
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalTest;
