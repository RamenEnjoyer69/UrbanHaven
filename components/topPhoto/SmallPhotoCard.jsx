import React from "react";

const SmallPhotoCard = ({ image, title, tag }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById(title);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <a href={`#${title}`} onClick={handleClick}>
      <div>
        <img className="w-48 h-32 shadow-md" src={image} alt="photo card" />
        <p className="text-sm mt-2">{title}</p>
      </div>
    </a>
  );
};

export default SmallPhotoCard;
