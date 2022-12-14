import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import { Arrow90degUp } from "react-bootstrap-icons";
import { ButtonTertiary } from "../../../components/Buttons";
import RenderProjectSS from "./RenderProjectSS";
import { ModalPresentationArticle, SocialShare } from "../../../components";

const RenderPreviewDevicesProject = ({ project }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { desktop, mobile, tablet } = project;
  const projectsDesktopSS = [...desktop];
  const projectScreenShots = [...mobile, ...tablet];

  const style = {
    background: `linear-gradient(
    358deg,
    #093e6340 -76.6%,
    rgb(64 219 255 / 0%) 64.79%
  )`,
    borderRadius: "5px",
  };

  const renderDesktopView = () => {
    return projectsDesktopSS.map((project) => (
      <RenderProjectSS key={project} project={project} />
    ));
  };

  const renderProjectSS = () => {
    return projectScreenShots.map((project) => (
      <RenderProjectSS key={project} project={project} />
    ));
  };

  return (
    <>
      <Col
        lg="12"
        className="d-flex flex-column align-items-center"
        style={style}
      >
        {renderDesktopView()}

        <div className="d-flex align-items-center justify-content-between w-100 my-4">
          <SocialShare url="https://google.com" />

          <ButtonTertiary fs="18" onClick={handleShow}>
            View More <Arrow90degUp />
          </ButtonTertiary>
        </div>
      </Col>

      <ModalPresentationArticle
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        projectScreenShots={projectScreenShots}
        renderProjectSS={renderProjectSS}
        title="Hello World"
      >
        {renderProjectSS()}
      </ModalPresentationArticle>

      <Col lg="8" className="my-5 project-description">
        <p
          className="mb-0"
          dangerouslySetInnerHTML={{ __html: project.content }}
        ></p>
      </Col>
    </>
  );
};

RenderPreviewDevicesProject.propTypes = {
  project: PropTypes.object.isRequired,
};

export default RenderPreviewDevicesProject;
