import {
  GET_PROJECTS,
  ADD_PROJECT,
  DELETE_PROJECT,
  GET_PROJECT,
  EDIT_PROJECT,
  FETCH_PROJECT,
} from "./actions";

import { convertToBase64 } from "../../helpers";

const projectSSFunc = async (file) => await convertToBase64(file);

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_PROJECT.TEXT:
      const { targetText } = action.payload; // e.target
      return {
        ...state,
        project: { ...state.project, [targetText.name]: targetText.value },
      };

    case ADD_PROJECT.IMAGE:
      const { targetImage, projectSS } = action.payload; // e.target
      return {
        ...state,
        project: { ...state.project, [targetImage.name]: projectSS },
      };

    case GET_PROJECT:
      return {
        ...state,
        project: action.payload.project,
        error: action.payload.error,
      };

    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload.projects,
        error: action.payload.error,
      };

    default:
      throw new Error(`no such action: ${action.type}`);
  }
};

export default reducer;
