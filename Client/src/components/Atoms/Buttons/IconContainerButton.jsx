import React from "react";

const IconContainerButton = ({ onClick, IconComponent, background, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-full  bg-[#ECECEC] hover:bg-opacity-20 transition`}
      style={{ backgroundColor: background }}
    >
      {IconComponent && <IconComponent size={16} color={icon} />}
    </button>
  );
};

export default IconContainerButton;
