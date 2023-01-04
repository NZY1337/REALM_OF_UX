import React from "react";
import { useProjectContext } from "../../../../utils/contexts/project/projectContext";

//components
import DashContainer from "../../MiniComponents/DashContainer";
import ProjectDashForm from "./ProjectForm";
import ProjectActionsForm from "./ProjectsActionsForm";
import ImagePreviewActions from "../../../../components/ImagePreviewActions";

const ProjectsDash = () => {
  const {
    project,
    filteredProjects,
    handleCreateProject,
    handleSubmitProject,
    handleSearchKeyword,
    searchKeyword,
    handleMatchedProject,
    handleTriggerModal,
    showModal,
    handleDeleteProject,
    handleCreateProjectContent,
    fetchProject,
    handleDeleteImages,
    clearValues,
    projects,
  } = useProjectContext();

  const projectImages = [
    ...project.desktop,
    ...project.tablet,
    ...project.mobile,
  ];

  return (
    <DashContainer>
        <ProjectDashForm
            project={project}
            handleCreateProject={handleCreateProject}
            handleSubmitProject={handleSubmitProject}
            handleCreateProjectContent={handleCreateProjectContent}
            clearValues={clearValues}
        />
    
        <ProjectActionsForm
            filteredProjects={filteredProjects}
            searchKeyword={searchKeyword}
            handleSearchKeyword={handleSearchKeyword}
            handleTriggerModal={handleTriggerModal}
            showModal={showModal}
            handleMatchedProject={handleMatchedProject}
            handleDeleteProject={handleDeleteProject}
            fetchProject={fetchProject}
            projects={projects}
        />
        
        {projectImages.length && projectImages.length > 0 ? (
            <ImagePreviewActions
                projectImages={projectImages}
                handleDeleteImages={handleDeleteImages}
            />
        ) : null}
     </DashContainer>
  );
};

export default ProjectsDash;
