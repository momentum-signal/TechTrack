"use client";

import { GoogleLogo } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { getSession, signIn } from "next-auth/react";

const Login = () => {
  const session = getSession();
  console.log("Session: ", session);
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      {/* <LoginForm /> */}

      <Button
        onClick={() =>
          signIn("google", {
            callbackUrl: "http://localhost:3000/dashboard",
          })
        }
      >
        <GoogleLogo />
        Login with Google
      </Button>
    </div>
  );
};

export default Login;
