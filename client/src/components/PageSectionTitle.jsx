import React from "react";
import BannerSectionTitleWrapper from "../assets/wrappers/BannerSectionTitleWrapper";
import { Container, Row, Col } from "react-bootstrap";

const PageSectionTitle = ({ titleBold, titleNormal, subtitle }) => {
  return (
    <BannerSectionTitleWrapper>
      <Container className="mt-5 pt-5">
        <Row className="mt-5">
          <Col className="my-5">
            <p className="mb-0">{subtitle}</p>
            <h1 className="w-75">
              <span style={{ fontSize: "inherit", fontWeight: "bold" }}>
                {titleBold}
              </span>
              {titleNormal}
            </h1>
          </Col>
        </Row>
      </Container>
    </BannerSectionTitleWrapper>
  );
};

export default PageSectionTitle;
