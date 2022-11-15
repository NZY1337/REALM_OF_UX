import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { PageSectionTitle, PageSectionBanner } from "../../../components";
import bannerCover from "../../../assets/images/img5.jpeg";
import warning404 from "../../../assets/images/404.avif";
import { useParams } from "react-router-dom";
import ProjectComments from "./Comments/Comments";
import RenderPreviewDevicesProject from "./RenderPreviewDevicesProject";
import SingleProjectWrapper from "../../../assets/wrappers/SingleProject/SingleProjectWrapper";
import { useProjectContext } from "../../../utils/contexts/project/projectContext";

const SingleProject = () => {
  const { projectId } = useParams();
  const { project, error, fetchProject } = useProjectContext();

  useEffect(() => {
    fetchProject(projectId);

    window.scrollTo(0, 0);
  }, []);

  const renderCategory = () => {
    return (
      <>
        {project && (
          <>
            Category:
            <i>
              <u> {project && project.category}</u>
            </i>
          </>
        )}
      </>
    );
  };

  console.log(error, project);
  const projectIsEmpty = Object.keys(project).length === 0;

  return (
    <>
      <Container className="mt-5 pt-5">
        <Row className="mt-5">
          <Col className="my-5"></Col>
          <PageSectionTitle
            subtitle={projectIsEmpty ? error : "welcome"}
            titleBold={projectIsEmpty ? error : "Realm of Ux"}
            titleNormal={
              projectIsEmpty ? (
                <p>Could't fetch the project</p>
              ) : (
                "ultimate guide for creating social media banners"
              )
            }
          />
        </Row>
      </Container>

      <PageSectionBanner
        title={projectIsEmpty ? "" : "A Drive Through Experience"}
        cover={projectIsEmpty ? warning404 : bannerCover}
      />

      {!projectIsEmpty && (
        <SingleProjectWrapper>
          <Container className="my-5">
            <Row>
              <Col lg="12">
                <h1 className="mb-0">{project && project.name}</h1>
                <p className="mt-0">{renderCategory()}</p>
              </Col>

              <RenderPreviewDevicesProject project={project} />
              <Col lg="10">
                <ProjectComments projectId={projectId} />
              </Col>
            </Row>
          </Container>
        </SingleProjectWrapper>
      )}
    </>
  );
};

export default SingleProject;
