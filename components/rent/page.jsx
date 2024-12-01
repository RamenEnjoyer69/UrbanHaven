'use client';

import { useState } from "react";
import { FiSearch, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { sampleProperties } from "./property/property";
import { Button } from "../ui/button";
export default function Rent() {
  const [saved, setSaved] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [filters, setFilters] = useState({
    search: "",
    price: null,
    propertyType: null,
    beds: null,
    date: null,
    location: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({ ...prev, [filterName]: value }));
    setActiveDropdown(null);
  };

  const filteredProperties = sampleProperties.filter((property) => {
    const matchesSearch = filters.search
      ? [
        property.title.toLowerCase(),
        property.cityProvince.toLowerCase(),
        property.communeSrok.toLowerCase(),
        property.districtKhom.toLowerCase()
      ].some(field => field.includes(filters.search.toLowerCase()))
      : true;

    const matchesPrice =
      filters.price === null ||
      (filters.price === "under1000" && property.price < 1000) ||
      (filters.price === "1000to2000" && property.price >= 1000 && property.price <= 2000) ||
      (filters.price === "2000plus" && property.price > 2000);

    const matchesType = filters.propertyType ? property.type === filters.propertyType : true;

    const matchesBeds = filters.beds ? property.bedroom === filters.beds : true;

    const matchesDate = filters.date
      ? (() => {
        const propertyDate = new Date(property.uploadDate);
        const filterDate = new Date(filters.date);
        return (
          propertyDate.getFullYear() === filterDate.getFullYear() &&
          propertyDate.getMonth() === filterDate.getMonth() &&
          propertyDate.getDate() === filterDate.getDate()
        );
      })()
      : true;

    const matchesLocation = filters.location
      ? [property.cityProvince, property.communeSrok, property.districtKhom]
        .join(" ")
        .toLowerCase()
        .includes(filters.location.toLowerCase())
      : true;

    return matchesSearch && matchesPrice && matchesType && matchesBeds && matchesDate && matchesLocation;
  });

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);

  const getCurrentPageProperties = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProperties.slice(startIndex, startIndex + itemsPerPage);
  };

  const handlePageChange = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getPriceLabel = () => {
    switch (filters.price) {
      case "under1000":
        return "Under $1,000";
      case "1000to2000":
        return "$1,000 - $2,000";
      case "2000plus":
        return "Over $2,000";
      case null:
        return "Price";
      default:
        return "All";
    }
  };

  const getPropertyTypeLabel = () => {
    switch (filters.propertyType) {
      case "Apartment":
        return "Apartment";
      case "Townhome":
        return "Townhome";
      case "Condo":
        return "Condo";
      case null:
        return "Property Type";
      default:
        return "Property Type";
    }
  };

  const getBedsLabel = () => {
    switch (filters.beds) {
      case 1:
        return "1 Bed";
      case 2:
        return "2 Beds";
      case 3:
        return "3 Beds";
      case 4:
        return "4 Beds";
      case 5:
        return "5 Beds";
      case null:
        return "Beds";
      default:
        return "Beds";
    }
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      price: null,
      propertyType: null,
      beds: null,
      date: null,
      location: "",
    });
  };

  return (
    <div className="pt-28 px-4">
      <div className="flex gap-2">
        {/* Search Box */}
        <div className="relative">
          <input
            type="text"
            id="search"
            className="w-full px-12 py-2 rounded-full border border-gray-400"
            placeholder="Search"
            value={filters.search} // Bind the input value to filters.search
            onChange={(e) => handleFilterChange("search", e.target.value)} // Update search state on change
          />
          <FiSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500" size={20} />
        </div>

        {/* Price Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("price")}
            className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center hover:shadow"
          >
            {getPriceLabel()}
          </button>
          {activeDropdown === "price" && (
            <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-md w-48">
              <ul className="py-2">
                <li
                  onClick={() => handleFilterChange("price", null)} // null to show all properties
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  All
                </li>
                <li onClick={() => handleFilterChange("price", "under1000")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Under $1,000
                </li>
                <li onClick={() => handleFilterChange("price", "1000to2000")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  $1,000 - $2,000
                </li>
                <li onClick={() => handleFilterChange("price", "2000plus")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Over $2,000
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Property Type Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("propertyType")}
            className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center hover:shadow"
          >
            {getPropertyTypeLabel()}
          </button>
          {activeDropdown === "propertyType" && (
            <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-md w-48">
              <ul className="py-2">
                <li
                  onClick={() => handleFilterChange("propertyType", null)} // Set to null to reset the filter and show all types
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  All
                </li>
                <li onClick={() => handleFilterChange("propertyType", "Apartment")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Apartment
                </li>
                <li onClick={() => handleFilterChange("propertyType", "Townhome")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Townhome
                </li>
                <li onClick={() => handleFilterChange("propertyType", "Condo")} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Condo
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Beds Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("beds")}
            className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center hover:shadow"
          >
            {getBedsLabel()}
          </button>
          {activeDropdown === "beds" && (
            <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-md w-48">
              <ul className="py-2">
                <li onClick={() => handleFilterChange("beds", null)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  All
                </li>
                <li onClick={() => handleFilterChange("beds", 1)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  1 Bed
                </li>
                <li onClick={() => handleFilterChange("beds", 2)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  2 Beds
                </li>
                <li onClick={() => handleFilterChange("beds", 3)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  3 Beds
                </li>
                <li onClick={() => handleFilterChange("beds", 4)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  4 Beds
                </li>
                <li onClick={() => handleFilterChange("beds", 5)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  5 Beds
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Date Filter */}
        <div className="relative">
          <input
            type="date"
            value={filters.date || ""} // Ensure it uses an empty string if date is null
            onChange={(e) => handleFilterChange("date", e.target.value)} // e.target.value will return the date as `YYYY-MM-DD`
            className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg"
          />
        </div>




        <Button onClick={clearFilters}>Clear Filters</Button>
      </div>

      {/* Property Listing */}
      <div className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        {getCurrentPageProperties().map((property) => (
          <a
            href={`rent/details/${property.id}`}
            key={property.id}
            className="select-none overflow-hidden w-full h-[400px] rounded-2xl border-gray-200 hover:shadow-xl shadow-md transition-all ease-in-out duration-200"
          >
            <div className="h-[56.44%] w-full relative">
              <img
                src={property.image}
                alt={property.title}
                className="h-full object-cover w-full"
              />

              {property.isSpecial && (
                <div className="absolute top-3 left-3 bg-green-700 h-5 p-3 rounded-full grid place-content-center text-white text-sm">
                  Special
                </div>
              )}
            </div>

            <div className="flex flex-col py-4 px-4">
              <h3 className="text-[1rem] font-bold">{property.title}</h3>
              <h3 className="text-[1.2rem] font-bold text-green-700">Price : ${property.price}</h3>

              <div className="flex space-x-2 text-gray-500">
                <p>
                  <span className="font-bold text-black">{property.bedroom}</span> bed
                </p>
                <p>
                  <span className="font-bold text-black">{property.bathroom}</span> bath
                </p>
              </div>

              <div className="text-gray-500 text-sm">
                <p>{property.cityProvince}, {property.communeSrok}, {property.districtKhom}</p>
                <p>Uploaded: {new Date(property.uploadDate).toLocaleDateString()}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-4 mb-5">
        <button
          onClick={() => handlePageChange("prev")}
          disabled={currentPage === 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border ${currentPage === 1 ? "border-gray-300 text-gray-400" : "border-gray-500 text-gray-700 hover:bg-gray-100"}`}
        >
          <FiChevronLeft /> Prev
        </button>
        <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => handlePageChange("next")}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border ${currentPage === totalPages ? "border-gray-300 text-gray-400" : "border-gray-500 text-gray-700 hover:bg-gray-100"}`}
        >
          Next <FiChevronRight />
        </button>
      </div>
    </div>
  );
}