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
      className="w-[300px] rounded-lg h-[200px] overflow-hidden "
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-transparent flex p-4 ">
        <div className="w-full font-extrabold text-white hover:underline">
          {title}
        </div>
        <div className=" h-6 p-2 rounded-full bg-white grid place-content-center text-sm">
          {formatNum(number)}
        </div>
      </div>
    </a>
  );
};

export default BrowseCard;
