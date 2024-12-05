"use client";

import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { GrShareOption } from "react-icons/gr";
import ContactForm from "@/components/contactForm/ContactForm";
import { PiHeartBold, PiHeartFill } from "react-icons/pi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RiSecurePaymentFill } from "react-icons/ri";
import ImageContainer from "@/components/ImageContainer";
import TourRequest from "@/components/tourRequest/TourRequest";
import Link from "next/link";
import LandlordInfo from "@/components/landlord/LandlordInfo";
import Map from "@/components/map/Map";
import { useMemo } from "react";
import dynamic from "next/dynamic";

const detailsPage = () => {
  const location = "cambodia";

  // const Map = dynamic(() => import("@/components/map/Map"), {
  //   ssr: false, // Disable server-side rendering
  // });

  return (
    <div className="w-full min-h-[100vh]">
      <div className="w-full h-14 text-black px-[16%] bg-gray-100 flex items-center ">
        <a
          href="../"
          className="flex items-center cursor-pointer hover:text-purple-600"
        >
          <IoIosArrowBack size={20} />
          Back
        </a>
      </div>

      <div className="mx-auto w-[65%]">
        <section className="w-full grid grid-cols-10 gap-3 py-5">
          <div className="col-span-7">
            <ImageContainer />

            <div className=" w-full grid pt-3">
              <div className=" bg-white flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-green-700 mr-2"></div>
                  <p>For rent</p>
                </div>

                <div className="flex gap-3">
                  <div className="grid place-items-center border-[1px] w-14 h-14 rounded-full shadow-md hover:bg-gray-100 cursor-pointer">
                    <PiHeartBold size={25} className="text-gray-700" />
                  </div>
                  <div className="grid place-items-center border-[1px] w-14 h-14 rounded-full shadow-md hover:bg-gray-100 cursor-pointer">
                    <GrShareOption size={25} className="text-gray-700" />
                  </div>
                </div>
              </div>

              <div className="w-full space-y-3">
                <div className="space-y-2">
                  <p className="underline">Provided by:</p>
                  {/* <Avatar>
                    <AvatarImage src="/images/a.jpg" />
                    <AvatarFallback>Ana de Armas</AvatarFallback>
                  </Avatar> */}

                  <div className="flex items-center">
                    <Link href="#owner_info">
                      <img
                        src="/images/a.jpg"
                        alt=""
                        className="w-10 h-10 rounded-full"
                      />
                    </Link>

                    <div className="ml-3 ">
                      <p className="font-bold">Ana de Armas</p>
                      <p>5 years of rental experience</p>
                    </div>
                  </div>
                </div>
                <hr />
                <p className="text-[2rem] font-bold ">
                  $69,000<span className="text-[1rem] text-gray-500">/mo</span>
                </p>
                <div className="flex">
                  <p className="mr-3 font-bold">
                    2 <span className="font-normal text-gray-500">bed</span>
                  </p>
                  <p className="font-bold">
                    2 <span className="font-normal text-gray-500">bath</span>
                  </p>
                </div>

                <p className="font-bold text-[1.25rem]">
                  15 Park Row Apt 8K, New York, NY 10038
                </p>
              </div>

              <section className="mt-10">
                <TourRequest />
              </section>

              <section className="mt-10 font-bold text-[22px]">
                Property Details
              </section>

              {/* <section className="mb-10"></section> */}
            </div>
          </div>
          <div className="col-span-3">
            <div className="border-gray-400 space-y-1 border-[1px] h-auto rounded-2xl p-4 text-gray-700">
              <p className="text-xl text-gray-800 font-bold mb-5 mt-2">
                Get in touch
              </p>
              <ContactForm />
            </div>
          </div>
        </section>
      </div>

      <div className="mx-auto w-[65%] mb-40">
        <section className="mt-10 ">
          <p className="font-bold text-[22px]">Where you'll be</p>

          <Map />
        </section>

        <section id="owner_info" className="mt-10">
          <p className="font-bold text-[22px] "> Meet your landlord</p>
          <div className="flex gap-20 mt-5">
            <LandlordInfo />

            <div className="">
              <div>
                <p className="font-bold text-[1.25rem]">Landlord details</p>

                <div className="mt-3">
                  <p>Respoonse rate: 100%</p>
                  <p>Responds within a day</p>
                </div>

                <button className="mt-5 font-bold bg-purple-500 text-white p-4 rounded-lg">
                  Message Host
                </button>
              </div>

              <hr className="border-gray-300 mt-4 mb-2" />
              <div className="flex items-center">
                <RiSecurePaymentFill className="mr-3 text-red-500" size={30} />
                <p className="text-sm">
                  To protect your payment, never transfer money or communicate
                  outside of UrbanHaven.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default detailsPage;
