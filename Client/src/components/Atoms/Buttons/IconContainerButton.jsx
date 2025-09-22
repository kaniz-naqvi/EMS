import React from "react";

const IconContainerButton = ({
  onClick,
  IconComponent,
  primaryColor,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-full hover:bg-opacity-20 transition ${className}`}
      style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
    >
      {IconComponent && <IconComponent size={16} color={primaryColor} />}
    </button>
  );
};

export default IconContainerButton;
