"use client";

import { useState } from "react";
import React from "react";
import {
  ChevronLeft,
  CheckCircle2,
  AlertCircle,
  Trash2,
  UploadCloud,
  FileText,
  Send,
} from "lucide-react";
import Link from "next/link";
import { ContainerPage } from "@/components/shared/ContainerPage";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function RecruitmentApplyPage() {
  const [modal, setModal] = useState<"none" | "save" | "delete" | "success">(
    "none"
  );
  const [file, setFile] = useState<string | null>(null);

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
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              สมัครงาน <span className="text-[#74CEE2]">ออนไลน์</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              กรอกข้อมูลเพื่อสมัครร่วมงานกับเรา
            </p>
          </div>
        </div>

        {/* BREADCRUMB */}
        <div className="flex items-center text-sm text-gray-500 px-2">
          <Link
            href="/recruitment/list"
            className="hover:text-[#16A7CB] transition-colors flex items-center gap-1"
          >
            <ChevronLeft size={16} /> กลับหน้ารายการ
          </Link>
          <span className="mx-2">›</span>
          <span className="text-[#16A7CB] font-medium">แบบฟอร์มใบสมัคร</span>
        </div>

        {/* FORM CONTENT */}
        <div className="w-full md:w-2xl mx-auto bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
            <div className="w-10 h-10 rounded-full bg-[#E8F6FB] flex items-center justify-center text-[#16A7CB]">
              <FileText size={20} />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#1B1D20]">
              ข้อมูลผู้สมัคร
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                ชื่อ - นามสกุล *
              </label>
              <Input placeholder="กรอกชื่อ-นามสกุล ของท่าน" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                เบอร์ติดต่อ *
              </label>
              <Input placeholder="08X-XXX-XXXX" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                อีเมล *
              </label>
              <Input placeholder="name@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                ตำแหน่งที่สมัคร *
              </label>
              <Input
                placeholder="ระบุตำแหน่ง"
                defaultValue="เจ้าหน้าที่ช่วยปฏิบัติงานบริหารทรัพยากรกายภาพ ด้าน IT"
                disabled
                className="bg-gray-50 text-gray-500 cursor-not-allowed"
              />
            </div>
          </div>

          <div className="space-y-4 mb-10">
            <label className="text-sm font-semibold text-gray-700">
              เอกสารแนบ (Resume / CV / Portfolio) *{" "}
              <span className="text-xs text-gray-400 font-normal">
                (PDF, Max 5MB)
              </span>
            </label>
            <div className="border-2 border-dashed border-gray-200 rounded-3xl p-8 flex flex-col items-center justify-center bg-gray-50/50 hover:bg-[#E8F6FB]/30 hover:border-[#16A7CB]/50 transition-all cursor-pointer group">
              {file ? (
                <div className="flex items-center justify-between w-full max-w-md bg-white p-4 rounded-2xl shadow-sm border border-gray-200">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="font-medium text-gray-700 truncate">
                      {file}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setModal("delete");
                    }}
                    className="p-2 text-red-400 hover:bg-red-50 rounded-xl transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ) : (
                <div
                  className="text-center group-hover:scale-105 transition-transform duration-300"
                  onClick={() => setFile("Resume_2025.pdf")}
                >
                  <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 text-[#16A7CB]">
                    <UploadCloud size={32} />
                  </div>
                  <p className="text-gray-600 font-medium">
                    คลิกเพื่ออัปโหลดไฟล์
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    หรือลากไฟล์มาวางที่นี่
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end pt-6 border-t border-gray-100">
            <Button
              onClick={() => setModal("save")}
              className="w-full md:w-auto px-12 rounded-xl py-3 shadow-lg shadow-[#16A7CB]/20 text-lg flex items-center justify-center gap-2"
            >
              <Send size={20} /> ส่งใบสมัคร
            </Button>
          </div>
        </div>

        {/* Modal Overlay */}
        {modal !== "none" && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setModal("none")}
          >
            <div
              className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-in fade-in zoom-in duration-200 border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              {modal === "save" && (
                <>
                  <div className="w-20 h-20 bg-[#E8F6FB] text-[#16A7CB] rounded-full flex items-center justify-center mx-auto mb-6">
                    <AlertCircle size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#1B1D20]">
                    ยืนยันการสมัคร?
                  </h3>
                  <p className="text-gray-500 mb-8 text-sm">
                    กรุณาตรวจสอบข้อมูลให้ถูกต้องก่อนส่ง
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setModal("none")}
                      className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
                    >
                      แก้ไข
                    </button>
                    <Button
                      onClick={() => setModal("success")}
                      className="flex-1 rounded-xl shadow-none"
                    >
                      ยืนยัน
                    </Button>
                  </div>
                </>
              )}

              {modal === "delete" && (
                <>
                  <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Trash2 size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#1B1D20]">
                    ลบไฟล์นี้?
                  </h3>
                  <p className="text-gray-500 mb-8 text-sm">
                    คุณต้องการลบไฟล์ที่เลือกไว้ออกใช่หรือไม่
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setModal("none")}
                      className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
                    >
                      ยกเลิก
                    </button>
                    <button
                      onClick={() => {
                        setFile(null);
                        setModal("none");
                      }}
                      className="flex-1 py-2.5 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition-colors shadow-lg shadow-red-500/20"
                    >
                      ลบเลย
                    </button>
                  </div>
                </>
              )}

              {modal === "success" && (
                <>
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#1B1D20]">
                    ส่งใบสมัครเรียบร้อย
                  </h3>
                  <p className="text-gray-500 mb-8 text-sm">
                    เราได้รับข้อมูลของท่านแล้ว
                    ทางเจ้าหน้าที่จะติดต่อกลับไปโดยเร็วที่สุด
                  </p>
                  <Link href="/recruitment/list">
                    <Button className="w-full rounded-xl">กลับหน้าหลัก</Button>
                  </Link>
                </>
              )}
            </div>
            <div>
              <label className="block text-sm text-[#40444D] mb-2">เพศ</label>
              <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#16A7CB] transition-colors bg-white">
                <option value="">เลือก</option>
                <option value="male">ชาย</option>
                <option value="female">หญิง</option>
                <option value="other">อื่นๆ</option>
              </select>
            </div>

            {/* Row 2 */}
            <div>
              <label className="block text-sm text-[#40444D] mb-2">
                เบอร์ติดต่อ
              </label>
              <input
                type="tel"
                placeholder="เบอร์ติดต่อ"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#16A7CB] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-[#40444D] mb-2">
                วันเดือนปีเกิด
              </label>
              <input
                type="date"
                placeholder="วันเดือนปีเกิด"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#16A7CB] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-[#40444D] mb-2">
                อีเมล *
              </label>
              <input
                type="email"
                placeholder="yasumin.s@hap-thailand.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#16A7CB] transition-colors bg-gray-50"
                disabled
              />
            </div>
          </div>

          {/* File Upload Section */}
          <div className="mb-8">
            <label className="block text-sm text-[#40444D] mb-3">
              ไฟล์แนบ *
            </label>
            <label className="inline-flex items-center px-6 py-3 bg-[#16A7CB] text-white text-sm rounded-lg cursor-pointer hover:bg-[#1295B5] transition-colors">
              <input
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
              เพิ่มไฟล์เอกสารที่เกี่ยวข้องกับการสมัครงาน
            </label>

            {/* Uploaded Files List */}
            {files.length > 0 && (
              <div className="mt-4 space-y-2">
                {files.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <FileText size={20} className="text-gray-400" />
                      <span className="text-sm text-[#40444D]">{file.name}</span>
                    </div>
                    <button
                      onClick={() => removeFile(file.id)}
                      className="p-2 text-[#16A7CB] hover:bg-[#16A7CB]/10 rounded-full transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </ContainerPage>
  );
}
