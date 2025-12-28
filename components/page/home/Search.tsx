"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Loader2 } from "lucide-react";

// Mock data for AI summary based on search query
const MOCK_AI_SUMMARIES: Record<string, string> = {
  default: `ในปี 2025 การเลือกเรียนควรพิจารณาจากแนวโน้มและความต้องการของตลาดแรงงาน รวมถึงการพัฒนาเทคโนโลยีที่มีการเปลี่ยนแปลงอย่างรวดเร็ว ดังนี้
เทคโนโลยีสารสนเทศและการสื่อสาร: ความต้องการผู้เชี่ยวชาญด้าน IT, AI, และการพัฒนาแอปพลิเคชันยังคงสูง
การศึกษาและการพัฒนาทักษะ: การเรียนรู้วิธีการเรียนรู้ (Meta Learning) จะเป็นสิ่งสำคัญในการปรับตัวในโลกที่เปลี่ยนแปลง
นวัตกรรมและการออกแบบ: การเรียนรู้ด้านการออกแบบผลิตภัณฑ์และบริการที่ตอบโจทย์ผู้ใช้จะมีความสำคัญ
การพัฒนาทักษะทางสังคมและอารมณ์: ทักษะการสื่อสารและการทำงานร่วมกับผู้อื่นจะยังคงมีความสำคัญในทุกอาชีพ
การเลือกเรียนในด้านที่มีความสนใจและสามารถปรับตัวได้ตามแนวโน้มในอนาคตจะช่วยให้คุณประสบความสำเร็จในอาชีพได้`,
};

// Mock search results
const MOCK_SEARCH_RESULTS = [
  {
    title: "การเรียนรู้ตลอดชีวิต: กุญแจสู่ความสำเร็จในยุคดิจิทัล",
    text: "ในยุคที่เทคโนโลยีเปลี่ยนแปลงอย่างรวดเร็ว การเรียนรู้ตลอดชีวิตกลายเป็นทักษะที่จำเป็นสำหรับทุกคน ไม่ว่าจะอยู่ในวัยใดก็ตาม",
  },
  {
    title: "AI และอนาคตของการศึกษาไทย",
    text: "ปัญญาประดิษฐ์กำลังเปลี่ยนแปลงวิธีการเรียนรู้และการสอน ตั้งแต่การปรับเนื้อหาให้เหมาะกับผู้เรียนแต่ละคน ไปจนถึงการประเมินผลอัตโนมัติ",
  },
  {
    title: "ทักษะแห่งอนาคต: สิ่งที่เด็กไทยต้องเตรียมพร้อม",
    text: "ความคิดสร้างสรรค์ การคิดวิเคราะห์ และความฉลาดทางอารมณ์ คือทักษะสำคัญที่จะช่วยให้เด็กไทยพร้อมรับมือกับโลกในอนาคต",
  },
];

export default function OkmdSearchSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [aiSummary, setAiSummary] = useState("");
  const [searchResults, setSearchResults] = useState<typeof MOCK_SEARCH_RESULTS>([]);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    
    // Simulate API call with mock data
    setTimeout(() => {
      setAiSummary(MOCK_AI_SUMMARIES.default);
      setSearchResults(MOCK_SEARCH_RESULTS);
      setHasSearched(true);
      setIsSearching(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return ( 
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto">

        {/* HEADER SEARCH ZONE */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Small Title */}
          <div className="text-xs sm:text-sm font-light uppercase tracking-[8px] sm:tracking-[12px] text-okmd-cyan mb-4">
            KNOWLEDGE IS OPPORTUNITY
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1D20] mb-2">
            รวมไอเดียเด็ด แรงบันดาลใจเจ๋ง ๆ และความรู้มืออคํ่าจาก{" "}
            <span className="text-[#74CEE2]">OKMD</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#74CEE2] mb-10">
            โลกของคนชอบคิดต่าง
          </p>

          {/* SEARCH BLOCK */}
          <div className="w-full">
            {/* Dark container */}
            <div className="bg-[#1B1D20] rounded-2xl sm:rounded-3xl p-5 sm:p-6">
              {/* Intro text */}
              <p className="text-sm sm:text-base font-normal text-white mb-4">
                เรามอบประสบการณ์การค้นหาที่แม่นยำได้ในทันทีที่ต้องการคำตอบ ที่รอให้คุณใส่คีย์เวิร์ดในช่องนี้
              </p>

              {/* White card with search */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm">
                <p className="text-sm font-medium text-[#1B1D20] mb-3">
                  การค้นหาที่ฉลาดและแม่นยำของคุณที่นี่
                </p>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="พิมพ์เป้าหมายของคุณที่นี่"
                    className="
                      flex-1 border-b-2 border-[#74CEE2] bg-transparent
                      py-2 text-base sm:text-lg
                      text-[#1B1D20] font-normal
                      outline-none placeholder:text-gray-400
                      focus:border-[#5FC4D8] transition-colors
                    "
                  />
                  <button
                    type="button"
                    onClick={handleSearch}
                    disabled={isSearching || !searchQuery.trim()}
                    className="flex-shrink-0 flex items-center justify-center h-11 w-11 rounded-full bg-[#74CEE2] hover:bg-[#5FC4D8] hover:scale-105 active:scale-95 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSearching ? (
                      <Loader2 className="h-5 w-5 text-white animate-spin" />
                    ) : (
                      <Search className="h-5 w-5 text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION: ข้อมูลภาพรวมโดย AI (Show only when searched) */}
          {hasSearched && (
            <div className="mt-12 md:mt-16 w-full text-left animate-fadeIn">

              {/* Title row */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <Image
                  src="/okmd_ai_logo.png"
                  alt="AI Logo"
                  width={44}
                  height={44}
                  className="object-contain drop-shadow-sm"
                />
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#1B1D20]">
                    ข้อมูลภาพรวมโดย AI
                  </h2>
                  <p className="text-sm text-gray-500 mt-0.5">
                    ผลการค้นหาสำหรับ: &quot;{searchQuery}&quot;
                  </p>
                </div>
              </div>

              {/* Divider */}
              <hr className="border-t border-[#E4E4E4] mb-6 sm:mb-8" />

              {/* Summary Box */}
              <div className="
                border border-[#E6E6E6]
                bg-white
                p-6 sm:p-8 lg:p-10
                rounded-xl sm:rounded-2xl
                shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                text-base sm:text-lg leading-relaxed text-[#444]
              ">
                <p className="whitespace-pre-line">
                  {aiSummary}
                </p>

                <button className="
                  mt-5 sm:mt-6 inline-flex items-center gap-2
                  text-[#1B9DBC] text-base font-medium
                  hover:text-[#168AAF] hover:underline
                  transition-all
                ">
                  อ่านเพิ่มเติม
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 3l6 5-6 5" />
                  </svg>
                </button>
              </div>

              {/* SEARCH RESULTS LIST */}
              <div className="mt-10 md:mt-12">

                <h3 className="text-xl sm:text-2xl font-semibold text-[#1B1D20] mb-6 sm:mb-8">
                  ผลการค้นหา {searchResults.length} รายการ
                </h3>

                <div className="flex flex-col gap-6 sm:gap-8">

                  {searchResults.map((item, idx) => (
                    <div key={idx} className="group cursor-pointer">

                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#1B1D20] mb-2 group-hover:text-[#168AAF] transition-colors">
                        {item.title}
                      </h4>

                      <p className="text-sm sm:text-base text-[#898989] leading-relaxed">
                        {item.text}
                      </p>

                      {/* Divider */}
                      {idx < searchResults.length - 1 && (
                        <hr className="mt-6 sm:mt-8 border-t border-[#E5E5E5]" />
                      )}
                    </div>
                  ))}

                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
