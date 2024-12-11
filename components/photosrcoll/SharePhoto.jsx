import React from "react";
import PhotosSection from "./PhotosSection";
import PhotoKitchen from "./PhotoKitchen";
import PhotoDining from "./PhotoDining";
import PhotoBedroom from "./PhotoBedroom";
import PhotoBathroom from "./PhotoBathroom";

const SharePhoto = () => {
  return (
    <div className="w-[65%] mx-auto">
      <PhotosSection
        title="Kitchen"
        image1="https://ap.rdcpix.com/a8643820f3f887281ac9fa99f139b514l-m2418740951rd-w2048_h1536.webp"
        image2="https://ap.rdcpix.com/a8643820f3f887281ac9fa99f139b514l-m4188078508rd-w2048_h1536.webp"
        image3="https://ap.rdcpix.com/a8643820f3f887281ac9fa99f139b514l-m3938716674rd-w2048_h1536.webp"
      />
      <PhotosSection
        title="Living room"
        image1="https://a0.muscache.com/im/pictures/airflow/Hosting-19677852/original/4fe49219-0e1f-4c01-8d14-4e1b1f868466.jpg?im_w=1200&im_format=avif"
        image2="https://a0.muscache.com/im/pictures/airflow/Hosting-19677852/original/db2c342b-1504-458c-8ae0-c9373d213006.jpg?im_w=720&im_format=avif"
        image3="https://a0.muscache.com/im/pictures/airflow/Hosting-19677852/original/ae774dfb-5f61-4ea6-9262-11130048f2e1.jpg?im_w=720&im_format=avif"
      />
      <PhotosSection
        title="Bedroom"
        image1="https://a0.muscache.com/im/pictures/airflow/Hosting-19677852/original/4ac058e2-c535-45fc-b920-0b69b999ff1a.jpg?im_w=1200&im_format=avif"
        image2="https://a0.muscache.com/im/pictures/airflow/Hosting-19677852/original/b3b4478b-11f0-45ec-9b57-513a866a3511.jpg?im_w=720&im_format=avif"
        image3="https://a0.muscache.com/im/pictures/airflow/Hosting-19677852/original/7a0b132f-bcfb-403a-bec6-7af995941460.jpg?im_w=720&im_format=avif"
      />
      <PhotosSection
        title="Bathroom"
        image1="https://ap.rdcpix.com/b8b2311d5e904b1cee8546d33a3ea77bl-m2939033864rd-w2048_h1536.webp"
        image2="https://ap.rdcpix.com/a8643820f3f887281ac9fa99f139b514l-m2906929798rd-w2048_h1536.webp"
        image3="https://ap.rdcpix.com/a8643820f3f887281ac9fa99f139b514l-m3571892262rd-w2048_h1536.webp"
      />
      <PhotosSection
        title="Dining area"
        image1="https://ap.rdcpix.com/a8643820f3f887281ac9fa99f139b514l-m1292874839rd-w2048_h1536.webp"
        image2="https://ap.rdcpix.com/a8643820f3f887281ac9fa99f139b514l-m2147609987rd-w2048_h1536.webp"
        image3="https://ap.rdcpix.com/a8643820f3f887281ac9fa99f139b514l-m678525345rd-w2048_h1536.webp"
      />

      <PhotosSection
        title="Exterior"
        image1="https://ap.rdcpix.com/b8b2311d5e904b1cee8546d33a3ea77bl-m2795240890rd-w2048_h1536.webp"
        image2="https://ap.rdcpix.com/b8b2311d5e904b1cee8546d33a3ea77bl-m750535613rd-w2048_h1536.webp"
        image3="https://ap.rdcpix.com/b8b2311d5e904b1cee8546d33a3ea77bl-m304791178rd-w2048_h1536.webp"
      />
    </div>
  );
};

export default SharePhoto;
