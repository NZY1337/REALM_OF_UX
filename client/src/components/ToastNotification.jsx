import { Action } from "history";
import React, { useState } from "react";
import { useEffect } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import Spinner from "react-bootstrap/Spinner";
import { useErrorContext } from "../utils/contexts/error/errorContext";

const ToastNotification = () => {
  const { setSettings, settings } = useErrorContext();

  const statusStyle = {
    width: "10px",
    height: "10px",
    backgroundColor: settings.type === "success" ? "#0e930e" : "#d60d0d",
  };

  return (
    <>
      <ToastContainer position="bottom-end">
        <Toast
          onClose={() => {
            setSettings({ ...settings, display: false });
          }}
          show={settings.display}
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
      {/* <button onClick={() => setShow(true)}>Click</button> */}
    </>
  );
};

export default ToastNotification;
