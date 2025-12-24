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

      <div className="container mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl text-[#1B1D20] font-semibold">
            Activity Calendar
          </h2>
          <p className="text-base md:text-lg mt-3 font-normal text-[#6ABBCE]">
            ทุกกิจกรรมคือแรงบันดาลใจ สู่ความคิดที่แตกต่าง
          </p>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:flex flex-col gap-6 lg:gap-8">

          {/* ---------------- ROW 1 ---------------- */}
          <div className="grid grid-cols-3 gap-6 lg:gap-8">

            {ACTIVITIES.slice(0, 3).map((item) => (
              <article
                key={item.id}
                aria-label={`Activity ${item.title}`}
                className="relative h-[220px] lg:h-[240px] rounded-2xl overflow-hidden group cursor-pointer shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] transition-shadow duration-300"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/60 group-hover:to-black/70 transition-all duration-300" />

                <div className="absolute top-3 right-3">
                  <img src="/mu-3.png" alt="" className="w-9 h-9 opacity-90" />
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 text-white z-10 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <span className="inline-block bg-[#74CEE2] text-xs font-bold px-2.5 py-1 rounded mb-2 text-[#1B1D20]">
                    {item.tag}
                  </span>
                  <h3 className="text-lg lg:text-xl font-bold leading-tight drop-shadow-md line-clamp-2">{item.title}</h3>
                  <p className="text-sm opacity-90 mt-1 drop-shadow-md">{item.location} • {item.dateLabel}</p>
                </div>
              </article>
            ))}
          </div>

          {/* ---------------- ROW 2 ---------------- */}
          <div className="grid grid-cols-12 gap-6 lg:gap-8">

            {ACTIVITIES.slice(3, 5).map((item, idx) => (
              <article
                key={item.id}
                aria-label={item.title}
                className="relative overflow-hidden group cursor-pointer col-span-3 h-[280px] lg:h-[300px] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] transition-shadow duration-300"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className={`${idx === 1 ? "object-contain bg-gray-50" : "object-cover"} transition-transform duration-500 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white z-10 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-base lg:text-lg font-bold leading-tight drop-shadow-md line-clamp-2">{item.title}</h3>
                  <p className="text-xs opacity-90 mt-1">{item.dateLabel}</p>
                </div>
              </article>
            ))}

            {/* CALENDAR */}
            <article
              aria-label="Activity Calendar"
              className="col-span-6 bg-[#26282B] rounded-2xl p-5 lg:p-6 flex flex-row gap-5 lg:gap-8 h-[280px] lg:h-[300px] shadow-[0_12px_32px_rgba(0,0,0,0.18)]"
            >
              {/* LEFT */}
              <div className="flex flex-col items-center justify-center w-[100px] lg:w-[120px]">
                <p className="text-xs text-[#6ABBCE] tracking-wide uppercase">{CAL.day}</p>
                <p className="text-gray-400 mt-2 text-sm">{CAL.month}</p>
                <p className="text-6xl lg:text-7xl font-bold text-white leading-none mt-1">{CAL.date}</p>
              </div>

              {/* RIGHT CALENDAR */}
              <div className="grid grid-cols-7 gap-1 text-center flex-1 content-center">

                {CAL.week.map((w, idx) => (
                  <span key={`w-${idx}`} className="text-gray-400 text-xs lg:text-sm font-semibold py-1">
                    {w}
                  </span>
                ))}

                {CAL.grid.map((n, idx) => {
                  const active = n === CAL.date;
                  return (
                    <time
                      key={`d-${idx}`}
                      dateTime={formatDate(n)}
                      className={`
                        text-sm lg:text-base py-1.5 lg:py-2 flex items-center justify-center rounded-lg cursor-pointer transition-all
                        ${active
                          ? "bg-okmd-cyan text-white font-semibold"
                          : "text-gray-300 hover:bg-[#3A3D41] hover:text-white"
                        }
                      `}
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
        <div className="md:hidden flex flex-col gap-6">

          <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
            {ACTIVITIES.map((item) => (
              <article
                key={item.id}
                aria-label={item.title}
                className="relative w-[80vw] max-w-[320px] h-[200px] flex-shrink-0 rounded-2xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="80vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/30 to-black/75" />

                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#74CEE2] text-[#1B1D20] px-2.5 py-1 text-xs font-bold">
                    {item.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 space-y-1 text-white drop-shadow">
                  <p className="text-base font-semibold leading-tight line-clamp-2">{item.title}</p>
                  <p className="text-xs text-white/80">{item.location} • {item.dateLabel}</p>
                </div>
              </article>
            ))}
          </div>

          {/* MOBILE CALENDAR */}
          <article aria-label="Calendar mobile" className="bg-[#26282B] rounded-2xl p-4 flex flex-row gap-4 shadow-[0_10px_28px_rgba(0,0,0,0.18)]">

            <div className="flex flex-col items-center justify-center w-[70px]">
              <p className="text-xs text-[#6ABBCE] uppercase">{CAL.day}</p>
              <p className="text-gray-400 text-xs mt-1">{CAL.month}</p>
              <p className="text-4xl font-bold text-white leading-none">{CAL.date}</p>
            </div>

            <div className="grid grid-cols-7 gap-0.5 text-center flex-1 text-[10px] content-center">

              {CAL.week.map((w, idx) => (
                <span key={`mw-${idx}`} className="text-gray-400 font-medium py-1">
                  {w}
                </span>
              ))}

              {CAL.grid.map((n, idx) => (
                <time
                  key={`md-${idx}`}
                  dateTime={formatDate(n)}
                  className={`
                    py-1 rounded-md
                    ${n === CAL.date
                      ? "bg-okmd-cyan text-white font-semibold"
                      : "text-gray-300"
                    }
                  `}
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
