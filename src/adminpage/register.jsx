import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    // nama: "huan",
    // username: "Jsiv",
    // password: "PcTw2",
    nama: "",
    email: "",
    password: "",
  });

  const registerUser = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-black items-center bg-red-400 h-[100vh] flex justify-center bg-cover">
      <div>
        <h1>Login</h1>
        <div className="">
          <form onSubmit={registerUser}>
            <div className="grid">
              <label>Nama</label>
              <input
                type="text"
                placeholder="Masukan Nama"
                value={data.nama}
                onChange={(e) => setData({ ...data, nama: e.target.value })}
              />
            </div>
            <div className="grid">
              <label>Email</label>
              <input
                type="email"
                placeholder="Masukan Email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              <div className="grid">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Masukan Password"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Register;
