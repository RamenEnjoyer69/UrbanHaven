"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import TopPhotos from "@/components/topPhoto/TopPhotos";
import SharePhoto from "@/components/photosrcoll/SharePhoto";
import ImageCarousel from "./ImageCarousel";

const ImageContainer = ({ params }) => {
  // const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };
  // append "photos" to the current URL
  // const handleImageClick = () => {
  //   router.push(`${window.location.pathname}/photos`);
  // };

  return (
    <>
      <div className=" min-h-[420px] rounded-2xl grid grid-cols-12 gap-1 overflow-hidden">
        <div className="col-span-9 bg-gray-200">
          {/* <img
            src="https://ar.rdcpix.com/a7f7688ac37b584ba50f3bb725b92443c-f2738826364rd-w1280_h960.webp"
            alt=""
            className="h-full w-full object-cover"
          /> */}
          <div className="w-full h-full cursor-pointer" onClick={togglePanel}>
            <ImageCarousel />
          </div>
        </div>
        <div className="col-span-3 grid grid-rows-3 gap-1">
          <div
            onClick={togglePanel}
            className="bg-gray-300 cursor-pointer hover:brightness-75 transition-all ease-in-out "
          >
            <img
              src="https://ar.rdcpix.com/a7f7688ac37b584ba50f3bb725b92443c-f1134627828rd-w2048_h1536.webp"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div
            onClick={togglePanel}
            className="bg-gray-400 cursor-pointer hover:brightness-75 transition-all ease-in-out "
          >
            <img
              src="https://ar.rdcpix.com/a7f7688ac37b584ba50f3bb725b92443c-f2020301146rd-w2048_h1536.webp"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div
            onClick={togglePanel}
            className="bg-gray-500 cursor-pointer hover:brightness-75 transition-all ease-in-out "
          >
            <img
              src="https://ar.rdcpix.com/a7f7688ac37b584ba50f3bb725b92443c-f3139238151rd-w2048_h1536.webp"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Overlay panel */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity  ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={togglePanel} // Click to close the panel
      ></div>

      {/* Sliding panel */}
      <div
        className={`fixed inset-0 bg-white transform transition-transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ zIndex: 1000 }} // Ensure it's above the navbar
      >
        {/* <button
          onClick={togglePanel}
          className="absolute top-4 right-4 px-4 py-2 bg-red-600 text-white rounded"
        >
          Close
        </button> */}
        <div className="h-full flex items-center justify-center">
          <div className="w-full h-full overflow-y-scroll pb-32">
            <NavBar toggle={() => togglePanel()} />
            <TopPhotos />
            <SharePhoto />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageContainer;
