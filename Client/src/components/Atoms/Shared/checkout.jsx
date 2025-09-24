import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/styles/theme"; // 👈 import your theme hook

const FormFooter = ({
  checkboxName = "remember",
  checkboxLabel = "Remember me",
  defaultChecked = false,
  linkTo = "/",
  linkText = "Forgot password?",
}) => {
  const theme = useTheme("dashboard"); // 👈 get colors from theme

  return (
    <div
      className="flex items-center justify-between mb-4"
      style={{ color: theme.text }}
    >
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          name={checkboxName}
          className="w-4 h-4 rounded border focus:ring-2 focus:ring-offset-0"
          defaultChecked={defaultChecked}
          style={{
            borderColor: theme.greyText,
            accentColor: theme.primary, // checkbox tick color
          }}
        />
        <span>{checkboxLabel}</span>
      </label>

      <Link
        to={linkTo}
        className="text-sm hover:underline"
        style={{ color: theme.primary }}
      >
        {linkText}
      </Link>
    </div>
  );
};

export default FormFooter;
