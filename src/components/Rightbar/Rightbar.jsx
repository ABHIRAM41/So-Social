import React from "react";
import gift from "../../assets/gift.png";
import adv from "../../assets/Adv.avif";
import profilepic from "../../assets/profilepic.jpg";
import Online from "./Online";
import { Users, Friends } from "../data/dummyData";
const Rightbar = ({ profile }) => {
  const RightBarHome = () => {
    return (
      <>
        <div className="flex items-center">
          <img src={gift} alt="" className="w-[45px] h-[45px]" />
          <span className="font-semibold text-md">
            {" "}
            <b>henry crentsil</b> and <b>3 others</b> have a birthday today
          </span>
        </div>
        <img
          src={adv}
          alt="advert image"
          className="w-full rounded-lg my-[30px]"
        />
        <h1 className="font-bold text-lg mb-[20px]">Online</h1>
        <ul className="m-0 p-0">
          {Users.map((user) => {
            return <Online key={user.id} user={user} />;
          })}
        </ul>
      </>
    );
  };
  const RightBarProfile = () => {
    return (
      <>
        <h1 className="font-bold text-xl mb-[10px]">User Information</h1>
        <div className="mb-[30px]">
          <div className="mb-[10px]">
            <span className="font-semibold mr-[15px] text-slate-500">
              City:
            </span>
            <span>Hyderabad</span>
          </div>
          <div className="mb-[10px]">
            <span className="font-semibold mr-[15px] text-slate-500">
              Relationship:
            </span>
            <span>Single</span>
          </div>
          <div className="mb-[30px]">
            <span className="font-semibold mr-[15px] text-slate-500">
              Student:
            </span>
            <span>Yes</span>
          </div>
          <h1 className="font-bold text-xl mb-[20px]">Friends</h1>
          <div className="grid grid-cols-3 gap-4">
            {Friends.map((f) => (
              <div
                id="f.id"
                className="flex flex-col justify-center items-center"
              >
                <img
                  src={f.profilePicture}
                  alt=""
                  className="w-[100px] h-[100px] object-cover rounded-md"
                />
                <span>{f.username}</span>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };
  return (
    <div style={{ flex: 3.75, zIndex: "-1" }}>
      <div className="pt-[20px] px-[10px]">
        {profile ? <RightBarProfile /> : <RightBarHome />}
      </div>
    </div>
  );
};

export default Rightbar;
