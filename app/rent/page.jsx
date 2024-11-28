import SearchBar from "@/components/Search/SearchBar";
import React from "react";

const RentPage = () => {
  return (
    <div className="w-full h-auto min-h-[100vh]">
      <div className="w-full relative flex flex-col items-center">
        <div
          className="w-full h-80 "
          // style={{
          //   backgroundImage: "url(/images/skyline.jpg)",
          //   backgroundRepeat: "none",
          //   backgroundSize: "cover",
          //   backgroundPosition: "bottom",
          // }}
        ></div>
        <SearchBar />
        <div className="w-full h-20 bg-white"></div>
      </div>
    </div>
  );
};

export default RentPage;
