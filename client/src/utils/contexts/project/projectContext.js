import React, { useReducer, useContext, useEffect } from "react";
import { convertToBase64 } from "../../helpers";
import { toast } from "react-toastify";
import { fetchSingleProject } from "../../services/services";
import {
  GET_PROJECTS,
  ADD_PROJECT,
  DELETE_PROJECT,
  GET_PROJECT,
  EDIT_PROJECT,
} from "./actions";
import { addProject } from "../../services/services";
import { useNavigate } from "react-router-dom";
import reducer from "./reducer";
import { notify } from "../../helpers";

let initialState = {
  project: {
    name: "",
    category: "test",
    desktop: "ewew",
    tablet: "ewew",
    mobile: "ewewew",
  },
  error: "",
  allProjects: [],
};

const ProjectContext = React.createContext();

const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const fetchProject = async (projectId) => {
    const { singleProject, error } = await fetchSingleProject(projectId);
    console.log(error);
    dispatch({
      type: GET_PROJECT,
      payload: { project: { ...singleProject }, error },
    });
  };

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

  const handleCreateProject = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const projectSS = await convertToBase64(e.target.files[0]);

      switch (e.target.name) {
        case "desktop":
          initialState = {
            ...initialState,
            project: {
              ...initialState.project,
              desktop: projectSS,
            },
          };
          break;

        case "tablet":
          initialState = {
            ...initialState,
            project: {
              ...initialState.project,
              tablet: projectSS,
            },
          };
          break;

        case "mobile":
          initialState = {
            ...initialState,
            project: {
              ...initialState.project,
              mobile: projectSS,
            },
          };
          break;

        default:
          console.log("unrecognized breakPoint");
      }
    } else {
      initialState = {
        ...initialState,
        project: {
          ...initialState.project,
          [e.target.name]: e.target.value,
        },
      };
    }

    dispatch({
      type: ADD_PROJECT,
      payload: { project: { ...initialState.project } },
    });
  };

  const clonedState = { state };

  return (
    <ProjectContext.Provider
      value={{
        ...state,
        handleCreateProject,
        handleSubmitProject,
        fetchProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

const useProjectContext = () => useContext(ProjectContext);
export { ProjectProvider, useProjectContext };
