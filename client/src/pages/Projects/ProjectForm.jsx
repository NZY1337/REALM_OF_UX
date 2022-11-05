import React, { useState } from "react";
import cover from "../../assets/images/img1.jpeg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { convertToBase64 } from "../../utils/helpers";
import axios from "axios";
import { PageSectionBanner, PageSectionTitle } from "../../components";

const ProjectForm = () => {
  const [newProject, setNewProject] = useState({
    name: "",
    category: "",
    desktop: "",
    tablet: "",
    mobile: "",
  });

  const handleOnchangeUploadSS = async (e) => {
    if (e.target.files[0]) {
      const projectSS = await convertToBase64(e.target.files[0]);

      switch (e.target.name) {
        case "desktop":
          setNewProject({ ...newProject, desktop: projectSS });
          break;

        case "tablet":
          setNewProject({ ...newProject, tablet: projectSS });
          break;

        case "mobile":
          setNewProject({ ...newProject, mobile: projectSS });
          break;

        default:
          console.log("unrecognized breakPoint");
      }
    }
  };

  const handleOnChangeProjectName = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/v1/project/project", newProject);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PageSectionTitle
        subtitle="inspire the world with your ideas"
        titleBold="Upload "
        titleNormal="your project here"
      />

      <PageSectionBanner
        title="Designed to impress your audience"
        cover={cover}
      />

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-5">
            <h3>Add Your Project Here</h3>
            <Form onSubmit={handleSubmitForm}>
              <Form.Group className="mb-3" controlId="projet-name">
                <Form.Label>Project's Name</Form.Label>
                <Form.Control
                  type="name"
                  name="name"
                  placeholder="Enter the project's name"
                  onChange={handleOnChangeProjectName}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="projet-name">
                <Form.Label>Project's Category</Form.Label>
                <Form.Control
                  type="name"
                  name="category"
                  placeholder="Enter the project's name"
                  onChange={handleOnChangeProjectName}
                />
              </Form.Group>

              <Form.Group controlId="desktopVersion" className="mb-3">
                <Form.Label>Desktop Version</Form.Label>
                <Form.Control
                  onChange={handleOnchangeUploadSS}
                  type="file"
                  accept=".jpeg, .png, .jpg"
                  size="sm"
                  name="desktop"
                />
              </Form.Group>

              <Form.Group controlId="tabletVersion" className="mb-3">
                <Form.Label>Tablet Version</Form.Label>
                <Form.Control
                  onChange={handleOnchangeUploadSS}
                  accept=".jpeg, .png, .jpg"
                  type="file"
                  size="sm"
                  name="tablet"
                />
              </Form.Group>

              <Form.Group controlId="mobileVersion" className="mb-3">
                <Form.Label>Mobile Version</Form.Label>
                <Form.Control
                  onChange={handleOnchangeUploadSS}
                  accept=".jpeg, .png, .jpg"
                  type="file"
                  size="sm"
                  name="mobile"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectForm;
