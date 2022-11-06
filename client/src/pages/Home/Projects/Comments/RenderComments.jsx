import React from "react";
import { Trash, Pen } from "react-bootstrap-icons";

const RenderComments = ({ comments, deleteComment, user }) => {
  return (
    <>
      <h2>Comments</h2>
      {comments.map((comm) => (
        <div className="comments-section" key={comm._id}>
          <div className="comments-section__user">
            <p className="mb-0">user: {comm.userEmail}</p>
            <p>{comm.comment}</p>
          </div>
          <div className="comments-section__actions">
            {user && user.email === comm.userEmail && (
              <>
                <div>
                  <Trash
                    className="text-danger"
                    onClick={() => deleteComment(comm._id)}
                  >
                    Delete comment
                    <i class="far fa-copy" style="font-size:36px"></i>
                  </Trash>
                </div>

                <div>
                  <Pen
                    className="text-tertiary"
                    onClick={() => alert(comm._id)}
                  >
                    Edit comment
                    <i class="far fa-copy" style="font-size:36px"></i>
                  </Pen>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default RenderComments;
