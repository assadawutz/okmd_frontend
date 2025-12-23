"use client";

import React from "react";
import clsx from "clsx";

interface FormInputProps {
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;

  /** 🆕 icon */
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export default function Input({
  label,
  required = false,
  type = "text",
  placeholder = "",
  value,
  onChange,
  error,
  className = "",
  icon,
  iconPosition = "left",
}: FormInputProps) {
  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <div className="text-left text-lg mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </div>
      )}

      {/* Input Wrapper */}
      <div className="relative w-78">
        {/* Icon */}
        {icon && (
          <div
            className={clsx(
              "absolute top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none",
              iconPosition === "left" ? "left-4" : "right-4"
            )}
          >
            {icon}
          </div>
        )}

        {/* Input */}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={clsx(
            "p-4 rounded-lg w-full text-black placeholder-[#666971] border h-[50px]",
            "transition-all duration-200",
            "focus:outline-none focus-visible:outline-none focus:ring-0 focus:border-gray-500",
            error ? "border-red-500 animate-shake" : "border-gray-500",

            // เว้นที่ให้ icon
            icon && iconPosition === "left" && "pl-12",
            icon && iconPosition === "right" && "pr-12",

            className
          )}
        />
      </div>

      {/* Error */}
      {error && (
        <p className="text-red-500 text-sm mt-1 text-left">{error}</p>
      )}
    </div>
  );
}
