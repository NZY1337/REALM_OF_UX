import React from "react";
import BannerSectionTitleWrapper from "../assets/wrappers/BannerSectionTitleWrapper";
import { Container, Row, Col } from "react-bootstrap";

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

export default PageSectionTitle;
