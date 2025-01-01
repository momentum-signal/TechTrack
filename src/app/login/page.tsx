"use client";

import { GoogleLogo } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

type LoginPageProps = {
  callbackUrl: string;
};

const LoginPage = ({ callbackUrl }: LoginPageProps) => {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
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

export default LoginPage;
