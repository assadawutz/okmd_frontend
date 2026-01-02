"use client";

import { useState } from "react";
import Link from "next/link";
import SubHeroBanner from "@/components/ui/SubHeroBanner";
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    <div className="w-full min-h-screen bg-white pb-20 md:pb-32">
      {/* Hero Banner */}
      <SubHeroBanner image="/contact-hero.jpg" height="h-[300px]">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            ติดต่อ <span className="text-[#74CEE2]">เรา</span>
          </h1>
          <p className="text-lg md:text-xl mt-4 text-white/90">
            ช่องทางการติดต่อและแผนที่ OKMD
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
          <span className="text-[#74CEE2]">ติดต่อเรา</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Info & Map */}
          <div className="col-span-1 lg:col-span-5 space-y-10">
            {/* Address Block */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#16A7CB] pl-4">
                สำนักงาน OKMD
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[#16A7CB] text-xl mt-1 flex-shrink-0" />
                  <p className="leading-relaxed">
                    อาคารจัตุรัสจามจุรี ชั้น 20 ถนนพญาไท <br />
                    แขวงปทุมวัน เขตปทุมวัน กรุงเทพฯ 10330
                    (ภายในจุฬาลงกรณ์มหาวิทยาลัย)
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-[#16A7CB] text-lg flex-shrink-0" />
                  <p>02-105-6500</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-[#16A7CB] text-lg flex-shrink-0" />
                  <p>saraban@okmd.or.th</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#16A7CB] font-bold flex-shrink-0 w-5">
                    Fax.
                  </span>
                  <p>02-105-6556</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                ติดตามเรา
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                >
                  <FaYoutube size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#00B900] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                >
                  <FaLine size={20} />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="w-full h-[300px] md:h-[350px] bg-gray-100 rounded-2xl overflow-hidden shadow-sm border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15502.569427329969!2d100.529241!3d13.739775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed3715e714f%3A0xe67540203f707f7c!2sOKMD!5e0!3m2!1sen!2sth!4v1704184000000!5m2!1sen!2sth"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="col-span-1 lg:col-span-7">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100 sticky top-24">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                ส่งข้อความถึงเรา
              </h2>
              <p className="text-gray-600 mb-8">
                กรอกข้อมูลด้านล่างเพื่อติดต่อสอบถามหรือแจ้งปัญหาการใช้งาน
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
                    label="อีเมล"
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    หัวข้อติดต่อ
                  </label>
                  <select
                    name="topic"
                    value={formData.topic}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        topic: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/20 focus:border-[#16A7CB] transition-all bg-white"
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
                    rows={5}
                    placeholder="รายละเอียดข้อความ..."
                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/20 focus:border-[#16A7CB] transition-all bg-white resize-none"
                    required
                  ></textarea>
                </div>

                <div className="pt-2">
                  <Button className="w-full md:w-auto px-10 py-3 text-lg active:scale-95 transition-transform duration-200">
                    ส่งข้อความ
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
