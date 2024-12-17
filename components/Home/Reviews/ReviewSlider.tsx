"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// Import Swiper styles
import { EffectCards } from "swiper/modules";
import { reviewData } from "@/data/data";
import { FaStar } from "react-icons/fa";

const ReviewSlider = () => {
  return (
    <div>
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="h-[300px] w-[90%] md:h-[350px] md:w-[450px]"
      >
        {reviewData.map((review) => {
          return (
            <SwiperSlide key={review.id} className="block rounded-3xl bg-white">
              <div className="mx-auto mt-16 w-[80%]">
                <p className="text-xs font-semibold sm:text-sm md:text-base">
                  {review.review}
                </p>
                <div className="mt-4 flex items-center">
                  <FaStar className="h-3 w-3 text-yellow-300 md:h-6 md:w-6" />
                  <FaStar className="h-3 w-3 text-yellow-300 md:h-6 md:w-6" />
                  <FaStar className="h-3 w-3 text-yellow-300 md:h-6 md:w-6" />
                  <FaStar className="h-3 w-3 text-yellow-300 md:h-6 md:w-6" />
                </div>
                <div className="mt-10">
                  <div className="flex items-center space-x-4">
                    <img
                      src={review.image}
                      width={60}
                      height={60}
                      alt="Image"
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-semibold sm:text-lg">
                        {review.name}
                      </p>
                      <p className="text-xs text-gray-600 sm:text-base">
                        Web Developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
