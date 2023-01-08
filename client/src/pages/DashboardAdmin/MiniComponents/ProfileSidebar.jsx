import React from "react";
import ProfileSidebarWrapper from "../../../assets/wrappers/Dashboard/ProfileSidebarWrapper";
import Badge from "react-bootstrap/Badge";
import { useUserContext } from "../../../utils/contexts/user/userContext";
import { imagePath } from "../../../utils/helpers/constants";

const ProfileSidebar = () => {
  const defaultImg =
    "https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const {
    userInfo: { avatar, name },
  } = useUserContext();

  const defineAvatar = avatar ? imagePath(avatar) : defaultImg;

  return (
    <ProfileSidebarWrapper>
      <div className="logo text-center">
        <img alt="logo" src={defineAvatar} />
      </div>
      <div className="my-3">
        <h4 className="mt-2">{name}</h4>
        <p className="font-weight-bold text-white mt-2">
          teacher
          <Badge bg="danger" className="mx-2">
            PRO
          </Badge>
        </p>
      </div>
    </ProfileSidebarWrapper>
  );
};

export default ProfileSidebar;
