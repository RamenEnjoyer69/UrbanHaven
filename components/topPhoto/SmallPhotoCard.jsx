import React from "react";

const SmallPhotoCard = ({ image, title, tag }) => {
  return (
    <a href="#">
      <div>
        <img
          className="w-48 h-32 shadow-md"
          src={`${image}`}
          alt="photo card"
        />
        <p className="text-sm mt-2">{title}</p>
      </div>
    </a>
  );
};

export default SmallPhotoCard;
