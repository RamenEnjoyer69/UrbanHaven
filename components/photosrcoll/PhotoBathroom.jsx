import React from "react";

const PhotoBathroom = () => {
  return (
    <div id="bathroom" className="flex mt-32  justify-between">
      <div>
        <h1 className="sticky top-0 p-4 z-10">Shared Full bathroom</h1>
      </div>

      <div className="w-1/2">
        <div className="flex  gap-2">
          <div>
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/64acdeb8-9cb4-4ed3-ac14-ac582ec3ef8d.jpeg?im_w=720&im_format=avif"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://a0.muscache.com/im/pictures/a9d7b3c0-727e-48fc-9c0f-fa83bbfdf8be.jpg?im_w=720&im_format=avif"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoBathroom;
