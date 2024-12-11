"use client";

import { IoIosArrowBack } from "react-icons/io";
import { GrShareOption } from "react-icons/gr";
import { PiHeartBold, PiHeartFill } from "react-icons/pi";
import { sampleProperties } from "@/components/rent/property/property";
import ContactForm from "@/components/contactForm/ContactForm";
import { useEffect, useState } from "react";
import React from "react";
import Skeleton from "react-loading-skeleton"; // Import the Skeleton loader

export default function PropertyDetail({ params }) {
  const { id } = React.use(params); // Unwrap the params Promise

  const [property, setProperty] = useState(null);

  // Find the property based on the ID once the params are available
  useEffect(() => {
    if (id) {
      const foundProperty = sampleProperties.find(
        (property) => property.id.toString() === id
      );
      setProperty(foundProperty); // Set the property to the found property
    }
  }, [id]);

  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-14 text-black px-4 md:px-[16%] bg-gray-100 flex items-center">
        <a
          href="/rent"
          className="flex items-center cursor-pointer hover:text-purple-600"
        >
          <IoIosArrowBack size={20} />
          Back
        </a>
      </div>

      <div className="mx-auto w-full md:w-[65%]">
        <section className="w-full grid grid-cols-1 md:grid-cols-10 gap-3 py-5">
          {/* Property Images Section */}
          <div className="col-span-1 md:col-span-7">
            <div className="h-[300px] md:h-[500px] rounded-2xl grid grid-cols-12 gap-1 overflow-hidden">
              {/* First image */}
              <div className="col-span-12 md:col-span-9 bg-gray-200">
                {property ? (
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Skeleton height="100%" />
                )}
              </div>
              {/* Additional images */}
              <div className="col-span-12 md:col-span-3 grid grid-rows-3 gap-1">
                {property
                  ? property.images.slice(1, 4).map((image, index) => (
                    <a
                      key={index}
                      href={image}
                      className={`bg-gray-${300 + index * 100} cursor-pointer hover:brightness-75 transition-all ease-in-out`}
                    >
                      <img
                        src={image}
                        alt={`Property image ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </a>
                  ))
                  : Array.from({ length: 3 }).map((_, index) => (
                    <Skeleton key={index} height="100%" />
                  ))}
              </div>
            </div>

            {/* Property Details */}
            <div className="w-full grid pt-3">
              <div className="bg-white flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-green-700 mr-2"></div>
                  <p>For rent</p>
                </div>

                <div className="flex gap-3">
                  <div className="grid place-items-center border-[1px] w-12 h-12 md:w-14 md:h-14 rounded-full shadow-md hover:bg-gray-100 cursor-pointer">
                    {false ? (
                      <PiHeartFill size={25} className="text-red-400" />
                    ) : (
                      <PiHeartBold size={25} className="text-gray-700" />
                    )}
                  </div>
                  <div className="grid place-items-center border-[1px] w-12 h-12 md:w-14 md:h-14 rounded-full shadow-md hover:bg-gray-100 cursor-pointer">
                    <GrShareOption size={25} className="text-gray-700" />
                  </div>
                </div>
              </div>

              <div className="w-full space-y-3">
                <p className="text-[1.75rem] md:text-[2rem] font-bold ">
                  {property ? (
                    <>
                      ${property.price} <span className="text-[1rem] text-gray-500">/mo</span>
                    </>
                  ) : (
                    <Skeleton width={100} />
                  )}
                </p>
                <div className="flex">
                  <p className="mr-3 font-bold">
                    {property ? (
                      <>
                        {property.bedroom} <span className="font-normal text-gray-500">bed</span>
                      </>
                    ) : (
                      <Skeleton width={50} />
                    )}
                  </p>
                  <p className="font-bold">
                    {property ? (
                      <>
                        {property.bathroom} <span className="font-normal text-gray-500">bath</span>
                      </>
                    ) : (
                      <Skeleton width={50} />
                    )}
                  </p>
                </div>

                <p className="font-bold text-[1.25rem]">
                  {property ? (
                    <>
                      {property.street}, {property.cityProvince}
                    </>
                  ) : (
                    <Skeleton width={200} />
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-span-1 md:col-span-3">
            <div className="border-gray-400 space-y-1 border-[1px] h-auto rounded-2xl p-4 text-gray-700">
              <p className="text-xl text-gray-800 font-bold mb-5 mt-2">
                Get in touch
              </p>
              <ContactForm />
            </div>
          </div>
        </section>
      </div>

      <div className="mx-[16%]"></div>
    </div>
  );
}
