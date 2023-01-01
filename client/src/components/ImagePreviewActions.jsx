import React, {useEffect, useState} from "react";
import ImagePreviewActionsWrapper from "../assets/wrappers/ImagePreviewActionsWrapper";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { imagePath } from "../utils/helpers/constants";
import Sketch from "./Sketch";

const ImagePreviewActions = ({ projectImages, handleDeleteImages }) => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        // Preload projectImages
        const imageElements = projectImages.map((image) => {
          const img = new Image();
          img.src = imagePath(image)
          img.onload = () => setLoaded(true);
          return img;
        });
    
        return () => {
          // Clean up image elements
          imageElements.forEach((img) => URL.revokeObjectURL(img.src));
          setLoaded(false)
        };
      }, [projectImages]);

  return (
    <ImagePreviewActionsWrapper>
      <h6 className="mb-4">Image Preview</h6>
      {!loaded ? (
        <>
            {projectImages.map((image, index) => (
            <Sketch key={index} count={projectImages.length} />
            ))}
        </>
        ) : (
        <div className="d-flex flex-wrap image-preview">
            {projectImages.map((image) => {
            return (
                <div className="image-preview-actions" key={image}>
                <AiOutlineCloseCircle onClick={() => handleDeleteImages(image)} />
                <img src={imagePath(image)} alt="description" className="img-fluid w-100 h-100" />
                </div>
            );
            })}
        </div>
        )}
    </ImagePreviewActionsWrapper>
  );
};

export default ImagePreviewActions;
