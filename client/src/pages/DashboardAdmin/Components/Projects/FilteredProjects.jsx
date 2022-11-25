import React, { useState } from "react";
import PropTypes from "prop-types";
import { useModalContext } from "../../../../utils/contexts/modal/modalContext";
import { Link } from "react-router-dom";

//components
import { DeleteEditAction, ModalAlert } from "../../../../components";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

const FilteredProjects = ({
  filteredProjects,
  searchKeyword,
  handleDeleteProject,
}) => {
  const { handleTriggerModal, modal } = useModalContext();
  const [projectIdCB, setProjectIdCB] = useState(null);

  const onHandleProjectCb = (pId) => {
    setProjectIdCB(pId);
  };

  const renderFilteredProjects = () => {
    return filteredProjects.map((project, index) => {
      return (
        <div
          key={`${project}_${index}`}
          className="d-flex justify-content-between"
        >
          <Link className="text-secondary mb-0" to={`/projects/${project._id}`}>
            {project.name}
          </Link>

          <DeleteEditAction
            index={index}
            handleTriggerModal={handleTriggerModal}
            projectId={project._id}
            onHandleProjectCb={onHandleProjectCb}
          />
        </div>
      );
    });
  };

  return (
    <>
      <div className="dash-container-projects-filtered">
        {filteredProjects.length > 0 && searchKeyword
          ? renderFilteredProjects()
          : null}

        {filteredProjects.length === 0 && searchKeyword ? (
          <Spinner animation="grow" variant="info" />
        ) : null}
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
