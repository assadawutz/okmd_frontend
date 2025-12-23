"use client";
import React from "react"; // ลบ { useState } ออก

const title ={
    name:"รายงานประจำปี",
}

// เหลือเฉพาะข้อมูลคณะกรรมการ 3 ท่านแรก
const members = [
  {
    name: "รายงานประจำปี 2567",
    size: "365 KB",
    img: "/T1.png",
  },
  {
    name: "รายงานประจำปี 2565",
    size: "1 MB",
    img: "/T1.png",
  },
  {
    name: "รายงานประจำปี 2564",
    size: "958 kB",
    img: "/T1.png",
  },
];

const Structure = () => {
    // ลบการประกาศ State ออก เนื่องจากไม่จำเป็นต้องสลับ Tab แล้ว

  return (
    <div className=" container">
      <div className="">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">
          {title.name}
        </h1>

        {/* Members Grid - แสดงสมาชิกคณะกรรมการทั้งหมด */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-12">
          {members.map((m) => (
            <div key={m.name}>
              {/* Image Frame */}
              <div className="w-[228px] h-[228px]">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-[176px] h-[234px]"
                />
              </div>

              {/* Name + Position */}
              <div className="mt-4 text-start">
                <h2 className="font-bold text-lg text-gray-800 leading-snug">
                  {m.name}
                </h2>
                <a href="" className="text-[1px] text-[#16A7CB] mt-1 leading-snug">
                  (ดาวน์โหลดเอกสาร pdf ขนาด {m.size})
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Structure;