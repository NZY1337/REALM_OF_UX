import React from 'react';
import Button from 'react-bootstrap/Button';

const DashBtn = ({ variant, type, size, disabled, klassName, onClick, children}) => {
    const btnProps = {
        variant,
        type,
        size,
        disabled,
        ...(klassName ? { className: klassName } : {}),
        onClick,
        children
    }

    return (
        <Button {...btnProps}>
            {children}
        </Button>
    )
}

export default DashBtn;
