import React from "react";

import { useErrorContext } from "../utils/contexts/error/errorContext";

import { ToastContainer } from "react-toastify/";
import "react-toastify/dist/ReactToastify.css";

const ToastNotification = () => {
  return (
    <>
      <ToastContainer autoClose={false} />
    </>
  );
};

export default ToastNotification;
