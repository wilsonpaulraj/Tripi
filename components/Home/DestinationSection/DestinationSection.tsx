import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import DestinationSlider from "./DestinationSlider";

const DestinationSection = () => {
  return (
    <div className="pb-20 pt-20">
      <SectionHeading heading="Exploring Popular Destination" subheading={""} />
      <div className="mx-auto mt-14 w-[80%]">
        {/* Slider */}
        <DestinationSlider />
      </div>
    </div>
  );
};

export default DestinationSection;
