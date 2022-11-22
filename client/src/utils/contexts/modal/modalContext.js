import React, { useContext, useState } from "react";

const ModalContext = React.createContext();

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  const handleTriggerModal = (trigger) => {
    setModal(trigger);
  };

  return (
    <ModalContext.Provider
      value={{
        handleTriggerModal,
        modal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = () => useContext(ModalContext);

export { ModalProvider, useModalContext };
