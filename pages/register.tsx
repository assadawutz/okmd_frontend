import Link from "next/link";

import PageHero from "@/components/okmd/PageHero";
import PageSection from "@/components/okmd/PageSection";

const profileTypes = [
  {
    title: "บุคคลทั่วไป",
    description: "เข้าถึงคอร์สออนไลน์ บทความ และกิจกรรมที่คุณสนใจ พร้อมรับคำแนะนำส่วนตัว", 
  },
  {
    title: "ครูและโค้ชการเรียนรู้",
    description: "จัดการหลักสูตรสำหรับผู้เรียน เชื่อมโยงแหล่งเรียนรู้ และติดตามผลแบบเรียลไทม์", 
  },
  {
    title: "ภาคีเครือข่าย",
    description: "ร่วมพัฒนาโครงการกับ OKMD บริหารสมาชิกชุมชน และแชร์องค์ความรู้ให้สาธารณะ", 
  },
];

const onboardingPerks = [
  {
    title: "คลังเนื้อหา 4,500 ชั่วโมง",
    detail: "บทเรียน วิดีโอ Podcast และ Toolkit ที่อัปเดตทุกสัปดาห์ แยกตามความสนใจ",
  },
  {
    title: "กิจกรรมพิเศษสำหรับสมาชิก",
    detail: "เวิร์กช็อปและ Learning Tour รอบพิเศษ พร้อมสิทธิ์ Early Bird",
  },
  {
    title: "แดชบอร์ดความก้าวหน้า",
    detail: "ติดตามการเรียนรู้ของคุณและทีมด้วยสถิติที่อ่านง่าย พร้อมคำแนะนำถัดไป",
  },
];

export default function RegisterPage() {
  return (
    <div className="bg-slate-50">
      <PageHero
        eyebrow="Join the Movement"
        title="สมัครสมาชิก OKMD Portal เพื่อปลดล็อกประสบการณ์การเรียนรู้ใหม่"
        description="สร้างโปรไฟล์ เชื่อมต่อเครือข่าย และรับการคัดสรรคอนเทนต์ที่ตอบโจทย์คุณที่สุด"
        actions={
          <>
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              มีบัญชีอยู่แล้ว? เข้าสู่ระบบ
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-bold text-sky-900 shadow-lg transition hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              สำรวจโครงการของเรา
            </Link>
          </>
        }
      >
        <form className="mx-auto w-full max-w-lg space-y-4 rounded-3xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="firstName" className="text-sm font-semibold text-white">
                ชื่อ
              </label>
              <input
                id="firstName"
                name="firstName"
                required
                className="w-full rounded-xl border border-white/20 bg-white/20 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                placeholder="ชื่อจริง"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="lastName" className="text-sm font-semibold text-white">
                นามสกุล
              </label>
              <input
                id="lastName"
                name="lastName"
                required
                className="w-full rounded-xl border border-white/20 bg-white/20 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                placeholder="นามสกุล"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-semibold text-white">
                อีเมล
              </label>
              <input
                id="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                className="w-full rounded-xl border border-white/20 bg-white/20 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="phone" className="text-sm font-semibold text-white">
                เบอร์ติดต่อ
              </label>
              <input
                id="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                className="w-full rounded-xl border border-white/20 bg-white/20 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                placeholder="080-000-0000"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label htmlFor="organization" className="text-sm font-semibold text-white">
              หน่วยงาน / สังกัด (ถ้ามี)
            </label>
            <input
              id="organization"
              className="w-full rounded-xl border border-white/20 bg-white/20 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
              placeholder="ชื่อองค์กรหรือสถานศึกษา"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="password" className="text-sm font-semibold text-white">
                สร้างรหัสผ่าน
              </label>
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                minLength={8}
                required
                className="w-full rounded-xl border border-white/20 bg-white/20 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                placeholder="อย่างน้อย 8 ตัวอักษร"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="confirmPassword" className="text-sm font-semibold text-white">
                ยืนยันรหัสผ่าน
              </label>
              <input
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                minLength={8}
                required
                className="w-full rounded-xl border border-white/20 bg-white/20 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                placeholder="กรอกอีกครั้ง"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label htmlFor="profileType" className="text-sm font-semibold text-white">
              บทบาทหลักของคุณ
            </label>
            <select
              id="profileType"
              className="w-full rounded-xl border border-white/20 bg-white/20 px-4 py-3 text-sm text-slate-900 focus:border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
              defaultValue="general"
            >
              <option value="general">บุคคลทั่วไป</option>
              <option value="teacher">ครู / โค้ชการเรียนรู้</option>
              <option value="partner">ภาคีเครือข่าย</option>
            </select>
          </div>
          <label className="flex items-start gap-3 text-xs text-white/80">
            <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-white/30 bg-white/10 text-amber-300 focus:ring-amber-200" />
            ฉันยอมรับข้อตกลงการใช้งานและนโยบายคุ้มครองข้อมูลส่วนบุคคลของ OKMD
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-white px-6 py-3 text-sm font-bold text-sky-900 transition hover:bg-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            สมัครสมาชิก
          </button>
        </form>
      </PageHero>

      <PageSection
        eyebrow="Profile Types"
        title="เลือกบทบาทที่ตรงกับคุณ เพื่อรับประสบการณ์ที่เหมาะสม"
        description="เราปรับประสบการณ์ตามบทบาทของคุณ เพื่อให้เนื้อหาและกิจกรรมที่เสนอมีความหมายที่สุด"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {profileTypes.map((profile) => (
            <div
              key={profile.title}
              className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-sky-900">{profile.title}</h3>
              <p className="text-sm text-slate-600">{profile.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection
        variant="muted"
        eyebrow="Member Perks"
        title="สิทธิประโยชน์เมื่อสมัครสมาชิกวันนี้"
        description="ใช้งานได้ฟรีทันที พร้อมโปรแกรมอัปเกรดสำหรับทีมและองค์กรในอนาคต"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {onboardingPerks.map((perk) => (
            <div
              key={perk.title}
              className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-sky-900">{perk.title}</h3>
              <p className="text-sm text-slate-600">{perk.detail}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-sky-200 bg-white/70 p-6 text-sky-900 shadow-inner">
          <h3 className="text-lg font-semibold">พร้อมสำหรับการใช้ในองค์กร?</h3>
          <p className="mt-2 text-sm text-slate-600">
            ติดต่อทีม Customer Success เพื่อออกแบบแผนการใช้งานสำหรับหน่วยงาน พร้อมฟีเจอร์จัดการสมาชิกและรายงานแบบกำหนดเอง
          </p>
          <Link
            href="mailto:partnership@okmd.or.th"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-sky-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
          >
            นัดหมายพูดคุยกับทีม
          </Link>
        </div>
      </PageSection>
    </div>
  );
}
