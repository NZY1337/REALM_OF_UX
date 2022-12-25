import React, { useReducer, useContext } from "react";
import {
  GET_PROJECTS,
  GET_PROJECT,
  ADD_PROJECT,
  ADD_PROJECT_CONTENT,
  DELETE_PROJECT,
  SEARCH_KEYWORD,
  MATCHED_PROJECT,
  TRIGGER_MODAL,
  CLEAR_VALUES,
  TOGGLE_EDIT,
} from "./actions";
import { notify } from "../../helpers";
import { useNavigate } from "react-router-dom";
import { initialState } from "./utils";
import reducer from "./reducer";
import {
  fetchSingleProject,
  fetchAllProjects,
  addOrEditProject,
  deleteProject,
} from "../../services/projects";

import { uploadImageToPublicFolder } from "../../services/image_upload";

const ProjectContext = React.createContext();

const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleToggleEdit = (toggle) => {
    dispatch({
      type: TOGGLE_EDIT,
      payload: { toggleEdit: toggle },
    });
  };

  const handleTriggerModal = (showModal) => {
    dispatch({
      type: TRIGGER_MODAL,
      payload: { showModal },
    });
  };

  const handleMatchedProject = async () => {
    const { projects: allProjects, msg: error } = await fetchAllProjects();
    dispatch({
      type: MATCHED_PROJECT,
      payload: { projects: allProjects, error },
    });
  };

  const handleSearchKeyword = async (e) => {
    dispatch({
      type: SEARCH_KEYWORD,
      payload: { searchKeyword: e.target.value },
    });
  };

  const handleDeleteProject = async (projectId) => {
    const { project: deletedProject, msg: error } = await deleteProject(
      projectId
    );

    if (!!deletedProject) {
      dispatch({
        type: DELETE_PROJECT,
        payload: { deletedProject },
      });

      dispatch({
        type: CLEAR_VALUES,
      });
      notify("success", `Project with ID: ${projectId} successfully deleted`);
    } else {
      notify("warning", error);
    }

    handleTriggerModal(false);
  };

  // fetch single project
  const fetchProject = async (projectId) => {
    const { project: singleProject, msg: error } = await fetchSingleProject(
      projectId
    );

    dispatch({
      type: GET_PROJECT,
      payload: { project: singleProject, error },
    });
  };

  // fetch all projects
  const fetchProjects = async () => {
    // const { allProjects, error } = await fetchAllProjects();
    const { projects: allProjects, msg: error } = await fetchAllProjects();

    dispatch({
      type: GET_PROJECTS,
      payload: { projects: allProjects, error },
    });
  };

  // submit single project
  const handleSubmitProject = async (e) => {
    e.preventDefault();

    const { project, msg: error } = await addOrEditProject(
      state.project._id,
      state.toggleEdit,
      state.project
    );

    if (project && project._id) {
      notify(
        "success",
        "Project Created Successfully. You are now redirected to the project's page..."
      );
      setTimeout(() => {
        navigate(`/projects/${project._id}`);
      }, 4200);
    }
    if (error) {
      notify("warning", error);
    }

    handleToggleEdit(false);
  };

  const handleCreateProjectContent = (content) => {
    dispatch({
      type: ADD_PROJECT_CONTENT,
      payload: { content },
    });
  };

  // get project data
  const handleCreateProject = async (e) => {
    if (e.target.files) {
      for (let file of e.target.files) {
        const { src: projectSS, msg: error } = await uploadImageToPublicFolder(
          file,
          state.project.name
        );

        if (error) {
          notify("warning", error);
        }

        dispatch({
          type: ADD_PROJECT.IMAGE,
          payload: { targetImage: e.target, projectSS },
        });
      }
    } else {
      dispatch({
        type: ADD_PROJECT.TEXT,
        payload: { targetText: e.target },
      });
    }
  };

  const clearValues = () => {
    dispatch({
      type: CLEAR_VALUES,
    });
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
        clearValues,
        handleCreateProjectContent,
        handleToggleEdit,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

const useProjectContext = () => useContext(ProjectContext);
export { ProjectProvider, useProjectContext };
