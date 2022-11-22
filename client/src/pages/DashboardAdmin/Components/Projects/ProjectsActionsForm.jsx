import React, { useEffect } from "react";
import { Form, Col, Row } from "react-bootstrap";
import FilteredProjects from "./FilteredProjects";

const ProjectActionsForm = ({
  filteredProjects,
  handleSearchKeyword,
  searchKeyword,
  handleMatchedProject,
  handleTriggerModal,
  showModal,
  handleDeleteProject,
}) => {
  useEffect(() => {
    handleMatchedProject();
  }, [searchKeyword]);

  return (
    <>
      <Form>
        <h6 className="mb-4" style={{ color: "orange" }}>
          Edit | Delete Project
        </h6>

        <Row>
          <Col lg="6">
            <Form.Group className="mb-3">
              <Form.Label>Search Project by title</Form.Label>
              <Form.Control
                type="name"
                name="name"
                placeholder="Enter the project's name"
                value={searchKeyword}
                onChange={handleSearchKeyword}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>

      <FilteredProjects
        filteredProjects={filteredProjects}
        searchKeyword={searchKeyword}
        handleTriggerModal={handleTriggerModal}
        showModal={showModal}
        handleDeleteProject={handleDeleteProject}
      />
    </>
  );
};

export default ProjectActionsForm;
