import React from "react";

const Input = ({
  type = "text",
  isRequire = false,
  placeholder = "Type Something....",
}) => {
  return (
    <input
      className="bg-[transparent] border-lime-50 border p-2 text-light w-full rounded-md"
      type={type}
      required={isRequire}
      placeholder={placeholder}
    />
  );
};

export default Input;
