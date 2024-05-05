import Link from "next/link";
import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";

const Friend = ({ user }: { user: any }) => {
  return (
    <Link
      href={"/chat/"}
      className="flex items-center justify-between border-b-2 border-[#E3E6E8] my-2 p-3"
    >
      <div className="flex gap-2">
        <Avatar>
          <AvatarImage
            src={user.participants[0].profilePhoto}
            alt={"profilephoto"}
          />
        </Avatar>
        <div>
          <h1 className="font-medium">{user.participants[0].fullname}</h1>
          <p className="text-xs font-bold text-gray-500 gap-1 flex">Sent</p>
        </div>
      </div>
    </Link>
  );
};

export default Friend;
