"use client"; // Add this to mark the component as a Client Component

import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    // Check localStorage on the client side after component mounts
    const loginStatus = localStorage.getItem("is_login");
    if (loginStatus === "has_login") {
      setIsLoggedIn(true);
      setUsername(localStorage.getItem("username"));
      setAvatar(localStorage.getItem("avatar") || "/images/my-profile.jpg"); // Replace with a fallback if no avatar is stored
    } else {
      setIsLoggedIn(false);
    }
  }, []); // Empty dependency array ensures this runs once when the component mounts

  if (isLoggedIn === null) {
    // Optional: Render a placeholder or loading state
    return <div className="flex justify-end"></div>;
  }

  return (
    <div className="flex justify-end">
      {isLoggedIn ? (
        <a href="/my-profile" className="flex">
          <Avatar>
            <AvatarImage src={avatar} className="object-cover" />
            <AvatarFallback>-</AvatarFallback>
          </Avatar>
          <div className="ml-4 leading-none flex items-center">
            <p className="font-bold">{username}</p>
          </div>
        </a>
      ) : (
        <div className="flex">
          <div className="ml-4 leading-none flex items-center">
            <a
              href="/sign-up"
              className=" text-black font-bold py-2 px-4 border-2 border-black rounded hover:border-purple-700 hover:text-purple-700"
            >
              Sign Up
            </a>
          </div>

          <div className="ml-4 leading-none flex items-center">
            <a
              href="/sign-in"
              className="bg-purple-500 hover:bg-purple-700 hover:border-purple-700 text-white font-bold py-2 px-4 border-2 border-purple-500 rounded"
            >
              Sign In
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
