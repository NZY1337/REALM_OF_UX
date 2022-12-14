import React from "react";
import { useProjectContext } from "../../../../utils/contexts/project/projectContext";

//components
import DashboardAdminWrapper from "../../../../assets/wrappers/Dashboard/DashboardAdminWrapper";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideBar from "../../SideBar";
import DashTitle from "../../MiniComponents/DashTitle";
import DashboardWrapper from "../../../../assets/wrappers/Dashboard/DashboardWrapper";
import DashContainer from "../../MiniComponents/DashContainer";
import ProjectDashForm from "./ProjectsDashForm";
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
    <DashboardAdminWrapper>
      <SideBar />
      <DashboardWrapper>
        <DashTitle title="Projects" />

        <DashContainer>
          <Row className="dash-container-projects mt-4">
            <Col lg="12" xxl="4" xl="12" md="12">
              <div className="dash-container-projects-wrapper">
                <ProjectDashForm
                  project={project}
                  handleCreateProject={handleCreateProject}
                  handleSubmitProject={handleSubmitProject}
                  handleCreateProjectContent={handleCreateProjectContent}
                  clearValues={clearValues}
                />
              </div>
            </Col>

            <Col lg="6" xxl="4" md="12" className="my-4 my-xxl-0">
              <div className="dash-container-projects-wrapper">
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
              </div>
            </Col>
            {projectImages.length && projectImages.length > 0 ? (
            <Col  lg="6" xxl="4" md="12">
                <div className="dash-container-projects-wrapper my-4 my-xxl-0">
                  <ImagePreviewActions
                    projectImages={projectImages}
                    handleDeleteImages={handleDeleteImages}
                  />
                </div>
              </Col>
               ) : null}
          </Row>
        </DashContainer>
      </DashboardWrapper>
    </DashboardAdminWrapper>
  );
};

export default ProjectsDash;
