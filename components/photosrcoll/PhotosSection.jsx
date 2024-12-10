import React from "react";

const PhotosSection = ({ title, image1, image2, image3 }) => {
  return (
    <div id="livingroom" className="flex mt-2 justify-between">
      <div id="livingRoom">
        <p className="text-[1.5rem] font-semibold sticky top-[79px] z-10">
          {title}
        </p>
      </div>

      <div className="grid gap-2 w-4/6 h-auto rounded-lg shadow-lg">
        <div>
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-43121446/original/069aff65-469c-4724-84ab-08730fc3b87d.jpeg?im_w=1200&im_format=avif"
            alt="1st photo"
          />
        </div>
        <div className="flex  gap-2">
          <div>
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-43121446/original/b9e6f647-80c7-4cbd-b4d2-576a915e3bef.jpeg?im_w=720&im_format=avif"
              alt="2nd 1st photo"
            />
          </div>
          <div>
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-43121446/original/9f3044b3-f9c6-4222-aa47-1b1adef97e3a.jpeg?im_w=720&im_format=avif"
              alt="2nd 2nd photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotosSection;
