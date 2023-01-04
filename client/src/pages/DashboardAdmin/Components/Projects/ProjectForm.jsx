import React, {useEffect} from "react";
import PropTypes from "prop-types";

// components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormGroup from "../../../../utils/helpers/react/FormGroup";
import TextEditor from "../../../../components/TextEditor/TextEditor";
import DashBtn from "../../MiniComponents/DashBtn";
import { DashTitleSection } from "../../MiniComponents/DashTitle";

const ProjectForm = ({
  project,
  handleCreateProject,
  handleSubmitProject,
  clearValues,
}) => {
  const { name, category, desktop, tablet, mobile } = project;

  useEffect(() => {
    clearValues()
  },[])

  const disableSubmitBtn =
    name === "" ||
    category === "" ||
    desktop === "" ||
    tablet === "" ||
    mobile === "";
  const disableFileUpload = name === "";

  return (
    <Col lg="12" xxl="4" xl="12" md="12">
         <div className="dash-container-section-wrapper">
            <Form onSubmit={handleSubmitProject}>
                <DashTitleSection title="Add Project"/>

                <Row>
                    <Col lg="12 mb-3">
                    <TextEditor readOnly={false} />
                    </Col>

                    <Col lg="6">
                    <FormGroup
                        label="Project Name"
                        placeholder="Enter the project name"
                        type="text"
                        name="name"
                        size="sm"
                        value={name}
                        onHandleChange={handleCreateProject}
                    />
                    </Col>

                    <Col lg="6">
                    <FormGroup
                        label="Project Category"
                        placeholder="Enter the project category"
                        type="text"
                        name="category"
                        size="sm"
                        value={category}
                        onHandleChange={handleCreateProject}
                    />
                    </Col>

                    <Col lg="6">
                    <FormGroup
                        label="Desktop Version"
                        type="file"
                        name="desktop"
                        size="sm"
                        onHandleChange={handleCreateProject}
                        accept=".jpeg, .png, .jpg"
                        multiple
                        disableFileUpload={disableFileUpload}
                    />
                    </Col>

                    <Col lg="6">
                    <FormGroup
                        label="Tablet Version"
                        type="file"
                        name="tablet"
                        size="sm"
                        onHandleChange={handleCreateProject}
                        accept=".jpeg, .png, .jpg"
                        multiple
                        disableFileUpload={disableFileUpload}
                    />
                    </Col>
                    <Col lg="6">
                    <FormGroup
                        label="Mobile Version"
                        type="file"
                        name="mobile"
                        size="sm"
                        onHandleChange={handleCreateProject}
                        accept=".jpeg, .png, .jpg"
                        multiple
                        disableFileUpload={disableFileUpload}
                    />
                    </Col>
                </Row>

                <DashBtn  variant="dark" type="submit" size="sm" disabled={disableSubmitBtn}>
                    {project._id ? "Edit" : "Submit"}
                </DashBtn>
            
                <DashBtn klassName="mx-2" variant="outline-danger" size="sm" onClick={clearValues}>
                    Reset
                </DashBtn>
            </Form>
        </div>
    </Col>
  );
};

ProjectForm.propTypes = {
  project: PropTypes.object.isRequired,
  handleCreateProject: PropTypes.func.isRequired,
  handleSubmitProject: PropTypes.func.isRequired,
};

export default ProjectForm;
