import React from "react";
import ImagePreviewActionsWrapper from "../assets/wrappers/ImagePreviewActionsWrapper";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { imagePath } from "../utils/helpers/constants";

const ImagePreviewActions = ({ projectImages, handleDeleteImages }) => {
  return (
    <ImagePreviewActionsWrapper>
      <h6 className="mb-4">Image Preview</h6>

      <div className="d-flex flex-wrap image-preview">
        {projectImages.map((image) => {
          return (
            <div className="image-preview-actions" key={image}>
              <AiOutlineCloseCircle onClick={() => handleDeleteImages(image)} />
              <img
                src={imagePath(image)}
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
