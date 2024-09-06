// src/components/Navbar.js

import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white flex items-center justify-between p-4 fixed top-0 left-64 w-full">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Add Data
      </button>
    </div>
  );
};

export default Navbar;
