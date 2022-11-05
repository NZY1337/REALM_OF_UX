import React, { useState, useContext } from "react";

const ErrorContext = React.createContext();

const ErrorProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    display: false,
    type: "fail",
    message: "",
  });

  const setSettingsCb = () => {
    setSettings({ ...settings, display: false });
  };

  return (
    <ErrorContext.Provider value={{ ...settings, setSettingsCb }}>
      {children}
    </ErrorContext.Provider>
  );
};

const useErrorContext = () => useContext(ErrorContext);

export { ErrorProvider, useErrorContext };
