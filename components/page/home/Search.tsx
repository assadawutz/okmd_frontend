"use client";

import { useState } from "react";
import type { KeyboardEvent } from "react";
import Image from "next/image";
import { Search, Loader2 } from "lucide-react";
import { NEWS_DATA } from "@/data/news";

// Mock data for AI summary based on search query
const MOCK_AI_SUMMARIES: Record<string, string> = {
  default: `ในปี 2025 การเลือกเรียนควรพิจารณาจากแนวโน้มและความต้องการของตลาดแรงงาน รวมถึงการพัฒนาเทคโนโลยีที่มีการเปลี่ยนแปลงอย่างรวดเร็ว ดังนี้
เทคโนโลยีสารสนเทศและการสื่อสาร: ความต้องการผู้เชี่ยวชาญด้าน IT, AI, และการพัฒนาแอปพลิเคชันยังคงสูง
การศึกษาและการพัฒนาทักษะ: การเรียนรู้วิธีการเรียนรู้ (Meta Learning) จะเป็นสิ่งสำคัญในการปรับตัวในโลกที่เปลี่ยนแปลง
นวัตกรรมและการออกแบบ: การเรียนรู้ด้านการออกแบบผลิตภัณฑ์และบริการที่ตอบโจทย์ผู้ใช้จะมีความสำคัญ
การพัฒนาทักษะทางสังคมและอารมณ์: ทักษะการสื่อสารและการทำงานร่วมกับผู้อื่นจะยังคงมีความสำคัญในทุกอาชีพ
การเลือกเรียนในด้านที่มีความสนใจและสามารถปรับตัวได้ตามแนวโน้มในอนาคตจะช่วยให้คุณประสบความสำเร็จในอาชีพได้
`
};

type SearchResultItem = {
  title: string;
  text: string;
};

export default function OkmdSearchSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [aiSummary, setAiSummary] = useState(MOCK_AI_SUMMARIES.default);
  const [searchResults, setSearchResults] = useState<SearchResultItem[]>([]);

  const handleSearch = () => {
    const q = searchQuery.trim();
    if (!q) return;

    setIsSearching(true);

    const query = q.toLowerCase();
    const results = Object.values(NEWS_DATA)
      .filter((n) => {
        const haystack = `${n.title}\n${n.body}`.toLowerCase();
        return haystack.includes(query);
      })
      .map((n) => ({
        title: n.title,
        text: n.body.replace(/\s+/g, " ").trim(),
      }));

    setSearchResults(results);
    setAiSummary(MOCK_AI_SUMMARIES.default);
    setHasSearched(true);
    setIsSearching(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    handleSearch();
  };

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-6 lg:px-10">
        {/* -------------------------------------------------------------- */}
        {/* HEADER SEARCH ZONE */}
        {/* -------------------------------------------------------------- */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Small Title */}
          <div className="text-xs sm:text-sm font-light uppercase tracking-[8px] sm:tracking-[12px] text-okmd-cyan">
            KNOWLEDGE IS OPPORTUNITY
          </div>
        </div>

        {/* SEARCH BLOCK */}
        <div className="mt-10 max-w-4xl mx-auto">
          {/* Dark container */}
          <div className="bg-[#1B1D20] rounded-2xl sm:rounded-3xl p-4 sm:p-5">
            {/* Intro text */}
            <p className="text-sm sm:text-base font-medium text-white mb-4">
              เรามอบประสบการณ์การค้นหาอย่างแม่นยำ ช่วยให้คุณได้คำตอบตรงใจ รวดเร็ว
            </p>

            {/* White card with search */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
              <p className="text-sm font-medium text-okmd-dark mb-2">การค้นหาที่ฉลาดและแม่นยำ</p>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="พิมพ์เป้าหมายของคุณที่นี่ เช่น AI, OKMD, การเรียนรู้"
                  className="
                    flex-1 border-b-2 border-okmd-cyan bg-transparent
                    py-2 text-base sm:text-lg
                    text-okmd-dark font-light
                    outline-none placeholder:text-okmd-gray-light
                    focus:border-okmd-cyan-dark transition-colors
                  "
                />
                <button
                  type="button"
                  onClick={handleSearch}
                  disabled={isSearching || !searchQuery.trim()}
                  className="flex-shrink-0 flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-[#74CEE2] hover:bg-[#5FC4D8] hover:scale-105 active:scale-95 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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

        {/* -------------------------------------------------------------- */}
        {/* SECTION: AI SUMMARY + RESULTS (Show only when searched) */}
        {/* -------------------------------------------------------------- */}
        {hasSearched && (
          <div className="mt-12 md:mt-16 animate-fadeIn">
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
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#1B1D20]">ข้อมูลภาพรวมโดย AI</h2>
                <p className="text-sm text-gray-500 mt-0.5">
                  ผลการค้นหาสำหรับ: &quot;{searchQuery}&quot;
                </p>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-t border-[#E4E4E4] mb-6 sm:mb-8" />

            {/* Summary Box */}
            <div
              className="
                border border-[#E6E6E6]
                bg-white
                p-6 sm:p-8 lg:p-10
                rounded-xl sm:rounded-2xl
                shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                text-base sm:text-lg leading-relaxed text-[#444]
              "
            >
              <p className="whitespace-pre-line">{aiSummary}</p>

              <button
                type="button"
                className="
                  mt-5 sm:mt-6 inline-flex items-center gap-2
                  text-[#1B9DBC] text-base font-medium
                  hover:text-[#168AAF] hover:underline
                  transition-all
                "
              >
                อ่านเพิ่มเติม
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 3l6 5-6 5" />
                </svg>
              </button>
            </div>

            {/* RESULTS LIST */}
            <div className="mt-10 md:mt-12">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#1B1D20] mb-6 sm:mb-8">
                ผลการค้นหา {searchResults.length} รายการ
              </h3>

              <div className="flex flex-col gap-6 sm:gap-8">
                {searchResults.map((item, idx) => (
                  <div key={`${item.title}-${idx}`} className="group cursor-pointer">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#1B1D20] mb-2 group-hover:text-[#168AAF] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-[#898989] leading-relaxed">{item.text}</p>
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
    </section>
  );
}
