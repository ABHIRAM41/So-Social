import React from "react";
import NavBar from "../components/NavBar/NavBar";
import NewsFeed from "../components/Newsfeed/NewsFeed";
import Rightbar from "../components/Rightbar/Rightbar";
import Sidebar from "../components/Sidebar/Sidebar";
import profilepic from "../assets/profilepic.jpg";
import postImage1 from "../assets/post/postImage1.jpg";

const Profile = () => {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <Sidebar />
        <div style={{ flex: 9, zIndex: -1 }}>
          <div>
            <div className="h-[350px] relative">
              <img
                src={postImage1}
                alt=""
                className="w-full h-[250px] object-cover"
              />
              <img
                src={profilepic}
                alt=""
                className=" w-[150px] h-[150px] rounded-full object-cover absolute left-0 right-0 m-auto top-[150px] border-[3px] border-white"
              />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-2xl "></h1>
              <span>i'm new here</span>
            </div>
          </div>
          <div className="flex mt-[30px] gap-3">
            <NewsFeed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
