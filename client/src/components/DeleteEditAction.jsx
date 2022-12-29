import React from "react";
import PropTypes from "prop-types";
import { Trash, Pen, ThreeDotsVertical } from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DeleteEditWrapper from "../assets/wrappers/DeleteEditWrapper";

const DeleteEditAction = ({
  index,
  handleTriggerModal,
  projectId,
  onHandleProjectCb,
  fetchProject,
  handleToggleEdit,
}) => {
  return (
    <DeleteEditWrapper>
      <DropdownButton
        as={ButtonGroup}
        key="down"
        id={`dropdown-button-drop-down_${index}`}
        drop="down"
        variant="secondary"
        className="delete-edit-actions"
        title={<ThreeDotsVertical />}
      >
        <Dropdown.Item
          as="span"
          onClick={() => {
            handleTriggerModal(true);
            onHandleProjectCb(projectId);
          }}
        >
          <Trash />
          <span className="ms-2">Delete</span>
        </Dropdown.Item>
        <Dropdown.Item
          as="span"
          onClick={() => {
            fetchProject(projectId);
            handleToggleEdit(true);
          }}
        >
          <Pen className="text-tertiary" />
          <span className="ms-2">Edit</span>
        </Dropdown.Item>
      </DropdownButton>
    </DeleteEditWrapper>
  );
};

DeleteEditAction.propTypes = {
  index: PropTypes.number.isRequired,
  handleTriggerModal: PropTypes.func.isRequired,
  projectId: PropTypes.string.isRequired,
  onHandleProjectCb: PropTypes.func.isRequired,
};

export default DeleteEditAction;
