"use client";

import clsx from "clsx";

interface OptionItem {
  value: string;
  label: string;
}

interface FormSelectProps {
  label: string;
  required?: boolean;
  value: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  options: OptionItem[];   // ⭐ รับ array เข้าโดยตรง
  placeholder?: string;
}

export default function Select({
  label,
  required = false,
  value,
  onChange,
  className,
  error,
  options,
  placeholder = "เลือก",
}: FormSelectProps) {
  return (
    <div className="w-full">
      {/* Label */}
      <div className="text-left text-lg mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </div>

      {/* Select */}
      <select
        value={value}
        onChange={onChange}
        className={clsx(
          "p-4 rounded-xl w-full text-black  border h-[50px]",
          "transition-all duration-200",
          "focus:outline-none focus:ring-0 focus:border-gray-500",
          error ? "border-red-500 animate-shake" : "border-gray-500",
          className
        )}
      >
        {/* Placeholder */}
        <option value="" disabled>
          {placeholder}
        </option>

        {/* Render options */}
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Error message */}
      {error && <p className="text-red-500 text-sm mt-1 text-left">{error}</p>}
    </div>
  );
}
