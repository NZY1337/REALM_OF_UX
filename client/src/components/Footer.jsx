import React from "react";
import FooterWrapper from "../assets/wrappers/FooterWrapper";
import { Container, Col, Row } from "react-bootstrap";
import Logo from "./Logo";
import social from "../assets/images/social.svg";
import { useTranslateContext } from "../utils/contexts/translate/translateContext";

const Footer = () => {
  const {
    globals: {
      footer: { level1, level2 },
    },
  } = useTranslateContext();

  return (
    <FooterWrapper white>
      <FooterContainer level2={level2} level1={level1} />
    </FooterWrapper>
  );
};

export default Footer;

const FooterContainer = ({ level1, level2 }) => {
  const {
    col1: { identity },
  } = level1;

  const { copyrights, estd } = level2;

  return (
    <Container className="footer-container">
      <Row className="mb-5">
        <Col>
          <Logo />
          <span className="d-block" style={{ maxWidth: "80%" }}>
            {identity}
          </span>
        </Col>

        <Col lg="3" className="wrapper">
          <RenderFooterData data={level1.col2} type="second" />
        </Col>

        <Col lg="2" className="wrapper">
          <RenderFooterData data={level1.col3} type="third" />
        </Col>

        <Col lg="2" className="wrapper">
          <RenderFooterData data={level1.col4} type="fourth" />
        </Col>
      </Row>

      <Row>
        <hr />

        <Col lg="6">
          <small>{copyrights}</small>
        </Col>
        <Col lg="6 text-end">
          <small>{estd}</small>
        </Col>
      </Row>
    </Container>
  );
};

const RenderFooterData = ({ data, type }) => {
  const displayData = () => {
    if (type === "second") {
      return (
        <div>
          <h6>{data.title}</h6>
          <ul className="footer-list">
            {data.links.map((d, i) => {
              return (
                <li key={i}>
                  <d.icon />
                  <span className="mb-0 ms-3">{d.contact}</span>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }

    if (type === "third") {
      return (
        <div>
          <h6>{data.title}</h6>
          <ul className="footer-list">
            {data.links.map((d, i) => {
              return (
                <li key={i}>
                  <a href="#home">{d.page}</a>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }

    if (type === "fourth") {
      return (
        <div>
          <h6>{data.title}</h6>
          <ul className="footer-list social">
            <li>
              <span>
                {data.links.map((d, i) => {
                  return (
                    <a key={i} href={d.link}>
                      <d.icon />
                    </a>
                  );
                })}
              </span>
            </li>
            <li>
              <img className="w-100" src={social} />
            </li>
          </ul>
        </div>
      );
    }
  };
  return <>{displayData()}</>;
};
