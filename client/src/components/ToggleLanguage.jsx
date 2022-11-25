import React from "react";
import PropTypes from 'prop-types';
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

ToggleLanguage.propTypes = {
  changeLanguage:PropTypes.func.isRequired
}

export default ToggleLanguage;
