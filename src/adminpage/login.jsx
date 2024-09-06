import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "admin@mail.com",
    password: "admin",
  });
  const loginUser = (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email === "admin@mail.com" && password === "admin") {
      navigate("/dashboard");
    } else if (email === "test@mail.com" && password === "test") {
      navigate("/dashboard");
    } else {
      alert("Username dan Password Salah");
    }
    // axios.get("/");
  };

  return (
    // <div className="bg-gray-100 flex items-center justify-center h-screen">
    //   <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
    //     <div className="absolute top-4 left-4">
    //       <Link to="/" className="text-blue-500 hover:underline text-sm">
    //         Kembali
    //       </Link>
    //     </div>
    //     <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
    //       Login
    //     </h2>
    //     <form onSubmit={loginUser}>
    //       <div className="mb-4">
    //         <label
    //           htmlFor="email"
    //           className="block text-gray-700 text-sm font-medium mb-2"
    //         >
    //           Email
    //         </label>
    //         <input
    //           type="email"
    //           id="email"
    //           name="email"
    //           placeholder="Masukan Email"
    //           value={data.email}
    //           onChange={(e) => setData({ ...data, email: e.target.value })}
    //           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    //           required
    //         />
    //       </div>
    //       <div className="mb-6">
    //         <label
    //           htmlFor="password"
    //           className="block text-gray-700 text-sm font-medium mb-2"
    //         >
    //           Password
    //         </label>
    //         <input
    //           type="password"
    //           id="password"
    //           name="password"
    //           placeholder="Masukan password"
    //           value={data.password}
    //           onChange={(e) => setData({ ...data, password: e.target.value })}
    //           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    //           required
    //         />
    //       </div>
    //       <button
    //         type="submit"
    //         className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    //       >
    //         Login
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm relative">
        {/* Back Link */}
        <div className="absolute top-2 left-3">
          <Link to="/" className="text-blue-500 hover:underline text-sm">
            Kembali
          </Link>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Login
        </h2>

        <form onSubmit={loginUser}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Masukan Email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Masukan password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link to="" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
