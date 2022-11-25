import React from "react";
import PropTypes from 'prop-types';
import TitleSectionDesignWrapper from "../assets/wrappers/Home/TitleSectionDesignWrapper";

const TitleSectionDesign = ({ centerMargin, description, textAlign }) => {
  return (
    <TitleSectionDesignWrapper
      className="design-font"
      centerMargin={centerMargin}
      textAlign={textAlign}
      dangerouslySetInnerHTML={{ __html: description }}
    ></TitleSectionDesignWrapper>
  );
};

TitleSectionDesign.propTypes = {
  description: PropTypes.string.isRequired,
  centerMargin: PropTypes.string.isRequired,
  textAligns: PropTypes.string.isRequired,
}

export default TitleSectionDesign;
