import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import { ButtonPrimary } from "../../components/Buttons";
import { BsEyeSlash, BsArrowRight } from "react-icons/bs";
import { MdPassword } from "react-icons/md";

const LoginRegisterForm = ({
  inputs,
  toggleMember,
  handleChange,
  onSubmit,
  isLoading,
  isLoggedIn,
  isRegistred,
  isMember,
  isLoggedInTitle,
  isRegistredTitle,
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
        <BsEyeSlash
          className={`${input.name === "password" && "password-icon"}`}
          onClick={() => setShowPassword(true)}
        />
      );
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      className="col-12 col-lg-7 col-xl-4"
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

      <Form.Group className="mb-2 form-group" controlId="formBasicPassword">
        <ButtonPrimary type="submit">
          {isMember ? isLoggedInTitle : isRegistredTitle} <BsArrowRight />
        </ButtonPrimary>

        <small onClick={toggleMember} style={{ color: "turquoise" }}>
          {isMember ? isLoggedIn : isRegistred}
        </small>
      </Form.Group>
    </Form>
  );
};

LoginRegisterForm.propTypes = {
  inputs: PropTypes.array.isRequired,
  toggleMember: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default LoginRegisterForm;
