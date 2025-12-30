"use client";

import { useState } from "react";
import Link from "next/link";
import SubHeroBanner from "@/components/ui/SubHeroBanner";
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
    <div className="w-full min-h-screen bg-white">
      {/* Hero Banner */}
      <SubHeroBanner image="/bannerabout.png" height="h-[250px]">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            เข้าสู่ <span className="text-[#74CEE2]">ระบบ</span>
          </h1>
        </div>
      </SubHeroBanner>

      {/* Breadcrumb */}
      <div className="container mx-auto pt-4 sm:pt-6 md:pt-8 mb-4 sm:mb-6 md:mb-8">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="text-sm sm:text-base md:text-lg text-gray-500 font-medium">
              <Link href="/" className="hover:underline">
                หน้าหลัก
              </Link>
              {" > "}
              <span className="text-[#74CEE2]">เข้าสู่ระบบ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto pb-8 sm:pb-12 md:pb-16">
        <div className="grid grid-cols-12">
          <div className="col-span-12 sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4">
            <div className="bg-white rounded-xl shadow-md p-6 sm:p-7 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6">
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
                    className="w-5 h-5 text-[#74CEE2] border-gray-300 rounded focus:ring-[#74CEE2]"
                  />
                  <span className="ml-2 text-gray-700">จดจำการเข้าสู่ระบบ</span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-[#16A7CB] hover:underline text-sm"
                >
                  ลืมรหัสผ่าน?
                </Link>
              </div>

              <Button type="submit" className="w-full">
                เข้าสู่ระบบ
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-center text-gray-600 mb-4">
                หรือเข้าสู่ระบบด้วย
              </p>
              <Button variant="outline" className="w-full mb-3">
                เข้าสู่ระบบด้วย ThaiID
              </Button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                ยังไม่มีบัญชี?{" "}
                <Link
                  href="/register"
                  className="text-[#16A7CB] hover:underline font-semibold"
                >
                  สมัครสมาชิก
                </Link>
              </p>
            </div>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4 mt-4 sm:mt-6 text-center">
            <Link
              href="/pdpa"
              className="text-sm text-gray-500 hover:text-[#16A7CB]"
            >
              นโยบายความเป็นส่วนตัว
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

