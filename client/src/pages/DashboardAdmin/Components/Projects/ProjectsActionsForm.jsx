import React, { useEffect } from "react";
import PropTypes from "prop-types";

// components
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FilteredProjects from "./FilteredProjects";
import FormGroup from "../../../../utils/helpers/react/FormGroup";

const ProjectActionsForm = ({
  filteredProjects,
  handleSearchKeyword,
  searchKeyword,
  handleMatchedProject,
  handleTriggerModal,
  showModal,
  handleDeleteProject,
  fetchProject,
  projects,
}) => {
  useEffect(() => {
    handleMatchedProject();
  }, [handleMatchedProject, searchKeyword]);

  return (
    <>
      <Form>
        <div className="d-flex align-items-start">
          <h6 className="mb-4 me-2">Edit or Delete Projects</h6>
          <span className="badge bg-primary text-white">{projects && projects.length}</span>
        </div>

        <Row>
          <Col lg="12" xxl="6">
            <FormGroup
              label="Search Project by title"
              type="text"
              name="name"
              placeholder="Enter the project name"
              value={searchKeyword}
              onHandleChange={handleSearchKeyword}
            />
          </Col>
        </Row>
      </Form>

      <FilteredProjects
        filteredProjects={filteredProjects}
        searchKeyword={searchKeyword}
        handleTriggerModal={handleTriggerModal}
        showModal={showModal}
        handleDeleteProject={handleDeleteProject}
        fetchProject={fetchProject}
      />
    </>
  );
};

ProjectActionsForm.propTypes = {
  filteredProjects: PropTypes.array.isRequired,
  searchKeyword: PropTypes.string.isRequired,
  handleDeleteProject: PropTypes.func.isRequired,
  handleMatchedProject: PropTypes.func.isRequired,
  handleTriggerModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};

export default ProjectActionsForm;
