import React from "react";

const RenderComments = ({ comments, deleteComment, user }) => {
  return (
    <>
      <h2>Comments</h2>
      {comments.map((comm) => (
        <div key={comm._id}>
          <p className="mb-0">
            user: <i>{comm.userEmail}</i>
          </p>
          <p>{comm.comment}</p>
          {user && user.email === comm.userEmail && (
            <button onClick={() => deleteComment(comm._id)}>
              Delete comment
            </button>
          )}
          <hr />
        </div>
      ))}
    </>
  );
};

export default RenderComments;
