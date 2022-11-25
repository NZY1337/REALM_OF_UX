import React from "react";
import PropTypes from 'prop-types';
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

PageSectionBanner.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}

export default PageSectionBanner;
