import React from "react";
import SectionHeading from "../headings/ListingsHeading";
import SmallCard from "../smallCard/SmallCard";

const Promotions = () => {
  return (
    <div className="min-h-96 mx-4 sm:mx-6 md:mx-[10%] lg:mx-[16.5%] px-4 mt-14 mb-16 flex flex-col">
      <SectionHeading
        title="Special Offers"
        location="New York"
        additional={"Rentals with special offers"}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <SmallCard
          image="https://ap.rdcpix.com/ebda49aafcd917e2aece8e7506d4c87bl-m2626022673rd-w960_h720.webp"
          type="Apartment"
          bed={2}
          bath={2}
          price="Contact for price"
          street="69 Columbus Ave"
          city="New York, NY 10169"
          isSpecial={true}
        />
        <SmallCard
          image="https://ar.rdcpix.com/0ff10866b3d88ee1cedb55ea9256efe6c-f2481629088rd-w1280_h960.webp"
          type="Single-Family Home"
          bed={3}
          bath={2}
          price="Contact for price"
          street="1101 President St Apt 1215"
          city="Brooklyn, NY 11225"
          isSpecial={true}
        />
        <SmallCard
          image="https://ar.rdcpix.com/e916178a590a030ea7cd19aee4d34b95c-f3333971300rd-w1280_h960.webp"
          type="Apartment"
          bed={1}
          bath={1}
          price="$3,500 - $9,000"
          street="125 Court St # F"
          city="New York, NY 11201"
          isSpecial={true}
        />
        <SmallCard
          image="https://ar.rdcpix.com/a7f7688ac37b584ba50f3bb725b92443c-f2738826364rd-w2048_h1536.webp"
          type="Condo"
          bed={5}
          bath={4}
          price="$4,000 - $8,000"
          street="360 Furman St Apt 1015"
          city="New York, NY 11201"
          isSpecial={true}
        />
      </div>
    </div>
  );
};

export default Promotions;
