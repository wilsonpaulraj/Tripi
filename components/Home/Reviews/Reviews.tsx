import React from "react";
import { FaStar } from "react-icons/fa";
import ReviewSlider from "./ReviewSlider";

const Reviews = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#13357b] pb-20 pt-20">
      <div className="mx-auto grid w-[80%] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-2xl font-semibold text-white">
            What our customers saying about us?
          </h1>
          <p className="mt-6 text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            laborum a atque fugit perspiciatis ullam tempora laboriosam commodi,
            laudantium quaerat beatae ut ea enim excepturi unde possimus
            repudiandae veniam optio?
          </p>

          <div className="mt-6 flex items-center space-x-6">
            <div>
              <p className="text-2xl font-bold text-white">4.78</p>
              <p className="mb-2 text-white">Overall Rating</p>
              <div className="flex items-center">
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
              </div>
            </div>
          </div>
        </div>
        {/* Slider */}
        <div className="overflow-hidden">
          <ReviewSlider />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
