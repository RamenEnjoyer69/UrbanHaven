import React from "react";

const PhotoDining = () => {
  return (
    <div className="flex justify-between mt-32">
      <div>
        <h3>Shared dining area</h3>
      </div>
      <div className="flex gap-2 w-1/2">
        <div>
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-43121446/original/c5a3a688-d9ef-4b81-86c2-239f8b8c4560.jpeg?im_w=720&im_format=avif"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-43121446/original/bb4d433c-86ff-400c-9475-4b4459ef3e65.jpeg?im_w=720&im_format=avif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDining;
