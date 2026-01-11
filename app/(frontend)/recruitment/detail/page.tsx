"use client";

import Link from "next/link";
import {
  ChevronLeft,
  MapPin,
  Clock,
  Calendar,
  Briefcase,
  FileText,
} from "lucide-react";
import { ContainerPage } from "@/components/shared/ContainerPage";
import Button from "@/components/ui/Button";

export default function RecruitmentDetailPage() {
  return (
    <ContainerPage>
      <div className="w-full space-y-8">
        {/* HEADER BLOCK */}
        <div className="w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden relative shadow-sm">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/bannerabout.png')" }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 max-w-4xl leading-tight">
              เจ้าหน้าที่ช่วยปฏิบัติงานบริหารทรัพยากรกายภาพ ด้าน IT
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base opacity-90">
              <span className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                <MapPin size={16} /> สงขลา
              </span>
              <span className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                <Briefcase size={16} /> สัญญาจ้าง
              </span>
              <span className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                <Clock size={16} /> Full Time
              </span>
            </div>
          </div>
        </div>

        {/* BREADCRUMB */}
        <div className="flex items-center text-sm text-gray-500 px-2 justify-between">
          <div className="flex items-center">
            <Link
              href="/recruitment/list"
              className="hover:text-[#16A7CB] transition-colors flex items-center gap-1"
            >
              <ChevronLeft size={16} />
              กลับหน้ารายการ
            </Link>
          </div>

          <div className="hidden md:block text-gray-400 text-xs">
            Ref: JOB-2024-001
          </div>
        </div>

        {/* CONTENT BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-8">
              <section>
                <h3 className="text-xl font-bold text-[#1B1D20] mb-4 flex items-center gap-2">
                  <FileText className="text-[#16A7CB]" />
                  รายละเอียดงาน
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน)
                  มีความประสงค์จะรับสมัครบุคคลเพื่อคัดเลือกเป็นเจ้าหน้าที่ช่วยปฏิบัติงาน
                  ในตำแหน่ง เจ้าหน้าที่ช่วยปฏิบัติงานบริหารทรัพยากรกายภาพ ด้าน
                  IT เพื่อปฏิบัติงาน ณ อุทยานการเรียนรู้สงขลา (TK Park Songkhla)
                </p>
              </section>

              <div className="h-px bg-gray-100 w-full" />

              <section>
                <h3 className="text-xl font-bold text-[#1B1D20] mb-4">
                  หน้าที่ความรับผิดชอบ
                </h3>
                <ul className="list-disc list-inside space-y-3 text-gray-600 ml-2">
                  <li>
                    ดูแลรักษาระบบคอมพิวเตอร์และเครือข่ายภายในองค์กร
                    ให้พร้อมใช้งานอยู่เสมอ
                  </li>
                  <li>สนับสนุนการใช้งาน Software และ Hardware ให้แก่บุคลากร</li>
                  <li>แก้ไขปัญหาทางเทคนิคเบื้องต้น (Helpdesk Support)</li>
                  <li>ดูแลระบบภาพและเสียงสำหรับการจัดกิจกรรมและการประชุม</li>
                  <li>
                    จัดทำรายงานสรุปการทำงานรายเดือนและงานอื่นๆ ที่ได้รับมอบหมาย
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-[#1B1D20] mb-4">
                  คุณสมบัติผู้สมัคร
                </h3>
                <ul className="list-disc list-inside space-y-3 text-gray-600 ml-2">
                  <li>
                    วุฒิการศึกษาปริญญาตรี สาขาวิทยาการคอมพิวเตอร์,
                    เทคโนโลยีสารสนเทศ หรือสาขาที่เกี่ยวข้อง
                  </li>
                  <li>มีประสบการณ์การทำงานด้าน IT Support อย่างน้อย 1 ปี</li>
                  <li>
                    มีความรู้พื้นฐานด้าน Network, Hardware, Software
                    Troubleshooting
                  </li>
                  <li>
                    มีใจรักงานบริการ มีมนุษยสัมพันธ์ดี และสามารถทำงานเป็นทีมได้
                  </li>
                  <li>
                    สามารถปฏิบัติงานล่วงเวลาหรือวันหยุดได้ (ตามความจำเป็น)
                  </li>
                </ul>
              </section>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-24 space-y-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#E8F6FB] rounded-full flex items-center justify-center mx-auto text-[#16A7CB]">
                  <Briefcase size={32} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1B1D20]">
                    เปิดรับสมัครถึง
                  </h3>
                  <p className="text-[#16A7CB] font-bold text-xl mt-1">
                    31 มกราคม 2568
                  </p>
                </div>
              </div>

              <div className="h-px bg-gray-100 w-full" />

              <div className="space-y-4">
                <Link href="/recruitment/apply" className="block">
                  <Button className="w-full rounded-xl py-3 shadow-lg shadow-[#16A7CB]/20 text-lg">
                    สมัครงานตำแหน่งนี้
                  </Button>
                </Link>
                <div className="text-center text-xs text-gray-400">
                  * สมัครผ่านระบบออนไลน์เท่านั้น
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 mt-4 border border-gray-100">
                <h4 className="font-bold text-gray-800 text-sm mb-2">
                  ข้อมูลการติดต่อ
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  ส่วนบริหารงานบุคคล
                  <br />
                  สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน)
                  <br />
                  โทร: 02-105-6555 ต่อ 1234
                  <br />
                  Email: hr@okmd.or.th
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerPage>
  );
}
