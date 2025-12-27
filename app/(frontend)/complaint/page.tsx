"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Tab = "channels" | "submit" | "track" | "report";

export default function ComplaintPage() {
  const [activeTab, setActiveTab] = useState<Tab>("channels");

  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* Breadcrumb */}
      <div className="container mx-auto pt-6 md:pt-8 pb-4">
        <div className="text-sm text-gray-500 font-medium">
          <Link href="/" className="hover:text-[#16A7CB]">หน้าหลัก</Link>
          {" > "}
          <Link href="/complaint" className="hover:text-[#16A7CB]">รับเรื่อง ร้องเรียน</Link>
          {" > "}
          <span className="text-[#16A7CB]">
            {activeTab === "channels" && "ช่องทางการร้องเรียน"}
            {activeTab === "submit" && "รับเรื่องร้องเรียน"}
            {activeTab === "track" && "ติดตามเรื่องร้องเรียนของท่าน"}
            {activeTab === "report" && "รายงานผลการร้องเรียน"}
          </span>
        </div>
      </div>

      <div className="container mx-auto pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Sidebar */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-[#1B1D20] mb-2">
              รับเรื่อง <span className="text-[#16A7CB]">ร้องเรียน</span>
            </h2>

            <nav className="mt-6 space-y-1">
              <button
                onClick={() => setActiveTab("channels")}
                className={`w-full text-left py-3 px-4 text-sm font-medium border-b border-gray-100 transition-colors ${
                  activeTab === "channels" ? "text-[#16A7CB]" : "text-gray-600 hover:text-[#16A7CB]"
                }`}
              >
                ช่องทางการร้องเรียน
              </button>
              <button
                onClick={() => setActiveTab("submit")}
                className={`w-full text-left py-3 px-4 text-sm font-medium border-b border-gray-100 transition-colors ${
                  activeTab === "submit" ? "text-[#16A7CB]" : "text-gray-600 hover:text-[#16A7CB]"
                }`}
              >
                รับเรื่องร้องเรียน
              </button>
              <button
                onClick={() => setActiveTab("track")}
                className={`w-full text-left py-3 px-4 text-sm font-medium border-b border-gray-100 transition-colors ${
                  activeTab === "track" ? "text-[#16A7CB]" : "text-gray-600 hover:text-[#16A7CB]"
                }`}
              >
                ติดตามเรื่องร้องเรียนของท่าน
              </button>
              <button
                onClick={() => setActiveTab("report")}
                className={`w-full text-left py-3 px-4 text-sm font-medium border-b border-gray-100 transition-colors ${
                  activeTab === "report" ? "text-[#16A7CB]" : "text-gray-600 hover:text-[#16A7CB]"
                }`}
              >
                รายงานผลการร้องเรียน
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            {activeTab === "channels" && <ChannelsContent />}
            {activeTab === "submit" && <SubmitContent />}
            {activeTab === "track" && <TrackContent />}
            {activeTab === "report" && <ReportContent />}
          </div>

        </div>
      </div>
    </div>
  );
}

function ChannelsContent() {
  const channels = [
    {
      logo: "/okmd.png",
      title: "ส่วนงานกลาง :",
      subtitle: "สำนักงานบริหารและพัฒนาองค์ความรู้ (สบร.)",
      address: "69/18-19 อาคารวิทยาลัยการจัดการ มหาวิทยาลัยมหิดล ชั้น 18 ถนนวิภาวดีรังสิต แขวงสามเสนใน เขตพญาไท กรุงเทพมหานคร 10400",
      phone: "02 105 6552",
    },
    {
      logo: "/mu%203.png",
      title: "ส่วนงานกลาง :",
      subtitle: "สำนักงานบริหารและพัฒนาองค์ความรู้ (สบร.)",
      address: "4 ถนนสนามไชย แขวงพระบรมมหาราชวัง เขตพระนคร กรุงเทพมหานคร 10200",
      phone: "02 225 2777",
    },
    {
      logo: "/tk.png",
      title: "สถาบันอุทยานการเรียนรู้ (สอร.)",
      subtitle: "",
      address: "อาคาร ดี เอ็มทริคสิตี้ ชั้น 17 999/9 ถนนพระราม 1 แขวงปทุมวัน เขตปทุมวัน กรุงเทพมหานคร 10330",
      phone: "02 264 5963",
    },
  ];

  return (
    <div>
      {/* Section Title */}
      <div className="bg-[#16A7CB] text-white py-4 px-6 rounded-t-xl">
        <h3 className="text-lg font-semibold">ช่องทางการร้องเรียนการทุจริตและประพฤติมิชอบ</h3>
      </div>

      {/* Channels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {channels.map((channel, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-gray-100 p-6 text-center">
            <Image
              src={channel.logo}
              alt={channel.title}
              width={100}
              height={60}
              className="mx-auto object-contain h-16 mb-4"
            />
            <p className="text-sm text-gray-600 mb-1">{channel.title}</p>
            <p className="text-sm text-gray-600 mb-3">{channel.subtitle}</p>
            <div className="flex items-start justify-center gap-2 text-sm text-gray-500 mb-3">
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span className="text-left">{channel.address}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{channel.phone}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Email Section */}
      <div className="bg-[#16A7CB] text-white py-4 px-6 rounded-xl mt-8">
        <h3 className="text-lg font-semibold">ช่องทางไปรษณีย์อิเล็กทรอนิกส์</h3>
      </div>
      
      <div className="mt-6 flex items-start gap-6 p-6 bg-gray-50 rounded-xl">
        <div className="w-16 h-16 bg-[#E8F6FB] rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-[#16A7CB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">E-Mail : express@okmd.or.th</p>
          <p className="text-sm font-medium text-gray-700">ช่องทางไปรษณีย์</p>
          <p className="text-sm text-gray-500 mt-2">
            สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน) 69/18-19 อาคารวิทยาลัยการจัดการ มหาวิทยาลัยมหิดล ชั้น 18 ถนนวิภาวดีรังสิต แขวงลาดยาว เขตจตุจักร กรุงเทพมหานคร 10400
          </p>
        </div>
      </div>
    </div>
  );
}

function SubmitContent() {
  return (
    <div>
      {/* ThaiID Login */}
      <div className="bg-[#1E3A5F] text-white py-3 px-6 rounded-xl mb-6">
        <div className="flex items-center justify-between">
          <span className="text-sm">ข้อมูลส่วนตัว *</span>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <button className="flex items-center gap-3 bg-[#1E3A5F] text-white py-3 px-6 rounded-lg font-semibold">
          <span className="text-xl">Thai</span>
          <span className="text-xl font-bold text-yellow-400">D</span>
        </button>
        <span className="text-sm text-gray-500">
          คลิก ThaiID เพื่อยืนยันตัวตนและกรอกข้อมูลอัตโนมัติ (สำหรับผู้ที่มี ThaiID)
        </span>
      </div>

      {/* Form */}
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ชื่อ - นามสกุล (ผู้แจ้ง) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="กรอกชื่อ - นามสกุล"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/30"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ข้อมูลบัตรประชาชน <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="กรอกข้อมูลบัตรประชาชน"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/30"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ที่อยู่ผู้แจ้ง <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="กรอกที่อยู่ผู้แจ้ง"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/30"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ตำบล/แขวง <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="ตำบล/แขวง"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/30"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              อำเภอ/เขต <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="อำเภอ/เขต"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/30"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              จังหวัด
            </label>
            <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/30">
              <option>กรุณาเลือกจังหวัด</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              รหัสไปรษณีย์ <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="กรอกรหัสไปรษณีย์"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/30"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              โทรศัพท์ <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="กรอกโทรศัพท์"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/30"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              อีเมล
            </label>
            <input
              type="email"
              placeholder="กรอกอีเมล"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/30"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ส่วนงานที่ร้องเรียน <span className="text-red-500">*</span>
          </label>
          <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/30">
            <option>กรุณาเลือกส่วนงานที่ร้องเรียน</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            เรื่องที่ร้องเรียน <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="กรอกเรื่องที่ร้องเรียน"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/30"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            รายละเอียดการร้องเรียน <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={5}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/30"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            เอกสารประกอบ (ขนาดไฟล์ไม่เกิน 5 MB เป็นไฟล์ที่มีนามสกุลดังนี้ gif, jpg, png, pdf, doc, xls) <span className="text-red-500">*</span>
          </label>
          <button
            type="button"
            className="px-6 py-3 bg-[#16A7CB] text-white rounded-lg text-sm font-medium hover:bg-[#0e8aa8] transition-colors"
          >
            เพิ่มไฟล์เอกสารที่เกี่ยวข้อง
          </button>
        </div>

        <div className="flex items-start gap-3">
          <input type="checkbox" className="w-5 h-5 mt-0.5" />
          <span className="text-sm text-gray-600">
            กรุณาเลือกยอมรับเงื่อนไขข้อตกลงการใช้บริการ และ นโยบายความเป็นส่วนตัวของ OKMD
          </span>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <div className="bg-gray-100 p-4 rounded-lg">
            <span className="text-sm text-gray-600">reCAPTCHA</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full md:w-auto px-12 py-4 bg-[#16A7CB] text-white rounded-xl text-base font-medium hover:bg-[#0e8aa8] transition-colors"
        >
          ส่งเรื่องร้องเรียน
        </button>
      </form>
    </div>
  );
}

function TrackContent() {
  const mockData = [
    {
      date: "01/08/2025 13:56:07",
      citizenId: "ZAP",
      topic: "ZAP",
      department: "สำนักงานบริหารและพัฒนาองค์ความรู้ (ส่วนงานกลาง)",
      status: "อยู่ระหว่างดำเนินการ",
    },
    {
      date: "28/01/2025 15:40:49",
      citizenId: "default",
      topic: "default",
      department: "สำนักงานอุทยานการเรียนรู้ (สอร.)",
      status: "ดำเนินการแก้ไขเรียบร้อยแล้ว",
    },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold text-[#1B1D20] mb-6">
        รับเรื่อง <span className="text-[#16A7CB]">ร้องเรียน</span>
      </h3>

      <div className="mb-6">
        <input
          type="text"
          placeholder="ใส่หมายเลขประจำตัวประชาชนของท่านที่ต้องการติดตาม"
          className="w-full max-w-lg px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/30"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#16A7CB] text-white">
              <th className="px-4 py-3 text-left font-medium">วันที่</th>
              <th className="px-4 py-3 text-left font-medium">เลขบัตรประชาชน</th>
              <th className="px-4 py-3 text-left font-medium">เรื่องร้องเรียน</th>
              <th className="px-4 py-3 text-left font-medium">ส่วนงานที่ร้องเรียน</th>
              <th className="px-4 py-3 text-left font-medium">สถานะร้องเรียน</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-3">{row.date}</td>
                <td className="px-4 py-3">{row.citizenId}</td>
                <td className="px-4 py-3">{row.topic}</td>
                <td className="px-4 py-3">{row.department}</td>
                <td className="px-4 py-3">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-[#16A7CB] text-white px-4 py-2 text-sm mt-4 rounded">
        Total: {mockData.length}
      </div>
    </div>
  );
}

function ReportContent() {
  const reportData = [
    { id: 1, month: "ม.ค 66", central: "-", museum: "-", tkpark: "-", total: "-", handled: "-", completed: "-", note: "-" },
    { id: 2, month: "ก.พ 66", central: "-", museum: "-", tkpark: "-", total: "-", handled: "-", completed: "-", note: "-" },
    { id: 3, month: "มี.ค 66", central: "-", museum: "-", tkpark: "-", total: "-", handled: "-", completed: "-", note: "-" },
    { id: 4, month: "เม.ย 66", central: "-", museum: "-", tkpark: "-", total: "-", handled: "-", completed: "-", note: "-" },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold text-[#1B1D20] mb-6">
        รับเรื่อง <span className="text-[#16A7CB]">ร้องเรียน</span>
      </h3>

      <div className="flex items-center gap-4 mb-6">
        <span className="text-sm text-gray-600">ค้นหาผลร้องเรียน</span>
        <input
          type="month"
          className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/30"
        />
        <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-600 hover:bg-gray-200">
          ค้นหา
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#16A7CB] text-white">
              <th className="px-3 py-3 text-center font-medium">ลำดับ</th>
              <th className="px-3 py-3 text-center font-medium">เดือน</th>
              <th className="px-3 py-3 text-center font-medium">ส่วนกลาง</th>
              <th className="px-3 py-3 text-center font-medium">สพร.</th>
              <th className="px-3 py-3 text-center font-medium">สอร.</th>
              <th className="px-3 py-3 text-center font-medium">วันที่รับเรื่อง</th>
              <th className="px-3 py-3 text-center font-medium">เรื่องจัดซื้อจัดจ้าง</th>
              <th className="px-3 py-3 text-center font-medium">อยู่ระหว่างดำเนินการ</th>
              <th className="px-3 py-3 text-center font-medium">ดำเนินการแล้วเสร็จ</th>
              <th className="px-3 py-3 text-center font-medium">หมายเหตุ</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((row, idx) => (
              <tr key={row.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-3 py-3 text-center">{row.id}</td>
                <td className="px-3 py-3 text-center">{row.month}</td>
                <td className="px-3 py-3 text-center">{row.central}</td>
                <td className="px-3 py-3 text-center">{row.museum}</td>
                <td className="px-3 py-3 text-center">{row.tkpark}</td>
                <td className="px-3 py-3 text-center">{row.total}</td>
                <td className="px-3 py-3 text-center">{row.handled}</td>
                <td className="px-3 py-3 text-center">{row.completed}</td>
                <td className="px-3 py-3 text-center">{row.completed}</td>
                <td className="px-3 py-3 text-center">{row.note}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-[#16A7CB] text-white">
              <td colSpan={5} className="px-3 py-3 text-center font-medium">รวมเรื่องร้องเรียน</td>
              <td className="px-3 py-3 text-center font-medium">0</td>
              <td className="px-3 py-3 text-center font-medium">0</td>
              <td className="px-3 py-3 text-center font-medium">0</td>
              <td className="px-3 py-3 text-center font-medium">0</td>
              <td className="px-3 py-3 text-center font-medium"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
