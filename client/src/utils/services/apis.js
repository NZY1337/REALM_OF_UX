// projects
export const GET_PROJECTS_ROUTE = "/api/v1/project/all-projects";
export const ADD_PROJECT_ROUTE = "/api/v1/project/project";
export const EDIT_PROJECT_ROUTE = (projectId) => `/api/v1/project/edit-project/${projectId}`;
export const DELETE_PROJECT_ROUTE = (projectId) => `/api/v1/project/delete-project/${projectId}`;
export const GET_PROJECT_ROUTE = (projectId) => `/api/v1/project/get-project/${projectId}`;

// comments
export const GET_COMMENTS_ROUTE = (projectId) => `/api/v1/comment/get-comments/${projectId}`;
export const ADD_COMMENT_ROUTE = "/api/v1/comment/add-comment";
export const DELETE_COMMENT_ROUTE = "/api/v1/comment/delete-comment";

// image
export const GET_IMAGE_UPLOAD_ROUTE = "/api/v1/products/uploads";
export const DELETE_IMAGE_ROUTE = (projectId, imageId) =>  `/api/v1/products/uploads/${projectId}/${imageId}`;
export const DELETE_IMAGE_ROUTE_NOID = (filename) => `/api/v1/products/uploads/${filename}`;