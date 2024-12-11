import React from "react";

import NavBar from "@/components/NavBar";
import TopPhotos from "@/components/topPhoto/TopPhotos";
import SharePhoto from "@/components/photosrcoll/SharePhoto";

const photosPage = () => {
  return (
    <div className="w-full h-full">
      <NavBar />
      <TopPhotos />
      <SharePhoto />
    </div>
  );
};

export default photosPage;
