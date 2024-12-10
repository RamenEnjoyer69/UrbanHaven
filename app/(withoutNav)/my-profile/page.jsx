"use client"; // Add this to mark the component as a Client Component
import React, { useEffect, useState } from "react";

const MyProfilePage = () => {
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    created_at: "",
  });

  useEffect(() => {
    // Read from localStorage once the component mounts
    setProfile({
      username: localStorage.getItem("username") || "",
      email: localStorage.getItem("email") || "",
      created_at: localStorage.getItem("created_at") || "",
    });
  }, []); // Empty dependency array means it runs only on mount

  const handleClick = (route) => {
    localStorage.removeItem("is_login");
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("created_at");
    localStorage.removeItem("email");
    window.location.href = route;
  };

  function dateTimeFormat(dateStr) {
    const date = new Date(dateStr);

    // Adjust for UTC+7
    date.setHours(date.getHours() + 7);

    // Format the day with ordinal suffix
    const day = date.getDate();
    const ordinalSuffix = (n) => {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };
    const formattedDay = ordinalSuffix(day);

    // Format the month and year
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    const formattedDate = `${formattedDay} ${month} ${year}`;
    return formattedDate;
  }

  return profile.username ? (
    <div className="h-screen bg-gray-200  dark:bg-gray-800   flex flex-wrap items-center  justify-center">
      <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
        <div className=" h-32 overflow-hidden">
          <img
            className="w-full"
            src="https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/2020-06/VC_Experiences_ReopeningBeaches_RF_1156532604_1280x640.jpg.webp?itok=uyvrhONk"
            alt=""
          />
        </div>
        <div className="flex justify-center px-5  -mt-12">
          <img
            className="h-32 w-32 bg-white p-2 rounded-full   "
            src="/images/my-profile.jpg"
            alt=""
          />
        </div>
        <div className=" ">
          <div className="text-center px-14">
            <h2 className="text-gray-800 text-3xl font-bold">
              {profile.username}
            </h2>
            <p>{profile.email}</p>

            <p className="mt-2 text-gray-500 text-sm">
              since {dateTimeFormat(profile.created_at)}
            </p>
          </div>

          <div className="flex justify-center items-center p-4">
            <button
              onClick={(e) => {
                if (window.confirm("Are you sure you want to sign out?")) {
                  handleClick("/home");
                }
              }}
              className="bg-orange-500 hover:bg-red-700 text-white font-bold py-2 px-4  rounded"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default MyProfilePage;
