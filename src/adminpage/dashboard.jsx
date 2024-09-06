import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <div className="w-full ml-16 md:ml-56">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
