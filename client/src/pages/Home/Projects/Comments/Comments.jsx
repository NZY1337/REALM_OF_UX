import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import RenderComments from "./RenderComments";
import { useUserContext } from "../../../../utils/contexts/user/userContext";

import AddCommentForm from "./FormComment";
import Col from "react-bootstrap/Col";
import { notify } from "../../../../utils/helpers";

import {
  publishComment,
  getComments,
  removeComment,
} from "../../../../utils/services/comments";

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

    const publishedComment = await publishComment(userComment);
    console.log(publishedComment);
    notify("success", "Comment added successfully!");
    setComments([publishedComment, ...comments]);
    setComment("");
  };

  const handleDeleteComment = async (commentId) => {
    const { deletedComment, msg: error } = await removeComment(commentId);

    if (deletedComment) {
      const restofComments = comments.filter(
        (comm) => comm._id !== deletedComment._id
      );
      setComments(restofComments);
      notify("success", "Deleted Successfully");
    }

    if (error) {
      notify("warning", error);
    }
  };

  const fetchComments = useCallback(async () => {
    const { comments, msg: error } = await getComments(projectId);
    setComments(comments);

    if (error) {
      notify("warning", error);
    }
  }, [projectId]);

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <Col lg="10" className="position-relative">
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
    </Col>
  );
};

ProjectComments.propTypes = {
  projectId: PropTypes.string.isRequired,
};

export default ProjectComments;
