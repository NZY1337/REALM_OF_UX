import React from "react";
import TitleWrapper from "../assets/wrappers/Home/TitleWrapper";

const TitleSection = ({ title, centerMargin, subtitle }) => {
  return (
    <TitleWrapper marginB={5} centerMargin={centerMargin}>
      <div className="title-wrapper mr-auto">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {/* <h1 className="design-font">{title.split("").join("")[0]}</h1> */}
      </div>
    </TitleWrapper>
  );
};

export default TitleSection;
