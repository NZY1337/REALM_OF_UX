import React from "react";
import PropTypes from "prop-types";
import BannerSectionTitleWrapper from "../assets/wrappers/BannerSectionTitleWrapper";

const PageSectionTitle = ({ title, subtitle }) => {
  return (
    <BannerSectionTitleWrapper>
      <p className="mb-0">{subtitle}</p>
      <h2 className="w-75">{title}</h2>
    </BannerSectionTitleWrapper>
  );
};

PageSectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  titleBold: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default PageSectionTitle;
