import React from "react";
import PropTypes from 'prop-types'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useModalContext } from "../utils/contexts/modal/modalContext";
import warning from "../assets/images/warning.svg";

const ModalAlert = ({ children }) => {
  const { modal, handleTriggerModal } = useModalContext();

  return (
    <Modal show={modal} onHide={() => handleTriggerModal(false)}>
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

ModalAlert.proTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
]).isRequired,
}


export default ModalAlert;
