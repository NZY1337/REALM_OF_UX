import React from "react";
import PropTypes from 'prop-types';
import { Card } from "react-bootstrap";
import BlogDescription from "../../../components/CardProject";
import { useConvertBase64ToBlob } from "../../../utils/hooks";
import { postStyle } from "../../../utils/helpers";

const Project = ({ project }) => {
  const blogPath = useConvertBase64ToBlob(project);
  const style = postStyle(blogPath);

  return (
    <Card className="justify-content-end" style={{ ...style }}>
      <BlogDescription
        width="100"
        title={project.name}
        date="21th September"
        category={project.category}
      />
    </Card>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired
}

export default Project;
