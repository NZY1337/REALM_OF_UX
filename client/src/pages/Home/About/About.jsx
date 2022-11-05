import React, { useState } from "react";
import AboutUsWrapper from "../../../assets/wrappers/Home/AboutUsWrapper";
import { Link } from "react-router-dom";
import {
  TitleSection,
  CircleDesign,
  TitleSectionDesign,
  ButtonPrimary,
} from "../../../components";
import { Container, Col, Row, Button } from "react-bootstrap";
import img from "../../../assets/images/img19.jpeg";
import img2 from "../../../assets/images/img17.jpeg";
import { useTranslateContext } from "../../../utils/contexts/translate/translateContext";
import { ArrowRight } from "react-bootstrap-icons";

import { motion } from "framer-motion";

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const About = () => {
  const {
    homepage: {
      about: {
        titleSection: { title, subtitle },
        leftColumn,
        rightColumn: { description },
      },
    },
  } = useTranslateContext();

  return (
    <AboutUsWrapper>
      <Container className="about-us">
        <Row>
          <Col lg="6">
            <motion.div initial="hidden" animate="visible" variants={item}>
              <TitleSection title={title} subtitle={subtitle} />
            </motion.div>
          </Col>

          <Col lg="6">
            <CircleDesign img={img} />
          </Col>
        </Row>

        <Row className="justify-content-around align-items-center">
          <Col lg="5" className="about-us-find-more">
            <AboutUsLeftColumn description={description} />
          </Col>

          <Col lg="6" className="about-us-facts">
            <h1
              className="mb-3"
              style={{ fontWeight: "bold", maxWidth: "70%" }}
            >
              We are a creative <u>agency.</u>
            </h1>
            <p className="mb-5 mt-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
              nemo, natus itaque labore in nulla! Totam, quasi voluptatibus rem
              mollitia consectetur tempora, officiis fugit quas fugiat placeat
              architecto, sapiente inventore.
            </p>
            <AboutUsRightColumn aboutUsData={leftColumn} />
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg="12" className="text-center mt-5">
            <TitleSectionDesign
              textAlign="center"
              centerMargin="center"
              description={description}
            />

            <ButtonPrimary href="https://google.com" target="_blank">
              <Link to="/about">
                Read More <ArrowRight />
              </Link>
            </ButtonPrimary>
          </Col>
        </Row>
      </Container>
    </AboutUsWrapper>
  );
};

const AboutUsLeftColumn = ({ description }) => {
  return <img style={{ width: "100%" }} src={img2} className="img-fluid" />;
};

const AboutUsRightColumn = ({ aboutUsData }) => {
  return aboutUsData.map((data, idx) => {
    return (
      <div key={idx}>
        <data.icon size={40} />
        <p>{data.description}</p>
      </div>
    );
  });
};

export default About;
