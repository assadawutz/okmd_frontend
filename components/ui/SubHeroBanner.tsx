import React from "react";
import clsx from "clsx";

interface SubHeroBannerProps {
  image: string;
  gradient?: string;
  height?: string; // tailwind class เช่น "h-[418px]"
  children?: React.ReactNode;
  className?: string;
}

const SubHeroBanner: React.FC<SubHeroBannerProps> = ({
  image,
  gradient = "linear-gradient(to right, rgba(23,12,1,0.75), rgba(0,0,0,0.35), rgba(0,0,0,0))",
  height = "h-[418px]",
  children,
  className = "",
}) => {
  return (
    <div
      className={clsx(
        height,
        "bg-cover bg-bottom text-white flex items-center",
        className
      )}
      style={{
        backgroundImage: `${gradient}, url('${image}')`,
      }}
    >
      <div className="w-full">{children}</div>
    </div>
  );
};

export default SubHeroBanner;
