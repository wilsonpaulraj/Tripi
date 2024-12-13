import React from "react";
import { FaCalendarWeek, FaMap } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

const SearchBox = () => {
  return (
    <div className="mt-4 grid w-[95%] grid-cols-1 items-center justify-center gap-8 rounded-lg bg-white p-8 sm:mt-12 sm:w-[80%] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/* 1st search input */}
      <div className="flex items-center space-x-6">
        <FaMap className="h-6 w-6 text-blue-600" />
        <div>
          <p className="mb-[0.2rem] text-lg font-medium">Location</p>
          <input
            type="text"
            placeholder="where are you going?"
            className="w-full border-none outline-none placeholder:text-gray-800"
          />
        </div>
      </div>
      {/* 2nd search input */}
      <div className="flex items-center space-x-6">
        <FaCalendarWeek className="h-6 w-6 text-blue-600" />
        <div>
          <p className="mb-[0.2rem] text-lg font-medium">Start Date</p>
          <input type="date" className="border-none outline-none" />
        </div>
      </div>

      {/* 3rd search input */}
      <div className="flex items-center space-x-6">
        <FaCalendarWeek className="h-6 w-6 text-blue-600" />
        <div>
          <p className="mb-[0.2rem] text-lg font-medium">End Date</p>
          <input type="date" className="border-none outline-none" />
        </div>
      </div>

      {/* 4thsearch input */}
      <div className="flex items-center space-x-6">
        <FaUserGroup className="h-6 w-6 text-blue-600" />
        <div>
          <p className="mb-[0.2rem] text-lg font-medium">Guest</p>
          <p className="text-base font-normal">1 Guest 1 Room</p>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
