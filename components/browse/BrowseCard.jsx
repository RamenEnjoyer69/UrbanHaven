import React from "react";

const BrowseCard = ({ image, title, number }) => {
  const formatNum = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    } else {
      return num.toString();
    }
  };

  return (
    <a
      href="rent"
      className="relative w-full h-48 sm:h-52 md:h-52 lg:h-52 rounded-lg overflow-hidden shadow-md"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent p-4 flex flex-col justify-between">
        <div className="text-white font-extrabold text-sm md:text-base lg:text-lg">
          {title}
        </div>
        <div className="w-12 h-6 rounded-full bg-white text-black text-center font-semibold text-xs flex items-center justify-center">
          {formatNum(number)}
        </div>
      </div>
    </a>
  );
};

export default BrowseCard;
