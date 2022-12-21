import React from "react";
import PropTypes from "prop-types";
import ServicesCardWrapper from "../assets/wrappers/Home/ServicesCardWrapper";
import { ArrowRight } from "react-bootstrap-icons";
import { ButtonTertiary } from "./Buttons";
import { Image } from "react-bootstrap";

const ServicesCard = ({ svg, title, description }) => {
  return (
    <ServicesCardWrapper href="#">
      <h4 className="mb-4">{title}</h4>
      <p>{description}</p>
      <ButtonTertiary>
        Discover <ArrowRight />
      </ButtonTertiary>

      <Image src={svg} />
    </ServicesCardWrapper>
  );
};

ServicesCard.propTypes = {
  svg: PropTypes.string.isRequired,
};

export default ServicesCard;
