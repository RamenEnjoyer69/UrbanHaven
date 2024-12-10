import React from "react";
import PhotosSection from "./PhotosSection";
import PhotoKitchen from "./PhotoKitchen";
import PhotoDining from "./PhotoDining";
import PhotoBedroom from "./PhotoBedroom";
import PhotoBathroom from "./PhotoBathroom";

const SharePhoto = () => {
  return (
    <div className="w-[65%] mx-auto">
      <PhotosSection title="Living room" />
      <PhotosSection title="Bedroom" />
      <PhotosSection title="Bathroom" />
      <PhotosSection title="Dining area" />
      <PhotosSection title="Kitchen" />
      <PhotosSection title="Exterior" image1="" />

      {/* <PhotoKitchen />
      <PhotoDining />
      <PhotoBedroom />
      <PhotoBathroom /> */}
    </div>
  );
};

export default SharePhoto;
