import {
  GET_PROJECTS,
  ADD_PROJECT,
  DELETE_PROJECT,
  GET_PROJECT,
  EDIT_PROJECT,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_PROJECT:
    case GET_PROJECT:
      return {
        ...state,
        project: { ...action.payload.project },
        error: action.payload.error,
      };

    default:
      throw new Error(`no such action: ${action.type}`);
  }
};

export default reducer;
