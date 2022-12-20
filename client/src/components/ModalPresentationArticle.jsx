import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalPresentationArticleWrapper from "../assets/wrappers/ModalPresentation/ModalPresentationArticleWrapper";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ModalPresentationArticle = ({ show, handleClose, children, title }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        className="modal-project"
        fullscreen
      >
        <ModalPresentationArticleWrapper>
          <AiOutlineCloseCircle
            className="close-modal-btn"
            onClick={handleClose}
          />
          <Modal.Body>{children}</Modal.Body>
          <Modal.Footer>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              quos quis inventore quaerat distinctio cumque. Accusantium
              necessitatibus quibusdam non rem, ab labore laborum delectus animi
              ipsam, temporibus tempore veritatis vel.
            </p>
          </Modal.Footer>
        </ModalPresentationArticleWrapper>
      </Modal>
    </>
  );
};

export default ModalPresentationArticle;
