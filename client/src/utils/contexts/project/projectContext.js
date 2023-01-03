import React, { useReducer, useContext, useMemo, useCallback, useState, useEffect } from "react";
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
  REMOVE_IMAGE,
} from "./actions";
import { notify } from "../../helpers";
import { useNavigate } from "react-router-dom";
import { initialState } from "./utils";
import reducer from "./reducer";
import { useUserContext } from "../user/userContext";
import {
  fetchSingleProject,
  fetchAllProjects,
  addOrEditProject,
  deleteProject,
} from "../../services/projects";


import {
  uploadImageToPublicFolder,
  deleteSingleFile,
} from "../../services/image_upload";

const ProjectContext = React.createContext();

const token = localStorage.getItem('token')

const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {token} = useUserContext()
  const navigate = useNavigate();

  // toggle modal
  const handleTriggerModal = useCallback((showModal) => {
    dispatch({
      type: TRIGGER_MODAL,
      payload: { showModal },
    });
  }, []);

  // filter matched projects
  const handleMatchedProject = useCallback(async () => {
    const { projects: allProjects, msg: error } = await fetchAllProjects();
    dispatch({
      type: MATCHED_PROJECT,
      payload: { projects: allProjects, error },
    });
  }, [state.searchKeyword]);

  // search keyword by input value
  const handleSearchKeyword = useCallback(async (e) => {
    dispatch({
      type: SEARCH_KEYWORD,
      payload: { searchKeyword: e.target.value },
    });

    if (e.target.value === "") {
      dispatch({
        type: CLEAR_VALUES,
      });
    }
  }, []);

  // delete project
  const handleDeleteProject = useCallback(
    async (projectId) => {
      const { project: deletedProject, msg: error, error: authErr } = await deleteProject(
        projectId, token
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
        if (error || authErr) {
            notify("warning", error || authErr);
          }
    
      }

      handleTriggerModal(false);
    },
    [handleTriggerModal, token]
  );

  const fetchProject = useCallback(async (projectId) => {
    const { project: singleProject, msg: error } = await fetchSingleProject(
      projectId
    );

    dispatch({
      type: GET_PROJECT,
      payload: { project: singleProject, error },
    });
  }, []);

  // fetch all projects
  const fetchProjects = useCallback(async () => {
    const { projects: allProjects, msg: error } = await fetchAllProjects();

    dispatch({
      type: GET_PROJECTS,
      payload: { projects: allProjects, error },
    });
  }, []);

  // submit single project
  const handleSubmitProject = useCallback(
    async (e) => {
      e.preventDefault();

      const { project, msg: error, error: authErr } = await addOrEditProject(
        state.project._id,
        state.project,
        token
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
      if (error || authErr) {
        notify("warning", error || authErr);
      }
    },
    [navigate, state.project, token]
  );

  const handleCreateProjectContent = useCallback((content) => {
    dispatch({
      type: ADD_PROJECT_CONTENT,
      payload: { content },
    });
  }, [state.project.content]);

  // get project data
  const handleCreateProject = useCallback(
    async (e) => {
      if (e.target.files) {
        for (let file of e.target.files) {
          const { src: projectSS, msg: error } =
            await uploadImageToPublicFolder(file, state.project.name);

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
    },
    [state.project]
  );

  const handleDeleteImages = useCallback(
    async (filename) => {
      const { error, editedProject, message } = await deleteSingleFile(
        filename,
        {
          projectId: state.project._id,
        }
      );

      if (editedProject || message)
        notify("success", message || "File deleted successfully");
      if (error) notify("warning", error);

      dispatch({
        type: REMOVE_IMAGE,
        payload: { filename },
      });
    },
    [state.project._id]
  );

  const clearValues = useCallback(async () => {
    dispatch({
      type: CLEAR_VALUES,
    });
  }, []);

  return (
    <ProjectContext.Provider
      value={useMemo(
        () => ({
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
          handleDeleteImages,
        }),
        [
          state,
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
          handleDeleteImages,
        ]
      )}
    >
      {children}
    </ProjectContext.Provider>
  );
};

const useProjectContext = () => useContext(ProjectContext);
export { ProjectProvider, useProjectContext };
