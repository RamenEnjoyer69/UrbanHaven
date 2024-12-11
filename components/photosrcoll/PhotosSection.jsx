import React from "react";

const PhotosSection = ({ title, image1, image2, image3 }) => {
  return (
    <div id={`${title}`} className="flex mt-2 justify-between">
      <div id="livingRoom">
        <p className="text-[1.5rem] font-semibold sticky top-[79px] z-10">
          {title}
        </p>
      </div>

      <div className="grid gap-2 w-4/6 h-auto rounded-lg shadow-lg">
        <div>
          <img src={`${image1}`} alt="1st photo" />
        </div>
        <div className="flex gap-2">
          <div>
            <img src={`${image2}`} alt="2nd 1st photo" />
          </div>
          <div>
            <img src={`${image3}`} alt="2nd 2nd photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotosSection;
