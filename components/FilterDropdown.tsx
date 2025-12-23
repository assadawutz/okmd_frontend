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
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm text-gray-600">{label}</span>
      <select
        className="border border-gray-300 rounded-lg px-4 py-3 bg-white shadow-sm"
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
