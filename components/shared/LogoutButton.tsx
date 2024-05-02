import { auth, signOut } from "@/auth";
import React from "react";
import { Button } from "../ui/button";
import { IoMdLogOut } from "react-icons/io";
import { redirect } from "next/navigation";

const LogoutButton = async () => {
  // const authUser = await auth();

  const logoutHandler = async () => {
    "use server";
    try {
      await signOut();
    } catch (error) {
      console.log(error);
      throw error;
    }

    redirect("/login");
  };

  return (
    <form action={logoutHandler}>
      <Button size="icon" className="rounded-full">
        <IoMdLogOut size="18px" />
      </Button>
    </form>
  );
};

export default LogoutButton;
