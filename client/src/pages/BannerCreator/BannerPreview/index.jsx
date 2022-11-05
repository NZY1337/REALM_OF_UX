import React from "react";
import Draggable from "../Draggable";
import { getBannerType } from "../../../utils/helpers";
import BannerSettings from "./BannerSettings";

const coverStyle = (cover) => {
  return {
    backgroundImage: `url(${cover})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };
};

const colorStyle = (color) => {
  return { backgroundColor: color };
};

const BannerPreview = ({
  cover,
  color,
  items,
  saveChanges,
  bannerSize,
  removeItem,
  cloneItem,
  onChangeColorPicker,
}) => {
  const coverOrColor = cover ? coverStyle(cover) : colorStyle(color);
  const defaultStyle = {
    width: `${bannerSize.width}px`,
    height: `${bannerSize.height}px`,
    position: "relative",
    ...coverOrColor,
  };

  const { title } = getBannerType(bannerSize.width);

  return (
    <>
      <BannerSettings
        bannerName={title}
        color={color}
        onChangeColorPicker={onChangeColorPicker}
      />

      <div style={{ ...defaultStyle }}>
        {items.map((item) => {
          return (
            <Draggable
              removeItem={removeItem}
              key={item.id}
              item={item}
              saveChanges={saveChanges}
              cloneItem={cloneItem}
            />
          );
        })}
      </div>
    </>
  );
};

export default BannerPreview;
