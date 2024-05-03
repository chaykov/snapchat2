import React from "react";
import LogoutButton from "./shared/LogoutButton";
import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Searchbar from "./Searchbar";
import Friends from "./Friends";

const LeftSidebar = async () => {
  const authUser = await auth();
  return (
    <div className="w-[50%] m-2 md:w-[25%] border-2 border-gray-300 rounded-lg">
      <div className="flex p-4 items-center justify-between border-b border-gray-300 pb-3">
        <div className="flex items-center gap-2 ">
          {authUser && (
            <>
              <Avatar>
                <AvatarImage
                  src={authUser.user?.image!}
                  alt="@avatar-profile"
                />
              </Avatar>
              <h1 className="font-medium">{authUser.user?.name}</h1>
            </>
          )}
        </div>
        <div>
          <LogoutButton />
        </div>
      </div>
      <div className="p-2">
        <Searchbar />
        <Friends />
      </div>
    </div>
  );
};

export default LeftSidebar;
