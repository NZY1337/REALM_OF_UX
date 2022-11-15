import React from "react";
import { PageSectionTitle, PageSectionBanner } from "../../components";
import cover from "../../assets/images/img19.jpeg";
import { Container, Row, Col } from "react-bootstrap";

const Projects = () => {
  return (
    <>
      <Container className="mt-5 pt-5">
        <Row className="mt-5">
          <Col className="my-5"></Col>
          <PageSectionTitle
            subtitle="weclome to our realm of templates"
            titleBold="Explore "
            titleNormal="the variety of our templates that suit your needs"
          />
        </Row>
      </Container>

      <PageSectionBanner title="Tailored for your personality" cover={cover} />

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <h1>Hello World</h1>
          </div>
          <div className="col-lg-6">
            <h2>Hello Gipsies</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
