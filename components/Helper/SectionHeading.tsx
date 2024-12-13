import React from "react";

type props = {
  heading: string;
  subheading: string;
};

const SectionHeading = ({ heading, subheading }: props) => {
  return (
    <div className="mx-auto w-[80%]">
      <h1 className="text-xl font-bold text-blue-950 sm:text-3xl">{heading}</h1>
      <p className="mt-2 text-sm font-medium text-gray-700 sm:text-base">
        {subheading}
      </p>
    </div>
  );
};

export default SectionHeading;
