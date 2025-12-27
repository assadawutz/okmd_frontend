"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CareerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  // Mock data
  const job = {
    id: id,
    title: "เจ้าหน้าที่ช่วยปฏิบัติงานบริหารทรัพยากรกายภาพ ด้าน IT (สำนักภาคใต้ จ.สงขลา)",
    department: "สำนักงานบริหารและพัฒนาองค์ความรู้",
  };

  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* Breadcrumb */}
      <div className="container mx-auto pt-6 md:pt-8 pb-4">
        <div className="text-sm text-gray-500 font-medium">
          <Link href="/" className="hover:text-[#16A7CB]">หน้าหลัก</Link>
          {" > "}
          <span className="text-[#16A7CB]">ค้นหางาน</span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto mb-8">
        <div className="relative h-[200px] md:h-[280px] rounded-xl overflow-hidden">
          <Image
            src="/images/banner/RC1(4).jpg"
            alt="Working with Us"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto pb-16">
        
        {/* Back Button */}
        <Link 
          href="/career"
          className="inline-flex items-center gap-2 text-[#16A7CB] mb-6 hover:underline"
        >
          <div className="w-8 h-8 rounded-full bg-[#16A7CB] flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="text-gray-600">ย้อนกลับ</span>
        </Link>

        {/* Job Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-[#1B1D20] mb-8">
          {job.title}
        </h1>

        {/* Content */}
        <div className="space-y-8">
          
          {/* Job Purpose */}
          <section>
            <h2 className="text-lg font-bold text-[#1B1D20] mb-4">
              วัตถุประสงค์ตำแหน่งงาน (Job Purpose) :
            </h2>
            <p className="text-gray-600 leading-relaxed">
              ประสานงานและดำเนินงานในส่วนงานบริหารจัดการด้านเทคโนโลยีสารสนเทศ การซ่อนแซม และการบำรุงรักษา วัสดุอุปกรณ์เทคโนโลยีสารสนเทศและโครงสร้างพื้นฐานของสำนักงาน
              เพื่อให้มีความปลอดภัย เพียงพอต่อการใช้งาน มีสภาพสมบูรณ์ และประหยัดพลังงาน ตลอดจนส่งเสริมวินัยและความปลอดภัยในการปฏิบัติงาน
              รวมถึงปฏิบัติงานตามระเบียบของสำนักงาน
            </p>
          </section>

          {/* Main Accountabilities */}
          <section>
            <h2 className="text-lg font-bold text-[#1B1D20] mb-4">
              หน้าที่ความรับผิดชอบหลัก (Main Accountabilities) :
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-600 leading-relaxed">
              <li>
                ปฏิบัติงานเกี่ยวกับเครื่องมือและอุปกรณ์ด้านเทคโนโลยีสารสนเทศและการสื่อสารภายใน สำนักภาคใต้ ให้อยู่ในสภาพที่มีประสิทธิภาพพร้อมใช้งาน เป็นไปตามระเบียบ
                ข้อบังคับและกฎหมายที่เกี่ยวข้อง เพื่อสนับสนุนและอำนวยความสะดวกในการดำเนินงานของบุคลากรและการให้บริการแก่สมาชิก
              </li>
              <li>
                ปฏิบัติงานเกี่ยวกับการตรวจสอบความเรียบร้อย พื้นที่ อุปกรณ์ ส่วนงานเรียกร้องและระบบต่างๆ สำนักภาคใต้ ให้อยู่ในสภาพที่มีประสิทธิภาพพร้อมใช้งาน เป็นไปตามระเบียบ
                ข้อบังคับและกฎหมายที่เกี่ยวข้อง เพื่อสนับสนุนและอำนวยความสะดวกในการดำเนินงานของ บุคลากรและการให้บริการแก่สมาชิก เป็นต้น
                เพื่อสนับสนุนและอำนวยความสะดวกในการดำเนินงานของบุคลากรและการให้บริการการเรียกร้อง และการรักษาสภาพความสะอาด
              </li>
              <li>
                สนับสนุนทำงานทางด้านเทคโนโลยีสารสนเทศเพื่อช่วยในการปฏิบัติงานเจ้าหน้าที่องค์ความรู้
              </li>
              <li>
                ติดต่อประสานงานกับหน่วยงานภาครัฐ เอกชน สมาคมและสถาบันศึกษา เพื่อความร่วมมือในพื้นที่จัดกิจกรรมต่าง ๆ ภายนอกหูสนใจร่วมมือกับสำนักงาน
              </li>
              <li>
                ปฏิบัติงานสนับสนุนการจัดกิจกรรมและการให้บริการที่ขยายและภายนอกสำนักภาคใต้
              </li>
              <li>
                ปฏิบัติงานอื่น ๆ ตามที่ได้รับมอบหมาย
              </li>
            </ol>
          </section>

          {/* Required Qualifications */}
          <section>
            <h2 className="text-lg font-bold text-[#1B1D20] mb-4">
              คุณสมบัติที่ต้องการ (Required Qualifications) :
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-600 leading-relaxed">
              <li>เพศชาย/หญิง อายุ 24 - 35 ปี</li>
              <li>วุฒิการศึกษาระดับปริญญาตรีขึ้นไป สาขาคอมพิวเตอร์เตอร์ธุรกิจ เทคโนโลยีสารสนเทศ ศึกษาศาสตร์ ศิลปศาสตร์ หรือสาขาอื่นๆ ที่เกี่ยวข้องกับการบริหารจัดการด้านเทคโนโลยีสารสนเทศ</li>
              <li>มีความสามารถในการบริหารจัดการระบบเครือข่ายและความปลอดภัยทางเทคโนโลยีดิจิทัล ระบบโครงสร้างพื้นฐานเทคโนโลยีดิจิทัล และการบริหารทรัพยากรผู้รับจ้าง</li>
              <li>มีทักษะในการสื่อสาร ประสานงานและไขจิตนทบริการ</li>
              <li>มีใจรัก และสามารถแก้ปัญหาเฉพาะหน้าได้ดี</li>
              <li>มีความคิดริเริ่มสร้างสรรค์ พร้อมกที่เรียนรู้คิดสร้างสิ่งใหม่ๆ และคิดเชิงวิเคราะห์</li>
              <li>มีทักษะดีและมนุษยสัมพันธ์ที่ดี สามารถประสานงานกับผ่ายต่าง ๆ บริหารจัดการงานได้อย่างมีประสิทธิภาพ</li>
              <li>มีความคล่องตัวในการเดินทาง สามารถเดินทางไปปฏิบัติงานนอกสถานที่ หรือต่างจังหวัดได้</li>
              <li>มีความสามารถในการใช้ภาษาไทยและภาษาอังกฤษ ฟัง พูด อ่าน เขียน ในระดับดี</li>
            </ol>
          </section>

          {/* Apply Button */}
          <div className="pt-4">
            <button className="px-8 py-3 bg-[#16A7CB] text-white rounded-lg text-base font-medium hover:bg-[#0e8aa8] transition-colors">
              สมัครงานออนไลน์
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
