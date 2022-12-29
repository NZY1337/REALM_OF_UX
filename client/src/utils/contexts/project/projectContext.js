import React, { useReducer, useContext, useMemo, useCallback } from "react";
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
  REMOVE_IMAGE,
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

import {
  uploadImageToPublicFolder,
  deleteSingleImageNoID,
  delteSingleImageID,
} from "../../services/image_upload";

const ProjectContext = React.createContext();

const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  // edit or create
  const handleToggleEdit = useCallback((toggle) => {
    dispatch({
      type: TOGGLE_EDIT,
      payload: { toggleEdit: toggle },
    });
  }, []);

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
  }, []);

  // search keyword by input value
  const handleSearchKeyword = useCallback(async (e) => {
    dispatch({
      type: SEARCH_KEYWORD,
      payload: { searchKeyword: e.target.value },
    });
  }, []);

  // delete project
  const handleDeleteProject = useCallback(
    async (projectId) => {
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
    },
    [handleTriggerModal]
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
    },
    [handleToggleEdit, navigate, state.project, state.toggleEdit]
  );

  const handleCreateProjectContent = useCallback((content) => {
    dispatch({
      type: ADD_PROJECT_CONTENT,
      payload: { content },
    });
  }, []);

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
    [state.project.name]
  );

  const handleDeleteImages = useCallback(
    async (filename) => {
      const handleDeleteImageEditingOn = async (filename) => {
        await delteSingleImageID(state.project._id, filename);

        dispatch({
          type: REMOVE_IMAGE,
          payload: { filename },
        });
      };

      const handleDeleteImageEditingOff = async (filename) => {
        const data = await deleteSingleImageNoID(filename);

        if (data.message) {
          notify("success", data.message);
          dispatch({
            type: REMOVE_IMAGE,
            payload: { filename },
          });
        }
        if (data.error) notify("warning", data.error);
      };

      if (state.toggleEdit) {
        handleDeleteImageEditingOn(filename);
      } else {
        handleDeleteImageEditingOff(filename);
      }
    },
    [state.project._id, state.toggleEdit]
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
          handleToggleEdit,
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
          handleToggleEdit,
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
