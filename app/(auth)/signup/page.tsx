import { signIn } from "@/auth";
import Signup from "@/components/Signup";
import React from "react";

const SignupPage = () => {
  // inline function level (server components - action)
  const signupHandler = async () => {
    "use server";

    await signIn("github");
  };

  return (
    <form action={signupHandler}>
      <Signup />
    </form>
  );
};

export default SignupPage;
