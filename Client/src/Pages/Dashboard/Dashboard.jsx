import NavBar from "@/components/Molecules/NavBar/NavBar";
import { useTheme } from "@/styles/theme";
import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = ({ navLinks }) => {
  const colors = useTheme();
  return (
    <main
      style={{ background: colors.background, color: colors.text }}
      className={`h-[100vh] w-full`}
    >
      <div className="flex w-full h-full gap-2">
        <div className="w-28">
          <NavBar navLinks={navLinks} colors={colors} />
        </div>

        <div className="overflow-y-auto w-[80%] m-3">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
