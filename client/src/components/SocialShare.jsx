import React from "react";
import SocialShareWrapper from "../assets/wrappers/SocialShareWrapper";
import {
  FacebookShareButton,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookIcon,
} from "react-share";

const SocialShare = ({ url }) => {
  return (
    <SocialShareWrapper>
      <div className="social">
        <p className="mb-0">share</p>

        <div className="social-icons ms-2">
          <FacebookShareButton url={url} quote="asd">
            <FacebookIcon size={30} />
          </FacebookShareButton>

          <FacebookMessengerShareButton url={url} quote="asd">
            <FacebookMessengerIcon size={30} />
          </FacebookMessengerShareButton>
        </div>
      </div>
    </SocialShareWrapper>
  );
};

export default SocialShare;
