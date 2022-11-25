import React from "react";
import PropTypes from 'prop-types'
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

TitleSection.propTypes = {
  title: PropTypes.string.isRequired,
  centerMargin: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
}

export default TitleSection;
