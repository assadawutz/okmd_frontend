"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password, rememberMe });
  };

  return (
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
            เข้าสู่ <span className="text-[#74CEE2]">ระบบ</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            เข้าสู่ระบบเพื่อใช้งานบริการต่างๆ ของ OKMD
          </p>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="flex items-center text-sm text-gray-500 px-2">
        <Link href="/" className="hover:text-[#16A7CB] transition-colors">
          หน้าหลัก
        </Link>
        <span className="mx-2">›</span>
        <span className="text-[#16A7CB] font-medium">เข้าสู่ระบบ</span>
      </div>

      {/* LOGIN CARD */}
      <div className="flex justify-center">
        <div className="w-full max-w-lg bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-[#1B1D20] mb-8 text-center">
            เข้าสู่ระบบ
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="อีเมล"
              type="email"
              placeholder="กรอกอีเมลของคุณ"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              label="รหัสผ่าน"
              type="password"
              placeholder="กรอกรหัสผ่านของคุณ"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-5 h-5 text-[#16A7CB] border-gray-300 rounded focus:ring-[#16A7CB]"
                />
                <span className="ml-2 text-gray-700 text-sm">
                  จดจำการเข้าสู่ระบบ
                </span>
              </label>
              <Link
                href="/forgot-password"
                className="text-[#16A7CB] hover:underline text-sm font-medium"
              >
                ลืมรหัสผ่าน?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full py-3 rounded-xl shadow-lg shadow-[#16A7CB]/20"
            >
              เข้าสู่ระบบ
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-center text-gray-500 mb-4 text-sm">
              หรือเข้าสู่ระบบด้วย
            </p>
            <Button variant="outline" className="w-full mb-3 rounded-xl">
              เข้าสู่ระบบด้วย ThaiID
            </Button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              ยังไม่มีบัญชี?{" "}
              <Link
                href="/register"
                className="text-[#16A7CB] hover:underline font-bold"
              >
                สมัครสมาชิก
              </Link>
            </p>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/pdpa"
              className="text-xs text-gray-400 hover:text-[#16A7CB] transition-colors"
            >
              นโยบายความเป็นส่วนตัว
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
