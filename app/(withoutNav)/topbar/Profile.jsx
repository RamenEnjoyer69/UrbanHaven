"use client"; // Add this to mark the component as a Client Component

import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    // localStorage.setItem("is_login", "has_login");
    console.log(localStorage.getItem("is_login"));
    // Check localStorage on the client side after component mounts
    if (localStorage.getItem("is_login") === "has_login") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []); // Empty dependency array ensures this runs once when the component mounts

  const handleClick = (route) => {
    window.location.href = route;
  };

  if (isLoggedIn === null) {
    // Optional: Render a placeholder or loading state
    return <div className="flex justify-end"></div>;
  }

  return (
    <div className="flex justify-end">
      {isLoggedIn ? (
        <>
          <Avatar
            onClick={(e) => {
              handleClick("/my-profile");
            }}
          >
            <AvatarImage
              src="/images/my-profile.jpg"
              className="object-cover"
            />
            <AvatarFallback>-</AvatarFallback>
          </Avatar>
          <div className="ml-4 leading-none flex items-center">
            <p className="font-bold">{localStorage.getItem("username")}</p>
          </div>
        </>
      ) : (
        <div className="ml-4 leading-none flex items-center">
          <button
            onClick={(e) => {
              handleClick("/sign-in");
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
