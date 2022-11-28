import React, { useReducer, useContext } from "react";
import {
  GET_PROJECTS,
  GET_PROJECT,
  ADD_PROJECT,
  DELETE_PROJECT,
  SEARCH_KEYWORD,
  MATCHED_PROJECT,
  TRIGGER_MODAL,
} from "./actions";
import { convertToBase64, notify } from "../../helpers";
import { fetchSingleProject, addProject, fetchAllProjects, deleteProject, } from "../../services/services";
import { useNavigate } from "react-router-dom";
import reducer from "./reducer";

let initialState = {
  project: {
    name: "",
    category: "",
    desktop: "",
    tablet: "",
    mobile: "",
  },
  error: "",
  projects: [],
  filteredProjects: [],
  searchKeyword: "",
  showModal: false,
};

const ProjectContext = React.createContext();

const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleTriggerModal = (showModal) => {
    dispatch({
      type: TRIGGER_MODAL,
      payload: { showModal },
    });
  };

  const handleMatchedProject = async () => {
    const { allProjects, error } = await fetchAllProjects();

    dispatch({
      type: MATCHED_PROJECT,
      payload: { projects: allProjects, error },
    });
  };

  // search single product
  const handleSearchKeyword = async (e) => {
    dispatch({
      type: SEARCH_KEYWORD,
      payload: { searchKeyword: e.target.value },
    });
  };

  const handleDeleteProject = async (projectId) => {
    const { deletedProject, error } = await deleteProject(projectId);

    if (!!deletedProject) {
      dispatch({
        type: DELETE_PROJECT,
        payload: { deletedProject },
      });
      notify("success", `Project with ID: ${projectId} successfully deleted`);
    } else {
      notify("warning", error);
    }

    handleTriggerModal(false);
  };

  // fetch single project
  const fetchProject = async (projectId) => {
    const { singleProject, error } = await fetchSingleProject(projectId);
    console.log(error);
    dispatch({
      type: GET_PROJECT,
      payload: { project: singleProject, error },
    });
  };

  // fetch all projects
  const fetchProjects = async () => {
    const { allProjects, error } = await fetchAllProjects();
    dispatch({
      type: GET_PROJECTS,
      payload: { projects: allProjects, error },
    });
  };

  // submit single project
  const handleSubmitProject = async (e) => {
    e.preventDefault();
    const { newProject, error } = await addProject(state.project);
    if (newProject && newProject._id) {
      notify(
        "success",
        "Project Created Successfully. You are now redirected to the project's page..."
      );
      setTimeout(() => {
        navigate(`/projects/${newProject._id}`);
      }, 4200);
    }
    if (error) {
      notify("warning", error);
    }
  };

  // get project data
  const handleCreateProject = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const projectSS = await convertToBase64(e.target.files[0]);

      dispatch({
        type: ADD_PROJECT.IMAGE,
        payload: { targetImage: e.target, projectSS },
      });
    } else {
      dispatch({
        type: ADD_PROJECT.TEXT,
        payload: { targetText: e.target },
      });
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        ...state,
        handleCreateProject,
        handleSubmitProject,
        fetchProject,
        fetchProjects,
        handleSearchKeyword,
        handleMatchedProject,
        handleTriggerModal,
        handleDeleteProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

const useProjectContext = () => useContext(ProjectContext);
export { ProjectProvider, useProjectContext };
