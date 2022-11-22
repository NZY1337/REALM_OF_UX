import {
  GET_PROJECTS,
  ADD_PROJECT,
  DELETE_PROJECT,
  GET_PROJECT,
  EDIT_PROJECT,
  SEARCH_KEYWORD,
  MATCHED_PROJECT,
  TRIGGER_MODAL,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case TRIGGER_MODAL:
      return { ...state, showModal: action.payload.showModal };

    case MATCHED_PROJECT:
      return {
        ...state,
        error: action.payload.error,
        projects: action.payload.projects,
        filteredProjects: state.projects.filter(
          (project) =>
            !!state.searchKeyword &&
            project.name
              .toLowerCase()
              .includes(state.searchKeyword.toLowerCase())
        ),
      };

    case SEARCH_KEYWORD:
      return { ...state, searchKeyword: action.payload.searchKeyword };

    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project._id !== action.payload.deletedProject._id
        ),
        filteredProjects: state.filteredProjects.filter(
          (project) => project._id !== action.payload.deletedProject._id
        ),
      };

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
