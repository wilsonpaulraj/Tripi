import Link from "next/link";
import React from "react";
import { FaDribbble, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pb-16 pt-16">
      <div className="mx-auto grid w-[80%] grid-cols-1 items-start gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Company</h1>
          <p className="cursor-pointer text-sm font-medium text-gray-800 hover:text-blue-950">
            About Us
          </p>
          <p className="cursor-pointer text-sm font-medium text-gray-800 hover:text-blue-950">
            Careers
          </p>
          <p className="cursor-pointer text-sm font-medium text-gray-800 hover:text-blue-950">
            Blogs
          </p>
          <p className="cursor-pointer text-sm font-medium text-gray-800 hover:text-blue-950">
            Gift Cards
          </p>
          <p className="cursor-pointer text-sm font-medium text-gray-800 hover:text-blue-950">
            Magazine
          </p>
        </div>
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Support</h1>
          <p className="cursor-pointer text-sm font-medium text-gray-800 hover:text-blue-950">
            Contact
          </p>
          <p className="cursor-pointer text-sm font-medium text-gray-800 hover:text-blue-950">
            Legal Notice
          </p>
          <p className="cursor-pointer text-sm font-medium text-gray-800 hover:text-blue-950">
            Privacy Policy
          </p>
          <p className="cursor-pointer text-sm font-medium text-gray-800 hover:text-blue-950">
            Terms & Conditions
          </p>
          <p className="cursor-pointer text-sm font-medium text-gray-800 hover:text-blue-950">
            Sitemap
          </p>
        </div>
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Other Services</h1>
          <p className="cursor-pointer text-sm font-medium text-gray-800 hover:text-blue-950">
            Car Hire
          </p>
          <p className="cursor-pointer text-sm font-medium text-gray-800 hover:text-blue-950">
            Activity Finder
          </p>
          <p className="cursor-pointer text-sm font-medium text-gray-800 hover:text-blue-950">
            Tour List
          </p>
          <p className="cursor-pointer text-sm font-medium text-gray-800 hover:text-blue-950">
            Flight finder
          </p>
          <p className="cursor-pointer text-sm font-medium text-gray-800 hover:text-blue-950">
            Travel Agents
          </p>
        </div>

        <div>
          <h1 className="text-lg font-bold">Contact us</h1>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600">Our Mobile Number</h1>
            <h1 className="mt-1 text-base font-bold text-blue-950">
              +91 948472 48334
            </h1>
          </div>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600">Our Email Address</h1>
            <h1 className="mt-1 text-base font-bold text-blue-950">
              wilsonpaulrajd@gmail.com
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-3 flex w-[80%] flex-col items-center justify-between border-t pt-8 text-sm text-gray-600 md:flex-row">
        <p className="text-center md:text-left">
          Copyright © 2024 Webdev. All rights reserved
        </p>
        <div className="mt-4 flex items-center space-x-4 md:mt-0">
          <span>Social : </span>
          <Link className="text-gray-500 hover:text-gray-800" href="#">
            <FaFacebook />
          </Link>
          <Link className="text-gray-500 hover:text-gray-800" href="#">
            <FaTwitter />
          </Link>
          <Link className="text-gray-500 hover:text-gray-800" href="#">
            <FaInstagram />
          </Link>
          <Link className="text-gray-500 hover:text-gray-800" href="#">
            <FaDribbble />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
