import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { PageSectionTitle, PageSectionBanner } from "../../../components";
import bannerCover from "../../../assets/images/img14.jpeg";
import warning404 from "../../../assets/images/404.avif";
import { useParams } from "react-router-dom";
import ProjectComments from "./Comments/Comments";
import RenderPreviewDevicesProject from "./RenderPreviewDevicesProject";
import SingleProjectWrapper from "../../../assets/wrappers/SingleProject/SingleProjectWrapper";
import { useProjectContext } from "../../../utils/contexts/project/projectContext";

const SingleProject = () => {
  const { projectId } = useParams();
  const { project, error, fetchProject, clearValues } = useProjectContext();

  useEffect(() => {
    fetchProject(projectId);
    window.scrollTo(0, 0);

    return () => {
      clearValues();
    };
  }, [projectId]);

  const renderCategory = () => {
    return (
      <Col lg="12 my-5">
        <h1 className="mb-0">{project.name}</h1>
        <p className="d-inline">
          category:{" "}
          <i style={{ color: "orange", fontFamily: "auto" }}>
            {project.category}
          </i>
        </p>
      </Col>
    );
  };

  return (
    <>
      {/* <PageSectionBanner
        title={project && "A Drive Through Experience"}
        cover={!project ? warning404 : bannerCover}
      /> */}

      {project && (
        <SingleProjectWrapper>
          <Container className="my-5">
            <Row className="justify-content-center">
              {renderCategory()}
              <RenderPreviewDevicesProject project={project} />

              <hr className="my-5" />

              <ProjectComments projectId={projectId} />
            </Row>
          </Container>
        </SingleProjectWrapper>
      )}
    </>
  );
};

export default SingleProject;
