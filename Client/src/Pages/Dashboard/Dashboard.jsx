import NavBar from "@/components/Molecules/NavBar/NavBar";
import { useTheme } from "@/styles/theme";
import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = ({ navLinks }) => {
  const colors = useTheme();
  return (
    <main
      style={{ background: colors.background, color: colors.text }}
      className={`min-h-screen w-full`}
    >
      <div className="flex w-full gap-2">
        <div className="w-28 flex-shrink-0 fixed h-full">
          <NavBar navLinks={navLinks} colors={colors} />
        </div>

        <div className="flex-grow ml-32 mt-3 mb-3">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
