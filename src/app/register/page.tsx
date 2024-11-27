import { routes } from "@/routes";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Link href={routes.LOGIN} className="underline">
        Register
      </Link>
    </div>
  );
};

export default page;
