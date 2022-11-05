import { Action } from "history";
import React, { useState } from "react";
import { useEffect } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import Spinner from "react-bootstrap/Spinner";

const ToastNotification = ({ displayToast, displayAlertCb }) => {
  const [show, setShow] = useState(displayToast.display);

  const statusStyle = {
    width: "10px",
    height: "10px",
    backgroundColor: displayToast.type === "success" ? "#0e930e" : "#d60d0d",
  };

  useEffect(() => {
    setShow(displayToast.display);
  }, [displayToast.display]);

  return (
    <>
      <ToastContainer position="bottom-end">
        <Toast
          onClose={() => {
            setShow(false);
            displayAlertCb({ display: false, type: null, message: "" });
          }}
          show={show}
          delay={5000}
          autohide
          bg="dark"
        >
          <Toast.Header closeButton={true}>
            <div style={statusStyle} className="rounded me-2 icon-status"></div>
            <strong className="me-auto">
              {displayToast.type === "success" ? "Success" : "Hold tight"}
            </strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body style={{ color: "#e3d7d7" }}>
            {displayToast.message}
            <Spinner
              className="ms-2"
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
              variant={displayToast.type === "success" ? "success" : "danger"}
            />
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default ToastNotification;
