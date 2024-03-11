import React from "react";
import { MdOutlineNewspaper, MdGroups, MdOutlineEvent } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import {
  BsFillChatSquareTextFill,
  BsFillQuestionSquareFill,
} from "react-icons/bs";
import { IoBookmarks, IoPeopleCircleOutline } from "react-icons/io5";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { Friends } from "../data/dummyData";
import Friend from "./Friend";

const Sidebar = () => {
  return (
    <div
      style={{ flex: 3, height: "calc(100vh - 50px)" }}
      className="custom-scrollbar overflow-y-auto sticky top-[50px]"
    >
      <div className=" p-[24px]">
        <ul className="SideBar p-0 m-0">
          <li>
            <MdOutlineNewspaper />
            <span>Feed</span>
          </li>
          <li>
            <FaVideo />
            <span>Videos</span>
          </li>
          <li>
            <MdGroups />
            <span>Groups</span>
          </li>
          <li>
            <BsFillChatSquareTextFill />
            <span>Chats</span>
          </li>
          <li>
            <IoBookmarks />
            <span>BookMarks</span>
          </li>
          <li>
            <IoPeopleCircleOutline />
            <span>Jobs</span>
          </li>
          <li>
            <BsFillQuestionSquareFill />
            <span>Questions</span>
          </li>
          <li>
            <GiGiftOfKnowledge />
            <span>Courses</span>
          </li>
          <li>
            <MdOutlineEvent />
            <span>Events</span>
          </li>
        </ul>
        <div className="button">
          <button className="rounded-md bg-slate-200 w-[150px] p-[10px]">
            See more
          </button>
        </div>
        <hr className="mt-[20px]" />
        <div className="mt-[20px]">
          <ul className="SideBar ">
            {Friends.map(friend=>{
              return <Friend key={friend.id} friend={friend}/>
            })}
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
