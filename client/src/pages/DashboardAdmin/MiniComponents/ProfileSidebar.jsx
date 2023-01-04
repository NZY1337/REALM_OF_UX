import React from 'react';
import ProfileSidebarWrapper from '../../../assets/wrappers/Dashboard/ProfileSidebarWrapper';
import Badge from "react-bootstrap/Badge";

const ProfileSidebar = () => {
    return (
        <ProfileSidebarWrapper>
            <div className="logo text-center">
                <img
                alt="logo"
                src="https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
            </div>
            <div className="my-3">
                <h4 className="mt-2">Anne Marie</h4>
                <p className="font-weight-bold text-white mt-2">
                teacher
                <Badge bg="danger" className="mx-2">
                    PRO
                </Badge>
                </p>
             </div>
        </ProfileSidebarWrapper>
    )
}

export default ProfileSidebar;