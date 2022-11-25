import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Form } from "react-bootstrap";
import { ButtonPrimary } from "../../components/Buttons";
import { ArrowRight, EyeSlash } from "react-bootstrap-icons";

const LoginRegisterForm = ({
  inputs,
  toggleMember,
  handleChange,
  onSubmit,
  isLoading,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const decideInputType = (input) => {
    if (input.name === "password") {
      if (showPassword) {
        return "text";
      } else {
        return "password";
      }
    }

    return input.type;
  };

  const renderIconInputBasedOnType = (input) => {
    if (input.name !== "password") return <input.icon />;

    if (input.name === "password" && showPassword) {
      return (
        <input.icon
          style={{ color: "white" }}
          className={`${input.name === "password" && "password-icon"}`}
          onClick={() => setShowPassword(false)}
        />
      );
    }

    if (input.name === "password" && !showPassword) {
      return (
        <EyeSlash
          className={`${input.name === "password" && "password-icon"}`}
          onClick={() => setShowPassword(true)}
        />
      );
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      className="col-lg-4 col-md-6 col-sm-8 col-11 col-xl-3"
      autoComplete="off"
    >
      {inputs &&
        inputs.map((input) => {
          return (
            <Form.Group className="mb-4 form-group" key={input.placeholder}>
              {renderIconInputBasedOnType(input)}

              <Form.Control
                type={decideInputType(input)}
                name={input.name}
                placeholder={input.placeholder}
                onChange={handleChange}
              />
            </Form.Group>
          );
        })}

      <Form.Group className="mb-3 form-group" controlId="formBasicPassword">
        <ButtonPrimary disabled={isLoading} type="submit">
          Log in <ArrowRight />
        </ButtonPrimary>

        <small onClick={toggleMember}>
          Don't have an account? Please register.
        </small>
      </Form.Group>
    </Form>
  );
};

LoginRegisterForm.propTypes = {
  inputs:PropTypes.array.isRequired,
  toggleMember:PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default LoginRegisterForm;
