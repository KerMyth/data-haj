import React from "react";
import { GoBell } from "react-icons/go";
import Image from "../assets/symbols.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex w-[340px] md:w-[600px] lg:w-[1430px] justify-between items-center p-4">
      <div>
        <h1 className="text-xs">Welcome!</h1>
        <p className="text-xl font-semibold">Admin</p>
      </div>
      <div className="flex items-center space-x-5 right-20">
        <div className="hidden md:flex">
          <input
            type="text"
            placeholder="search"
            className="bg-indigo-100/30 px-4 py-2 rounded-lg focus:outline-0 focus:ring-2 focus:ring-indigo-600"
          />
        </div>
        <div className="flex items-center space-x-5">
          <button className="relative text-2xl text-gray-600">
            <GoBell size={32} />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex justify-center items-center bg-indigo-600 text-white font-semibold text-[10px] w-5 h-4 rounded-full border-white"></span>
          </button>
          <Link to="/" className="cursor-pointer">
            <img src={Image} alt="" className="w-8 h-8 rounded-full border-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
