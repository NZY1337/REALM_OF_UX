import React from "react";
import PropTypes from 'prop-types';
import { Col } from "react-bootstrap";
import { ServicesCard } from "../../../components";

const RenderServices = ({ services }) => {
  return services.map((service, index) => {
    return (
      <Col lg="4 mb-4" key={index}>
        <ServicesCard
          title={service.title}
          svg={service.svg}
          description={service.description}
        />
      </Col>
    );
  });
};

RenderServices.propTypes = {
  services: PropTypes.array.isRequired
}

export default RenderServices;
