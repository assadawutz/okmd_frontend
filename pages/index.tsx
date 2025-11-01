import Link from "next/link";

const heroHighlights = [
  { label: "จังหวัดทั่วประเทศ", value: "77" },
  { label: "พื้นที่ต้นแบบ", value: "120+" },
  { label: "ชั่วโมงเนื้อหา", value: "4,500" },
];

const missionItems = [
  {
    title: "จุดประกายการเรียนรู้",
    description:
      "ออกแบบกิจกรรมและพื้นที่สร้างสรรค์เพื่อให้คนทุกช่วงวัยเข้าถึงประสบการณ์การเรียนรู้ที่หลากหลาย",
  },
  {
    title: "เชื่อมโยงเครือข่าย",
    description:
      "ร่วมมือกับพันธมิตรทั้งภาครัฐ เอกชน และชุมชน เพื่อขยายผลโครงการด้านความรู้อย่างยั่งยืน",
  },
  {
    title: "พัฒนานวัตกรรม",
    description:
      "วิจัยและทดลองเครื่องมือการเรียนรู้ใหม่ๆ เพื่อเตรียมคนไทยให้พร้อมกับอนาคต",
  },
];

const serviceCards = [
  {
    title: "คลังความรู้ดิจิทัล",
    description: "สื่อมัลติมีเดีย บทเรียนออนไลน์ และฐานข้อมูลเปิดเพื่อการศึกษา",
    icon: "📚",
  },
  {
    title: "พื้นที่สร้างสรรค์",
    description: "TK Park, Makerspace, Learning Space สำหรับกิจกรรมและเวิร์กช็อป",
    icon: "🛠️",
  },
  {
    title: "โปรแกรมพัฒนาเยาวชน",
    description: "โครงการ Civic Education และหลักสูตรเสริมทักษะพลเมือง",
    icon: "🌱",
  },
  {
    title: "เครือข่ายชุมชน",
    description: "สนับสนุนแหล่งเรียนรู้ท้องถิ่นและต้นแบบเศรษฐกิจสร้างสรรค์",
    icon: "🤝",
  },
];

const newsItems = [
  {
    title: "OKMD Knowledge Festival 2025",
    description:
      "เทศกาลการเรียนรู้ระดับประเทศที่รวมคอนเทนต์ แรงบันดาลใจ และเทคโนโลยีการศึกษาไว้ในที่เดียว",
    date: "15 มี.ค. 2568",
  },
  {
    title: "เปิดตัวแพลตฟอร์ม OKMD Learning Portal โฉมใหม่",
    description:
      "ประสบการณ์การเรียนรู้แบบ Personalized พร้อมคอร์สและเส้นทางการเรียนรู้กว่า 500 รายการ",
    date: "28 ก.พ. 2568",
  },
  {
    title: "อบรมครูแกนนำพื้นที่ภาคเหนือ",
    description:
      "ยกระดับการสอนด้วยเครื่องมือการเรียนรู้เชิงประสบการณ์และกิจกรรมออกแบบคิดเชิงสร้างสรรค์",
    date: "12 ก.พ. 2568",
  },
];

const mediaGalleries = [
  {
    title: "Inspiration Talk",
    description: "บทสัมภาษณ์แรงบันดาลใจจากนักสร้างสรรค์ทั่วประเทศ",
  },
  {
    title: "Learning Playbook",
    description: "แนวทางจัดกิจกรรมการเรียนรู้ที่นำไปใช้ได้จริง",
  },
  {
    title: "OKMD Podcast",
    description: "เรียนรู้ผ่านเรื่องเล่า เข้าใจประเด็นใหม่ในเวลาไม่กี่นาที",
  },
];

export default function Home() {
  return (
    <div className="bg-slate-50" id="top">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-800 via-sky-700 to-sky-500 py-16 text-white">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_60%)] md:block" />
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
              Knowledge for Better Life
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              สร้างโอกาสการเรียนรู้ให้ทุกคน เข้าถึงง่าย ใช้ได้จริง
            </h1>
            <p className="max-w-xl text-base text-white/80 sm:text-lg">
              OKMD มุ่งพัฒนาระบบนิเวศการเรียนรู้ที่เปิดกว้าง สนับสนุนทั้งผู้เรียน ผู้สอน และชุมชนให้เติบโตอย่างเท่าเทียม
              พร้อมต่อยอดทักษะที่จำเป็นในโลกอนาคต
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-bold text-sky-900 shadow-lg transition hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                สำรวจบริการความรู้
              </Link>
              <Link
                href="#join"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                สมัครร่วมโครงการ
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 text-center text-sm font-medium backdrop-blur md:max-w-lg">
              {heroHighlights.map((item) => (
                <div key={item.label} className="space-y-1">
                  <p className="text-2xl font-bold text-white">{item.value}</p>
                  <p className="text-white/80">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex-1">
            <div className="relative mx-auto h-80 max-w-md overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/10 p-6 backdrop-blur-lg">
              <div className="absolute inset-0 bg-[conic-gradient(at_top,_rgba(255,255,255,0.18),_transparent_65%)]" aria-hidden />
              <div className="relative flex h-full flex-col justify-between gap-6">
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-wide text-amber-200">
                    Learning Journey
                  </p>
                  <h2 className="text-2xl font-bold leading-snug">
                    วางแผนการเรียนรู้ที่เหมาะกับคุณใน 5 ขั้นตอน
                  </h2>
                  <p className="text-sm text-white/80">
                    เริ่มจากสำรวจความสนใจ ตั้งเป้าหมาย เลือกสื่อการเรียนรู้ ทดลองปฏิบัติ และแบ่งปันผลลัพธ์ร่วมกับชุมชนออนไลน์ของเรา
                  </p>
                </div>
                <div className="space-y-3 text-sm text-white/80">
                  <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-300 text-base font-bold text-sky-900">
                      01
                    </span>
                    <div>
                      <p className="font-semibold text-white">สำรวจความสนใจ</p>
                      <p className="text-xs text-white/70">เลือกหัวข้อที่คุณอยากรู้จากกว่า 25 หมวดหมู่</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-300 text-base font-bold text-sky-900">
                      02
                    </span>
                    <div>
                      <p className="font-semibold text-white">ต่อยอดด้วยกิจกรรม</p>
                      <p className="text-xs text-white/70">เลือกกิจกรรมภาคสนาม เวิร์กช็อป หรือคลาสออนไลน์</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="bg-white py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">MISSION</p>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              ภารกิจหลักของ OKMD ในการขับเคลื่อนสังคมแห่งการเรียนรู้
            </h2>
            <p className="text-base text-slate-600">
              เราประสานความร่วมมือและออกแบบโครงการที่เน้นผู้เรียนเป็นศูนย์กลาง โดยใช้ข้อมูลและงานวิจัยเพื่อเพิ่มผลลัพธ์ที่วัดได้จริง
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {missionItems.map((item) => (
              <div key={item.title} className="flex h-full flex-col gap-3 rounded-2xl border border-sky-100 bg-slate-50 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-sky-900">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-sky-900 py-16 text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">SERVICES</p>
            <h2 className="text-2xl font-bold sm:text-3xl">
              บริการความรู้สำหรับทุกช่วงวัยและทุกพื้นที่
            </h2>
            <p className="text-sm text-white/70 sm:text-base">
              เลือกบริการที่ตอบโจทย์เป้าหมายของคุณ ตั้งแต่การค้นคว้า ไปจนถึงการลงมือทำและต่อยอดเป็นธุรกิจสร้างสรรค์
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {serviceCards.map((service) => (
              <div
                key={service.title}
                className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-amber-200/40 hover:bg-white/10"
              >
                <span className="text-3xl" aria-hidden>
                  {service.icon}
                </span>
                <h3 className="text-lg font-semibold text-amber-200">{service.title}</h3>
                <p className="text-sm text-white/80">{service.description}</p>
                <Link
                  href="#contact"
                  className="mt-auto inline-flex w-max items-center gap-2 text-sm font-semibold text-white transition hover:text-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  ดูรายละเอียดบริการ →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="bg-white py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">NEWS & EVENTS</p>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">ข่าวและกิจกรรมล่าสุด</h2>
            <p className="text-base text-slate-600">
              ติดตามความเคลื่อนไหว โครงการ และกิจกรรมเรียนรู้ที่เกิดขึ้นทั่วประเทศ
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {newsItems.map((news) => (
              <article
                key={news.title}
                className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">{news.date}</p>
                <h3 className="text-lg font-semibold text-slate-900">{news.title}</h3>
                <p className="text-sm text-slate-600">{news.description}</p>
                <Link
                  href="#"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition hover:text-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                >
                  อ่านเพิ่มเติม →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="media" className="bg-slate-100 py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">MEDIA LIBRARY</p>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">คลังสื่อสร้างแรงบันดาลใจ</h2>
            <p className="text-sm text-slate-600 sm:text-base">
              เลือกฟัง อ่าน หรือชมสื่อการเรียนรู้ที่เราคัดสรร เพื่อเติมไอเดียใหม่ให้โครงการของคุณ
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mediaGalleries.map((media) => (
              <div
                key={media.title}
                className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-32 rounded-xl bg-gradient-to-br from-sky-200 via-sky-100 to-white" aria-hidden />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900">{media.title}</h3>
                  <p className="text-sm text-slate-600">{media.description}</p>
                </div>
                <Link
                  href="#"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition hover:text-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                >
                  เข้าชมสื่อ →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="relative overflow-hidden bg-gradient-to-r from-amber-300 via-amber-200 to-amber-100 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.5),_transparent_65%)]" aria-hidden />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-900">JOIN US</p>
          <h2 className="text-2xl font-bold text-sky-900 sm:text-3xl">
            ร่วมขับเคลื่อนสังคมการเรียนรู้กับ OKMD
          </h2>
          <p className="max-w-2xl text-base text-sky-900/80">
            แบ่งปันไอเดีย สมัครเป็นวิทยากร หรือเป็นส่วนหนึ่งของเครือข่ายต้นแบบจากทั่วประเทศ เพื่อร่วมกันสร้างการเปลี่ยนแปลง
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-900 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
            >
              นัดหมายพูดคุยกับทีมเรา
            </Link>
            <Link
              href="mailto:contact@okmd.or.th"
              className="inline-flex items-center justify-center rounded-full border border-sky-900/40 px-6 py-3 text-sm font-semibold text-sky-900 transition hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
            >
              ส่งข้อเสนอความร่วมมือ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
