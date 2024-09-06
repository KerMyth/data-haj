import React from "react";
import Symbols from "../assets/symbols.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center px-[7px] py-4 md:px-[20px] lg:px-[65px] shadow-md">
      <div className="flex items-center">
        <div className="cursor-pointer">
          <img src={Symbols} alt="" className="w-[28px] md:w-[40px]" />
        </div>
        <h1 className="text-2xl pt-[2px] md:pt-0 lg:pt-0 font-semibold md:text-3xl lg:text-4xl px-1">
          Haji
        </h1>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[170px] md:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={30} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none "
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="">
        <button className="bg-black h-[30px] text-white flex items-center p-4 rounded-full">
          <IoPersonOutline className="mr-[10px]" />
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
