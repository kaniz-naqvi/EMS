// src/components/atoms/shared/Textarea.jsx
import React from "react";

const Textarea = ({
  label,
  value,
  onChange,
  placeholder,
  bgColor = "white",
  textColor = "black",
  borderColor = "gray",
  required = false,
  ...props
}) => {
  return (
    <div className="w-full flex flex-col space-y-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-2 rounded-md outline-none border`}
        style={{
          backgroundColor: bgColor,
          color: textColor,
          borderColor: borderColor,
        }}
        rows={4}
      />
    </div>
  );
};

export default Textarea;
