import React from "react";
import {
  MdLabel,
  MdPermMedia,
  MdEmojiEmotions,
  MdLocationPin,
} from "react-icons/md";
import profilepic from "../../assets/profilepic.jpg";
const UploadPost = () => {
  return (
    <div className="w-full h-[170px] rounded-lg shadow-lg">
      <div className="wrapper p-[10px] ">
        <div className="top flex items-center">
          <img
            src={profilepic}
            alt="profilepic"
            className="w-[50ox] h-[50px] rounded-full mr-[10px] object-cover"
          />
          <input
            type="text"
            placeholder="What is on yout mind?"
            className="w-[80%] focus:outline-none"
          />
        </div>
        <hr className="m-[20px]" />
        <div className="bottom flex items-center justify-between">
          <div className="flex items-center ml-[20px]">
            <div className="flex items-center mr-[15px] cursor-pointer ">
              <MdPermMedia className="mr-[5px] text-orange-700" />
              <span>media</span>
            </div>
            <div className="flex items-center mr-[15px] cursor-pointer ">
              <MdLabel className="mr-[5px] text-blue-800" />
              <span>Tags</span>
            </div>
            <div className="flex items-center mr-[15px] cursor-pointer ">
              <MdEmojiEmotions className="mr-[5px] text-yellow-500" />
              <span>Emoji</span>
            </div>
            <div className="flex items-center mr-[15px] cursor-pointer ">
              <MdLocationPin className="mr-[5px] text-green-800" />
              <span>Location</span>
            </div>
          </div>
          <button className="bg-green-600 text-white p-[7px] rounded-lg font-bold">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPost;
