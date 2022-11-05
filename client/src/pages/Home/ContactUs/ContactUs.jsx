import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import ContactUsWrapper from "../../../assets/wrappers/Home/ContactUsWrapper";
import { TitleSectionDesign, TitleSection } from "../../../components";
import ContactForm from "./ContactForm";

import { useTranslateContext } from "../../../utils/contexts/translate/translateContext";

const ContactUs = () => {
  const {
    homepage: {
      contactUs: {
        titleSection: { title, subtitle },
        subtitleSection: { description },
        form,
      },
    },
  } = useTranslateContext();

  return (
    <ContactUsWrapper black>
      <Container>
        <Row>
          <Col lg="12">
            <TitleSectionDesign
              textAlign="right"
              centerMargin="right"
              description={description}
            />
            <TitleSection
              title={title}
              subtitle={subtitle}
              centerMargin="center"
            />
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg="6">
            <ContactForm form={form} />
          </Col>
        </Row>
      </Container>
    </ContactUsWrapper>
  );
};

export default ContactUs;
