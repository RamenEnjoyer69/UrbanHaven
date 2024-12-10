import React from "react";

const PhotoBedroom = () => {
  return (
    <div id="bedroom" className="flex  mt-32 justify-between">
      <div>
        <h3 className="sticky top-0 p-4 z-10">Shared living room</h3>
        <p className="sticky top-8 p-4 z-10">Duoble bed</p>
      </div>

      {/* image side */}
      {/*  className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto object-cover rounded-lg shadow-lg" */}
      <div className="grid gap-2 w-1/2 h-auto rounded-lg shadow-lg">
        <div>
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-43121446/original/cd105082-0725-45e3-af92-5270b4119587.jpeg?im_w=1200&im_format=avif"
            alt=""
          />
        </div>
        <div className="flex  gap-2">
          <div>
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-43121446/original/3f71c198-a315-4822-96a5-ccfc57601878.jpeg?im_w=720&im_format=avif"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-43121446/original/70bda8fa-1ba5-4436-a005-de524f4e1adb.jpeg?im_w=720&im_format=avif"
              alt=""
            />
          </div>
        </div>

        <div className="flex  gap-2">
          <div>
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-43121446/original/a95e4f26-f0c7-4f8e-bab5-cbfed91e343b.jpeg?im_w=720&im_format=avif"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-43121446/original/84084c42-a418-4c13-badc-23dc5770e410.jpeg?im_w=720&im_format=avif"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoBedroom;
