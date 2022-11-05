import React, { useState, useContext } from "react";
import initialStateEN from "./lang/EN";
import initialStateRO from "./lang/RO";

const TranslateContext = React.createContext();

const TranslateProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialStateEN);

  const changeLanguage = (checked) => {
    setTimeout(() => {
      if (!checked) {
        setLanguage(initialStateEN);
      } else {
        setLanguage(initialStateRO);
      }
    }, 400);
  };

  return (
    <TranslateContext.Provider value={{ ...language, changeLanguage }}>
      {children}
    </TranslateContext.Provider>
  );
};

const useTranslateContext = () => useContext(TranslateContext);

export { TranslateProvider, useTranslateContext };
