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
      // href={`/details/${id}`}
      href={`/details/69`}
      className="select-none overflow-hidden w-[300px] h-[356.91px] rounded-2xl border-gray-200 hover:shadow-xl shadow-md transition-all ease-in-out duration-200"
    >
      <div className="h-[56.44%] w-full relative">
        <img src={`${image}`} alt="" className="h-full object-cover w-full" />

        {isSpecial ? (
          <div className="absolute top-3 left-3 bg-green-700 h-5 p-3 rounded-full grid place-content-center text-white text-sm">
            Special
          </div>
        ) : (
          ""
        )}

        <div
          className="border-[1px] border-black rounded-full w-12 h-12 bg-white z-10 flex justify-center items-center absolute bottom-3 right-3 hover:brightness-90 cursor-pointer "
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
      <div className="flex flex-col py-4 px-4 ">
        <div className="flex items-center text-sm">
          <div className="w-3 h-3 bg-green-700 rounded-full mr-1 "></div>
          <p className="text-gray-500">{type}</p>
        </div>
        <h3 className="text-[1.5rem] font-bold">{price}</h3>
        <div className="flex space-x-2 text-gray-500">
          <p>
            <span className="font-bold text-black">{bed} </span>bed
          </p>
          <p>
            <span className="font-bold text-black">{bath} </span>bath
          </p>
        </div>
        <div className="text-gray-500 text-sm">
          <p>{street}</p>
          <p>{city}</p>
        </div>
      </div>
    </a>
  );
};

export default SmallCard;
