import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropDownWrapper from "../assets/wrappers/DropDownWrapper";

const DropDown = ({ title, children, klassName }) => {
  return (
    <DropDownWrapper>
      <Dropdown className={klassName}>
        <Dropdown.Toggle variant="default" id="dropdown-basic">
          {title}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item as="div">{children}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </DropDownWrapper>
  );
};

export default DropDown;
