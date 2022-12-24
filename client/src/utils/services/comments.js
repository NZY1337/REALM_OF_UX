import { makeRequest } from ".";

import {
  ADD_COMENT_ROUTE,
  GET_COMMENTS_ROUTE,
  DELETE_COMMENT_ROUTE,
} from "./apis";

export const publishComment = async (comment) => {
  const data = await makeRequest("post", ADD_COMENT_ROUTE, comment);
  return data.userComment;
};

export const getComments = async (projectId) => {
  const data = await makeRequest("get", GET_COMMENTS_ROUTE(projectId));
  return data;
};

export const removeComment = async (commentId) => {
  const data = await makeRequest("delete", DELETE_COMMENT_ROUTE, { commentId });
  return data;
};
