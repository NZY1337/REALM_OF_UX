import React from 'react';
import PropTypes from 'prop-types';
import Form from "react-bootstrap/Form";

const ProjectsDashFormGroup = ({label, placeholder, type, name, value, onHandleChange, size, accept }) => {
    return (
        <>
            <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                accept={accept}
                onChange={onHandleChange}
                size={size}
            />
            </Form.Group>
        </>
    )
}

ProjectsDashFormGroup.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string.isRequired, 
    accept: PropTypes.string,
    value: PropTypes.string,
    onHandleChange: PropTypes.func.isRequired,
}

export default ProjectsDashFormGroup;
