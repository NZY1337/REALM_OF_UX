import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { ButtonPrimary } from "../../../components";
import RenderProjectSS from "./RenderProjectSS";
import { ModalPresentationArticle } from "../../../components";
import { SocialShare } from "../../../components";

const RenderPreviewDevicesProject = ({ project }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { desktop, mobile, tablet } = project;
  const projectsDesktopSS = [...desktop];
  const projectScreenShots = [...mobile, ...tablet];

  const renderDesktopView = () => {
    return projectsDesktopSS.map((project, index) => (
      <RenderProjectSS key={project + index} project={project} />
    ));
  };

  const renderProjectSS = () => {
    return projectScreenShots.map((project, index) => (
      <RenderProjectSS key={project + index} project={project} />
    ));
  };

  return (
    <>
      <Col lg="12" className="d-flex flex-column align-items-center">
        {renderDesktopView()}

        <div className="d-flex align-items-center justify-content-between w-100 my-4">
          <SocialShare url="https://google.com" />

          <ButtonPrimary onClick={handleShow}>
            View More <ArrowRight />
          </ButtonPrimary>
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

      <Col lg="8" className="my-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ea
          earum aspernatur explicabo voluptates, libero cupiditate harum velit
          nulla, autem labore in doloremque magnam deserunt porro. Voluptas vel
          minima autem!
        </p>
      </Col>
    </>
  );
};

RenderPreviewDevicesProject.propTypes = {
  project: PropTypes.string.isRequired,
};

export default RenderPreviewDevicesProject;
