import React from "react";
import Col from "react-bootstrap/Col";
import abstractVideo from "../../../assets/videos/ai.mp4";

const ProfileMessage = () => {
  return (
    <Col col="12" xxl="4" lg="6" className="p-5">
      <video id="profile-video" muted autoPlay preload="auto" loop>
        <source src={abstractVideo} type="video/mp4"></source>
      </video>

      <div className="mt-4">
        <h5 className="mb-2">EDIT, UPDATE, DELETE /profile ~</h5>
        <p className="mb-0">
          And just so you know, if you change your name to <b>Bob Ross</b>,
          we'll definitely be impressed.
        </p>
      </div>
    </Col>
  );
};

export default ProfileMessage;
