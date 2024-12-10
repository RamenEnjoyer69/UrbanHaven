"use client";
import { PiHeartBold, PiHeartFill } from "react-icons/pi";
import { useState } from "react";

const SmallCard = ({
  image,
  type,
  price,
  bed,
  bath,
  street,
  city,
  isSpecial,
}) => {
  const [saved, setSaved] = useState(false);

  return (
    <a
      href={`/details/69`}
      className="select-none overflow-hidden w-full max-w-[300px] sm:max-w-[280px] md:max-w-[260px] lg:max-w-[300px] xl:max-w-[410px] h-[356px] rounded-2xl border border-gray-200 hover:shadow-xl shadow-md transition-all ease-in-out duration-200"
    >
      {/* Image Container */}
      <div className="h-[56%] w-full relative">
        <img src={image} alt="" className="h-full object-cover w-full" />

        {/* Special Badge */}
        {isSpecial && (
          <div className="absolute top-3 left-3 bg-green-700 h-5 px-3 rounded-full grid place-content-center text-white text-sm">
            Special
          </div>
        )}

        {/* Save Icon */}
        <div
          className="border border-black rounded-full w-12 h-12 bg-white z-10 flex justify-center items-center absolute bottom-3 right-3 hover:brightness-90 cursor-pointer"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation(); // Prevent click from propagating to the <a>
            setSaved(!saved);
          }}
        >
          {!saved ? (
            <PiHeartBold size={25} />
          ) : (
            <PiHeartFill size={25} className="text-red-400" />
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col py-4 px-4">
        <div className="flex items-center text-sm">
          <div className="w-3 h-3 bg-green-700 rounded-full mr-1"></div>
          <p className="text-gray-500 line-clamp-1">{type}</p>
        </div>
        <h3 className="text-lg lg:text-[1.5rem] lg:my-2 font-bold line-clamp-1">
          {price}
        </h3>
        <div className="flex space-x-2 text-gray-500 text-sm md:text-base">
          <p>
            <span className="font-bold text-black">{bed}</span> bed
          </p>
          <p>
            <span className="font-bold text-black">{bath}</span> bath
          </p>
        </div>
        <div className="text-gray-500 text-sm">
          <p className="line-clamp-1">{street}</p>
          <p className="line-clamp-1">{city}</p>
        </div>
      </div>
    </a>
  );
};

export default SmallCard;
