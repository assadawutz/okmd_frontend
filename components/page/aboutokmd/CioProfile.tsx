import React from 'react';

const data = [
  {
    title:"ผู้บริหารเทคโนโลยีสารสนเทศระดับสูงระดับกรม (DCIO)",
    name: "ดร.อภิชาติ ประเสริฐ",
    position: "รองผู้อำนวยการสำนักงานบริหารและพัฒนาองค์ความรู้",
    email: "apichart@okmd.or.th",
    imgSrc: "/A15.jpg",
  }
];

export default function CioProfile() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-10">{data[0].title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-12">

        {data.map((items, idx) => (
          <div key={idx}>

            <div>
              <img src={items.imgSrc} alt={items.name} className="w-full h-full object-cover" />
            </div>

              <div className="mt-4 text-start">
                <div>
                  <h2 className="font-bold text-lg text-gray-800 leading-snug">
                    {items.name}
                  </h2>
                </div>
                <div>
                  <p className="text-gray-400">{items.position}</p>
                </div>
                <div>
                  <p className="text-sm text-[#16A7CB] mt-1 leading-snug">
                    {items.email}
                  </p>
                </div>
              </div>
          </div>
        ))}

      </div>
    </div>
  );
}