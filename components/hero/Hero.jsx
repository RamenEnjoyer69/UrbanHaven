// import p from "@/public/images/pic.jpg";

import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div
      className="h-[600px] w-full"
      style={{
        backgroundImage: "url(/images/skyline.jpg)",
        // "url(https://wallpapers.com/images/hd/toronto-skyline-pictures-3r2ltrhezctjlizb.jpg)",
        backgroundRepeat: "none",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="bg-black bg-opacity-40 w-full h-full">
        <div className="text-white h-full w-full grid place-content-center space-y-4">
          <h1 className="text-[4rem] font-bold">Discover your new Home</h1>
          <div className="rounded-full h-14 w-full flex items-center bg-white justify-between px-1  backdrop-blur-lg">
            <input
              type="text"
              className="w-[90%] bg-transparent outline-none text-black text-[1.25rem] ml-4 placeholder-gray-600"
              placeholder="Search by Location or Point of Interest"
            />

            <div className="rounded-full w-12 h-12 bg-purple-600 grid place-items-center hover:opacity-70 cursor-pointer transition-all duration-100">
              <Search />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
