import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import LoginRegisterWrapper from "../../assets/wrappers/LoginRegister/LoginRegister";
import LoginRegisterForm from "./LoginRegisterForm";
import { useTranslateContext } from "../../utils/contexts/translate/translateContext";
import { useUserContext } from "../../utils/contexts/user/userContext";
import { useNavigate } from "react-router-dom";

//https://quart.ro/

const LoginRegister = () => {
  const navigate = useNavigate();

  const {
    loginRegister: {
      isLoggedIn,
      isRegistred,
      isLoggedInTitle,
      isRegistredTitle,
      inputs: { login, register },
    },
  } = useTranslateContext();

  const {
    user,
    isLoading,
    toggleMember,
    userInfo: { isMember },
    handleChange,
    onSubmit,
  } = useUserContext();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <LoginRegisterWrapper>
      <Container fluid>
        <Row className="justify-content-end">
          <Col lg={12} id="login-register-form">
            <div>
              <h1>{isMember ? isLoggedInTitle : isRegistredTitle}</h1>
            </div>

            <LoginRegisterForm
              inputs={isMember ? login : register}
              toggleMember={toggleMember}
              handleChange={handleChange}
              onSubmit={onSubmit}
              isLoading={isLoading}
              isLoggedIn={isLoggedIn}
              isRegistred={isRegistred}
              isMember={isMember}
              isLoggedInTitle={isLoggedInTitle}
              isRegistredTitle={isRegistredTitle}
            />
          </Col>
        </Row>
      </Container>
    </LoginRegisterWrapper>
  );
};

export default LoginRegister;
