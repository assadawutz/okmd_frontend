"use client";

import { useState } from "react";
import Link from "next/link";
import SubHeroBanner from "@/components/ui/SubHeroBanner";
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
    <div className="w-full min-h-screen bg-white pb-20 md:pb-32">
      {/* Hero Banner */}
      <SubHeroBanner image="/complaint-hero.jpg" height="h-[300px]">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            แจ้งเรื่อง <span className="text-[#74CEE2]">ร้องเรียน</span>
          </h1>
          <p className="text-lg md:text-xl mt-4 text-white/90">
            ช่องทางการรับเรื่องร้องเรียนและข้อเสนอแนะ
          </p>
        </div>
      </SubHeroBanner>

      {/* Breadcrumb */}
      <div className="border-b border-zinc-200 bg-white">
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center text-sm md:text-base text-gray-600">
          <Link
            href="/"
            className="hover:text-[#74CEE2] cursor-pointer transition"
          >
            หน้าหลัก
          </Link>
          <span className="mx-2">›</span>
          <span className="text-[#74CEE2]">เรื่องร้องเรียน</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              แบบฟอร์มแจ้งเรื่องร้องเรียน
            </h2>
            <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
              กรุณากรอกข้อมูลให้ครบถ้วน
              เพื่อเจ้าหน้าที่จะได้นำไปตรวจสอบและดำเนินการแก้ไขต่อไป
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
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/20 focus:border-[#16A7CB] transition-all bg-white"
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
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/20 focus:border-[#16A7CB] transition-all bg-white resize-none"
                  required
                ></textarea>
              </div>

              <div className="pt-4 flex justify-center">
                <Button className="w-full md:w-48 py-3 text-lg active:scale-95 transition-transform duration-200">
                  ส่งเรื่องร้องเรียน
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
