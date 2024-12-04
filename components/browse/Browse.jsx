import React from "react";
import SectionHeading from "../headings/ListingsHeading";
import BrowseCard from "./BrowseCard";

const Browse = () => {
  return (
    <div className="min-h-96 px-4 md:px-[10%] lg:px-[16.5%] mt-14 mb-16 flex flex-col">
      <h3 className="font-bold text-xl md:text-2xl lg:text-[1.5rem] mb-5 px-5">
        Browse Homes By Categories
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 place-items-center px-5">
        <BrowseCard
          image="https://ar.rdcpix.com/a529e6cef819c2ba41307f421e4ad7b0c-f3922270992rd-w1280_h960.webp"
          title="Newest Listings"
          number={734}
        />
        <BrowseCard
          image="https://ar.rdcpix.com/cc2a20ffcf3b1ecfd7193d3c6b392107c-f2845906190rd-w1280_h960.webp"
          title="Pet Friendly"
          number={536}
        />
        <BrowseCard
          image="https://ap.rdcpix.com/ebda49aafcd917e2aece8e7506d4c87bl-m2626022673rd-w960_h720.webp"
          title="Price Reduced"
          number={956}
        />
        <BrowseCard
          image="https://ap.rdcpix.com/d28f3d7a67a2f15120bd213565ea4381l-m3618238627rd-w1280_h960.webp"
          title="Single Family Homes"
          number={640}
        />
        <BrowseCard
          image="https://ap.rdcpix.com/42e5de403deecb79bf18e47124758c6dl-m1922059551rd-w1280_h960.webp"
          title="Condos"
          number={1334}
        />
        <BrowseCard
          image="https://ar.rdcpix.com/69ef9c1571fedb43fc56b1cd278a14c3c-f2747273115rd-w480_h360.webp"
          title="Apartments"
          number={2365}
        />
        <BrowseCard
          image="https://ap.rdcpix.com/b242e569b5a562dfd763793ddd5c72dal-m606298091rd-w1280_h960.webp"
          title="Townhomes"
          number={293}
        />
        <BrowseCard
          image="https://ap.rdcpix.com/274bddc550889571a903b7192c38a8a4l-m206158759rd-w1280_h960.webp"
          title="Condops"
          number={390}
        />
      </div>
    </div>
  );
};

export default Browse;
