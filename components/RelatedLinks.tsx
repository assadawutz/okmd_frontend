const relatedLinks = [
  {
    category: "แหล่งความรู้",
    items: [
      {
        label: "TK Park",
        description: "พื้นที่สร้างสรรค์และคลังความรู้สำหรับทุกวัย",
        href: "https://www.tkpark.or.th/",
      },
      {
        label: "Thailand Knowledge Portal",
        description: "บทเรียนและสื่อเรียนรู้ออนไลน์จาก OKMD",
        href: "https://www.okmd.or.th/knowledge-portal",
      },
    ],
  },
  {
    category: "โครงการเด่น",
    items: [
      {
        label: "Civic Education",
        description: "เสริมสร้างพลเมืองตื่นรู้ สังคมประชาธิปไตยยั่งยืน",
        href: "https://www.okmd.or.th/civic",
      },
      {
        label: "Makerspace",
        description: "ทดลอง สร้างสรรค์ และต่อยอดไอเดียให้เป็นจริง",
        href: "https://www.okmd.or.th/makerspace",
      },
    ],
  },
  {
    category: "บริการออนไลน์",
    items: [
      {
        label: "OKMD E-Library",
        description: "อ่านหนังสือและสื่อดิจิทัลกว่า 10,000 รายการ",
        href: "https://www.okmd.or.th/elibrary",
      },
      {
        label: "Learning Calendar",
        description: "ปฏิทินกิจกรรมเสริมทักษะและการเรียนรู้",
        href: "https://www.okmd.or.th/calendar",
      },
    ],
  },
];

export default function RelatedLinks() {
  return (
    <section className="bg-gradient-to-b from-sky-50 via-white to-white py-12" aria-labelledby="related-links-title">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            เครือข่ายพันธมิตร
          </p>
          <h2 id="related-links-title" className="text-2xl font-bold text-slate-900 sm:text-3xl">
            แนะนำแหล่งเรียนรู้และบริการที่เกี่ยวข้อง
          </h2>
          <p className="text-sm text-slate-600 sm:text-base">
            สำรวจเครือข่ายความร่วมมือที่ช่วยต่อยอดการเรียนรู้ให้กับประชาชนและชุมชนทุกพื้นที่
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {relatedLinks.map((group) => (
            <div
              key={group.category}
              className="flex h-full flex-col gap-4 rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-base font-semibold text-sky-900">{group.category}</h3>
              <ul className="space-y-4 text-sm text-slate-600">
                {group.items.map((item) => (
                  <li key={item.label} className="space-y-1">
                    <a
                      href={item.href}
                      className="group inline-flex flex-col gap-1 rounded-lg px-1 py-1 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="text-base font-semibold text-slate-900 group-hover:text-sky-700">
                        {item.label}
                      </span>
                      <span className="text-sm text-slate-500">{item.description}</span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-sky-600 group-hover:text-sky-700">
                        เปิดลิงก์ภายนอก →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
