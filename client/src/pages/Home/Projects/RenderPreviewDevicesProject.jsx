import React from "react";
import PropTypes from 'prop-types';
import { Col } from "react-bootstrap";
import { Arrow90degRight } from "react-bootstrap-icons";
import { ButtonPrimary } from "../../../components";


const RenderProject = ({ project }) => {
  console.log(project)
  
  return (
    <Col  key={project} lg="4">
      <div>
        <img
            src={project}
            className="img-fluid w-100 mb-3"
            style={{ objectFit: "cover", height: "500px" }}
        />
      </div>
    </Col>
  );
};



const RenderPreviewDevicesProject = ({ project }) => {
    const { desktop, mobile, tablet } = project
    const projectScreenShots = [...desktop, ...mobile, ...tablet];

  const renderProjects = () => {
    return projectScreenShots.map((project, index) => {
      return <RenderProject key={project + index} project={project} />;
    });
  };
  
  return (
    <>
        {renderProjects()} 
       <Col lg="5" className="my-4">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ea earum
                aspernatur explicabo voluptates, libero cupiditate harum velit nulla,
                autem labore in doloremque magnam deserunt porro. Voluptas vel minima
                autem!
            </p>
            <ButtonPrimary> 
                Preview <Arrow90degRight />
            </ButtonPrimary>
       </Col>
    </> 
  )
};


RenderProject.propTypes = {
  project: PropTypes.string.isRequired
}



export default RenderPreviewDevicesProject;
