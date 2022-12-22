import React, { useEffect } from "react";
import PropTypes from "prop-types";

// components
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FilteredProjects from "./FilteredProjects";
import ProjectsDashFormGroup from "../../../../utils/helpers/react/FormGroup";

const ProjectActionsForm = ({
  filteredProjects,
  handleSearchKeyword,
  searchKeyword,
  handleMatchedProject,
  handleTriggerModal,
  showModal,
  handleDeleteProject,
  fetchProject,
  handleToggleEdit,
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
            <ProjectsDashFormGroup
              label="Search Project by title"
              type="text"
              name="name"
              placeholder="Enter the project's name"
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
        handleToggleEdit={handleToggleEdit}
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
