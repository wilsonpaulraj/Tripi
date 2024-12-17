"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import DestinationSection from "./DestinationSection/DestinationSection";
import HotelsSection from "./HotelsSection/HotelsSection";
import WhyChoose from "./WhyChooseSection/WhyChoose";
import Reviews from "./Reviews/Reviews";
import News from "./News/News";
import NewsLetterSection from "./NewsLetter/NewsLetterSection";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
  }, []);
  return (
    <div className="overflow-hidden">
      <Hero />
      <DestinationSection />
      <HotelsSection />
      <WhyChoose />
      <Reviews />
      <News />
      <NewsLetterSection />
    </div>
  );
};

export default Home;
