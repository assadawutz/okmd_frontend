import Link from "next/link";

const benefitItems = [
  {
    title: "เส้นทางการเรียนรู้ส่วนบุคคล",
    description: "จัดชุดเนื้อหาและกิจกรรมให้ตรงกับเป้าหมายการพัฒนาทักษะของคุณ",
  },
  {
    title: "คลังความรู้พรีเมียม",
    description: "เข้าถึงบทเรียน เอกสาร และสื่อเฉพาะสำหรับสมาชิก OKMD",
  },
  {
    title: "ชุมชนแลกเปลี่ยน",
    description: "ร่วมกิจกรรม เวิร์กช็อป และแลกเปลี่ยนประสบการณ์กับเครือข่ายผู้เรียนทั่วประเทศ",
  },
];

const steps = [
  {
    title: "กรอกข้อมูลพื้นฐาน",
    description: "ระบุชื่อ นามสกุล อีเมล และรหัสผ่านเพื่อสร้างบัญชี",
  },
  {
    title: "ยืนยันอีเมล",
    description: "เราจะส่งลิงก์ยืนยันเพื่อเปิดใช้งานบัญชีของคุณ",
  },
  {
    title: "เริ่มต้นสำรวจคลังความรู้",
    description: "จัดการโปรไฟล์ กำหนดเป้าหมาย และเลือกเนื้อหาที่สนใจ",
  },
];

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-br from-amber-300 via-amber-200 to-amber-100 py-16 text-sky-900">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">Create Account</p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">สมัครสมาชิก OKMD Learning Portal</h1>
            <p className="max-w-2xl text-sm text-sky-800/80 sm:text-base">
              สร้างบัญชีเพื่อรับประสบการณ์การเรียนรู้แบบ Personalized พร้อมการติดตามความก้าวหน้าและสิทธิพิเศษอีกมากมาย
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefitItems.map((item) => (
                <div key={item.title} className="rounded-2xl border border-amber-400/40 bg-white/70 p-5 shadow">
                  <h3 className="text-base font-semibold text-sky-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-sky-800/80">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full border border-sky-700 px-6 py-3 text-sm font-semibold text-sky-900 transition hover:bg-sky-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
              >
                มีบัญชีแล้ว? เข้าสู่ระบบ
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-transparent bg-sky-900 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
              >
                กลับหน้าหลัก
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="mx-auto w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">สมัครสมาชิก</p>
              <h2 className="mt-2 text-2xl font-bold text-sky-900">เริ่มสร้างโปรไฟล์การเรียนรู้ของคุณ</h2>
              <p className="mt-3 text-sm text-slate-600">
                กรอกข้อมูลตามแบบฟอร์มด้านล่าง เพื่อให้ระบบแนะนำคอนเทนต์และกิจกรรมที่ตรงกับความสนใจของคุณมากที่สุด
              </p>
              <form className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm">
                    <span className="mb-2 block font-medium text-slate-800">ชื่อ</span>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                      placeholder="ชื่อจริง"
                    />
                  </label>
                  <label className="block text-sm">
                    <span className="mb-2 block font-medium text-slate-800">นามสกุล</span>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                      placeholder="นามสกุล"
                    />
                  </label>
                </div>
                <label className="block text-sm">
                  <span className="mb-2 block font-medium text-slate-800">อีเมล</span>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                    placeholder="you@example.com"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-2 block font-medium text-slate-800">รหัสผ่าน</span>
                  <input
                    type="password"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                    placeholder="••••••••"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-2 block font-medium text-slate-800">ยืนยันรหัสผ่าน</span>
                  <input
                    type="password"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                    placeholder="••••••••"
                  />
                </label>
                <label className="flex items-center gap-3 text-sm text-slate-600">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-sky-700 focus:ring-sky-500" />
                  <span>
                    ยอมรับ
                    <Link href="/#privacy" className="font-semibold text-sky-700 underline-offset-4 hover:underline">
                      {' '}นโยบายคุ้มครองข้อมูลส่วนบุคคล
                    </Link>
                  </span>
                </label>
                <button
                  type="submit"
                  className="w-full rounded-full bg-sky-900 px-6 py-3 text-sm font-bold text-white shadow transition hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
                >
                  สมัครสมาชิก
                </button>
              </form>
              <p className="mt-6 text-center text-sm text-slate-600">
                มีบัญชีอยู่แล้ว?{' '}
                <Link href="/login" className="font-semibold text-sky-700 underline-offset-4 hover:underline">
                  เข้าสู่ระบบ
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 lg:flex-row">
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold text-sky-900">สมัครง่ายภายในไม่กี่นาที</h2>
            <ol className="space-y-4 text-sm text-slate-700">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4 rounded-2xl bg-slate-50 p-5 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-base font-bold text-sky-700">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">{step.title}</p>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex-1 space-y-6">
            <h3 className="text-xl font-bold text-sky-900">สิทธิประโยชน์ที่คุณจะได้รับ</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefitItems.map((item) => (
                <div key={item.title} className="rounded-2xl border border-sky-100 bg-slate-50 p-5 shadow-sm">
                  <h4 className="text-base font-semibold text-sky-900">{item.title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-sky-100 bg-slate-50 p-6 text-sm text-slate-600">
              <p>
                หากต้องการความช่วยเหลือในการสมัครสมาชิก สามารถติดต่อศูนย์บริการลูกค้าได้ที่
                <a href="tel:021054000" className="font-semibold text-sky-700 underline-offset-4 hover:underline">
                  {' '}0-2105-4000
                </a>
                หรืออีเมล
                <a href="mailto:contact@okmd.or.th" className="font-semibold text-sky-700 underline-offset-4 hover:underline">
                  {' '}contact@okmd.or.th
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
