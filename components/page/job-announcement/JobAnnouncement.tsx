"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function JobAnnouncement() {
  const [idNumber, setIdNumber] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<"success" | "fail" | null>(null);

  const handleCheck = () => {
    // Mock check - simulate result
    if (idNumber.length === 13) {
      setResult(Math.random() > 0.5 ? "success" : "fail");
      setShowResult(true);
    }
  };

  const handleClose = () => {
    setShowResult(false);
    setResult(null);
    setIdNumber("");
  };

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      
      {/* Background with shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8F4F8] via-white to-[#FFF9E6]">
        {/* Decorative shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300/50 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-pink-300/40 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-cyan-300/40 rounded-full blur-xl"></div>
        <div className="absolute bottom-60 right-10 w-24 h-24 bg-green-300/40 rotate-45"></div>
        <div className="absolute top-60 left-[20%] w-16 h-16 bg-blue-300/40 rounded-full"></div>
        {/* Line patterns */}
        <div className="absolute top-40 left-[15%] w-20 h-0.5 bg-pink-300/50 rotate-45"></div>
        <div className="absolute bottom-40 right-[25%] w-16 h-0.5 bg-cyan-300/50 -rotate-12"></div>
      </div>

      <div className="relative z-10">
        {/* Breadcrumb */}
        <div className="container mx-auto pt-6 md:pt-8 pb-4">
          <div className="text-sm text-gray-500 font-medium">
            <Link href="/" className="hover:text-[#16A7CB]">หน้าหลัก</Link>
            {" > "}
            <span className="text-[#16A7CB]">Announcement of Successful Applicants</span>
          </div>
        </div>

        <div className="container mx-auto pb-16">
          
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-1">
              <span className="text-[#1B1D20]">Announcement of </span>
              <span className="text-[#16A7CB]">Successful Applicants</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-[#1B1D20]">
              ประกาศผู้ผ่านการคัดเลือก
            </h2>
            <p className="text-gray-500 text-sm mt-2">16 ตุลาคม 2568</p>
          </div>

          {/* Search Form */}
          <div className="max-w-2xl">
            <label className="block text-sm font-medium text-[#1B1D20] mb-2">
              กรอกหมายเลขบัตรประจำตัวประชาชน <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="กรอกเลขบัตรประจำตัวประชาชน"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value.replace(/\D/g, "").slice(0, 13))}
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/30 focus:border-[#16A7CB]"
              />
              <button
                onClick={handleCheck}
                disabled={idNumber.length !== 13}
                className="px-8 py-3 bg-[#16A7CB] text-white rounded-lg text-sm font-medium hover:bg-[#0e8aa8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ตรวจสอบข้อมูล
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Result Modal */}
      {showResult && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 text-center shadow-xl">
            
            {result === "success" ? (
              <>
                {/* Success Icon */}
                <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-[#1B1D20] mb-2">
                  ยินดีด้วยคุณ<span className="text-[#16A7CB]">ผ่านการคัดเลือก</span>
                </h3>
                <p className="text-gray-600 mb-6">คุณ ปลายฟ้า อำนวยชัย</p>
              </>
            ) : (
              <>
                {/* Fail Icon */}
                <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-[#1B1D20] mb-2">
                  รอบนี้ยังไม่ผ่าน <span className="text-[#E74C3C]">ไว้สมัครใหม่นะ</span>
                </h3>
                <p className="text-gray-600 mb-6">คุณ ปลายฟ้า อำนวยชัย</p>
              </>
            )}
            
            <button
              onClick={handleClose}
              className="px-8 py-3 bg-[#16A7CB] text-white rounded-lg text-sm font-medium hover:bg-[#0e8aa8] transition-colors"
            >
              กลับสู่หน้าหลัก
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
