import { Navbar } from "@/components/ui/navbar";
import { ReactNode } from "react";

const WithLayoutLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="px-20 py-5">{children}</main>
    </div>
  );
};

export default WithLayoutLayout;
