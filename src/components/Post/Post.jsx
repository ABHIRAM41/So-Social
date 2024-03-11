import React, { useState } from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import profilepic from "../../assets/profilepic.jpg";
import Likes from "../../assets/Likes.png"
import Like from "../../assets/Like.png";
import { Users } from "../data/dummyData";
const Post = ({post}) => {
  const [like ,setLike]=useState(post.like)
  const [isLiked,setIsLiked]=useState(false);
  return (
    <div className="w-full rounded-md shodow-lg my-[30px] ">
      <div className="p-[15px] ">
        <div className="flex items-center justify-between gap-[10px]">
          <div className="flex items-center ">
            <img
              src={
                Users.filter((user) => user.id === post?.userId)[0]
                  .profilePicture
              }
              alt="profilepic"
              className="w-[32px] h-[32px] rounded-full object-cover"
            />
            <span className="font-bold mx-[10px]">
              {Users.filter((user) => user.id === post?.userId)[0].username}
            </span>
            <span className="text-sm ">{post.date}</span>
          </div>
          <div>
            <MdOutlineMoreVert className="text-xl cursor-pointer " />
          </div>
        </div>
        <div className="my-[20px] ">
          <span>{post?.desc}</span>
          <img
            src={post?.photo}
            alt="pic"
            className="mt-[20px] w-full object-contain"
            style={{ maxHeight: "500px" }}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <img
              src={Like}
              alt=""
              className="w-[24px] h-[24px] cursor-pointer"
              onClick={() => {
                setLike(isLiked ? like - 1 : like + 1);
                setIsLiked(!isLiked);
              }}
            />
            <img
              src={Likes}
              alt=""
              className="w-[24px] h-[24px] cursor-pointer"
              onClick={() => {
                setLike(isLiked ? like - 1 : like + 1);
                setIsLiked(!isLiked);
              }}
            />
            <span>{like} likes</span>
          </div>
          <div className="cursor-pointer border-b-[1px] border-slate-300 text-sm">
            {post?.comment} comments
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
