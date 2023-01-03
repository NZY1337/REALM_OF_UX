import { makeRequest } from "./utils";
import {
  GET_PROJECT_ROUTE,
  EDIT_PROJECT_ROUTE,
  ADD_PROJECT_ROUTE,
  GET_PROJECTS_ROUTE,
  DELETE_PROJECT_ROUTE,
} from "./apis";

export const fetchSingleProject = async (projectId) => {
  const data = await makeRequest("get", GET_PROJECT_ROUTE(projectId));
  return data;
};

export const addOrEditProject = async (projectId, prjkt, token) => {
  let url;
  if (projectId) {
    url = EDIT_PROJECT_ROUTE(projectId);
  } else {
    url = ADD_PROJECT_ROUTE;
  }
  const data = await makeRequest(projectId ? "put" : "post", url, prjkt, token);
  return data;
};

export const fetchAllProjects = async () => {
  const data = await makeRequest("get", GET_PROJECTS_ROUTE);
  return data;
};

export const deleteProject = async (projectId) => {
  const data = await makeRequest("delete", DELETE_PROJECT_ROUTE(projectId));
  return data;
};
