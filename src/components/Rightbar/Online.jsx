import React from 'react'

const Online = ({user}) => {
  return (
    <div>
      <li className="flex items-center mb-[10px] ">
        <div className="mr-[10px] relative">
          <img
            src={user.profilePicture}
            alt="profile picture"
            className="w-[40px] h-[40px] object-cover rounded-full"
          />
          <sapn className="w-[12px] h-[12px] bg-green-500 absolute rounded-full top-[-2px] right-0 border-[2px] border-white"></sapn>
        </div>
        <span className="font-bold">{user.username}</span>
      </li>
    </div>
  );
}

export default Online