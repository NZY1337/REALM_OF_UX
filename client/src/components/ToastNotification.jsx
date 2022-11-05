import { Action } from "history";
import React, { useState } from "react";
import { useEffect } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import Spinner from "react-bootstrap/Spinner";
import { useErrorContext } from "../utils/contexts/error/errorContext";

const ToastNotification = () => {
  const { setSettings, settings } = useErrorContext();
  const [show, setShow] = useState(settings.display);

  const statusStyle = {
    width: "10px",
    height: "10px",
    backgroundColor: settings.type === "success" ? "#0e930e" : "#d60d0d",
  };

  useEffect(() => {
    setShow(settings.display);
  }, [settings.display]);

  return (
    <>
      <ToastContainer position="bottom-end">
        <Toast
          onClose={() => {
            setShow(false);
            // do not reset the values - ket them as they are - we do not want to change the text/design of the popup while fading out
            setSettings({
              display: settings.display,
              type: settings.type,
              message: settings.message,
            });
          }}
          show={show}
          delay={4000}
          autohide
          bg="dark"
        >
          <Toast.Header closeButton={true}>
            <div style={statusStyle} className="rounded me-2 icon-status"></div>
            <strong className="me-auto">
              {settings.type === "success" ? "Success" : "Hold tight"}
            </strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body style={{ color: "#e3d7d7" }}>
            {settings.message}
            <Spinner
              className="ms-2"
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
              variant={settings.type === "success" ? "success" : "danger"}
            />
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default ToastNotification;
