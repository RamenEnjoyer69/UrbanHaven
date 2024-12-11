import Image from "next/image";
import React from "react";
import { AboutCard } from "./_components/AboutCard";
import myImage from "@/public/images/holding-app.jpg"
import damnImage from "@/public/images/ok-bong.jpg";

const AboutPage = () => {

  const featureData = [
    {
      icons: "one",
      title: "Advanced Search Filters",
      description: "Allow users to refine property searches using detailed filters tailored to their needs, such as price range, location, property size, and amenities like parking or pools. These advanced options streamline the search process, save time, and enhance user satisfaction by delivering highly relevant results."
    },
    {
      icons: "two",
      title: "Property Details and Media",
      description: "Provide users with detailed property descriptions, highlighting features, layout, and nearby attractions, along with high-quality images showcasing interiors and exteriors. Enhance the experience with virtual tours, allowing users to explore properties remotely, ensuring they can make informed decisions with confidence and convenience."
    },
    {
      icons: "three",
      title: "Save and Compare Listings",
      description: "Enable users to save their favorite properties to a personalized list and compare them side by side for easier evaluation. The comparison feature highlights key details such as price, size, location, and amenities, helping users assess options more effectively. This organized approach simplifies the decision-making process, ensuring users can confidently select the property that best fits their needs."
    }
  ]

  return (
    <div className="w-full min-h-screen">
      <div className="bg-[url('/background/magic-pattern.jpeg')] relative h-[400px] flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl lg:text-5xl font-semibold text-gray-700">Dive Deep To Know Who We Are</h1>
          <p className="text-xs lg:text-sm text-gray-600 w-full md:w-2/4 mx-auto">calls us to explore beyond the surface, uncovering our true identity. By examining our values, passions, and beliefs, we gain self-awareness and clarity, empowering us to live authentically and purposefully.</p>
        </div>
        <div className="h-[200px] bg-gradient-to-t from-white to-transparent absolute w-full bottom-0"></div>
      </div>
      <div className="py-16 px-4 lg:py-32 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between w-full space-y-3">
          <h2 className="text-3xl lg:text-5xl font-semibold text-gray-700 w-full lg:w-1/2">Discover Who We Are And What's Our Purpose</h2>
          <p className="text-xs lg:text-sm text-gray-600 w-full lg:w-1/2">We are fourth-year students at the Royal University of Phnom Penh, currently enrolled in a Web Design course. As part of the class assignment, our instructor tasked each team with creating a website that addresses a specific real-world problem. Our team chose to develop a platform designed to simplify the process of finding and renting houses, offering an efficient solution for house seekers.</p>
        </div>
        <Image className="mt-8 rounded-3xl h-[500px] object-cover object-bottom" src={damnImage} alt="damn image" />
      </div>
      <div className="py-16 px-4 lg:py-32 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between w-full space-y-3">
          <h2 className="text-3xl lg:text-5xl font-semibold text-gray-700 w-full lg:w-1/2">Discover Our Feature Packed Solution</h2>
          <p className="text-xs lg:text-sm text-gray-600 w-full lg:w-1/2">Our platform offers an easy-to-use solution for house seekers to find rental properties. With organized listings and detailed information on pricing, location, and amenities, it simplifies the process of finding homes that match users' needs and preferences.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {featureData.map((x, index) => (
            <AboutCard key={index} icons={x?.icons} title={x?.title} paragraph={x?.description} />
          ))}
        </div>
      </div>
      <div className="py-16 px-4 lg:py-32 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center lg:gap-24">
          <div className="space-y-3">
            <h2 className="text-3xl lg:text-5xl font-semibold text-gray-700 w-full">Revolutionizing Property Rentals</h2>
            <p className="text-xs lg:text-sm text-gray-600 w-full">Finding the perfect rental property has often been a challenging and time-consuming process, but with the advent of innovative technology, the experience is being transformed. By leveraging advanced search filters, comprehensive property descriptions, high-quality images, and immersive virtual tours, we’ve made it easier than ever for users to find properties that truly meet their needs. Our platform allows users to refine their search by price, location, size, and amenities, ensuring that they have access to highly relevant options. Additionally, features like property comparison and the ability to save favorites further streamline the decision-making process. This approach not only saves time but also empowers users to make more informed, confident choices, fundamentally changing how people find their next home.</p>
          </div>
          <div className="">
            <Image className="mt-8 rounded-3xl h-[500px] object-cover object-bottom" src={myImage} alt="damn image" />
          </div>
        </div>
      </div>
      <div className="relative">
        <Image className="object-cover" src={'https://news.airbnb.com/wp-content/uploads/sites/4/2022/09/Newsroom-About.jpg?w=3000'} width={2500} height={1073} alt="damn image" />
      </div>
    </div>
  );
};

export default AboutPage;
