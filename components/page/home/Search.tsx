"use client";

import Image from "next/image";
import { Search } from "lucide-react";
const aiSummary = `
ในปี 2025 การเลือกเรียนควรพิจารณาจากแนวโน้มและความต้องการของตลาดแรงงาน รวมถึงการพัฒนาเทคโนโลยีที่มีการเปลี่ยนแปลงอย่างรวดเร็ว 
ดังนี้
เทคโนโลยีสารสนเทศและการสื่อสาร: ความต้องการผู้เชี่ยวชาญด้าน IT, AI, และการพัฒนาแอปพลิเคชันยังคงสูง
การศึกษาและการพัฒนาทักษะ: การเรียนรู้วิธีการเรียนรู้ (Meta Learning) จะเป็นสิ่งสำคัญในการปรับตัวในโลกที่เปลี่ยนแปลง
นวัตกรรมและการออกแบบ: การเรียนรู้ด้านการออกแบบผลิตภัณฑ์และบริการที่ตอบโจทย์ผู้ใช้จะมีความสำคัญ
การพัฒนาทักษะทางสังคมและอารมณ์: ทักษะการสื่อสารและการทำงานร่วมกับผู้อื่นจะยังคงมีความสำคัญในทุกอาชีพ
การเลือกเรียนในด้านที่มีความสนใจและสามารถปรับตัวได้ตามแนวโน้มในอนาคตจะช่วยให้คุณประสบความสำเร็จในอาชีพได้
`;
export default function OkmdSearchSection() {
  return (
    <section className="bg-white pb-16 pt-10">

      {/* GRID CENTER */}
      <div className="w-full flex justify-center">
          <div className="container mx-auto flex flex-col">

          {/* -------------------------------------------------------------- */}
          {/* HEADER SEARCH ZONE */}
          {/* -------------------------------------------------------------- */}
          <div className="flex flex-col items-center text-center">

            {/* Small Title */}
            <div className="text-xs sm:text-sm font-light uppercase tracking-[10px] sm:tracking-[14px] text-okmd-cyan">
              KNOWLEDGE IS OPPORTUNITY
            </div>

            {/* Title */}
            <div className="mt-4 flex w-full flex-col items-center gap-4 sm:gap-6">
              <h2 className="max-w-[750px] text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-okmd-dark">
                รวมไอเดียเด็ด แรงบันดาลใจเจ๋ง ๆ และ ความรู้นอกตำรา OKMD
              </h2>
              <p className="text-xl sm:text-2xl lg:text-3xl text-okmd-cyan">
                  โลกของคนชอบคิดต่าง
              </p>
            </div>

            {/* SEARCH BLOCK */}
            <div className="relative mt-8 w-full">

              {/* Gradient BG */}
              <div className="h-[210px] sm:h-[177px] w-full p-3 rounded-3xl bg-gradient-to-r bg-[#1B1D20]" />

              {/* White card */}
              <div className="absolute left-[3%] top-[38%] lg:top-[32%] sm:left-[14px] sm:top-[51px] h-[105px] sm:h-[121px] w-[94%] sm:w-[calc(100%-28px)] rounded-2xl bg-white shadow-md" />

              {/* Intro text */}
              <div
                className="
    absolute 
    left-[40px] right-[40px] top-[26px] 
    sm:left-[0px] sm:top-[19px]
    pl-2
    text-sm sm:text-sm 
    font-medium leading-5 text-white
    max-w-[85%] sm:max-w-none
  "
              >
                เรามอบประสบการณ์การค้นหาอย่างแม่นยำ
                ช่วยให้คุณได้คำตอบตรงใจ รวดเร็ว
              </div>

              {/* Subtitle */}
              <div className="absolute left-[30px] lg:left-[40px] top-[100px] lg:top-[80px] sm:left-[30px] sm:top-[74px] 
                              text-[13px] sm:text-sm font-medium leading-[20px] text-okmd-dark">
                การค้นหาที่ฉลาดและแม่นยำ
              </div>

              {/* Input */}
              <div className="absolute left-[30px] lg:left-[40px] top-[110px] sm:left-[30px] sm:top-[97px] right-[40px] flex items-center">
                <input
                  type="text"
                  placeholder="พิมพ์เป้าหมายของคุณที่นี่"
                  className="
                    p-1 flex-1 border-b-2 border-okmd-cyan bg-transparent pl-0 
                    text-base sm:text-lg 
                    text-okmd-gray font-light 
                    outline-none placeholder:text-okmd-gray 
                    focus:border-okmd-blue
                  "
                />

                <button
                  className="ml-3 flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[#74CEE2] hover:scale-105 transition"
                >
                  <Search className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
          {/* -------------------------------------------------------------- */}
          {/*             SECTION: ข้อมูลภาพรวมโดย AI                        */}
          {/* -------------------------------------------------------------- */}
          <div className="mt-20">

            {/* Title row */}
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/okmd_ai_logo.png"
                alt="AI Logo"
                width={46}
                height={46}
                className="object-contain drop-shadow-sm"
              />
              <h2 className="text-[28px] sm:text-[30px] font-semibold text-[#1B1D20]">
                ข้อมูลภาพรวมโดย AI
              </h2>
            </div>

            {/* Divider */}
            <hr className="border-t border-[#E4E4E4] mb-8" />

            {/* Summary Box */}
            <div className="
      border border-[#E6E6E6]
      bg-[#FFFFFF]
      p-8 sm:p-10
      rounded-2xl
      shadow-[0_4px_24px_rgba(0,0,0,0.06)]
      text-[17px] leading-[30px] text-[#444]
    "
            >
              <p className="whitespace-pre-line">
                {aiSummary}
              </p>

              <button className="
        mt-6 inline-flex items-center gap-2
        text-[#1B9DBC] text-[16px] font-medium
        hover:text-[#168AAF] hover:underline
        transition-all
      "
              >
                อ่านเพิ่มเติม
                <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 3l6 5-6 5" />
                </svg>
              </button>
            </div>
          </div>

          {/* -------------------------------------------------------------- */}
          {/*                     SEARCH RESULTS LIST                         */}
          {/* -------------------------------------------------------------- */}
          <div className="mt-16">

            <h3 className="text-[22px] font-semibold text-[#1B1D20] mb-8">
              ผลการค้นหา 4 รายการ
            </h3>

            <div className="flex flex-col gap-10">

              {/* RESULT CARD TEMPLATE */}
              {[
                {
                  title: "ปฏิรูปการเรียนรู้โอกาสในอนาคต",
                  text: "สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน) ... จัดงานมหกรรมความรู้ (OKMD Knowledge Festival)"
                },
                {
                  title: "OKMD Family | 5 แหล่ง เที่ยว เรียน รู้ สุดคลาสิก",
                  text: "การเที่ยวชมแหล่งเรียนรู้อย่างพิพิธภัณฑ์ หรือห้องสมุด ... มีคุณค่าเกินกว่าจะประเมินได้"
                },
                {
                  title: "มันส์สมอง | เล่น ลอง เรียน : ทดลอง เรียนรู้",
                  text: "ทดลอง เรียนรู้ ใส่ไอเดียสนุกๆ สร้างสรรค์การสื่อสารใหม่ที่แตกต่าง..."
                },
                {
                  title: "LEARN LAB EXPO 2023 มหกรรมการศึกษา",
                  text: "ขอเชิญร่วมงาน LEARN LAB EXPO 2023 มหกรรมการศึกษา ... ณ มิวเซียมสยาม"
                }
              ].map((item, index) => (
                <div key={index} className="group transition-all">

                  <h4 className="text-[24px] font-semibold text-[#1B1D20] mb-2 group-hover:text-[#168AAF] transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-[16px] text-[#898989] leading-[26px]">
                    {item.text}
                  </p>

                  {/* Divider */}
                  {index < 3 && (
                    <hr className="mt-8 border-t border-[#E5E5E5]" />
                  )}
                </div>
              ))}

            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
