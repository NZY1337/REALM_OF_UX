import React from "react";
import PropTypes from 'prop-types';
import { Card } from "react-bootstrap";
import BlogDescription from "../../../components/CardProject";
import { postStyle } from "../../../utils/helpers";

const Project = ({ project }) => {
  const style = postStyle(project.desktop[0]);

  return (
    <Card className="justify-content-end" style={{ ...style }}>
      <BlogDescription
        width="100"
        title={project.name}
        date="21th September"
        category={project.category}
        projectId={project._id}
      />
    </Card>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired
}

export default Project;
