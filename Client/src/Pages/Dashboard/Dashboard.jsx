import NavBar from "@/components/Molecules/NavBar/NavBar";
import { useTheme } from "@/styles/theme";
import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = ({ navLinks }) => {
  const colors = useTheme();

  return (
    <main
      style={{ background: colors.background, color: colors.text }}
      className="min-h-screen w-full"
    >
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex fixed h-full w-28">
        <NavBar navLinks={navLinks} colors={colors} variant="sidebar" />
      </div>

      {/* Mobile Bottom Bar */}
      <div className="lg:hidden">
        <NavBar navLinks={navLinks} colors={colors} variant="bottombar" />
      </div>

      {/* Main Content Area */}
      <div className="lg:ml-28 pb-16 lg:pb-0">
        <div className="lg:p-4 p-1">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
