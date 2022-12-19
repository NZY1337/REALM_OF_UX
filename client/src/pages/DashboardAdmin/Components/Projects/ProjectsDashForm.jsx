import React from "react";
import PropTypes from "prop-types";

// components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProjectsDashFormGroup from "../../../../utils/helpers/react/FormGroup";


const ProjectDashForm = ({
  project,
  handleCreateProject,
  handleSubmitProject,
}) => {

  const { name, category, desktop, tablet, mobile } = project;

  const disableSubmitBtn = name === '' || category === "" || desktop === "" || tablet === "" || mobile === "";
  const disableFileUpload = name === "";

  return (
    <Form onSubmit={handleSubmitProject}>
      <h6 className="mb-4" style={{ color: "orange" }}>
        Add Project
      </h6>
      <Row>
        <Col lg="6">
          <ProjectsDashFormGroup label="Project's Name" placeholder="Enter the project name" type="text" name="name" size="sm"
            value={name} 
            onHandleChange={handleCreateProject}
          />
        </Col>

        <Col lg="6">
          <ProjectsDashFormGroup label="Project's Category" placeholder="Enter the project category" type="text" name="category" size="sm"
            value={category} 
            onHandleChange={handleCreateProject}
          />
        </Col>
   
        <Col lg="6">
          <ProjectsDashFormGroup label="Desktop Version" type="file" name="desktop" size="sm"
            onHandleChange={handleCreateProject}
            accept=".jpeg, .png, .jpg"
            multiple
            disableFileUpload={disableFileUpload}
          />
        </Col>

        <Col lg="6">
          <ProjectsDashFormGroup label="Tablet Version" type="file" name="tablet" size="sm"
            onHandleChange={handleCreateProject}
            accept=".jpeg, .png, .jpg"
            multiple
            disableFileUpload={disableFileUpload}
          />
      
        </Col>
        <Col lg="6">
          <ProjectsDashFormGroup label="Mobile Version" type="file" name="mobile" size="sm"
            onHandleChange={handleCreateProject}
            accept=".jpeg, .png, .jpg"
            multiple
            disableFileUpload={disableFileUpload}
          />
        </Col>
      </Row>

      <Button variant="dark" type="submit" disabled={disableSubmitBtn}>
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
