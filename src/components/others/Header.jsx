import React from "react";

export const Header = () => {
  return (
    <div className="flex items-end bg-[#1c1c1c] justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">Mehak 👋</span>
      </h1>
      <button className="bg-red-600 px-3 text-lg font-medium py-2 rounded-sm">
        Log out
      </button>
    </div>
  );
};
