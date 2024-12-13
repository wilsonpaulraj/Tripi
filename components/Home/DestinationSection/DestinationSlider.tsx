"use client";
import { destinationData } from "@/data/data";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 5,
    slidesToslide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 3,
    slidesToslide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToslide: 1,
  },
};

const DestinationSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
    >
      {destinationData.map((data) => {
        return (
          <div key={data.id} className="m-3">
            <div className="relative h-[400px]">
              <div className="absolute inset-0 rounded-lg bg-black opacity-25"></div>
              <img
                src={data.image}
                alt={data.country}
                width={500}
                height={500}
                className="h-full w-full rounded-lg object-cover"
              ></img>
            </div>
            <h1 className="ml-1 mt-4 text-lg font-semibold">{data.country}</h1>
            <p className="ml-1 text-sm text-gray-600">
              {data.travelers} travellers
            </p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default DestinationSlider;
