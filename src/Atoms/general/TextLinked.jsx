import React from "react";

const TextLinked = ({ child = "TextLinked" }) => {
  return (
    <span className="ms-auto cursor-pointer hover:text-primary">{child}</span>
  );
};

export default TextLinked;
