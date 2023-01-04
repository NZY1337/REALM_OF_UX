import React, { useState } from "react";
import PropTypes from "prop-types";
import { useModalContext } from "../../../../utils/contexts/modal/modalContext";
import { Link } from "react-router-dom";

//components
import { DeleteEditAction, ModalAlert } from "../../../../components";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { imagePath } from "../../../../utils/helpers/constants";

const FilteredProjects = ({
  filteredProjects,
  searchKeyword,
  handleDeleteProject,
  fetchProject,
}) => {
  const { handleTriggerModal, modal } = useModalContext();
  const [projectIdCB, setProjectIdCB] = useState(null);

  const onHandleProjectCb = (id) => {
    setProjectIdCB(id);
  };

  const renderFilteredProjects = () => {
    return filteredProjects.map((project, index) => {
      return (
        <div
          key={`${project.name}`}
          className="d-flex justify-content-between align-items-center mb-3 filtered-projects"
        >
          <Link
            className="text-dark mb-0 d-flex align-items-center filtered-projects-result"
            to={`/projects/${project._id}`}
          >
            <img
              className="img-fluid rounded-circle"
              style={{ width: "60px", height: "60px", objectFit: "cover" }}
              src={imagePath(project.desktop[0])}
              alt="project-preview"
            />
            <p className="mb-0 ms-2">{project.name}</p>
          </Link>

          <DeleteEditAction
            index={index}
            handleTriggerModal={handleTriggerModal}
            projectId={project._id}
            onHandleProjectCb={onHandleProjectCb}
            fetchProject={fetchProject}
          />
        </div>
      );
    });
  };

  return (
    <>
      <div className="dash-container-section-filtered">
        {filteredProjects.length > 0 && searchKeyword
          ? renderFilteredProjects()
          : null}

        {/* {filteredProjects.length === 0 && searchKeyword ? (
          <Spinner animation="grow" variant="info" />
        ) : null} */}

        {/* {!filteredProjects.length === 0 && !searchKeyword ? (
          <Spinner animation="grow" variant="info" />
        ) : (
          "nothing found"
        )} */}
        {!filteredProjects.length && searchKeyword && (
          <span className="mb-0">no match</span>
        )}
      </div>

      <ModalAlert showModal={modal} handleTriggerModal={handleTriggerModal}>
        <Button
          variant="danger"
          onClick={() => {
            handleDeleteProject(projectIdCB);
            handleTriggerModal(false);
          }}
        >
          Delete
        </Button>
      </ModalAlert>
    </>
  );
};

FilteredProjects.propTypes = {
  filteredProjects: PropTypes.array.isRequired,
  searchKeyword: PropTypes.string.isRequired,
  handleDeleteProject: PropTypes.func.isRequired,
};

export default FilteredProjects;
