import React from "react";
import PageSectionWrapper from "../assets/wrappers/PageSectionWrapper";
import { Container, Row, Col } from "react-bootstrap";

const PageSectionBanner = ({ title, cover }) => {
  return (
    <PageSectionWrapper cover={cover}>
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col lg="6" className="banner-section-container">
            <h1>{title}</h1>
          </Col>
        </Row>
      </Container>
    </PageSectionWrapper>
  );
};

export default PageSectionBanner;
