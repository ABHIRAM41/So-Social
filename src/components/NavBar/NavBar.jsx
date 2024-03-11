import React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import {
  IoSearch,
  IoPersonSharp,
  IoChatboxEllipses,
  IoNotifications,
} from "react-icons/io5";
import profilepic from "../../assets/profilepic.jpg";
const NavBar = () => {
  return (
    <div className="h-[50px] w-full bg-green-600 flex items-center sticky top-0">
      <div className="left" style={{ flex: 3 }}>
        <div className="logodiv cursor-pointer">
          <Link to="/">
            <Logo />
          </Link>
        </div>
      </div>
      <div className="center" style={{ flex: 5 }}>
        <div className="searchBar w-full h-[30px] bg-white rounded-xl flex items-center">
          <IoSearch className="text-lg ml-[10px]" />
          <input
            type="text"
            placeholder="hi how can i help you"
            className="search w-full focus:outline-none bg-none m-[10px]"
          />
        </div>
      </div>
      <div
        className="right flex items-center justify-around text-white"
        style={{ flex: 4 }}
      >
        <div className="tabLinks text-lg cursor-pointer flex  gap-[10px] ">
          <div className="tabLink1 font-bold">Home</div>
          <div className="tabLink2 font-bold">TimeLine</div>
        </div>
        <div className="tabIcons flex text-xl gap-[10px]">
          <div className="tabIcon1  cursor-pointer relative">
            <IoPersonSharp className="text-2xl" />
            <span className="w-[15px] h-[15px] bg-red-500 rounded-full absolute top-[-5px] right-[-5px] flex items-center justify-center text-sm">
              1
            </span>
          </div>
          <div className="tabIcon2 cursor-pointer relative">
            <IoChatboxEllipses className="text-2xl" />
            <span className="w-[15px] h-[15px] bg-red-500 rounded-full absolute top-[-5px] right-[-5px] flex items-center justify-center text-sm">
              2
            </span>
          </div>
          <div className="tabIcon3 cursor-pointer relative">
            <IoNotifications className="text-2xl" />
            <span className="w-[15px] h-[15px] bg-red-500 rounded-full absolute top-[-5px] right-[-5px] flex items-center justify-center text-sm">
              3
            </span>
          </div>
        </div>
        <div className="profilePicDiv flex items-center gap-3">
          <Link to="/profile">
            <img
              src={profilepic}
              className="w-[32px] h-[32px] object-cover rounded-full cursor-pointer"
            />
          </Link>
          <Link to="/login">Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
