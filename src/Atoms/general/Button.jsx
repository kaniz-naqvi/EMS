import React from "react";

const Button = ({ type = "button", text = "Button" }) => {
  return (
    <button
      className="outline-none bg-primary hover:bg-active text-black font-semibold p-2 w-full rounded-md mt-4"
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
