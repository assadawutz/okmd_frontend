"use client";
import { useState } from "react";
import { thaiIdAutoFill } from "./thaiid";
// import { thaiIdAutoFill } from "@/components/complaint/thaiid";

export default function ComplaintSubmit() {
  const [form, setForm] = useState({
    thaiId: "",
    fullname: "",
    phone: "",
    email: "",
    type: "",
    detail: "",
  });

  const update = (k: string, v: string) => setForm((s) => ({ ...s, [k]: v }));

  const handleThaiId = (v: string) => {
    update("thaiId", v);

    const auto = thaiIdAutoFill(v);
    if (auto) {
      setForm((s) => ({
        ...s,
        ...auto,
      }));
    }
  };

  return (
    <div className="max-w-[800px]">
      <div className="mb-6">
        <label className="text-gray-700 font-medium">เลขบัตรประชาชน</label>
        <input
          value={form.thaiId}
          onChange={(e) => handleThaiId(e.target.value)}
          className="mt-1 w-full border p-3 rounded-lg"
          placeholder="กรอกเลข 13 หลัก"
        />
      </div>

      <div className="mb-6">
        <label className="text-gray-700 font-medium">ชื่อ-นามสกุล</label>
        <input
          value={form.fullname}
          onChange={(e) => update("fullname", e.target.value)}
          className="mt-1 w-full border p-3 rounded-lg"
        />
      </div>

      <div className="mb-6">
        <label className="text-gray-700 font-medium">เบอร์โทรศัพท์</label>
        <input
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          className="mt-1 w-full border p-3 rounded-lg"
        />
      </div>

      <div className="mb-6">
        <label className="text-gray-700 font-medium">อีเมล</label>
        <input
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className="mt-1 w-full border p-3 rounded-lg"
        />
      </div>

      <div className="mb-6">
        <label className="text-gray-700 font-medium">ประเภทเรื่องร้องเรียน</label>
        <select
          value={form.type}
          onChange={(e) => update("type", e.target.value)}
          className="mt-1 w-full border p-3 rounded-lg"
        >
          <option value="">เลือกหัวข้อ</option>
          <option value="service">บริการประชาชน</option>
          <option value="staff">เจ้าหน้าที่</option>
          <option value="content">ข้อมูลและเนื้อหา</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="text-gray-700 font-medium">รายละเอียด</label>
        <textarea
          rows={5}
          value={form.detail}
          onChange={(e) => update("detail", e.target.value)}
          className="mt-1 w-full border p-3 rounded-lg"
        />
      </div>

      <button className="px-8 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition">
        ส่งเรื่องร้องเรียน
      </button>
    </div>
  );
}
