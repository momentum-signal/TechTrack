"use client";

import { GoogleLogo } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/routes";
import { signIn } from "next-auth/react";

const Login = ({
  callbackUrl = routes.APPLICATION,
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
