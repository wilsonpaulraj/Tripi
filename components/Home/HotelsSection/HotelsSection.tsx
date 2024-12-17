"use client";
import SectionHeading from "@/components/Helper/SectionHeading";
import { hotelsData } from "@/data/data";
import React from "react";
import HotelCard from "./HotelCard";

const HotelsSection = () => {
  return (
    <div className="pb-20 pt-20">
      {/* Section Heading */}
      <SectionHeading
        heading="Recommended Hotels"
        subheading="Explore the popular hotels in your region!"
      />
      <div className="mx-auto mt-16 grid w-[80%] grid-cols-1 items-center justify-between gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Hotel Cards */}
        {hotelsData.map((hotel, i) => {
          return (
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 100}`}
              className=""
              key={hotel.id}
            >
              <HotelCard
                image={hotel.image}
                name={hotel.name}
                location={hotel.location}
                rating={hotel.rating}
                reviews={hotel.reviews}
                price={hotel.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HotelsSection;
