import React from "react";
import PropTypes from "prop-types";
import TitleSectionDesignWrapper from "../assets/wrappers/Home/TitleSectionDesignWrapper";

const TitleSectionDesign = ({ centerMargin, description, textAlign }) => {
  return (
    <TitleSectionDesignWrapper
      centerMargin={centerMargin}
      textAlign={textAlign}
      dangerouslySetInnerHTML={{ __html: description }}
    ></TitleSectionDesignWrapper>
  );
};

TitleSectionDesign.propTypes = {
  description: PropTypes.string.isRequired,
  centerMargin: PropTypes.string,
  textAligns: PropTypes.string,
};

export default TitleSectionDesign;
