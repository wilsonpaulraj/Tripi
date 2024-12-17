import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div className="pb-16 pt-16">
      <SectionHeading
        heading="Travel News for you!"
        subheading=""
      ></SectionHeading>
      <div className="mx-auto mt-20 grid w-[80%] grid-cols-1 items-center gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <NewsCard
            image="/Images/n1.jpg"
            title="Top 10 places to visit in India"
            date="25 November 2024"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <NewsCard
            image="/Images/n2.jpg"
            title="Top 10 places to visit in Bangladesh"
            date="30 November 2024"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <NewsCard
            image="/Images/n3.jpg"
            title="Top 10 places to visit in New York"
            date="28 June 2024"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <NewsCard
            image="/Images/n4.jpg"
            title="Top 10 places to visit in New York"
            date="28 June 2024"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
