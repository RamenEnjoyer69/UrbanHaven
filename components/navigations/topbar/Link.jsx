import React from "react";

const Link = ({ title }) => {
  const cap = (title) => {
    return title.charAt(0).toUpperCase() + title.slice(1);
  };
  return (
    <div className="flex items-center ">
      <ul className="flex">
        <li className="  group transition-all duration-100 ease-in-out">
          <a
            href={`/${title}`}
            className="bg-left-bottom bg-gradient-to-r pb-2 from-purple-600 via-indigo-600 to-pink-600 bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out"
          >
            {cap(title)}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Link;
