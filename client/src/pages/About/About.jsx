import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bannerCover from "../../assets/images/img15.jpeg";
import me from "../../assets/images/eu.jpg";
import AboutWrapper from "../../assets/wrappers/AboutWrapper/AboutWrapper";
import { PageSectionTitle, PageSectionBanner } from "../../components";

// context
import { useTranslateContext } from "../../utils/contexts/translate/translateContext";

import Skills from "./Skills";

const About = () => {
  const {
    aboutMe: { pageTitleSection, descriptionSection, skills },
  } = useTranslateContext();

  return (
    <AboutWrapper>
      <Container className="pt-5 pb-0 py-lg-5 container">
        <Row>
          <Col lg="12">
            <PageSectionTitle
              subtitle={pageTitleSection.subtitle}
              title={pageTitleSection.title}
            />
          </Col>
        </Row>
      </Container>

      <Container className="about-me">
        <Row className="d-flex align-items-center about-me-description">
          <Col lg="12">
            <img src={me} alt="the real person behind this website" className="img-fluid" />
          </Col>

          <Col lg="6" className="mt-3 mt-lg-0">
            <div className="about-me-description-info p-4 p-lg-5">
              <h3 className="mb-3">{descriptionSection.title}</h3>
              <h5 className="mb-5">{descriptionSection.subtitle}</h5>
              <p>{descriptionSection.description}</p>
            </div>
          </Col>
        </Row>

        <Row className="about-me-technologies">
          <Col lg="8">
            <div className="about-me-technologies__info">
              <p className="mb-0">{skills.tech}: </p>
              <hr />

              <div className="about-me-technologies__info-stack">
                <Skills type="tech" />
              </div>
            </div>
          </Col>

          <Col lg="8 mt-3">
            <div className="about-me-technologies__info">
              <p className="mb-0">{skills.design}:</p>
              <hr />

              <div className="mt-3 about-me-technologies__info-stack">
                <Skills type="design" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <PageSectionBanner
        title="Some experiences are worth living, do not be affraid! :)"
        cover={bannerCover}
      />
    </AboutWrapper>
  );
};

export default About;
