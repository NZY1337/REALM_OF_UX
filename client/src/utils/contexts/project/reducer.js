import {
  GET_PROJECTS,
  ADD_PROJECT,
  DELETE_PROJECT,
  GET_PROJECT,
  EDIT_PROJECT,
  FETCH_PROJECT,
} from "./actions";

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        project: action.payload.project,
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
