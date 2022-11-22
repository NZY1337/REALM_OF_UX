import React, { useCallback, useEffect, useState } from "react";
import RenderComments from "./RenderComments";
import { useErrorContext } from "../../../../utils/contexts/error/errorContext";
import { useUserContext } from "../../../../utils/contexts/user/userContext";
import {
  publishComment,
  getComments,
  removeComment,
} from "../../../../utils/services/services";
import AddCommentForm from "./FormComment";

const ProjectComments = ({ projectId }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const { user } = useUserContext();
  const { notify } = useErrorContext();

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
    notify("add", "success", "Comment added successfully!");
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
      notify("delete", "success", "Deleted Successfully");
    }

    if (commError) {
      notify("delete", "warning", commError);
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

export default ProjectComments;
