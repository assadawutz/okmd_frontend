import Link from "next/link";

import PageHero from "@/components/okmd/PageHero";
import PageSection from "@/components/okmd/PageSection";

const loginSteps = [
  {
    title: "เข้าสู่ระบบด้วยบัญชีเดียว",
    description:
      "ใช้บัญชี OKMD Portal เพื่อเข้าถึงคลังเนื้อหา กิจกรรม และการตั้งค่าที่คุณบันทึกไว้", 
  },
  {
    title: "จัดการแผนการเรียนรู้",
    description:
      "ต่อยอดเส้นทางการเรียนรู้ ติดตามความคืบหน้า และรับข้อเสนอแนะที่คัดสรรมาเพื่อคุณ", 
  },
  {
    title: "เชื่อมโยงชุมชน",
    description:
      "เข้าร่วม Community Hub แชร์ไอเดีย แลกเปลี่ยนความรู้กับเครือข่ายนวัตกร", 
  },
];

const supportChannels = [
  {
    title: "ศูนย์บริการผู้ใช้",
    description: "ทีมงานพร้อมช่วยเหลือทุกวันจันทร์-ศุกร์ 09.00-17.00 น.",
    contact: "โทร 02-105-4000 ต่อ 402",
  },
  {
    title: "อีเมลฝ่ายสนับสนุน",
    description: "ส่งรายละเอียดปัญหาหรือคำถามของคุณ เรายินดีตอบกลับภายใน 1 วันทำการ",
    contact: "support@okmd.or.th",
  },
  {
    title: "ระบบคู่มือออนไลน์",
    description: "ศึกษาวิธีใช้งาน OKMD Portal แบบ Step-by-Step ทั้งรูปแบบบทความและวิดีโอ",
    contact: "knowledge.okmd.or.th/help-center",
  },
];

export default function LoginPage() {
  return (
    <div className="bg-slate-50">
      <PageHero
        eyebrow="OKMD Portal"
        title="เข้าสู่ระบบเพื่อเริ่มการเรียนรู้แบบ Personalized"
        description="จัดการคอร์สที่คุณติดตาม เก็บเนื้อหาที่ชื่นชอบ และติดตามกิจกรรมล่าสุดจาก OKMD"
        actions={
          <>
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-bold text-sky-900 shadow-lg transition hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              ยังไม่มีบัญชี? สมัครสมาชิก
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              กลับหน้าแรก
            </Link>
          </>
        }
      >
        <form className="mx-auto w-full max-w-md space-y-4 rounded-3xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur">
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
            <label htmlFor="password" className="text-sm font-semibold text-white">
              รหัสผ่าน
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full rounded-xl border border-white/20 bg-white/20 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
              placeholder="กรอกรหัสผ่าน"
            />
          </div>
          <div className="flex items-center justify-between text-xs text-white/80">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-white/30 bg-white/10 text-amber-300 focus:ring-amber-200"
              />
              จดจำฉันในอุปกรณ์นี้
            </label>
            <Link href="/register" className="font-semibold text-amber-200 hover:text-white">
              ลืมรหัสผ่าน?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-white px-6 py-3 text-sm font-bold text-sky-900 transition hover:bg-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            เข้าสู่ระบบ
          </button>
        </form>
      </PageHero>

      <PageSection
        eyebrow="Why OKMD Portal"
        title="บัญชีเดียวที่เชื่อมต่อประสบการณ์การเรียนรู้ครบวงจร"
        description="ยกระดับการเรียนรู้ด้วยข้อมูลเชิงลึกและกิจกรรมที่ออกแบบเฉพาะสำหรับเป้าหมายของคุณ"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {loginSteps.map((step) => (
            <div
              key={step.title}
              className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-sky-900">{step.title}</h3>
              <p className="text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection
        variant="muted"
        eyebrow="Need Help"
        title="ช่องทางสนับสนุนเมื่อคุณต้องการความช่วยเหลือ"
        description="ทีมงานของเราพร้อมช่วยคุณทุกขั้นตอน ตั้งแต่การเข้าสู่ระบบไปจนถึงการใช้ฟีเจอร์เชิงลึก"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {supportChannels.map((channel) => (
            <div
              key={channel.title}
              className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-sky-900">{channel.title}</h3>
              <p className="text-sm text-slate-600">{channel.description}</p>
              <p className="text-sm font-semibold text-sky-700">{channel.contact}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl bg-sky-900 p-6 text-white shadow-lg">
          <h3 className="text-lg font-semibold">ต้องการคู่มือแบบละเอียด?</h3>
          <p className="mt-2 text-sm text-white/80">
            ดาวน์โหลด PDF แนะนำการใช้งาน OKMD Portal ฉบับเต็ม ครอบคลุมการตั้งค่าบัญชี การจัดการสิทธิ์ และการใช้งานเครื่องมือ Collaboration
          </p>
          <Link
            href="mailto:support@okmd.or.th"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-sky-900 transition hover:bg-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            ขอรับคู่มือเพิ่มเติม
          </Link>
        </div>
      </PageSection>
    </div>
  );
}
