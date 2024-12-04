"use client";
import { useRouter } from "next/navigation";

const ImageContainer = () => {
  const router = useRouter();

  // append "photos" to the current URL
  const handleImageClick = () => {
    router.push(`${window.location.pathname}/photos`);
  };

  return (
    <div className=" h-[500px] rounded-2xl grid grid-cols-12 gap-1 overflow-hidden">
      <div className="col-span-9 bg-gray-200">
        <img
          src="https://ar.rdcpix.com/a7f7688ac37b584ba50f3bb725b92443c-f2738826364rd-w1280_h960.webp"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="col-span-3 grid grid-rows-3 gap-1">
        <div
          onClick={handleImageClick}
          className="bg-gray-300 cursor-pointer hover:brightness-75 transition-all ease-in-out "
        >
          <img
            src="https://ar.rdcpix.com/a7f7688ac37b584ba50f3bb725b92443c-f1134627828rd-w2048_h1536.webp"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div
          onClick={handleImageClick}
          className="bg-gray-400 cursor-pointer hover:brightness-75 transition-all ease-in-out "
        >
          <img
            src="https://ar.rdcpix.com/a7f7688ac37b584ba50f3bb725b92443c-f2020301146rd-w2048_h1536.webp"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div
          onClick={handleImageClick}
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
  );
};

export default ImageContainer;
