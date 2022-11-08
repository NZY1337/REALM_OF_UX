import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

let notify = null;

const ErrorContext = React.createContext();

const ErrorProvider = ({ children }) => {
  const [options, setOptions] = useState({
    // commentId: null,
    modal: false,
    handleDeleteComment: null,
  });

  const openModal = () => {
    setOptions({ ...options, modal: true });
    console.log("from getModal");
  };

  const closeModal = () => setOptions({ ...options, modal: false });
  const getCommentId = (cb) => {
    setOptions({
      ...options,
      //   commentId: id,
      modal: true,
      handleDeleteComment: cb,
    });
    console.log("from getComment");
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
        getCommentId,
        handleDeleteComment: options.handleDeleteComment,
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

const useErrorContext = () => useContext(ErrorContext);

export { ErrorProvider, useErrorContext };
