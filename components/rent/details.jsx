"use client";

import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi"; // Import an icon for the back button
import { PiInfoBold } from "react-icons/pi"; // Import a "details" icon

export default function Details() {
  return (
    <div className="mt-6">
      <div>
        {/* Header Section */}
        <div className="flex justify-between py-4 px-4 items-center">
          {/* Back Button */}
          <Link href="/rent">
            <button className="mr-2 font-bold text-xl text-gray-600 hover:text-gray-900 flex items-center">
              <FiArrowLeft size={24} className="mr-1" />
              Back
            </button>
          </Link>
          {/* Details Icon and Title */}
          <div className="flex justify-center items-center">
            <PiInfoBold size={24} className="text-black mr-2" />
            <h1 className="text-xl font-semibold">Property Details</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
