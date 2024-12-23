"use client";

import { GoogleLogo } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const Login = ({
  callbackUrl = "http://localhost:3000/dashboard",
}: {
  callbackUrl: string;
}) => {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      {/* <LoginForm /> */}

      <Button
        onClick={() =>
          signIn("google", {
            callbackUrl: callbackUrl,
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
