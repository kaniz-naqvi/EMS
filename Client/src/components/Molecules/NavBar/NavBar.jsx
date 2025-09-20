import Card from "@/components/Atoms/Card/Card";
import { useTheme } from "@/styles/theme";
import React from "react";
import "@/styles/nav.css";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = ({ navLinks }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const colors = useTheme();

  return (
    <nav className="max-w-28 h-full">
      <Card
        background={colors.background}
        heightAndWidth={"h-full w-full"}
        rounded="rounded-tr-2xl rounded-br-2xl"
      >
        <div className="flex justify-center gap-2 flex-col items-center py-4 w-full">
          {navLinks?.map((link) => {
            const isActive = location.pathname.includes(link.path);
            return (
              <div
                key={link.path}
                className={`nav-link py-4 ${isActive ? "bg-[#80808020]" : ""}`}
                onClick={() => navigate(link.path)}
              >
                <div>
                  {link.icon && (
                    <link.icon
                      size={isActive ? 36 : 28}
                      weight={isActive ? "fill" : "regular"}
                      color={isActive ? colors.secondary : colors.text}
                    />
                  )}
                </div>
                {!isActive && <p>{link.name}</p>}
              </div>
            );
          })}
        </div>
      </Card>
    </nav>
  );
};

export default NavBar;
