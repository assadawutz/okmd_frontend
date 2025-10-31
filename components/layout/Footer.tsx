import Link from "next/link";

const footerLinks = [
  {
    title: "ข้อมูลหน่วยงาน",
    links: [
      { label: "เกี่ยวกับ OKMD", href: "#about" },
      { label: "รายงานประจำปี", href: "#reports" },
      { label: "นโยบายคุ้มครองข้อมูลส่วนบุคคล", href: "#privacy" },
    ],
  },
  {
    title: "บริการ",
    links: [
      { label: "คลังความรู้", href: "#services" },
      { label: "สมัครร่วมโครงการ", href: "#join" },
      { label: "ติดต่อเรา", href: "#contact" },
    ],
  },
  {
    title: "ติดตามเรา",
    links: [
      { label: "Facebook", href: "https://www.facebook.com/okmd" },
      { label: "YouTube", href: "https://www.youtube.com/@okmd" },
      { label: "Line", href: "https://line.me" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-white text-slate-800" id="contact">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-md space-y-6">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-400 text-lg font-black text-sky-900">
              OK
            </span>
            <div>
              <p className="text-base font-semibold text-sky-900">
                สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน)
              </p>
              <p className="text-sm text-slate-600">
                Office of Knowledge Management and Development
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-slate-600">
            เราสนับสนุนการเรียนรู้ตลอดชีวิต สร้างแรงบันดาลใจในการพัฒนาความรู้ และผลักดันโอกาสให้ทุกคนเข้าถึง
            แหล่งความรู้คุณภาพอย่างทั่วถึงและเท่าเทียม
          </p>
          <div className="space-y-1 text-sm text-slate-600">
            <p className="font-semibold text-sky-900">อาคาร OKMD</p>
            <p>เลขที่ 119/4 อาคารราชพฤกษ์ ชั้น 15-16 ถนนราชพฤกษ์</p>
            <p>แขวงบางอ้อ เขตบางพลัด กรุงเทพมหานคร 10700</p>
            <p>โทรศัพท์ 0 2105 4000 | อีเมล contact@okmd.or.th</p>
          </div>
        </div>

        <div className="grid flex-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-900">
                {group.title}
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                {group.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="transition hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-sky-100 bg-sky-900 px-4 py-4">
        <p className="mx-auto max-w-6xl text-center text-xs font-medium uppercase tracking-wider text-white">
          © {new Date().getFullYear()} OKMD. สงวนลิขสิทธิ์.
        </p>
      </div>
    </footer>
  );
}
