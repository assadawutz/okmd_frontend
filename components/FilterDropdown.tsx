"use client";

import React from "react";

interface FilterDropdownProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export default function FilterDropdown({
  label,
  value,
  options,
  onChange,
}: FilterDropdownProps) {
  const labelId = `filter-${label.replace(/\s+/g, '-').toLowerCase()}`;
  
  return (
    <div className="flex flex-col gap-1.5">
      <label 
        id={labelId}
        className="text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <select
        aria-labelledby={labelId}
        className="
          w-full border border-gray-300 rounded-lg px-4 py-3 
          bg-white shadow-sm text-gray-800
          cursor-pointer
          transition-all duration-200
          hover:border-gray-400
          focus:outline-none focus:ring-2 focus:ring-[#74CEE2]/50 focus:border-[#74CEE2]
        "
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
