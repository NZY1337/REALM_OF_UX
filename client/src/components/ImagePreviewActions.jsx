import React from "react";
import ImagePreviewActionsWrapper from "../assets/wrappers/ImagePreviewActionsWrapper";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { imagePath } from "../utils/helpers/constants";
import Sketch from "./Sketch";
import { usePreloadImages } from "../utils/hooks";
import { Col } from "react-bootstrap";

const ImagePreviewActions = ({ projectImages, handleDeleteImages }) => {
  const loaded = usePreloadImages(projectImages);

  return (
    <Col  lg="6" xxl="4" md="12">
    <div className="dash-container-projects-wrapper my-4 my-xxl-0">
    <ImagePreviewActionsWrapper>
      <h6 className="mb-4">Image Preview</h6>

      {!loaded ? (
        <>
          <Sketch count={projectImages.length} />
        </>
      ) : (
        <div className="image-preview">
          {projectImages.map((image) => {
            return (
              <div className="image-preview-actions" key={image}>
                <AiOutlineCloseCircle
                  onClick={() => handleDeleteImages(image)}
                />
                <img
                  src={imagePath(image)}
                  alt="description"
                  className="img-fluid w-100 h-100"
                />
              </div>
            );
          })}
        </div>
      )}
    </ImagePreviewActionsWrapper>
    </div>
    </Col>
  );
};

export default ImagePreviewActions;
