import React from "react";

const TourRequest = () => {
  return (
    <div className="w-full  h-auto">
      <p className="text-[22px] font-bold mb-2">Request a tour</p>
      <p className="mb-4">Start by selecting the date you find convenient.</p>

      <div className="flex gap-3">
        <div className="cursor-pointer border-[1px] border-black rounded-lg p-2 w-36 grid place-items-center">
          <p className="text-[0.75rem]">Tuesday</p>
          <p className="font-bold">Dec 10</p>
        </div>
        <div className="cursor-pointer border-[1px] border-black rounded-lg p-2 w-36 grid place-items-center">
          <p className="text-[0.75rem]">Wednesday</p>
          <p className="font-bold">Dec 11</p>
        </div>
        <div className="cursor-pointer border-[1px] border-black rounded-lg p-2 w-36 grid place-items-center">
          <p className="text-[0.75rem]">Thursday</p>
          <p className="font-bold">Dec 12</p>
        </div>
        <div className="cursor-pointer border-[1px] border-black rounded-lg p-2 w-36 grid place-items-center">
          <p className="text-[0.75rem]">Friday</p>
          <p className="font-bold">Dec 13</p>
        </div>
        <div className="cursor-pointer border-[1px] border-black rounded-lg p-2 w-36 grid place-items-center">
          <p className="text-gray-500">See more</p>
        </div>
      </div>
    </div>
  );
};

export default TourRequest;
