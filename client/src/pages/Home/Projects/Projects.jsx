import React, { useEffect } from "react";
import BlogPostsWrapper from "../../../assets/wrappers/Home/BlogPostsWrapper";
import Project from "./Project";
import { Container, Col, Row } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { ButtonPrimary, TitleSection } from "../../../components";
import { useTranslateContext } from "../../../utils/contexts/translate/translateContext";
import { useProjectContext } from "../../../utils/contexts/project/projectContext";

const Projects = () => {
  const {
    homepage: {
      projects: {
        titleSection: { title, subtitle },
        subtitleSection: { description },
      },
    },
  } = useTranslateContext();

  const { projects, fetchProjects } = useProjectContext();

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <BlogPostsWrapper
      white
      display={projects && projects.length > 0 ? "block" : "none"}
    >
      <Container className="blog-posts">
        <Row className="justify-content-center">
          <Col lg="12">
            <TitleSection
              title={title}
              subtitle={subtitle}
              centerMargin="center"
            />
          </Col>
        </Row>

        <Row className="justify-content-center">
          {projects &&
            projects.map((project, idx) => {
              return (
                <Col key={project.name} lg={idx === 1 || idx === 4 ? "4" : "3"}>
                  <Project project={project} />
                </Col>
              );
            })}
          <Col lg="12" className="text-center mt-5">
            <ButtonPrimary href="https://google.com" target="_blank">
              Discover More <ArrowRight />
            </ButtonPrimary>
          </Col>
        </Row>
      </Container>
    </BlogPostsWrapper>
  );
};

export default Projects;
