import React, { useState, useContext } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useModalContext } from "../../../../utils/contexts/modal/modalContext";
import { Link } from "react-router-dom";
import { DeleteEditAction } from "../../../../components";
import { ModalAlert } from "../../../../components";
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

  return (
    <>
      <div className="dash-container-projects-filtered">
        {filteredProjects.length > 0 && searchKeyword
          ? filteredProjects.map((project, index) => {
              return (
                <div
                  key={`${project}_${index}`}
                  className="d-flex justify-content-between"
                >
                  <Link
                    className="text-secondary mb-0"
                    to={`/projects/${project._id}`}
                  >
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
            })
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

export default FilteredProjects;
