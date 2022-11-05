import React, { useState, useContext } from "react";

const ErrorContext = React.createContext();

const INITIAL_STATE = {
  display: false,
  type: "fail",
  message: "",
};

const ErrorProvider = ({ children }) => {
  const [settings, setSettings] = useState(INITIAL_STATE);

  return (
    <ErrorContext.Provider value={{ settings, setSettings }}>
      {children}
    </ErrorContext.Provider>
  );
};

const useErrorContext = () => useContext(ErrorContext);

export { ErrorProvider, useErrorContext };
