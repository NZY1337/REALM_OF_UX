import React from "react";
import ErrorPageWrapper from "../../assets/wrappers/ErrorPage/ErrorPageWrapper";
import { Container, Row, Col } from "react-bootstrap";
import notFound from "../../assets/images/404.svg";
import wrongPath from "../../assets/images/wrongPath.svg";
import { Link } from "react-router-dom";
import { ButtonSecondary } from "../../components";
import { Arrow90degLeft } from "react-bootstrap-icons";

const ErrorPage = ({ msg }) => {
  return (
    <ErrorPageWrapper>
      <Container fluid>
        <Row>
          <Col lg={12}>
            <img src={notFound} />
            <h5 className="mt-4">
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

export default ErrorPage;
