import React from "react";

type props = {
  image: string;
  title: string;
  date: string;
};

const NewsCard = ({ image, title, date }: props) => {
  return (
    <div>
      <div className="h-[300px]">
        <img
          src={image}
          alt={title}
          width={300}
          height={300}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
      <h1 className="mt-6 cursor-pointer text-lg font-semibold text-gray-950 transition-all duration-200 hover:text-blue-950">
        {title}
      </h1>
      <p className="mt-3 text-sm text-gray-600">{date}</p>
    </div>
  );
};

export default NewsCard;
