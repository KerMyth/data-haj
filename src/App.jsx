import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import { Routes, Route } from "react-router-dom";
import Login from "./adminpage/login";
import Register from "./adminpage/register";
import Dashboard from "./adminpage/dashboard";
import About from "./adminpage/dashboard/about";
import Home from "./adminpage/dashboard/home";
// import axios from "axios";

// axios.defaults.baseURL = "http://localhost:8000/";
// axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Hero />
              <Card />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="/dashboard/home" element={<Home />} />
          <Route path="/dashboard/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
