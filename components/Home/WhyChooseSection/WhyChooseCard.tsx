import React from "react";

type props = { image: string; title: string; description: string };

const WhyChooseCard = ({ image, title, description }: props) => {
  return (
    <div>
      <img src={image} alt="Image" height={70} width={70} className="mx-auto" />
      <h1 className="mt-6 text-center font-medium text-gray-900">{title}</h1>
      <p className="mt-2 text-center text-xs font-medium text-gray-700">
        {description}
      </p>
    </div>
  );
};

export default WhyChooseCard;
