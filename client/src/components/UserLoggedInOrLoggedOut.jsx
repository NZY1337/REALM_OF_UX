import React from "react";
import PropTypes from 'prop-types';
import { DoorOpenFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { trimUserName } from "../utils/helpers";

const IsLoggedIn = ({user, colorUser}) => {
    const userStatus = () => {
        if (user && user.name) {
            return (
                <Link to="/login" className="login" style={{ color: colorUser }}>
                    {trimUserName(user.name)}
                </Link>
            )
        } else {
            return (
                <Link to="/login" className="login" style={{ color: colorUser }}>
                        Sign in <DoorOpenFill />
                </Link>
            )
        }
    }

    return userStatus()
}

export default IsLoggedIn

IsLoggedIn.propTypes = {
  name: PropTypes.string.isRequired,
  colorUser: PropTypes.string
}

