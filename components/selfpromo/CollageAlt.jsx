import React from "react";

const CollageAlt = () => {
  return (
    <div className="relative flex justify-center flex-wrap lg:justify-between lg:gap-0 gap-4 mt-8">
      {/* Left Image */}
      <img
        src="https://zillowstatic.com/bedrock/app/uploads/sites/15/Insane-Apartment-Amenities-That-Celebs-Love-1-4-HERO.jpg"
        alt="Luxury"
        className="lg:w-[25%] w-[100%] h-[200px] lg:h-[400px] object-cover rounded-md"
      />

      {/* Center Image */}
      <img
        src="https://cdn.prod.website-files.com/62bc621399f5713af580f208/64ac85247cd58fe4ff623904_Woman%20sitting%20on%20Ori%20Cloud%20Bed%20in%20her%20Semi-Furnished%20apartment.JPG"
        alt="Comfy"
        className="lg:w-[25%] w-[100%] h-[200px] lg:h-[400px] object-cover rounded-md lg:translate-y-[-40px] z-30"
      />

      {/* Second Center Image */}
      <img
        src="https://www.fieldstoneblacksburg.com/wp-content/uploads/pet-friendly-apartments-blacksburg.webp"
        alt="Pet Friendly"
        className="lg:w-[25%] w-[100%] h-[200px] lg:h-[400px] object-cover rounded-md lg:translate-y-[20px] z-20"
      />

      {/* Right Image */}
      <img
        src="https://rentforevent.com/wp-content/uploads/2024/03/10-BBQ-Party-Ideas-for-Adults-That-Are-Easy-to-Plan-4-1536x864.jpg"
        alt="Family-sized homes"
        className="lg:w-[25%] w-[100%] h-[200px] lg:h-[400px] object-cover rounded-md"
      />
    </div>
  );
};

export default CollageAlt;
