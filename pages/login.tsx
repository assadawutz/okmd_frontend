import Link from "next/link";

type HelpLink = {
  title: string;
  description: string;
  href: string;
  external?: boolean;
};

const helpLinks: HelpLink[] = [
  { title: "ลืมรหัสผ่าน", description: "ตั้งรหัสผ่านใหม่ผ่านอีเมลที่ลงทะเบียนไว้", href: "/register" },
  { title: "ต้องการสมัครสมาชิก?", description: "สร้างบัญชีเพื่อเข้าถึงคลังความรู้และกิจกรรมทั้งหมด", href: "/register" },
  { title: "ต้องการความช่วยเหลือ", description: "ติดต่อทีมสนับสนุน OKMD ผ่านศูนย์บริการลูกค้า", href: "tel:021054000", external: true },
];

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-br from-sky-900 via-sky-800 to-sky-600 py-16 text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">Secure Access</p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">เข้าสู่ระบบ OKMD Learning Portal</h1>
            <p className="max-w-2xl text-sm text-white/80 sm:text-base">
              ลงชื่อเข้าใช้เพื่อเข้าถึงคลังความรู้ส่วนบุคคล เส้นทางการเรียนรู้ และกิจกรรมที่คุณติดตามไว้
              ระบบความปลอดภัยของเราดูแลข้อมูลทุกขั้นตอน เพื่อให้คุณเรียนรู้ได้อย่างมั่นใจ
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-bold text-sky-900 shadow-lg transition hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                สมัครสมาชิกใหม่
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                กลับหน้าหลัก
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="mx-auto w-full max-w-md rounded-3xl bg-white/10 p-8 backdrop-blur-lg">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-200">Members Area</p>
              <h2 className="mt-2 text-2xl font-bold text-white">เข้าสู่ระบบบัญชีของคุณ</h2>
              <p className="mt-3 text-sm text-white/80">
                กรอกอีเมลและรหัสผ่านที่ลงทะเบียนไว้ หากยังไม่มีบัญชีสามารถสมัครสมาชิกใหม่ได้ในไม่กี่ขั้นตอน
              </p>
              <form className="mt-6 space-y-4">
                <label className="block text-sm">
                  <span className="mb-2 block font-medium text-white">อีเมล</span>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300/80"
                    placeholder="you@example.com"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-2 block font-medium text-white">รหัสผ่าน</span>
                  <input
                    type="password"
                    className="w-full rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300/80"
                    placeholder="••••••••"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-full bg-amber-300 px-6 py-3 text-sm font-bold text-sky-900 shadow transition hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  เข้าสู่ระบบ
                </button>
              </form>
              <p className="mt-6 text-center text-sm text-white/80">
                ยังไม่มีบัญชี?{" "}
                <Link href="/register" className="font-semibold text-amber-200 underline-offset-4 hover:underline">
                  สมัครสมาชิก
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 lg:flex-row">
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold text-sky-900">เข้าสู่ระบบอย่างปลอดภัยใน 3 ขั้นตอน</h2>
            <ol className="space-y-4 text-sm text-slate-700">
              <li className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-base font-bold text-sky-700">1</span>
                <div>
                  <p className="font-semibold text-slate-900">กรอกอีเมลที่ใช้สมัคร</p>
                  <p className="text-slate-600">ใช้บัญชีอีเมลเดียวกับที่ลงทะเบียนเพื่อเชื่อมต่อข้อมูลการเรียนรู้ของคุณ</p>
                </div>
              </li>
              <li className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-base font-bold text-sky-700">2</span>
                <div>
                  <p className="font-semibold text-slate-900">ยืนยันรหัสผ่าน</p>
                  <p className="text-slate-600">ระบบปกป้องข้อมูลด้วยการเข้ารหัสทุกครั้งที่คุณเข้าสู่ระบบ</p>
                </div>
              </li>
              <li className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-base font-bold text-sky-700">3</span>
                <div>
                  <p className="font-semibold text-slate-900">เข้าถึงเนื้อหาและกิจกรรม</p>
                  <p className="text-slate-600">เรียนรู้ต่อเนื่องกับเส้นทางที่ออกแบบให้เหมาะกับความสนใจของคุณ</p>
                </div>
              </li>
            </ol>
          </div>
          <div className="flex-1 space-y-6">
            <h3 className="text-xl font-bold text-sky-900">ต้องการความช่วยเหลือ?</h3>
            <ul className="space-y-4 text-sm text-slate-700">
              {helpLinks.map((item) => (
                <li key={item.title} className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-slate-600">{item.description}</p>
                  {item.external ? (
                    <a
                      href={item.href}
                      className="mt-3 inline-flex items-center text-sm font-semibold text-sky-700 underline-offset-4 hover:underline"
                    >
                      ดูรายละเอียด
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="mt-3 inline-flex items-center text-sm font-semibold text-sky-700 underline-offset-4 hover:underline"
                    >
                      ดูรายละเอียด
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
