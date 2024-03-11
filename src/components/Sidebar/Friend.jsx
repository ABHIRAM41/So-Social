import React from 'react'

const Friend = ({friend}) => {
  return (
    <li>
      <img
        src={friend.profilePicture}
        alt=""
        className="w-[32px] h-[32px] rounded-full object-cover"
      />
      <span>{friend.username}</span>
    </li>
  );
}

export default Friend