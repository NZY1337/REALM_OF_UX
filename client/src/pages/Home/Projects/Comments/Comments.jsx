import React, { useCallback, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import RenderComments from "./RenderComments";
import { useUserContext } from "../../../../utils/contexts/user/userContext";
import {
  publishComment,
  getComments,
  removeComment,
} from "../../../../utils/services/services";
import AddCommentForm from "./FormComment";
import { notify } from "../../../../utils/helpers";

const ProjectComments = ({ projectId }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const { user } = useUserContext();

  const onHandleChange = (e) => {
    setComment(e.target.value);
  };

  const addComment = async (e) => {
    e.preventDefault();

    const userComment = {
      comment,
      userEmail: user.email,
      projectId,
    };

    const replay = await publishComment(userComment);
    notify("success", "Comment added successfully!");
    setComments([replay, ...comments]);
    setComment("");
  };

  const handleDeleteComment = async (commentId) => {
    const { comment, commError } = await removeComment(commentId);

    if (comment) {
      const restofComments = comments.filter(
        (comm) => comm._id !== comment._id
      );
      setComments(restofComments);
      notify("success", "Deleted Successfully");
    }

    if (commError) {
      notify("warning", commError);
    }
  };

  const fetchComments = useCallback(async () => {
    const { comms, error } = await getComments(projectId);
    setComments(comms);
  }, [comments]);

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="position-relative">
      <AddCommentForm
        projectId={projectId}
        addComment={addComment}
        hadleChange={onHandleChange}
        comment={comment}
      />
      {comments && comments.length > 0 ? (
        <>
          <RenderComments
            comments={comments}
            handleDeleteComment={handleDeleteComment}
            user={user}
          />
        </>
      ) : (
        <p>Be the first to post a comment!</p>
      )}
    </div>
  );
};

ProjectComments.propTypes =  {
  projectId: PropTypes.string.isRequired
}

export default ProjectComments;
