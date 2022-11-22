import React from "react";
import DashboardAdminWrapper from "../../../../assets/wrappers/Dashboard/DashboardAdminWrapper";
import { Row, Col } from "react-bootstrap";
import SideBar from "../../SideBar";
import DashTitle from "../../MiniComponents/DashTitle";
import DashboardWrapper from "../../../../assets/wrappers/Dashboard/DashboardWrapper";
import { PageSectionTitle } from "../../../../components";
import DashContainer from "../../MiniComponents/DashContainer";
import ProjectDashForm from "./ProjectsDashForm";
import ProjectActionsForm from "./ProjectsActionsForm";
import { useProjectContext } from "../../../../utils/contexts/project/projectContext";

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
  } = useProjectContext();

  return (
    <DashboardAdminWrapper>
      <SideBar />
      <DashboardWrapper>
        <DashTitle title="Projects" />

        <DashContainer>
          <Row>
            <PageSectionTitle
              subtitle="weclome to our realm of templates"
              titleBold="Upload "
              titleNormal="your project here!"
            />
          </Row>

          <Row className="dash-container-projects mt-4">
            <Col lg="6">
              <div className="dash-container-projects-wrapper">
                <ProjectDashForm
                  project={project}
                  handleCreateProject={handleCreateProject}
                  handleSubmitProject={handleSubmitProject}
                />
              </div>
            </Col>

            <Col lg="6">
              <div className="dash-container-projects-wrapper">
                <ProjectActionsForm
                  filteredProjects={filteredProjects}
                  searchKeyword={searchKeyword}
                  handleSearchKeyword={handleSearchKeyword}
                  handleTriggerModal={handleTriggerModal}
                  showModal={showModal}
                  handleMatchedProject={handleMatchedProject}
                  handleDeleteProject={handleDeleteProject}
                />
              </div>
            </Col>
          </Row>
        </DashContainer>
      </DashboardWrapper>
    </DashboardAdminWrapper>
  );
};

export default ProjectsDash;
