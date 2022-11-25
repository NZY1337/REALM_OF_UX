import React from "react";
import PropTypes from 'prop-types';
import BlgoDescriptionWrapper from "../assets/wrappers/Home/BlogDescriptionWrapper";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const CardProject = ({ date, title, width, category, projectId }) => {
  return (
    <BlgoDescriptionWrapper width={width}>
      <div className="blog-description-content d-flex flex-column justify-items-start">
        <span>{category}</span>
        <hr className="my-2" />
        <h4>{title}</h4>

        <Link to={`/projects/${projectId}`}>
          Read Story <ArrowRight />
        </Link>
      </div>
    </BlgoDescriptionWrapper>
  );
};


CardProject.propTypes = {
    date: PropTypes.string,
    title: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    projectId: PropTypes.string.isRequired,
};
  

export default CardProject;
