import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="w-screen h-screen bg-green-100 flex items-center justify-center">
      <div className="w-[70%] h-[70%] flex">
        <div className="flex flex-col justify-center" style={{ flex: 1 }}>
          <h1 className="font-extrabold text-3xl text-green-600">
            So Social
          </h1>
          <span className="text-lg font-semibold">Connect with friends</span>
        </div>
        <div className="flex flex-col justify-center" style={{ flex: 1 }}>
          <div className="bg-white h-[400px] p-[20px] rounded-md flex flex-col justify-between shadow-lg">
            <input
              type="name"
              placeholder="username"
              className="h-[50px] rounded-md border border-gray-200 text-lg p-[20px] focus:outline-none"
            />
            <input
              type="email"
              placeholder="email"
              className="h-[50px] rounded-md border border-gray-200 text-lg p-[20px] focus:outline-none"
            />
            <input
              type="password"
              placeholder="pasword"
              className="h-[50px] rounded-md border border-gray-200 text-lg p-[20px] focus:outline-none"
            />
            <input
              type="password"
              placeholder="comfirm password"
              className="h-[50px] rounded-md border border-gray-200 text-lg p-[20px] focus:outline-none"
            />
            <Link
              to="/"
              className="h-[50px] rounded-lg bg-green-600 hover:bg-green-700 transition flex items-center justify-center text-white text-lg font-bold"
            >
              Sign Up
            </Link>
            <Link
              to={"/login"}
              className="h-[50px] w-1/2 rounded-lg bg-blue-600 hover:bg-blue-700 transition flex items-center justify-center text-white text-lg font-bold self-center"
            >
              Login Into Your Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
