import Sidebar from "@/components/dashbaord/sidebar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="grid h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] overflow-hidden">
      <Sidebar />
      <div className="flex h-full flex-col overflow-auto">{children}</div>
    </main>
  );
};

export default DashboardLayout;
