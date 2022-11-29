import React from "react";
import PropTypes from 'prop-types';
import { Col } from "react-bootstrap";
import { Arrow90degRight } from "react-bootstrap-icons";
import { ButtonPrimary } from "../../../components";

const RenderProject = ({ project }) => {
  
  return (
    <Col className="mb-5" key={project} lg="4">
      <img
        src={project}
        className="img-fluid w-100 mb-3"
        style={{ objectFit: "cover", height: "500px" }}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ea earum
        aspernatur explicabo voluptates, libero cupiditate harum velit nulla,
        autem labore in doloremque magnam deserunt porro. Voluptas vel minima
        autem!
      </p>
      <ButtonPrimary>
        Preview <Arrow90degRight />
      </ButtonPrimary>
    </Col>
  );
};

const RenderPreviewDevicesProject = ({ project }) => {
  const renderProjects = () => {
    return ["desktop", "tablet", "mobile"].map((p) => {
      return <RenderProject key={p} project={project[p]} />;
    });
  };
  return <>{project ? renderProjects() : "loading"}</>;
};


RenderProject.propTypes = {
  project: PropTypes.string.isRequired
}



export default RenderPreviewDevicesProject;
