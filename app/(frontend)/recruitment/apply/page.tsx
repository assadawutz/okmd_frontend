"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Trash2, FileText } from "lucide-react";

interface UploadedFile {
  id: string;
  name: string;
}

export default function Page() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [agreed, setAgreed] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFiles((prev) => [
        ...prev,
        { id: Date.now().toString(), name: file.name },
      ]);
    }
  };

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm text-gray-500">
          <Link href="/" className="hover:text-[#16A7CB] transition-colors">
            หน้าหลัก
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-[#16A7CB]">ค้นหางาน</span>
        </nav>
      </div>

      {/* Hero Banner */}
      <div className="relative w-full h-[200px] md:h-[280px] overflow-hidden">
        <Image
          src="/images/banner/RC1(4).jpg"
          alt="Job Application Banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/career"
          className="inline-flex items-center text-sm text-[#16A7CB] mb-8 hover:opacity-80 transition-opacity"
        >
          <ChevronLeft size={20} className="mr-1" />
          ย้อนกลับ
        </Link>

        {/* Form Title */}
        <h1 className="text-2xl lg:text-3xl font-bold text-[#333] mb-8">
          ใบสมัครงาน
        </h1>

        {/* Form Section */}
        <div className="bg-white rounded-lg">
          {/* Section Header */}
          <div className="bg-[#F97316] text-white py-3 px-6 rounded-t-lg text-sm font-medium mb-6">
            ข้อมูลส่วนตัว *
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Row 1 */}
            <div>
              <label className="block text-sm text-[#40444D] mb-2">
                ชื่อ - นามสกุล
              </label>
              <input
                type="text"
                placeholder="ชื่อ - นามสกุล"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#16A7CB] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-[#40444D] mb-2">
                สัญชาติ
              </label>
              <input
                type="text"
                placeholder="สัญชาติ"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#16A7CB] transition-colors"
              />
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

          {/* Divider */}
          <div className="border-t border-gray-200 my-8" />

          {/* Agreement Checkbox */}
          <div className="mb-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 w-5 h-5 rounded border-gray-300 text-[#16A7CB] focus:ring-[#16A7CB]"
              />
              <span className="text-sm text-[#40444D]">
                กรุณาเลือกยอมรับเงื่อนไขข้อตกลงการใช้บริการ และ นโยบายความเป็นส่วนตัวของ OKMD
              </span>
            </label>
          </div>

          {/* reCAPTCHA */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 border border-gray-200 rounded-lg p-4 bg-gray-50">
              <input type="checkbox" className="w-5 h-5 rounded" />
              <span className="text-sm text-gray-600">I&apos;m not a robot</span>
              <div className="ml-4">
                <Image
                  src="/recaptcha.png"
                  alt="reCAPTCHA"
                  width={40}
                  height={40}
                  className="opacity-70"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            className="px-8 py-3 bg-[#16A7CB] text-white text-sm font-medium rounded-lg hover:bg-[#1295B5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!agreed}
          >
            สมัครงานออนไลน์
          </button>
        </div>
      </div>
    </main>
  );
}
