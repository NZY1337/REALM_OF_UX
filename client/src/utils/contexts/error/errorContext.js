import React, { useContext } from "react";
import { toast } from "react-toastify/";

const ErrorContext = React.createContext();

const Msg = ({ closeToast, toastProps }) => (
  <div>
    Lorem ipsum dolor {toastProps.position}
    <button>Retry</button>
    <button onClick={closeToast}>Close</button>
  </div>
);

const ErrorProvider = ({ children }) => {
  const notify = (type, message) => {
    toast(<Msg />);
  };

  return (
    <ErrorContext.Provider value={{ notify }}>{children}</ErrorContext.Provider>
  );
};

const useErrorContext = () => useContext(ErrorContext);

export { ErrorProvider, useErrorContext };
