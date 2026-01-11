"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLine,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
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
    console.log("Form submitted:", formData);
    // Add submission logic here
  };

  return (
    <div className="w-full space-y-8">
      {/* HEADER BLOCK */}
      <div className="w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden relative shadow-sm">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/contact-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            ติดต่อ <span className="text-[#74CEE2]">เรา</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            ช่องทางการติดต่อและแผนที่ OKMD
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 px-2">
        <Link href="/" className="hover:text-[#16A7CB] transition-colors">
          หน้าหลัก
        </Link>
        <span className="mx-2">›</span>
        <span className="text-[#16A7CB] font-medium">ติดต่อเรา</span>
      </div>

      {/* CONTENT STACK */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT: INFO & MAP */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-[#1B1D20] mb-6 border-l-4 border-[#16A7CB] pl-3">
              สำนักงาน OKMD
            </h2>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[#16A7CB] text-xl mt-1 flex-shrink-0" />
                <p className="leading-relaxed text-sm md:text-base">
                  อาคารจัตุรัสจามจุรี ชั้น 20 ถนนพญาไท <br />
                  แขวงปทุมวัน เขตปทุมวัน กรุงเทพฯ 10330
                  <br />
                  (ภายในจุฬาลงกรณ์มหาวิทยาลัย)
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#16A7CB] text-lg flex-shrink-0" />
                <p className="text-sm md:text-base">02-105-6500</p>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#16A7CB] text-lg flex-shrink-0" />
                <p className="text-sm md:text-base">saraban@okmd.or.th</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#16A7CB] font-bold flex-shrink-0 w-5 text-sm">
                  Fax.
                </span>
                <p className="text-sm md:text-base">02-105-6556</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-[#1B1D20] mb-4">ติดตามเรา</h3>
            <div className="flex gap-4">
              {[
                { icon: FaFacebook, color: "bg-[#1877F2]" },
                { icon: FaTwitter, color: "bg-[#1DA1F2]" },
                { icon: FaYoutube, color: "bg-[#FF0000]" },
                { icon: FaLine, color: "bg-[#00B900]" },
              ].map((Item, i) => (
                <a
                  key={i}
                  href="#"
                  className={`w-10 h-10 rounded-full ${Item.color} text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md`}
                >
                  <Item.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: FORM & MAP */}
        <div className="space-y-8">
          <div className="w-full h-[250px] bg-gray-100 rounded-3xl overflow-hidden shadow-sm border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15502.569427329969!2d100.529241!3d13.739775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed3715e714f%3A0xe67540203f707f7c!2sOKMD!5e0!3m2!1sen!2sth!4v1704184000000!5m2!1sen!2sth"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="bg-gray-50 rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
            <h2 className="text-xl md:text-2xl font-bold text-[#1B1D20] mb-2">
              ส่งข้อความถึงเรา
            </h2>
            <p className="text-gray-500 mb-6 text-sm">
              กรอกข้อมูลด้านล่างเพื่อติดต่อสอบถาม
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="ชื่อ-นามสกุล"
                placeholder="ระบุชื่อ-นามสกุล"
                value={formData.name}
                onChange={handleChange}
                name="name"
              />
              <Input
                label="อีเมล"
                type="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
                name="email"
              />

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  หัวข้อติดต่อ
                </label>
                <select
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/20 focus:border-[#16A7CB] bg-white transition-all text-sm"
                >
                  <option value="">เลือกหัวข้อติดต่อ</option>
                  <option value="general">สอบถามข้อมูลทั่วไป</option>
                  <option value="complaint">รับเรื่องร้องเรียน</option>
                  <option value="partnership">ติดต่อร่วมงาน/วิทยากร</option>
                  <option value="other">อื่นๆ</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  ข้อความ
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="รายละเอียด..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/20 focus:border-[#16A7CB] bg-white transition-all resize-none text-sm"
                />
              </div>

              <Button className="w-full py-3 bg-[#16A7CB] hover:bg-[#138FA8] text-white rounded-xl shadow-lg shadow-[#16A7CB]/20">
                ส่งข้อความ
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
