import NewListings from "@/components/newListings/NewListings";
import Hero from "@/components/hero/Hero";
import React from "react";
import Browse from "@/components/browse/Browse";
import Promotions from "@/components/promotions/Promotions";
import Reviews from "@/components/reviews/Reviews";
import SelfPromo from "@/components/selfpromo/SelfPromo";
import BackToTop from "@/components/BackToTop";

const Homepage = () => {
  return (
    <div className="bg-white ">
      <Hero />
      <Browse />
      <NewListings />
      <Promotions />
      <SelfPromo />
      <Reviews />
      <BackToTop />
    </div>
  );
};

export default Homepage;
