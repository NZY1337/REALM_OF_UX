import React from "react";
import { Trash, Pen, ThreeDotsVertical } from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const RenderComments = ({ comments, deleteComment, user }) => {
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
                  <Dropdown.Item eventKey="1">
                    <Trash onClick={() => deleteComment(comm._id)} />
                    <span className="ms-2">Delete</span>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2">
                    <Pen
                      className="text-tertiary"
                      onClick={() => alert(comm._id)}
                    />
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
