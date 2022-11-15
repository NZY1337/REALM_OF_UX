import React from "react";
import DashboardAdminWrapper from "../../../../assets/wrappers/Dashboard/DashboardAdminWrapper";
import { Row, Col } from "react-bootstrap";
import SideBar from "../../SideBar";
import DashTitle from "../../MiniComponents/DashTitle";
import DashboardWrapper from "../../../../assets/wrappers/Dashboard/DashboardWrapper";
import { PageSectionTitle } from "../../../../components";
import DashContainer from "../../MiniComponents/DashContainer";
import ProjectDashForm from "./ProjectsDashForm";
import { useProjectContext } from "../../../../utils/contexts/project/projectContext";

const ProjectsDash = () => {
  const {
    project: { project },
    handleCreateProject,
  } = useProjectContext();
  return (
    <DashboardAdminWrapper>
      <SideBar />
      <DashboardWrapper>
        <DashTitle title="Projects" />

        <DashContainer>
          <Row className="dash-container-projects">
            <PageSectionTitle
              subtitle="weclome to our realm of templates"
              titleBold="Upload "
              titleNormal="your project here!"
            />

            <Col lg="6">
              <ProjectDashForm
                project={project}
                handleCreateProject={handleCreateProject}
              />
            </Col>

            <Col lg="6">
              <p>Can place an image...</p>
              <img
                //   style={{objectFit:"cover"}}
                className="img-fluid w-50 h-75"
                src={
                  "https://i.pinimg.com/564x/ab/d5/34/abd534fe1cfe1a1676bb28ca966266bb.jpg"
                }
              />
            </Col>
          </Row>
        </DashContainer>
      </DashboardWrapper>
    </DashboardAdminWrapper>
  );
};

export default ProjectsDash;
