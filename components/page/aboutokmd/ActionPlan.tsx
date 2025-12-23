import React from 'react'
import Link from 'next/link';
const title = {
  name: "รายงานนแผนการดำเนินงาน"
}
const data = [
  {
    id: 1,
    title: "รายงานผลการบริหารความเสี่ยงการทุจริต ประจำปีงบประมาณ พ.ศ. 2568",
    size: "125 KB",
    href: "",
  },
  {
    id: 2,
    title: "นโยบายและแนวทางปฏิบัติธรรมาภิบาลข้อมูล   ",
    size: "888 KB",
    href: "",
  },
  {
    id: 3,
    title: "นโยบายคุ้มครองข้อมูลส่วนบุคคล",
    size: "534 KB",
    href: "",
  },
  {
    id: 4,
    title: "นโยบายคุ้มครองข้อมูลส่วนบุคคล",
    size: "534 KB",
    href: "",
  },
  {
    id: 5,
    title: "นโยบายคุ้มครองข้อมูลส่วนบุคคล",
    size: "534 KB",
    href: "",
  },
  {
    id: 6,
    title: "นโยบายคุ้มครองข้อมูลส่วนบุคคล",
    size: "534 KB",
    href: "",
  },
];
export default function ActionPlan() {
  return (
    <div className='w-full font-sm text-[#40444D] container'>
      <h1 className='text-3xl font-bold mb-10'>{title.name}</h1>
      <div className='w-full rounded-lg overflow-hidden'>
        <div className='bg-[#6BCFE3] text-white py-4 px-6 text-lg'>
          {title.name}
        </div>
        <div className='flex flex-col'>
          {data.map((data, idx) => (
            <Link
              key={data.id}
              href={data.href}
              className={`block py-6 px-6 border-b border-gray-100 last:border-0 hover:opacity-80 transition-opacity
            ${idx % 2 !== 0 ? 'bg-[#F2FBFC]' : 'bg-white'}
            `}
            >
              <span className='text-sm'>
                {data.title}
                <p className='text-[#16A7CB]'>
                  (ดาวน์โหลด pdf ขนาด {data.size})
                </p>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
