import { auth, signOut } from "@/auth";
import React from "react";
import { Button } from "../ui/button";
import { IoMdLogOut } from "react-icons/io";
import { logoutHandler } from "@/lib/serveractions";

const LogoutButton = async () => {
  // const authUser = await auth();

  return (
    <form action={logoutHandler}>
      <Button size="icon" className="rounded-full">
        <IoMdLogOut size="18px" />
      </Button>
    </form>
  );
};

export default LogoutButton;
