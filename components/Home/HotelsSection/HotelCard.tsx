import React from "react";
import { FaHeart } from "react-icons/fa";

type props = {
  image: string;
  name: string;
  location: string;
  rating: number;
  reviews: string;
  price: string;
};

const HotelCard = ({
  image,
  name,
  location,
  rating,
  reviews,
  price,
}: props) => {
  return (
    <div>
      <div className="group relative h-[300px] w-full cursor-pointer overflow-hidden rounded-lg">
        <div className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white">
          <FaHeart className="h-3 w-3 text-red-500" />
        </div>
        <div className="absolute inset-0 z-10 bg-black opacity-20"></div>
        <img
          src={image}
          alt={name}
          width={500}
          height={500}
          className="h-full w-full overflow-hidden object-cover transition-all duration-300 ease-out group-hover:scale-110"
        />
      </div>
      <div>
        <h1 className="mt-4 cursor-pointer text-lg font-semibold text-blue-950 transition-all duration-300 hover:text-black">
          {name}
        </h1>
        <p className="mb-6 mt-3 text-sm font-medium text-gray-600">
          {location}
        </p>
        <div className="flex items-center space-x-2">
          <div className="rounded-md bg-blue-800 p-2 text-xs font-bold text-white">
            {rating}
          </div>
          <p className="text-sm text-gray-800">Exceptional</p>
          <p className="text-sm font-bold text-gray-800">{reviews} Reviews</p>
        </div>
        <p className="mb-6 mt-3 font-medium text-gray-700">
          Starting from{" "}
          <span className="font-bold text-blue-600">US$ {price}</span>
        </p>
      </div>
    </div>
  );
};

export default HotelCard;
