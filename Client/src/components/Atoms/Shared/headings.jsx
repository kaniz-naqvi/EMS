import React from "react";

const H1 = ({ children, className = "", ...props }) => (
  <h1 className={`text-4xl font-bold mb-6 ${className}`} {...props}>
    {children}
  </h1>
);

const H2 = ({ children, className = "", ...props }) => (
  <h2 className={`text-3xl font-bold mb-5 ${className}`} {...props}>
    {children}
  </h2>
);

const H3 = ({ children, className = "", ...props }) => (
  <h3 className={`text-2xl font-semibold mb-4 ${className}`} {...props}>
    {children}
  </h3>
);

const H4 = ({ children, className = "", ...props }) => (
  <h4 className={`text-xl font-semibold mb-3 ${className}`} {...props}>
    {children}
  </h4>
);

export { H1, H2, H3, H4 };
