"use client";
import { useState, useEffect } from "react";
import Collage from "./Collage";
import CollageAlt from "./CollageAlt";
import { useMediaQuery } from "react-responsive";

const SelfPromo = () => {
  const is1920x1080 = useMediaQuery({
    query: "(min-width: 1920px) and (min-height: 1080px)",
  });

  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const [isClient, setIsClient] = useState(false);

  // // Ensure the effect only runs on the client
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setIsClient(true); // This ensures the component is rendered on the client

  //     const handleMouseMove = (e) => {
  //       setMousePosition({ x: e.clientX, y: e.clientY });
  //     };

  //     window.addEventListener("mousemove", handleMouseMove);

  //     return () => {
  //       window.removeEventListener("mousemove", handleMouseMove);
  //     };
  //   }
  // }, []);

  // // Calculate parallax offset based on mouse movement
  // const calculateParallax = (offset, axis) => {
  //   return axis === "x"
  //     ? (mousePosition.x - window.innerWidth / 2) * offset
  //     : (mousePosition.y - window.innerHeight / 2) * offset;
  // };

  // if (!isClient) {
  //   // Return null or a placeholder when server-side rendering
  //   return null;
  // }

  return (
    <div className="w-full h-[600px] flex items-center relative bg-gray-200 shadow-md">
      <div className="flex items-center justify-between absolute w-full brightness-50 opacity-90 ">
        <div className="flex w-full items-center ">
          <Collage />
        </div>
      </div>

      {/* <div className="z-[100] w-full h-full flex items-center relative"> */}
      {/*back*/}
      {/* <div className="z-50 flex w-full h-full absolute">
          <img
            src="https://static.rdc.moveaws.com/images/hero/hp-local-desktop-cube.avif"
            alt=""
            className=" w-96 h-80 object-cover shadow-lg shadow-gray-800 absolute left-[10%]"
            style={{
              transform: `translate(${calculateParallax(
                0.02,
                "x"
              )}px, ${calculateParallax(0.02, "y")}px)`,
            }}
          />
          <img
            src="https://evoheat.com.au/wp-content/uploads/2021/07/Project-Oxley-and-Stirling-10.jpg"
            alt=""
            className=" w-[400px] h-60 object-cover absolute left-[60%] shadow-lg shadow-gray-800"
            style={{
              transform: `translate(${calculateParallax(
                0.02,
                "x"
              )}px, ${calculateParallax(0.02, "y")}px)`,
            }}
          />
          <img
            src="https://www.parkway25.com/wp-content/uploads/2021/11/roofdeck.jpeg"
            alt=""
            className=" w-[500px] h-80 object-cover absolute bottom-8 right-[15%] shadow-lg shadow-gray-800"
            style={{
              transform: `translate(${calculateParallax(
                0.02,
                "x"
              )}px, ${calculateParallax(0.02, "y")}px)`,
            }}
          />
        </div> */}

      {/*front*/}
      {/* <div className="z-[60] flex w-full h-full items-center absolute ">
          <img
            src="https://www.sidewalkdog.com/wp-content/uploads/2021/07/full-shot-woman-working-with-cute-dog-1.jpg"
            alt=""
            className=" w-52 h-52 object-cover absolute top-0 left-[27%] shadow-lg shadow-gray-800"
            style={{
              transform: `translate(${calculateParallax(
                0.08,
                "x"
              )}px, ${calculateParallax(0.08, "y")}px)`,
            }}
          />
          <img
            src="https://i.pinimg.com/736x/e8/93/2d/e8932df7ad975cb9f6635cf02a7aeaf2.jpg"
            alt=""
            className=" w-52 h-52 object-cover absolute bottom-[10%] left-[40%] shadow-lg shadow-gray-800"
            style={{
              transform: `translate(${calculateParallax(
                0.08,
                "x"
              )}px, ${calculateParallax(0.08, "y")}px)`,
            }}
          />
          <img
            src="https://www.carpentry.sg/wp-content/uploads/2022/09/queens-road-8.jpg"
            alt=""
            className=" w-52 h-52 object-cover shadow-lg shadow-gray-800 right-[35%] absolute top-[10%]"
            style={{
              transform: `translate(${calculateParallax(
                0.08,
                "x"
              )}px, ${calculateParallax(0.08, "y")}px)`,
            }}
          />
          <img
            src="https://www.continentalvan.com/wp-content/uploads/2022/02/continental-van-Best-Relocation-Tips-for-Tacoma.jpg"
            alt=""
            className=" w-52 h-52 object-cover absolute right-[10%] bottom-[30%] shadow-lg shadow-gray-800"
            style={{
              transform: `translate(${calculateParallax(
                0.08,
                "x"
              )}px, ${calculateParallax(0.08, "y")}px)`,
            }}
          />
          <img
            src="https://www.lowratelocksmith.com/wp-content/uploads/2024/06/exploring_elmhurst_illinois_usa.jpg"
            alt=""
            className=" w-52 h-52 object-cover shadow-lg shadow-gray-800 absolute top-[45%] left-[5%]"
            style={{
              transform: `translate(${calculateParallax(
                0.08,
                "x"
              )}px, ${calculateParallax(0.08, "y")}px)`,
            }}
          />
        </div> */}
      {/* </div> */}
      <div className="w-full h-60 flex flex-col items-center justify-center space-y-5 z-[100] absolute">
        <p className="w-full grid place-content-center font-bold text-[1.75rem] text-white text-shadow">
          UrbanHaven - All the best living spaces you seek, in one place.
        </p>
        <div className="flex gap-10 flex-col xl:flex-row">
          <a
            href="rent"
            className="shadow-lg border-2 border-gray-200 text-white bg-slate-300 bg-opacity-40 backdrop-blur-lg hover:scale-105 transition-all ease-in-out rounded-full py-2 px-5 grid place-items-center w-48 text-[1.25rem]"
          >
            Browse rentals
          </a>
          <a
            href="about"
            className="shadow-lg border-2 border-white bg-white hover:scale-105 transition-all ease-in-out rounded-full py-2 px-5 grid place-items-center w-48 text-[1.25rem]"
          >
            About us
          </a>
        </div>
      </div>
    </div>
  );
};

export default SelfPromo;
