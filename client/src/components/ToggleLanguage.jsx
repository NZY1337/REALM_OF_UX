import React from "react";
import ToggleLanguageWrapper from "../assets/wrappers/Home/ToggleLanguageWrapper";

const ToggleLanguage = ({ changeLanguage }) => {
  return (
    <ToggleLanguageWrapper className="toggle-language">
      <input
        type="checkbox"
        id="toogle"
        onChange={(e) => changeLanguage(e.target.checked)}
      />
      <label htmlFor="toogle" className="toogle-button"></label>
    </ToggleLanguageWrapper>
  );
};

export default ToggleLanguage;
