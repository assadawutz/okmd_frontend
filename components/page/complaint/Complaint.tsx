"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function Complaint() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    detail: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Complaint submitted:", formData);
  };

  return (
    <div className="w-full space-y-8">
      {/* HEADER BLOCK */}
      <div className="w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden relative shadow-sm">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/complaint-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            แจ้งเรื่อง <span className="text-[#74CEE2]">ร้องเรียน</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            ช่องทางการรับเรื่องร้องเรียนและข้อเสนอแนะ
          </p>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="flex items-center text-sm text-gray-500 px-2">
        <Link href="/" className="hover:text-[#16A7CB] transition-colors">
          หน้าหลัก
        </Link>
        <span className="mx-2">›</span>
        <span className="text-[#16A7CB] font-medium">เรื่องร้องเรียน</span>
      </div>

      {/* FORM CONTENT */}
      <div className="flex justify-center">
        <div className="w-full max-w-4xl bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D20] mb-6 text-center">
            แบบฟอร์มแจ้งเรื่องร้องเรียน
          </h2>
          <p className="text-gray-500 mb-10 text-center max-w-2xl mx-auto">
            กรุณากรอกข้อมูลให้ครบถ้วนเพื่อเจ้าหน้าที่ตรวจสอบและดำเนินการแก้ไข
            <br className="hidden md:inline" />{" "}
            ข้อมูลของท่านจะถูกเก็บเป็นความลับ
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="ชื่อ-นามสกุล"
                placeholder="ระบุชื่อ-นามสกุล ของคุณ"
                value={formData.name}
                onChange={handleChange}
                name="name"
                required
              />
              <Input
                label="เบอร์โทรศัพท์"
                type="tel"
                placeholder="08x-xxx-xxxx"
                value={formData.phone}
                onChange={handleChange}
                name="phone"
                required
              />
            </div>

            <Input
              label="อีเมล"
              type="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              name="email"
              required
            />

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                หัวข้อเรื่องร้องเรียน
              </label>
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/20 focus:border-[#16A7CB] transition-all bg-white text-sm"
                required
              >
                <option value="">เลือกหัวข้อ</option>
                <option value="service">การให้บริการของเจ้าหน้าที่</option>
                <option value="system">ระบบสารสนเทศ/เว็บไซต์</option>
                <option value="corruption">การทุจริตและประพฤติมิชอบ</option>
                <option value="other">อื่นๆ</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                รายละเอียด
              </label>
              <textarea
                name="detail"
                value={formData.detail}
                onChange={handleChange}
                rows={6}
                placeholder="ระบุรายละเอียดของเรื่องที่ต้องการร้องเรียน..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/20 focus:border-[#16A7CB] transition-all bg-white resize-none text-sm"
                required
              ></textarea>
            </div>

            <div className="pt-4 flex justify-center">
              <Button className="w-full md:w-56 py-3 text-lg rounded-xl shadow-lg shadow-[#16A7CB]/20">
                ส่งเรื่องร้องเรียน
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
