import React from "react";

const CustomErrorToastify = ({
  msg,
  callbackMessage,
  closeToast,
  errorMessageInfo,
}) => {
  return (
    <div>
      <p className="mb-0">{msg}</p>
      <span
        className="mr-2"
        style={{ fontWeight: "bold" }}
        onClick={() => {
          errorMessageInfo.handleCallbackMessage(callbackMessage);
          closeToast();
        }}
      >
        Yes
      </span>
    </div>
  );
};

export default CustomErrorToastify;
