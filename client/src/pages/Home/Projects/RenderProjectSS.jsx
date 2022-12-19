import React from "react";
import PropTypes from 'prop-types';
import { Col } from "react-bootstrap";

const RenderProjectSS = ({ project }) => {
  return (
    <Col  key={project} lg="6">
      <div>
        <img src={project} className="img-fluid w-100 mb-3" style={{ objectFit: "cover", height: "500px" }} />
      </div>
    </Col>
  );
};

RenderProjectSS.propTypes = {
  project: PropTypes.string.isRequired
}



export default RenderProjectSS;
