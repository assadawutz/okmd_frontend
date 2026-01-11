/**
 * Standard Page Container Component
 * ตามข้อกำหนด: div min-h-screen bg-white text-[#333] 
 * พร้อม main mx-auto px-4 sm:px-6 lg:px-8 py-8
 */

import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: PageContainerProps) {
  return (
    <div className={`w-full bg-white text-[#333] ${className}`}>
      <main className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
