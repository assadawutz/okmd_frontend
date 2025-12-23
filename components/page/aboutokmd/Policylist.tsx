import React from 'react';
import Link from 'next/link';
const title = {
  id_Ha: "นโยบายขององค์กรและนโยบายผู้บริหาร"
};
const policyDocuments = [
  {
    id: 1,
    title: "ประกาศเรื่องนโยบายบริหารทรัพยากรบุคคล ประจำปีงบประมาณ พ.ศ. 2566",
    size: "392 KB",
    href: ""
  },
  {
    id: 2,
    title: "ประกาศเรื่องนโยบายบริหารทรัพยากรบุคคล ประจำปีงบประมาณ พ.ศ. 2565",
    size: "378 KB",
    href: ""
  },
  {
    id: 3,
    title: "ประกาศเรื่องนโยบายบริหารทรัพยากรบุคคล ประจำปีงบประมาณ พ.ศ. 2564",
    size: "286 KB",
    href: ""
  },
  {
    id: 4,
    title: "ประกาศเรื่องนโยบายบริหารทรัพยากรบุคคล ประจำปีงบประมาณ พ.ศ. 2563",
    size: "328 KB",
    href: ""
  },
  {
    id: 5,
    title: "ประกาศสำนักงานบริหารและพัฒนาองค์ความรู้ เรื่อง เจตจำนงสุจริตในการบริหารงานของ สบร.",
    size: "745.23 KB",
    href: ""
  },
];

export default function Policylist() {
  return (
    <div className="w-full font-sm text-[#40444D] container">
      <h1 className="text-3xl font-bold mb-10">{title.id_Ha}</h1>

      <div className="w-full rounded-lg overflow-hidden">

        <div className="bg-[#6BCFE3] text-white py-4 px-6 text-lg">
          รายงานนโยบายขององค์กรและนโยบายผู้บริหาร
        </div>

        {/* รายการเอกสาร */}
        <div className="flex flex-col">
          {policyDocuments.map((data, index) => (
            <Link 
              key={data.id}
              href={data.href}
              className={`
                block py-6 px-6 border-b border-gray-100 last:border-0 hover:opacity-80 transition-opacity
                ${index % 2 !== 0 ? 'bg-[#F2FBFC]' : 'bg-white'} 
              `} 
            >
              <span className="text-sm">
                {data.title} 
                <p className="text-[#16A7CB] ml-1">
                  (ดาวน์โหลด pdf ขนาด {data.size})
                </p> 
              </span>
            </Link>
          ))} 
        </div>
 
      </div>
    </div>
  );
}