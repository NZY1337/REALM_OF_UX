import React from "react";
import { Trash, Pen, ThreeDotsVertical } from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useErrorContext } from "../../../../utils/contexts/error/errorContext";

const RenderComments = ({ comments, handleDeleteComment, user }) => {
  const { triggerModalDelete } = useErrorContext();

  return (
    <>
      <h2>Comments</h2>
      {comments.map((comm, key) => (
        <div className="comments-section" key={comm._id}>
          <div className="comments-section__user">
            <p className="mb-0">user: {comm.userEmail}</p>
            <p>{comm.comment}</p>
          </div>
          <div className="comments-section__actions">
            {user && user.email === comm.userEmail && (
              <>
                <DropdownButton
                  as={ButtonGroup}
                  key="down"
                  id={`dropdown-button-drop-down_${key}`}
                  drop="down"
                  variant="secondary"
                  title={<ThreeDotsVertical />}
                >
                  <Dropdown.Item
                    eventKey="1"
                    onClick={() => {
                      const cb = () => handleDeleteComment(comm._id);
                      triggerModalDelete(cb);
                    }}
                  >
                    <Trash />
                    <span className="ms-2">Delete</span>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2" onClick={() => alert(comm._id)}>
                    <Pen className="text-tertiary" />
                    <span className="ms-2">Edit</span>
                  </Dropdown.Item>
                </DropdownButton>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default RenderComments;
