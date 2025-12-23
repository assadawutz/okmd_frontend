"use client"

import { useState } from "react"
import { validateThaiId } from "./thaiid"

export default function ComplaintForm({ mode }: { mode: string }) {
  const [form, setForm] = useState({
    fullname: "",
    thaiid: "",
    phone: "",
    email: "",
    detail: ""
  })

  const [done, setDone] = useState(false)
  const [error, setError] = useState("")

  function submit() {
    setError("")
    if (!form.fullname || !form.detail) {
      setError("กรอกข้อมูลให้ครบถ้วน")
      return
    }
    if (form.thaiid && !validateThaiId(form.thaiid)) {
      setError("เลขบัตรประชาชนไม่ถูกต้อง")
      return
    }
    setDone(true)
  }

  if (done) {
    return (
      <div className="p-8 border rounded-xl text-center bg-green-50">
        <div className="text-2xl font-bold text-green-600 mb-3">
          ส่ง {mode} สำเร็จ!
        </div>
        <p className="text-gray-500">เจ้าหน้าที่จะติดต่อกลับโดยเร็วที่สุด</p>
      </div>
    )
  }

  return (
    <div className="w-full border rounded-xl p-6 md:p-8 space-y-6">

      <div className="text-2xl font-bold">{mode}</div>

      {error && (
        <div className="p-3 bg-red-100 text-red-700 border border-red-300 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid grid-cols-12 gap-6">
        <input
          className="col-span-12 border rounded-lg px-4 py-3"
          placeholder="ชื่อ - นามสกุล"
          onChange={e => setForm({ ...form, fullname: e.target.value })}
        />

        <input
          className="col-span-12 md:col-span-6 border rounded-lg px-4 py-3"
          placeholder="เลขบัตรประชาชน (ไม่บังคับ)"
          onChange={e => setForm({ ...form, thaiid: e.target.value })}
        />

        <input
          className="col-span-12 md:col-span-6 border rounded-lg px-4 py-3"
          placeholder="เบอร์โทรศัพท์"
          onChange={e => setForm({ ...form, phone: e.target.value })}
        />

        <input
          className="col-span-12 border rounded-lg px-4 py-3"
          placeholder="อีเมล"
          onChange={e => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          rows={6}
          className="col-span-12 border rounded-lg px-4 py-3"
          placeholder="รายละเอียด"
          onChange={e => setForm({ ...form, detail: e.target.value })}
        ></textarea>

        <button
          onClick={submit}
          className="col-span-12 bg-[#16A7CB] text-white rounded-lg py-3 font-semibold hover:bg-[#1397b6]"
        >
          ส่ง {mode}
        </button>
      </div>
    </div>
  )
}
