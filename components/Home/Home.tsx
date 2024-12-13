import React from "react";
import Hero from "./Hero/Hero";
import DestinationSection from "./DestinationSection/DestinationSection";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <DestinationSection />
    </div>
  );
};

export default Home;
