import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const ToastNotification = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <ToastContainer position="bottom-end">
        <Toast onClose={() => setShow(false)} show={show} delay={3000}>
          <Toast.Header closeButton={true}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
      </ToastContainer>

      <Button onClick={() => setShow(true)}>Show Toast</Button>
    </>
  );
};

export default ToastNotification;
