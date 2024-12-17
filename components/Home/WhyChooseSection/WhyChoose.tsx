"use client";
import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <div className="pb-24 pt-16">
      <SectionHeading heading="Why Choose Us?" subheading="" />
      <div className="mx-auto mt-20 grid w-[80%] grid-cols-1 items-center gap-16 md:grid-cols-2 lg:grid-cols-3">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <WhyChooseCard
            image="/Images/c1.svg"
            title="Best Price Guarantee"
            description="We offer the best prices available, ensuring you get the most value for your money."
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
        >
          <WhyChooseCard
            image="/Images/c2.svg"
            title="Easy & Quick Booking"
            description="Our booking process is streamlined and efficient, making it quick and easy for you to reserve your spot."
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="350"
        >
          <WhyChooseCard
            image="/Images/c3.svg"
            title="Customer Care 24x7"
            description="Our customer support team is available 24/7 to assist you with any inquiries or issues you may have."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
