"use client";

import React from "react";
import clsx from "clsx";

interface InputDateProps {
  label?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
}

export default function InputDate({
  label,
  value,
  onChange,
  error,
  className = ""
}: InputDateProps) {
  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <div className="text-left text-lg mb-1">
          {label} 
        </div>
      )}

      {/* Input Wrapper */}
      <div className="relative">

        {/* Date Input */}
        <input
          type="date"
          value={value}
          onChange={onChange}
          className={clsx(
            "w-full h-[50px]",
            "px-4 text-[16px] leading-[1.7]",
            "rounded-lg border text-black bg-white cursor-pointer",
            "transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-[#74CEE2]/50 focus:border-[#74CEE2]",

            error ? "border-red-500 animate-shake" : "border-gray-500",

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
