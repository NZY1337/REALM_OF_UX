import React, { useReducer, useContext, useEffect } from "react";
import {
  GET_PROJECTS,
  FETCH_PROJECT,
  GET_PROJECT,
  ADD_PROJECT,
} from "./actions";
import { convertToBase64 } from "../../helpers";
import { toast } from "react-toastify";
import { fetchSingleProject } from "../../services/services";
import { addProject, fetchAllProjects } from "../../services/services";
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
  // fetch single project
  const fetchProject = async (projectId) => {
    const { singleProject, error } = await fetchSingleProject(projectId);

    dispatch({
      type: GET_PROJECT,
      payload: { project: singleProject, error },
    });
  };

  // fetch all projects
  const fetchProjects = async () => {
    const { allProjects, error } = await fetchAllProjects();
    console.log(allProjects);
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

  return (
    <ProjectContext.Provider
      value={{
        ...state,
        handleCreateProject,
        handleSubmitProject,
        fetchProject,
        fetchProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

const useProjectContext = () => useContext(ProjectContext);
export { ProjectProvider, useProjectContext };
