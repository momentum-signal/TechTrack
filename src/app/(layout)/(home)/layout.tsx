import { ReactNode } from "react";

interface HomeLayoutProps {
  children: ReactNode;
  recentInternships: ReactNode;
}

const HomeLayout = ({ children, recentInternships }: HomeLayoutProps) => {
  return (
    <>
      {children}
      {recentInternships}
    </>
  );
};

export default HomeLayout;
