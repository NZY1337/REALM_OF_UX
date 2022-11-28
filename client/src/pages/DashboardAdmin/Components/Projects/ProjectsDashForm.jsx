import React from "react";
import PropTypes from "prop-types";

// components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProjectsDashFormGroup from "./ProjectsDashFormGroup";

const ProjectDashForm = ({
  project,
  handleCreateProject,
  handleSubmitProject,
}) => {

  return (
    <Form onSubmit={handleSubmitProject}>
      <h6 className="mb-4" style={{ color: "orange" }}>
        Add Project
      </h6>
      <Row>
        <Col lg="6">
          <ProjectsDashFormGroup label="Project's Name" placeholder="Enter the project name" type="text" name="name" size="sm"
            value={project.name} 
            onHandleChange={handleCreateProject}
          />
        </Col>

        <Col lg="6">
          <ProjectsDashFormGroup label="Project's Category" placeholder="Enter the project category" type="text" name="category" size="sm"
            value={project.category} 
            onHandleChange={handleCreateProject}
          />
        </Col>
      </Row>

      <Row>
        <Col lg="6">
          <ProjectsDashFormGroup label="Desktop Version" type="file" name="desktop" size="sm"
            onHandleChange={handleCreateProject}
            accept=".jpeg, .png, .jpg"
            // value={project.desktop}
          />
        </Col>
        <Col lg="6">
          <ProjectsDashFormGroup label="Tablet Version" type="file" name="tablet" size="sm"
            onHandleChange={handleCreateProject}
            accept=".jpeg, .png, .jpg"
            // value={project.desktop}
          />
      
        </Col>
        <Col lg="6">
          <ProjectsDashFormGroup label="Mobile Version" type="file" name="mobile" size="sm"
            onHandleChange={handleCreateProject}
            accept=".jpeg, .png, .jpg"
            // value={project.desktop}
          />
        </Col>
      </Row>

      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
  );
};

ProjectDashForm.propTypes = {
  project: PropTypes.object.isRequired,
  handleCreateProject: PropTypes.func.isRequired,
  handleSubmitProject: PropTypes.func.isRequired,
};

export default ProjectDashForm;
