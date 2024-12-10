import React from "react";

const PhotoKitchen = () => {
  return (
    <div id="kitchen" className="flex mt-32 justify-between">
      <div>
        <h3 className="sticky top-0 p-4 z-10">Shared full kitchen</h3>
      </div>

      <div className="flex gap-2 w-1/2">
        <div>
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-43121446/original/c37a7d4e-033a-4c6f-8c0e-83b54d7c6ad9.jpeg?im_w=720&im_format=avif"
            alt="kitchen photos"
          />{" "}
        </div>

        <div>
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-43121446/original/80551522-f861-4c8b-9532-8f1abfe23142.jpeg?im_w=720&im_format=avifk"
            alt="kitchen image"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoKitchen;
