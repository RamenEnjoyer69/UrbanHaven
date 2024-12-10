import React from "react";
import SmallPhotoCard from "./SmallPhotoCard";
import SmallTopKitchen from "./SmallTopKitchen";
import SmallTopBedroom from "./SmallTopBedroom";
import SmallTopBathroom from "./SmallTopBathroom";

const TopPhotos = () => {
  return (
    <>
      <div className="w-[65%] mx-auto mb-8 mt-[79px]">
        <div className="pt-5 pb-8">
          <p className="text-[1.5rem] font-semibold">Photo tour</p>
        </div>

        <div className="flex gap-4">
          <SmallPhotoCard
            title="Living room"
            image="https://ar.rdcpix.com/9d49c4dead35e5fa2d7deb863585f791c-f691209815rd-w2048_h1536.webp"
            tag="#"
          />
          <SmallPhotoCard
            title="Bedroom"
            image="https://ar.rdcpix.com/9d49c4dead35e5fa2d7deb863585f791c-f2395141977rd-w2048_h1536.webp"
            tag="#"
          />
          <SmallPhotoCard
            title="Kitchen"
            image="https://ar.rdcpix.com/9d49c4dead35e5fa2d7deb863585f791c-f1262158483rd-w2048_h1536.webp"
            tag="#"
          />
          <SmallPhotoCard
            title="Bathroom"
            image="https://ar.rdcpix.com/9d49c4dead35e5fa2d7deb863585f791c-f3882318763rd-w2048_h1536.webp"
            tag="#"
          />
          <SmallPhotoCard
            title="Dining area"
            image="https://ar.rdcpix.com/9d49c4dead35e5fa2d7deb863585f791c-f3921570851rd-w2048_h1536.webp"
            tag="#"
          />
          <SmallPhotoCard
            title="Exterior"
            image="https://ar.rdcpix.com/9d49c4dead35e5fa2d7deb863585f791c-f617384845rd-w2048_h1536.webp"
            tag="#"
          />
        </div>
      </div>
    </>
  );
};

export default TopPhotos;
