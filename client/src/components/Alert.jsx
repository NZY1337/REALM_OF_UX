import React from "react";
import { useUserContext } from "../utils/contexts/user/userContext";

const Alert = () => {
  const { alertType, alertText } = useUserContext();
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};

export default Alert;
