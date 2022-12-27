import React from "react";
import ImagePreviewActionsWrapper from "../assets/wrappers/ImagePreviewActionsWrapper";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ImagePreviewActions = () => {
  const images = [
    "https://images.pexels.com/photos/10769588/pexels-photo-10769588.jpeg",
    "https://images.pexels.com/photos/6013041/pexels-photo-6013041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/14211152/pexels-photo-14211152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/14816369/pexels-photo-14816369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/13802257/pexels-photo-13802257.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  ];
  return (
    <ImagePreviewActionsWrapper>
      <h6 className="mb-4">Image Preview</h6>

      <div className="d-flex flex-wrap image-preview">
        {images.map((image) => {
          return (
            <div className="image-preview-actions">
              <AiOutlineCloseCircle />
              <img
                src={image}
                alt="description"
                className="img-fluid w-100 h-100"
              />
            </div>
          );
        })}
      </div>
    </ImagePreviewActionsWrapper>
  );
};

export default ImagePreviewActions;
