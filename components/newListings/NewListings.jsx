import React from "react";
import SectionHeading from "../headings/ListingsHeading";
import SmallCard from "../smallCard/SmallCard";

const NewListings = () => {
  return (
    <div className="min-h-96 mx-4 sm:mx-6 md:mx-[10%] lg:mx-[16.5%] px-4 mt-14 mb-16 flex flex-col">
      <SectionHeading title="New Listings" location="New York" additional="" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <SmallCard
          image="https://ar.rdcpix.com/a529e6cef819c2ba41307f421e4ad7b0c-f3922270992rd-w1280_h960.webp"
          type="Apartment"
          bed={2}
          bath={2}
          price="$4,000 - $9,500"
          street="69 Columbus Ave"
          city="New York, NY 10169"
        />
        <SmallCard
          image="https://ap.rdcpix.com/7367ee54afa1184d0aca8aff9752c839l-m3265155384rd-w1280_h960.webp"
          type="Single-Family Home"
          bed={3}
          bath={2}
          price="$5,600"
          street="1101 President St Apt 1215"
          city="Brooklyn, NY 11225"
        />
        <SmallCard
          image="https://ap.rdcpix.com/0e74c93593db4cf22c7cc22612b6dd35l-m3742002083rd-w1280_h960.webp"
          type="Apartment"
          bed={1}
          bath={1}
          price="$5,700"
          street="125 Court St # F"
          city="New York, NY 11201"
        />
        <SmallCard
          image="https://ap.rdcpix.com/e36c45c04cebf257b011ac8ca64baef7l-m457149214rd-w1280_h960.webp"
          type="Condo"
          bed={5}
          bath={4}
          price="$35,000"
          street="360 Furman St Apt 1015"
          city="New York, NY 11201"
        />
      </div>
    </div>
  );
};

export default NewListings;
