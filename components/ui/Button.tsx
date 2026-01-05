import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  className = "",
  disabled,
  ...props
}) => {

  const baseStyles =
    "w-fit rounded-lg font-bold transition duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#74CEE2]";

  const variantStyles = {
    primary: "bg-[#5292A0] text-white hover:bg-[#52b1c0]",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-[#63c6d6] text-[#63c6d6] hover:bg-[#63c6d6] hover:text-white",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const sizeStyles = {
    sm: "py-2 px-6 text-sm min-w-[120px]",
    md: "py-3 px-8 text-base min-w-[150px]",
    lg: "py-4 px-10 text-lg min-w-[180px]",
  };


  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      )}

      {children}
    </button>
  );
};

export default Button;
