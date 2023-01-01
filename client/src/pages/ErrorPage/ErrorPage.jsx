import React from "react";
import PropTypes from "prop-types";
import ErrorPageWrapper from "../../assets/wrappers/ErrorPage/ErrorPageWrapper";
import { Container, Row, Col } from "react-bootstrap";
import wrongPath from "../../assets/images/wrongPath.svg";

import { Link } from "react-router-dom";
import { Arrow90degLeft } from "react-bootstrap-icons";

const ErrorPage = ({ msg }) => {
  return (
    <ErrorPageWrapper>
      <Container fluid>
        <Row>
          <Col lg={12}>
            <img src={wrongPath} />
            <h1 className="mt-4 mb-0" style={{ fontSize: "10rem" }}>
              404
            </h1>
            <h5>
              The page you are looking for <u>does not exist.</u>
            </h5>
            <Link to="/">
              <Arrow90degLeft />
              <span className="ms-1"> Go Back</span>
            </Link>
          </Col>
        </Row>
      </Container>
    </ErrorPageWrapper>
  );
};

ErrorPage.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default ErrorPage;
