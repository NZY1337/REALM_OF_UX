import React, { useState } from "react";
import cover from "../../assets/images/img1.jpeg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { convertToBase64 } from "../../utils/helpers";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PageSectionBanner, PageSectionTitle } from "../../components";
import { Container, Row, Col } from "react-bootstrap";
import { useErrorContext } from "../../utils/contexts/error/errorContext";

const ProjectForm = () => {
  const [newProject, setNewProject] = useState({
    name: "",
    category: "",
    desktop: "",
    tablet: "",
    mobile: "",
  });

  const { notify } = useErrorContext();

  const navigate = useNavigate("");

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
      notify(
        "delete",
        "success",
        "Project Created Successfully. You are now redirected to the project's page..."
      );
      // after the toast notification is closed
      setTimeout(() => {
        navigate(`/projects/${response.data.project._id}`);
      }, 4200);
    } catch (error) {
      console.log(error);
      notify("add", "warning", error.response.data.msg);
    }
  };

  const { name, category, desktop, tablet, mobile } = newProject;
  const enableSubmit = !name || !category || !desktop || !tablet || !mobile;

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

      <Container className="my-5 position-relative">
        <Row>
          <Col className="col-lg-5">
            <h3>Add Your Project Here</h3>
            <Form onSubmit={handleSubmitForm}>
              <Form.Group className="mb-3" controlId="projet-name">
                <Form.Label>Project's Name</Form.Label>
                <Form.Control
                  type="name"
                  name="name"
                  placeholder="Enter the project's name"
                  value={newProject.name}
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
                  value={newProject.category}
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
                  //   value={newProject.desktop}
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
                  //   value={newProject.tablet}
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
                  //   value={newProject.mobile}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectForm;
