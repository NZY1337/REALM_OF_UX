import React, { useReducer, useContext } from "react";
import { convertToBase64 } from "../../helpers";
import { fetchSingleProject } from "../../services/services";
import { GET_PROJECTS, ADD_PROJECT, DELETE_PROJECT } from "./actions";

import reducer from "./reducer";

let initialState = {
  project: {
    name: "",
    category: "eewe",
    desktop: "ewew",
    tablet: "ewew",
    mobile: "ewewew",
  },
  allProjects: [],
};

const ProjectContext = React.createContext();

const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
    <ProjectContext.Provider value={{ ...state, handleCreateProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

const useProjectContext = () => useContext(ProjectContext);
export { ProjectProvider, useProjectContext };
