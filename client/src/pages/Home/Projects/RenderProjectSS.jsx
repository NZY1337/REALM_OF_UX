import React from "react";
import PropTypes from "prop-types";
import { imagePath } from "../../../utils/helpers/constants";

const RenderProjectSS = ({ project }) => {
  return (
    <img
      src={imagePath(project)}
      alt="project visualization"
      className="img-fluid w-100"
      style={{ objectFit: "cover" }}
    />
  );
};

RenderProjectSS.propTypes = {
  project: PropTypes.string.isRequired,
};

export default RenderProjectSS;
