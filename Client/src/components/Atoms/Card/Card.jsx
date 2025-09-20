import React from "react";

const Card = ({
  children,
  background,
  heightAndWidth,
  rounded = "rounded-2xl",
}) => {
  return (
    <div
      className={`h-auto ${rounded} ${heightAndWidth} shadow-2xl drop-shadow-[0_4px_10px_rgba(255,255,255,0.2)]`}
      style={{ background: background }}
    >
      {children}
    </div>
  );
};

export default Card;
