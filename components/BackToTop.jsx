"use client";
import { useEffect } from "react";

const BackToTop = () => {
  const top = () => {
    if (typeof window !== "undefined") {
      // Safe to use window
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="w-full grid place-items-center mb-10">
      <button
        onClick={top}
        className="text-[1.2rem] w-52 py-3 bg-purple-600 text-white rounded-full "
      >
        Back to top
      </button>
    </div>
  );
};

export default BackToTop;
