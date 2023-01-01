import React from "react";
import PropTypes from "prop-types";

// components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormGroup from "../../../../utils/helpers/react/FormGroup";
import TextEditor from "../../../../components/TextEditor/TextEditor";

const ProjectDashForm = ({
  project,
  handleCreateProject,
  handleSubmitProject,
  clearValues,
}) => {
  const { name, category, desktop, tablet, mobile } = project;

  const disableSubmitBtn =
    name === "" ||
    category === "" ||
    desktop === "" ||
    tablet === "" ||
    mobile === "";
  const disableFileUpload = name === "";

  return (
    <Form onSubmit={handleSubmitProject}>
      <h6 className="mb-4">Add Project</h6>
      <Row>
        <Col lg="12 mb-3">
          <TextEditor readOnly={false} />
        </Col>

        <Col lg="6">
          <FormGroup
            label="Project Name"
            placeholder="Enter the project name"
            type="text"
            name="name"
            size="sm"
            value={name}
            onHandleChange={handleCreateProject}
          />
        </Col>

        <Col lg="6">
          <FormGroup
            label="Project Category"
            placeholder="Enter the project category"
            type="text"
            name="category"
            size="sm"
            value={category}
            onHandleChange={handleCreateProject}
          />
        </Col>

        <Col lg="6">
          <FormGroup
            label="Desktop Version"
            type="file"
            name="desktop"
            size="sm"
            onHandleChange={handleCreateProject}
            accept=".jpeg, .png, .jpg"
            multiple
            disableFileUpload={disableFileUpload}
          />
        </Col>

        <Col lg="6">
          <FormGroup
            label="Tablet Version"
            type="file"
            name="tablet"
            size="sm"
            onHandleChange={handleCreateProject}
            accept=".jpeg, .png, .jpg"
            multiple
            disableFileUpload={disableFileUpload}
          />
        </Col>
        <Col lg="6">
          <FormGroup
            label="Mobile Version"
            type="file"
            name="mobile"
            size="sm"
            onHandleChange={handleCreateProject}
            accept=".jpeg, .png, .jpg"
            multiple
            disableFileUpload={disableFileUpload}
          />
        </Col>
      </Row>

      <Button
        variant="dark"
        type="submit"
        size="sm"
        disabled={disableSubmitBtn}
      >
        {project._id ? "Edit" : "Submit"}
      </Button>

      <Button
        className="mx-2"
        variant="outline-danger"
        size="sm"
        onClick={clearValues}
      >
        Reset
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
