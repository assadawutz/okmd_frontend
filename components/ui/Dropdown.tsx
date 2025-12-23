"use client";

import React from "react";
import clsx from "clsx";

interface Option {
  label: string;
  value: string | number;
}

interface DropdownProps {
  label?: React.ReactNode; 
  
  required?: boolean;
  value: string | number;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  error?: string;
  className?: string;
}

const Dropdown = ({
  label,
  required = false,
  value,
  onChange,
  options,
  placeholder,
  error,
  className = "",
}: DropdownProps) => {
  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <div className="text-left text-lg mb-1">
          {label}
        </div>
      )}

      {/* Select */}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={clsx(
          "w-full h-[50px]", // ผมแก้ w-78 เป็น w-full ให้ด้วยครับ เพื่อให้ยืดเต็ม Grid
          "px-4",
          "leading-[1.7]",
          "text-[16px]",
          "rounded-lg border",
          "focus:outline-none focus:ring-0",
          error ? "border-red-500" : "border-gray-500",
          className
        )}
      >
        {/* Placeholder */}
        <option value="" disabled>
          {placeholder}
        </option>

        {/* Options */}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Error */}
      {error && (
        <p className="text-red-500 text-sm mt-1 text-left">{error}</p>
      )}
    </div>
  );
};

export default Dropdown;