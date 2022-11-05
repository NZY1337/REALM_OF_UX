import React from "react";
import ServicesWrapper from "../../../assets/wrappers/Home/ServicesWrapper";
import { Container, Col, Row, Image } from "react-bootstrap";
import { TitleSectionDesign, TitleSection } from "../../../components";

import { useTranslateContext } from "../../../utils/contexts/translate/translateContext";

// images
import codingImg from "../../../assets/images/code.png";
import advertisingImg from "../../../assets/images/img6.jpeg";
import RenderServices from "./RenderServices";
import RenderDescription from "./RenderDescription";

const Services = () => {
  const {
    homepage: {
      services: {
        titleSection: { title, subtitle },
        subtitleSection: { description },
        keysSection,
        descriptionSection,
      },
    },
  } = useTranslateContext();

  return (
    <ServicesWrapper>
      <Container className="services">
        <Row className="justify-content-center">
          <Col lg="12">
            <TitleSectionDesign description={description} />
            <TitleSection
              title={title}
              subtitle={subtitle}
              centerMargin="center"
            />
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg="3" className="services-wrapper">
            <Image src={codingImg} className="w-100" fluid />
          </Col>
          <Col lg="3" className="services-wrapper">
            <Image src={advertisingImg} fluid />
          </Col>

          <Col lg="5" className="services-wrapper ms-4">
            <RenderDescription descriptions={descriptionSection} />
          </Col>
        </Row>

        <Row
          className="justify-content-end mb-4"
          style={{ marginTop: "-5.5rem" }}
        >
          <Col lg="4"></Col>
          <RenderServices services={keysSection} />
        </Row>
      </Container>
    </ServicesWrapper>
  );
};

export default Services;
