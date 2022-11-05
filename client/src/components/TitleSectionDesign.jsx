import React from "react";
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

export default TitleSectionDesign;
