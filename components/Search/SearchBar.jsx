"use client";
import React, { useEffect, useRef, useState } from "react";
import { LuSearch } from "react-icons/lu";

const SearchBar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef();
  useEffect(() => {});

  return (
    <div className="group w-[30%] rounded-full absolute top-[72%] flex place-items-center justify-between py-1 px-1 bg-gray-100 hover:bg-white cursor-text border-4 border-gray-100 hover:border-purple-100 ">
      <input
        ref={inputRef}
        type="text"
        className="w-[80%] outline-none ml-3 bg-gray-100 group-hover:bg-white"
        placeholder="Search..."
      />
      <div className="p-[10px] bg-purple-500 rounded-full hover:brightness-110 cursor-pointer">
        <LuSearch size={20} className="text-white" />
      </div>
    </div>
  );
};

export default SearchBar;
