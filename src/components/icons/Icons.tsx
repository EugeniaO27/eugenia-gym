import React from "react";
import { FaInstagramSquare, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { LuTwitter } from "react-icons/lu";

const Icons = () => {
  return (
    <div className='flex gap-3'>
      <div className="bg-primary-500">
        <FaInstagramSquare  size={30} color="white" />
      </div>
      <div className="bg-blue-800">
        <IoLogoFacebook size={30} color="white" />
      </div>
      <div className="bg-blue-500">
        <LuTwitter size={30} color="white"/>
      </div>
      <div className="bg-blue-600">
        <FaLinkedinIn size={30} color="white" />
      </div>
      <div className="bg-red-700">
        <FaYoutube size={30}color="white" />
      </div>
    </div>
  );
};

export default Icons;
