"use client";

import { GoogleLogo } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/routes";
import { signIn } from "next-auth/react";

const LoginPage = ({ callbackUrl }: { callbackUrl: string }) => {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <Button
        onClick={() =>
          signIn("google", {
            callbackUrl: callbackUrl || routes.APPLICATION,
          })
        }
      >
        <span>
          <GoogleLogo />
        </span>
        Login with Google
      </Button>
    </div>
  );
};

export default LoginPage;
