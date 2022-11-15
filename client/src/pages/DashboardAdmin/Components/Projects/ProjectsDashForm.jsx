import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

const ProjectDashForm = ({
  project,
  handleCreateProject,
  handleSubmitProject,
}) => {
  return (
    <Form onSubmit={handleSubmitProject}>
      <Row>
        <Col lg="6">
          <Form.Group className="mb-3" controlId="projet-name">
            <Form.Label>Project's Name</Form.Label>
            <Form.Control
              type="name"
              name="name"
              placeholder="Enter the project's name"
              value={project && project.name}
              onChange={handleCreateProject}
            />
          </Form.Group>
        </Col>

        <Col lg="6">
          <Form.Group className="mb-3" controlId="projet-name">
            <Form.Label>Project's Category</Form.Label>
            <Form.Control
              type="name"
              name="category"
              placeholder="Enter the project's name"
              onChange={handleCreateProject}
              value={project && project.category}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col lg="6">
          <Form.Group controlId="desktopVersion" className="mb-3">
            <Form.Label>Desktop Version</Form.Label>
            <Form.Control
              type="file"
              accept=".jpeg, .png, .jpg"
              size="sm"
              name="desktop"
              onChange={handleCreateProject}
              //   value={project.desktop}
            />
          </Form.Group>
        </Col>
        <Col lg="6">
          <Form.Group controlId="tabletVersion" className="mb-3">
            <Form.Label>Tablet Version</Form.Label>
            <Form.Control
              accept=".jpeg, .png, .jpg"
              type="file"
              size="sm"
              name="tablet"
              onChange={handleCreateProject}
              //   value={project.tablet}
            />
          </Form.Group>
        </Col>
        <Col lg="6">
          <Form.Group controlId="mobileVersion" className="mb-3">
            <Form.Label>Mobile Version</Form.Label>
            <Form.Control
              accept=".jpeg, .png, .jpg"
              type="file"
              size="sm"
              name="mobile"
              onChange={handleCreateProject}
              //   value={project.mobile}
            />
          </Form.Group>
        </Col>
      </Row>

      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ProjectDashForm;
