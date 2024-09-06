import React, { useState } from "react";
import { LuBox, LuMessageSquare } from "react-icons/lu";
import { Link } from "react-router-dom";
import Logo from "../assets/symbols.svg";

const Sidebar = () => {
  const sidebarLinks = [
    { id: 1, path: "/dashboard/home", name: "Dashboard", icon: LuBox },
    {
      id: 2,
      path: "/dashboard/about",
      name: "About",
      icon: LuMessageSquare,
    },
  ];

  const [active, setActive] = useState(0);
  const clicked = (index) => {
    setActive(index);
  };
  return (
    <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white">
      <div className="mb-8"></div>
      <ul className="mt-6 space-y-6">
        {sidebarLinks.map((link, index) => (
          <li
            key={index}
            className={`font-semibold rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${
              active === index ? "bg-indigo-100 text-indigo-500" : ""
            }`}
          >
            <Link
              to={link.path}
              className="flex justify-center md:justify-start items-center md:space-x-5"
              onClick={() => clicked(index)}
            >
              <span>{link.icon()}</span>
              <span className="text-sm text-gray-500 hidden md:flex">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
