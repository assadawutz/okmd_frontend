"use client";

import Image from "next/image";

const ACTIVITIES = [
  {
    id: 1,
    img: "/act1.png",
    tag: "Workshop",
    title: "ค่ายสร้างสรรค์ไอเดียเพื่อชุมชน",
    location: "TK Park Bangkok",
    dateLabel: "12 ต.ค. 2567",
  },
  {
    id: 2,
    img: "/act2.png",
    tag: "Experience",
    title: "Open House OKMD Library",
    location: "OKMD Space",
    dateLabel: "24 ต.ค. 2567",
  },
  {
    id: 3,
    img: "/act3.png",
    tag: "Learning Lab",
    title: "Design Sprint for Youth",
    location: "TK Park Yala",
    dateLabel: "30 ต.ค. 2567",
  },
  {
    id: 4,
    img: "/act4.png",
    tag: "Creative Talk",
    title: "พลิกมุมคิดธุรกิจท้องถิ่น",
    location: "Museum Siam",
    dateLabel: "3 พ.ย. 2567",
  },
  {
    id: 5,
    img: "/act5.png",
    tag: "เสวนา",
    title: "AI เพื่อการเรียนรู้",
    location: "OKMD Studio",
    dateLabel: "5 พ.ย. 2567",
  }
];

const CAL = {
  day: "MONDAY",
  month: "September",
  date: 20,
  week: ["S", "M", "T", "W", "T", "F", "S"],
  grid: [
    26, 27, 28, 29, 30, 31, 1,
    2, 3, 4, 5, 6, 7, 8,
    9, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29,
    30, 31, 1, 2, 3, 4, 5,
  ]
};

/* ฟังก์ชันแก้ dateTime ให้ถูกต้อง YYYY-MM-DD */
function formatDate(day: number) {
  const padded = String(day).padStart(2, "0");
  return `2024-09-${padded}`;
}

export default function ActivityBlock() {
  return (
    <section aria-label="Activity Block" className="w-full bg-[#F8FBFD] py-16 md:py-20">

      <div className="container text-center mx-auto px-4 lg:px-8 flex flex-col gap-10 md:gap-12">

        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4">
          <div>
            <p className="text-4xl  text-[#000000] font-semibold">Activity Calendar</p>
            <h2 className="text-sm mt-6 md:text-normal font-normal text-[#6ABBCE] leading-tight">
ทุกกิจกรรมคือแรงบันดาลใจ สู่ความคิดที่แตกต่าง            </h2>
           
          </div>
      
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:flex flex-col gap-10">

          {/* ---------------- ROW 1 ---------------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">

            {ACTIVITIES.slice(0, 3).map((item) => (
              <article
                key={item.id}
                aria-label={`Activity ${item.title}`}
                className="relative h-[235px] rounded-2xl overflow-hidden group cursor-pointer shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 364px) 100vw, 33vw"
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/55" />

                <div className="absolute top-3 right-3 flex flex-wrap gap-2">
                    <img src="/mu-3.png" alt="" className="inline-block w-[40px] h-[40px] " />
                </div>

                
              </article>
            ))}
          </div>

          {/* ---------------- ROW 2 ---------------- */}
          <div className="grid grid-cols-12 gap-6">

            {ACTIVITIES.slice(3, 5).map((item, idx) => (
              <article
                key={item.id}
                aria-label={item.title}
                className="relative  overflow-hidden group cursor-pointer  col-span-3 h-[312px]"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className={`${idx === 1 ? "object-contain bg-transparent" : "object-cover"} transition-all duration-500 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-transparent" />

                
              </article>
            ))}

            {/* CALENDAR */}
            <article
              aria-label="Activity Calendar"
              className="col-span-6 bg-[#26282B] rounded-2xl p-6 flex flex-row gap-6 sm:gap-8 min-h-[312px] shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
            >
              {/* LEFT */}
              <div className="flex flex-col items-center justify-start w-[120px] ml-1 gap-3 pt-1">
                <p className="text-xs text-[#6ABBCE] tracking-wide">{CAL.day}</p>

                <div className="flex flex-col leading-tight items-center">
                  <p className="text-gray-400 mt-4 leading-tight">{CAL.month}</p>
                                    <p className="text-8xl mt-4 font-bold text-white leading-none">{CAL.date}</p>

                </div>

                {/* <button
                  type="button"
                  className="mt-4 rounded-xl bg-white/10 text-white px-4 py-2 text-sm border border-white/20 hover:bg-white/20 transition"
                >
                  ดูปฏิทิน
                </button> */}
              </div>

              {/* RIGHT CALENDAR */}
              <div className="grid grid-cols-7 gap-[4px] sm:gap-[6px] text-center flex-1">

                {CAL.week.map((w, idx) => (
                  <span key={`w-${idx}`} className="text-gray-400 text-[13px] font-semibold py-1">
                    {w}
                  </span>
                ))}

                {CAL.grid.map((n, idx) => {
                  const active = n === CAL.date;
                  return (
                    <time
                      key={`d-${idx}`}
                      dateTime={formatDate(n)}
                      className={
                        active
                          ? "bg-okmd-cyan text-white font-semibold rounded-2xl py-[8px] flex items-center justify-center"
                          : "text-gray-300 rounded-2xl py-[8px] hover:bg-[#3A3D41] hover:text-white transition"
                      }
                    >
                      {n}
                    </time>
                  );
                })}
              </div>
            </article>

          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden flex flex-col gap-8">

          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
            {ACTIVITIES.map((item) => (
              <article
                key={item.id}
                aria-label={item.title}
                className="relative w-full h-[220px] flex-shrink-0 rounded-2xl overflow-hidden lg:shadow-[0_10px_26px_rgba(0,0,0,0.12)]"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="80vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/80" />

                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/85 text-[#0F172A] px-3 py-1 text-[11px] font-semibold">
                    {item.tag}
                  </span>
                  <span className="rounded-full bg-black/35 text-white px-3 py-1 text-[11px] border border-white/10">
                    {item.dateLabel}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 space-y-1 text-white drop-shadow">
                  <p className="text-[16px] font-semibold leading-tight line-clamp-2">{item.title}</p>
                  <p className="text-xs text-white/80">{item.location}</p>
                </div>
              </article>
            ))}
          </div>

          {/* MOBILE CALENDAR */}
          <article aria-label="Calendar mobile" className="bg-[#26282B] rounded-2xl p-5 flex flex-row gap-5 shadow-[0_14px_36px_rgba(0,0,0,0.2)]">

            <div className="flex flex-col items-start w-[70px]">
              <p className="text-xs text-[#6ABBCE]">{CAL.day}</p>
              <p className="text-3xl font-bold text-white mt-1 leading-none">{CAL.date}</p>
              <p className="text-gray-400">{CAL.month}</p>
            </div>

            <div className="grid grid-cols-7 gap-[3px] text-center flex-1 text-[9px]">

              {CAL.week.map((w, idx) => (
                <span key={`mw-${idx}`} className="text-gray-400 font-medium py-[2px]">
                  {w}
                </span>
              ))}

              {CAL.grid.map((n, idx) => (
                <time
                  key={`md-${idx}`}
                  dateTime={formatDate(n)}
                  className={
                    n === CAL.date
                      ? "bg-okmd-cyan text-white rounded-2xl py-[3px]"
                      : "text-gray-300 rounded-2xl py-[3px]"
                  }
                >
                  {n}
                </time>
              ))}
            </div>

          </article>

        </div>
      </div>
    </section>
  );
}
