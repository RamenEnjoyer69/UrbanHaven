import React from "react";

const TourRequest = () => {
  return (
    <div className="w-full  h-auto">
      <p className="text-[1.25rem] font-bold mb-2">Request a tour</p>
      <p className="mb-4">Start by selecting the date you find convenient.</p>

      <div className="cursor-pointer border-[1px] border-black rounded-xl p-4 w-36 grid place-items-center">
        <p className="text-[0.75rem]">Tuesday</p>
        <p className="font-bold">Dec 10</p>
      </div>
    </div>
  );
};

export default TourRequest;
