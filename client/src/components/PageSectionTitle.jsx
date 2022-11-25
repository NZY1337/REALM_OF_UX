import React from "react";
import PropTypes from 'prop-types';
import BannerSectionTitleWrapper from "../assets/wrappers/BannerSectionTitleWrapper";

const PageSectionTitle = ({ titleBold, titleNormal, subtitle }) => {
  return (
    <BannerSectionTitleWrapper>
      <p className="mb-0">{subtitle}</p>
      <h2 className="w-75">
        <span style={{ fontSize: "inherit", fontWeight: "bold" }}>
          {titleBold}
        </span>
        {titleNormal}
      </h2>
    </BannerSectionTitleWrapper>
  );
};

PageSectionTitle.propTypes = {
  titleNormal: PropTypes.string.isRequired,
  titleBold: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export default PageSectionTitle;
