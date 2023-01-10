import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormGroup from "../../../../utils/helpers/react/FormGroup";
import { DashTitleSection } from "../../MiniComponents/DashTitle";
import DashBtn from "../../MiniComponents/DashBtn";
import { useUserContext } from "../../../../utils/contexts/user/userContext";

const ProfileActionsForm = () => {
  const {
    handleChange,
    isLoading,
    handleUpdateUser,
    handleUpdateUserPassword,
    userInfo: { name, email, password, newPassword, avatar },
  } = useUserContext();

  const [changePass, setChangePass] = useState(false);

  const titleSubmit = isLoading
    ? "Saving..."
    : !changePass
    ? "Update profile"
    : "Update Password";

  return (
    <>
      <Col col="12" xxl="4" lg="6">
        <div className="dash-container-section-wrapper">
          <DashTitleSection title="Profile" />

          <Form
            onSubmit={changePass ? handleUpdateUserPassword : handleUpdateUser}
          >
            <Row className="flex-column">
              {!changePass && (
                <>
                  <Col lg="12">
                    <FormGroup
                      onHandleChange={handleChange}
                      label="Name"
                      type="text"
                      name="name"
                      placeholder="Enter the project name"
                      value={name}
                    />
                  </Col>

                  <Col lg="12">
                    <FormGroup
                      onHandleChange={handleChange}
                      label="Email"
                      type="email"
                      name="email"
                      placeholder="Enter the project name"
                      value={email}
                    />
                  </Col>

                  <Col lg="12">
                    <FormGroup
                      onHandleChange={handleChange}
                      label="avatar"
                      type="file"
                      name="avatar"
                      placeholder="Enter the project name"
                    />
                  </Col>
                </>
              )}

              {changePass && (
                <>
                  <Col lg="12">
                    <FormGroup
                      onHandleChange={handleChange}
                      label="current password"
                      type="password"
                      name="password"
                      placeholder="Enter the project name"
                      value={password}
                    />
                  </Col>

                  <Col lg="12">
                    <FormGroup
                      onHandleChange={handleChange}
                      label="new password"
                      type="password"
                      name="newPassword"
                      placeholder="Enter the project name"
                      value={newPassword}
                    />
                  </Col>
                </>
              )}
            </Row>
            <div className="d-flex align-items-center ">
              <small
                className="mb-0 font-800"
                onClick={() => setChangePass(!changePass)}
                style={{
                  fontWeight: "600",
                  cursor: "pointer",
                  fontSize: "13px",
                }}
              >
                {!changePass ? "forgotten your password?" : `go back`}
              </small>
              <DashBtn
                klassName="ms-auto"
                variant="dark"
                type="submit"
                size="sm"
              >
                {titleSubmit}
              </DashBtn>
            </div>
          </Form>
        </div>
      </Col>
    </>
  );
};

export default ProfileActionsForm;
