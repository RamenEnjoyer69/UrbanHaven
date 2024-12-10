import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const NavBar = ({ toggle }) => {
  const property = { id: 30 };

  return (
    <div className="flex px-5 py-6 justify-between fixed w-full z-[999] bg-white">
      <div>
        <button onClick={toggle}>
          <IoIosArrowBack size={25} />
        </button>
      </div>

      <div className="flex gap-5">
        <button className="flex underline items-center gap-1">
          {" "}
          <IoShareOutline size={20} />
          Share
        </button>

        <button href="#" className="flex underline items-center gap-1">
          <FaRegHeart size={20} />
          Save
        </button>
      </div>
    </div>
  );
};

export default NavBar;
