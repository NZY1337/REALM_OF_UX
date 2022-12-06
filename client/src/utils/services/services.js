import axios from "axios";

import {
  ADD_COMENT_ROUTE,
  GET_COMMENTS_ROUTE,
  GET_PROJECT_ROUTE,
  GET_PROJECTS_ROUTE,
  DELETE_COMMENT_ROUTE,
  ADD_PROJECT_ROUTE,
  DELETE_PROJECT_ROUTE,
} from "./apis";


/***********/
// COMMENTS
/***********/
export const publishComment = async (comment) => {
  try {
    const { data } = await axios.post(ADD_COMENT_ROUTE, comment);
    return data.userComment;
  } catch (error) {
    console.log(error);
  }
};

export const getComments = async (projectId) => {
  let comms, error;

  try {
    const {
      data: { comments },
    } = await axios.get(GET_COMMENTS_ROUTE(projectId));

    comms = comments;
  } catch (error) {
    error = error.response.data.msg;
  }

  return { comms, error };
};

export const removeComment = async (commentId) => {
  let comment, commError;

  try {
    const {
      data: { deletedComment },
    } = await axios.delete(DELETE_COMMENT_ROUTE, { data: { commentId } });

    comment = deletedComment;
  } catch (error) {
    commError = error.response.data.msg;
  }

  return { comment, commError };
};

/***********/
// PROJECTS
/***********/

export const fetchSingleProject = async (projectId) => {
  let singleProject, error;
  try {
    const {
      data: { project },
    } = await axios.get(GET_PROJECT_ROUTE(projectId));

    singleProject = project;
  } catch (err) {
    error = err.response.data.msg;
  }

  return { singleProject, error };
};

export const addProject = async (prjkt) => {
  let newProject, error;
  try {
    const {
      data: { project },
    } = await axios.post(ADD_PROJECT_ROUTE, prjkt);
    newProject = project;
  } catch (err) {
    error = err.response.data.msg;
  }

  return { newProject, error };
};

export const fetchAllProjects = async () => {
  let allProjects, error;
  try {
    const {
      data: { projects },
    } = await axios.get(GET_PROJECTS_ROUTE);
    allProjects = projects;
  } catch (err) {
    error = err.response.data.msg;
  }

  return { allProjects, error };
};

export const deleteProject = async (projectId) => {
  let deletedProject, error;
  try {
    const {
      data: { project },
    } = await axios.delete(`${DELETE_PROJECT_ROUTE}/${projectId}`);
    deletedProject = project;
  } catch (err) {
    error = err.response.data.msg;
  }

  return { deletedProject, error };
};
