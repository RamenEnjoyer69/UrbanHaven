import React from "react";

const CustomDot = ({ onClick, active, index }) => {
  return (
    <li
      className={`mx-2 rounded-full w-10 h-1 cursor-pointer mb-1 md:mb-2 transition-all ease-in-out ${
        active ? "bg-white" : "bg-gray-700"
      }`}
      onClick={onClick}
      aria-label={`Slide ${index + 1}`} // For accessibility
    ></li>
  );
};

export default CustomDot;
