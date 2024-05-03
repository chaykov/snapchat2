"use server";

import { signOut } from "@/auth";
import { redirect } from "next/navigation";

// model level server actions
export const logoutHandler = async () => {
  try {
    await signOut();
  } catch (error) {
    console.log(error);
    throw error;
  }

  redirect("/login");
};
