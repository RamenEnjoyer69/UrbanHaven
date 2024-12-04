"use client";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Import pagination icons
import { PiHeartBold, PiHeartFill } from "react-icons/pi";
import { sampleProperties } from "../rent/property/property"; // Ensure this path is correct

const Favorite = () => {
  const [saved, setSaved] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Number of properties per page

  // Load saved favorites from localStorage on component mount
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
    setSaved(savedFavorites);
  }, []);

  // Toggle favorite status and save it to localStorage
  const toggleFavorite = (id) => {
    setSaved((prevState) => {
      const updatedFavorites = {
        ...prevState,
        [id]: !prevState[id], // Toggle the saved state for the given property id
      };
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  // Filter only the saved properties
  const favoriteProperties = sampleProperties.filter(
    (property) => saved[property.id]
  );

  // Pagination logic
  const totalPages = Math.ceil(favoriteProperties.length / itemsPerPage);

  const getCurrentPageProperties = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return favoriteProperties.slice(startIndex, startIndex + itemsPerPage);
  };

  const handlePageChange = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="mt-6">
      <div className="flex py-4  px-4 items-center">
        <PiHeartFill size={24} className="text-black mr-2" />{" "}
        {/* Favorite Icon */}
        <h1 className="text-xl font-semibold">Favorite properties</h1>
      </div>
      {/* Property Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {getCurrentPageProperties().length > 0 ? (
          getCurrentPageProperties().map((property) => (
            <a
              key={property.id}
              href="/details"
              className="select-none overflow-hidden w-full h-[356.91px] rounded-2xl border-gray-200 hover:shadow-xl shadow-md transition-all ease-in-out duration-200 mx-4"
            >
              {/* Image Section */}
              <div className="h-[56.44%] w-full relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-full object-cover w-full"
                />

                {/* Special Badge */}
                {property.isSpecial && (
                  <div className="absolute top-3 left-3 bg-green-700 h-5 p-3 rounded-full grid place-content-center text-white text-sm">
                    Special
                  </div>
                )}

                {/* Favorite Icon */}
                <div
                  className={`border-[1px] border-black rounded-full w-12 h-12 bg-white z-10 flex justify-center items-center absolute bottom-3 right-3 hover:brightness-90 cursor-pointer ${
                    saved[property.id] ? "text-red-400" : "text-gray-400"
                  }`}
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation(); // Prevent click from propagating to the <a>
                    toggleFavorite(property.id);
                  }}
                >
                  {!saved[property.id] ? (
                    <PiHeartBold size={25} />
                  ) : (
                    <PiHeartFill size={25} />
                  )}
                </div>
              </div>

              {/* Property Details */}
              <div className="flex flex-col py-4 px-4">
                {/* Property Type */}
                <div className="flex items-center text-sm">
                  <div className="w-3 h-3 bg-green-700 rounded-full mr-1"></div>
                  <p className="text-gray-500">{property.type}</p>
                </div>

                {/* Price */}
                <h3 className="text-[1.5rem] font-bold">${property.price}</h3>

                {/* Beds & Baths */}
                <div className="flex space-x-2 text-gray-500">
                  <p>
                    <span className="font-bold text-black">
                      {property.bedroom}
                    </span>{" "}
                    bed
                  </p>
                  <p>
                    <span className="font-bold text-black">
                      {property.bathroom}
                    </span>{" "}
                    bath
                  </p>
                </div>

                {/* Address */}
                <div className="text-gray-500 text-sm">
                  <p>{property.street}</p>
                  <p>{property.cityProvince}</p>
                </div>
              </div>
            </a>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg col-span-full">
            No saved properties found.
          </p>
        )}
      </div>

      {/* Pagination */}
      {favoriteProperties.length > itemsPerPage && (
        <div className="flex justify-center items-center gap-4 mt-4 mb-5">
          <button
            onClick={() => handlePageChange("prev")}
            disabled={currentPage === 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
              currentPage === 1
                ? "border-gray-300 text-gray-400"
                : "border-gray-500 text-gray-700 hover:bg-gray-100"
            }`}
          >
            <FiChevronLeft /> Prev
          </button>
          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange("next")}
            disabled={currentPage === totalPages}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
              currentPage === totalPages
                ? "border-gray-300 text-gray-400"
                : "border-gray-500 text-gray-700 hover:bg-gray-100"
            }`}
          >
            Next <FiChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Favorite;
