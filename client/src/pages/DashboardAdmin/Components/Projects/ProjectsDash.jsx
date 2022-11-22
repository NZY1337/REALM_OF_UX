import React from "react";
import PropTypes from "prop-types";
import { useProjectContext } from "../../../../utils/contexts/project/projectContext";

//components
import DashboardAdminWrapper from "../../../../assets/wrappers/Dashboard/DashboardAdminWrapper";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideBar from "../../SideBar";
import DashTitle from "../../MiniComponents/DashTitle";
import DashboardWrapper from "../../../../assets/wrappers/Dashboard/DashboardWrapper";
import { PageSectionTitle } from "../../../../components";
import DashContainer from "../../MiniComponents/DashContainer";
import ProjectDashForm from "./ProjectsDashForm";
import ProjectActionsForm from "./ProjectsActionsForm";

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

ProjectsDash.propTypes = {
  project: PropTypes.object.isRequired,
  showModal: PropTypes.bool.isRequired,
  handleCreateProject: PropTypes.func.isRequired,
  handleSubmitProject: PropTypes.func.isRequired,
  handleSearchKeyword: PropTypes.func.isRequired,
  filteredProjects: PropTypes.array.isRequired,
  searchKeyword: PropTypes.string.isRequired,
  handleDeleteProject: PropTypes.func.isRequired,
  handleMatchedProject: PropTypes.func.isRequired,
  handleTriggerModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  handleDeleteProject: PropTypes.func.isRequired,
};

export default ProjectsDash;
