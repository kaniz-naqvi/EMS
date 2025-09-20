import React from "react";

/* Base button styles (shared across all) */
const baseClasses =
  "cursor-pointer px-4 py-2 m-2 rounded-lg font-semibold relative overflow-hidden transition-transform duration-300 will-change-transform hover:skew-x-[-5deg] hover:scale-105";

/* Traveling border effect */
const baseBefore =
  "before:content-[''] before:absolute before:inset-0 before:rounded-lg before:border-2 before:scale-x-0 before:origin-left before:transition-transform before:duration-400 before:pointer-events-none hover:before:scale-x-100";

export const PrimaryButton = ({ children }) => (
  <button className={`primary-button`}>{children}</button>
);

export const PrimaryOutlinedButton = ({ children }) => (
  <button
    className={`${baseClasses} ${baseBefore} bg-transparent text-primary border-2 border-primary before:border-primary`}
  >
    {children}
  </button>
);

export const SecondaryButton = ({ children }) => (
  <button className="secondary-button">{children}</button>
);

export const SecondaryOutlinedButton = ({ children }) => (
  <button
    className={`${baseClasses} ${baseBefore} bg-transparent text-secondary border-2 border-secondary before:border-secondary before:scale-y-0 before:origin-top hover:before:scale-y-100`}
  >
    {children}
  </button>
);
