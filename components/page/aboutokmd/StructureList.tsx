"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const title = {
  name: "คณะกรรมการและผู้บริหาร",
};

// ⭐ ข้อมูลคณะกรรมการ
const membersBoard = [
  {
    name: "นายปรเมธี วิมลศิริ",
    position: "ประธานกรรมการ",
    img: "/b1.png",
  },
  {
    name: "นายประสพ เรียงเงิน",
    position: "ปลัดกระทรวงวัฒนธรรม กรรมการโดยตำแหน่ง",
    img: "/b1.png",
  },
  {
    name: "นายสุเทพ แก่งสันเทียะ",
    position: "ปลัดกระทรวงศึกษาธิการ กรรมการโดยตำแหน่ง",
    img: "/b1.png",
  },
];

const BoardPage = () => {
  const pathname = usePathname();

  const isBoard = pathname === "/about-okmd/board";
  const isExecutives = pathname === "/about-okmd/executives";

  return (
    <div className="container">
      <div>
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 text-gray-800  pb-2">
          {title.name}
        </h1>

        {/* Tabs */}
        <div className="flex gap-3 mb-10 pb-2">
          <Link href="/about-okmd/borad"
            className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer ${isBoard
                ? "text-gray-700 hover:bg-gray-100"
                : "bg-[#16A7CB] text-white"
              }`}>
            คณะกรรมการ
          </Link>

          <Link
            href="/about-okmd/executives"
            className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer ${isExecutives
                ? "bg-[#16A7CB] text-white"
                : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            ผู้บริหาร
          </Link>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-12">
          {membersBoard.map((m) => (
            <div key={m.name}>
              {/* Image Frame */}
              <div className="w-[210px] h-[200px]">
                <img src={m.img} alt={m.name} className="w-full h-full" />
              </div>

              {/* Name + Position */}
              <div className="mt-4 text-start">
                <h2 className="font-bold text-lg text-gray-800 leading-snug">
                  {m.name}
                </h2>
                <p className="text-sm text-[#16A7CB] mt-1 leading-snug">
                  {m.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardPage;
