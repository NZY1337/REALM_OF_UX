// projects
export const GET_PROJECTS_ROUTE = "/api/v1/project/all-projects";
export const ADD_PROJECT_ROUTE = `/api/v1/project/project`;
export const GET_PROJECT_ROUTE = (projectId) =>
  `/api/v1/project/get-project/${projectId}`;

//comments
export const GET_COMMENTS_ROUTE = (projectId) =>
  `/api/v1/comment/get-comments/${projectId}`;

export const ADD_COMENT_ROUTE = "/api/v1/comment/add-comment";
export const DELETE_COMMENT_ROUTE = "/api/v1/comment/delete-comment";
