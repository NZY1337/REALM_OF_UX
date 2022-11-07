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

  const deleteComment = async (commentId) => {
    await removeComment(commentId);
    const restofComments = comments.filter((comm) => comm._id !== commentId);
    setComments(restofComments);

    notify("delete", "success", "Deleted Successfully");
  };

  const fetchComments = useCallback(async () => {
    const { replays, error } = await getComments(projectId);
    setComments(replays);
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
            deleteComment={deleteComment}
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
