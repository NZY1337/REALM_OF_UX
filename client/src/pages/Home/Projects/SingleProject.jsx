import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { PageSectionTitle, PageSectionBanner } from "../../../components";
import bannerCover from "../../../assets/images/img5.jpeg";
import warning404 from "../../../assets/images/404.avif";
import { useParams } from "react-router-dom";
import ProjectComments from "./Comments/Comments";
import { fetchSingleProject } from "../../../utils/services/services";
import RenderPreviewDevicesProject from "./RenderPreviewDevicesProject";
import SingleProjectWrapper from "../../../assets/wrappers/SingleProject/SingleProjectWrapper";

const SingleProject = () => {
  const { projectId } = useParams();

  const [project, setProject] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProject();

    window.scrollTo(0, 0);
  }, []);

  const fetchProject = async () => {
    const { singleProject, error } = await fetchSingleProject(projectId);
    if (error) setError(error);

    setProject(singleProject);
  };

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

  return (
    <>
      <PageSectionTitle
        subtitle={!project ? error : "welcome"}
        titleBold={!project ? "Error!" : "Realm of Ux"}
        titleNormal={
          !project ? (
            <p>Could't fetch the project</p>
          ) : (
            "ultimate guide for creating social media banners"
          )
        }
      />

      <PageSectionBanner
        title={!project ? "" : "A Drive Through Experience"}
        cover={!project ? warning404 : bannerCover}
      />

      {project && (
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
