import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { GrShareOption } from "react-icons/gr";
import ContactForm from "@/components/contactForm/ContactForm";
import { PiHeartBold, PiHeartFill } from "react-icons/pi";

const page = () => {
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
            <div className=" h-[500px] rounded-2xl grid grid-cols-12 gap-1 overflow-hidden">
              <div className="col-span-9 bg-gray-200">
                <img
                  src="https://ar.rdcpix.com/a7f7688ac37b584ba50f3bb725b92443c-f2738826364rd-w1280_h960.webp"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="col-span-3 grid grid-rows-3 gap-1">
                <a
                  href="image"
                  className="bg-gray-300 cursor-pointer hover:brightness-75 transition-all ease-in-out "
                >
                  <img
                    src="https://ar.rdcpix.com/a7f7688ac37b584ba50f3bb725b92443c-f1134627828rd-w2048_h1536.webp"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </a>
                <a
                  href="image"
                  className="bg-gray-400 cursor-pointer hover:brightness-75 transition-all ease-in-out "
                >
                  <img
                    src="https://ar.rdcpix.com/a7f7688ac37b584ba50f3bb725b92443c-f2020301146rd-w2048_h1536.webp"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </a>
                <a
                  href="image"
                  className="bg-gray-500 cursor-pointer hover:brightness-75 transition-all ease-in-out "
                >
                  <img
                    src="https://ar.rdcpix.com/a7f7688ac37b584ba50f3bb725b92443c-f3139238151rd-w2048_h1536.webp"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </a>
              </div>
            </div>

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
                <p className="text-[2rem] font-bold ">
                  $69,000 <span className="text-[1rem] text-gray-500">/mo</span>
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

      <div className=" mx-[16%]"></div>
    </div>
  );
};

export default page;
