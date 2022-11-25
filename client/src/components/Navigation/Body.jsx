import React from "react";
import PropTypes from "prop-types";
import { Nav, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import bannerIMG from "../../assets/images/img15.jpeg";
import { Check, ArrowRight } from "react-bootstrap-icons";
import { ButtonPrimary } from "../Buttons";

//people's creations
import banner1 from "../../assets/images/img11.jpeg";
import banner2 from "../../assets/images/img1.jpeg";
import banner3 from "../../assets/images/img2.jpeg";
import banner4 from "../../assets/images/img3.jpeg";

export const BodyMenu = ({ navigation }) => {
  return (
    <>
      <Nav className="justify-content-end flex-grow-1 pe-3">
        {navigation.map((nav, index) => {
          return (
            <Link to={nav.link} key={nav.title}>
              <span>{index}.</span>
              {nav.title}
            </Link>
          );
        })}
      </Nav>

      <h4 className="quote mt-5 pt-5 font-bold w-75">
        In order to get the best of this website we suggest to create an
        account.
      </h4>

      <div className="d-flex">
        <p style={{ marginRight: "1rem" }}>
          We help premium brands achieve their potential through innovation and
          creative approaches.
        </p>
        <p>
          We grow your brand through proprietary in-house methodologies, tested
          and perfected over the years.
        </p>
      </div>
    </>
  );
};

export const BodyBannerCreator = ({ navigation }) => {
  return (
    <Row className="align-items-center w-100">
      <Col lg="7">
        <img src={bannerIMG} className="img-fluid w-100" />
      </Col>

      <Col lg="5">
        <h5>
          <b>What We Offer:</b>
        </h5>
        <ul>
          <li>
            <Check />
            <p>We help premium brands achieve their goals.</p>
          </li>
          <li>
            <Check /> <p>Tested and perfected over the years.</p>
          </li>
          <li>
            <Check />
            <p>
              Please contact your JIRA Administrator to link JIRA to a valid
              Zendesk account.
            </p>
          </li>
          <li>
            <Check />
            <p>
              You can install it from Figma app: Bootstrap Icons Plugin for
              Figma
            </p>
          </li>
        </ul>

        <ButtonPrimary className="mt-4">
          <Link to="/banner-creator">
            Explore Now <ArrowRight />
          </Link>
        </ButtonPrimary>
      </Col>
    </Row>
  );
};

BodyMenu.propTypes = {
  navigation: PropTypes.array.isRequired,
};
