import React, { useState, useEffect } from "react";
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
  }, []);

  const renderCategory = () => {
    return (
        <>
            <p className="d-inline">category:</p>
            <i style={{ color: "orange", fontFamily: "auto",fontWeight: "bold"}}>
                {project.category}
            </i>
        </>
    );
  };

  return (
    <>
      <Container className="mt-5">
        <Row className="my-5">
          <PageSectionTitle
            subtitle={!project ? error : "welcome"}
            titleBold={
              !project
                ? "Couldn't fetch the project or project inexistent"
                : "Your ultimate"
            }
            titleNormal={project && " guide to create social media banners"}
          />
        </Row>
      </Container>

      <PageSectionBanner
        title={project && "A Drive Through Experience"}
        cover={!project ? warning404 : bannerCover}
      />

      {project && (
        <SingleProjectWrapper>
          <Container className="my-5">
            <Row className="justify-content-center">
                <Col lg="12">
                    <h1 className="mb-0">{project.name}</h1>
                    <p className="mt-0">{renderCategory()}</p>
                </Col>
            
                <RenderPreviewDevicesProject project={project} />

                <hr className="my-5" />
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
