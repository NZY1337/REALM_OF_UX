import React, { useContext } from "react";
import { toast } from "react-toastify";

let notify = null;
const handleCallbackMessage = async (callbackMessage) => {
  const deletedComment = await callbackMessage();

  notify(
    "add",
    "success",
    `Comment with ID: ${deletedComment} deleted successfully`
  );
};

const ErrorContext = React.createContext();
const Msg = ({ msg, callbackMessage, closeToast }) => {
  return (
    <div>
      <p className="mb-0">{msg}</p>
      <span
        className="mr-2"
        style={{ fontWeight: "bold" }}
        onClick={() => {
          handleCallbackMessage(callbackMessage);
          closeToast();
        }}
      >
        Yes
      </span>
    </div>
  );
};

const ErrorProvider = ({ children }) => {
  notify = (actionType, style, message, callbackMessage) => {
    if (actionType === "delete" || actionType === "edit") {
      toast[style](
        <Msg msg={message} theme="dark" callbackMessage={callbackMessage} />,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: "dark",
          closeOnClick: false,
          bodyClassName: "custom",
        }
      );
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
    <ErrorContext.Provider value={{ notify }}>{children}</ErrorContext.Provider>
  );
};

const useErrorContext = () => useContext(ErrorContext);

export { ErrorProvider, useErrorContext };
