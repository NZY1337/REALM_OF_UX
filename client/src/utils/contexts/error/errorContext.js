import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

let notify = null;

const ErrorContext = React.createContext();

const ErrorProvider = ({ children }) => {
  const [options, setOptions] = useState({
    modal: false,
    handleDeleteComment: null,
  });

  const openModal = () => {
    setOptions({ ...options, modal: true });
  };

  const closeModal = () => setOptions({ ...options, modal: false });

  const triggerModalDelete = (cb, actionType) => {
    setOptions({
      ...options,
      modal: true,
      handleDeleteComment: cb,
      actionType,
    });
  };

  notify = (actionType, style, message) => {
    if (actionType === "delete" || actionType === "edit") {
      toast[style](message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
        autoClose: 2000,
      });
    }

    if (actionType === "add") {
      toast[style](message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
        autoClose: 2000,
      });
    }
  };

  return (
    <ErrorContext.Provider
      value={{
        showModal: options.modal,
        openModal,
        closeModal,
        notify,
        triggerModalDelete,
        handleDeleteComment: options.handleDeleteComment,
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

const useErrorContext = () => useContext(ErrorContext);

export { ErrorProvider, useErrorContext };
