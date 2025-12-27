"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password, rememberMe });
  };

  return (
    <div className="w-full min-h-[calc(100vh-200px)] relative overflow-hidden">
      
      {/* Background with shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8F4F8] via-white to-[#FFF9E6]">
        {/* Decorative shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300/50 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-pink-300/40 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-cyan-300/40 rounded-full blur-xl"></div>
        <div className="absolute top-60 left-[30%] w-24 h-24 bg-green-300/30 rotate-45"></div>
        <div className="absolute bottom-40 right-[20%] w-16 h-16 bg-blue-300/40 rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto py-12 md:py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[600px]">
          
          {/* LEFT - Login Form */}
          <div className="max-w-md mx-auto lg:mx-0 w-full">
            
            <h1 className="text-2xl md:text-3xl font-bold text-[#1B1D20] mb-2">
              เข้าสู่ระบบเพื่อส่งเรื่องร้องเรียน
            </h1>
            <p className="text-gray-500 text-sm mb-8">
              กรอกอีเมลและรหัสผ่านเพื่อเข้าสู่ระบบ
            </p>

            {/* ThaiID Button */}
            <button className="w-full bg-[#1E3A5F] text-white py-3.5 rounded-lg font-semibold text-lg mb-6 flex items-center justify-center gap-3 hover:bg-[#152a45] transition-colors">
              <span className="text-2xl">Thai</span>
              <span className="text-2xl font-bold text-yellow-400">D</span>
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-gray-400">หรือ</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[#1B1D20] mb-1.5">
                  อีเมล <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="info@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/30 focus:border-[#16A7CB]"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-[#1B1D20] mb-1.5">
                  รหัสผ่าน <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="******************"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#16A7CB]/30 focus:border-[#16A7CB]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-[#16A7CB] border-gray-300 rounded focus:ring-[#16A7CB]"
                  />
                  <span className="ml-2 text-sm text-gray-600">จดจำข้อมูล</span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-[#E74C3C] hover:underline text-sm font-medium"
                >
                  ลืมรหัสผ่าน?
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#16A7CB] text-white py-3.5 rounded-lg font-semibold text-base hover:bg-[#0e8aa8] transition-colors"
              >
                เข้าสู่ระบบ
              </button>
            </form>

          </div>

          {/* RIGHT - Illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* OKMD Letters Illustration */}
              <div className="flex items-end justify-center gap-2">
                <div className="text-[120px] font-black text-[#1B1D20] leading-none">O</div>
                <div className="text-[120px] font-black text-[#1B1D20] leading-none">K</div>
                <div className="relative">
                  <div className="text-[120px] font-black text-[#1B1D20] leading-none">M</div>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#16A7CB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <div className="text-[120px] font-black text-[#16A7CB] leading-none">D</div>
              </div>
              {/* Decorative people illustrations */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                <div className="flex items-end gap-4">
                  <div className="w-16 h-24 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-t-full"></div>
                  <div className="w-20 h-32 bg-gradient-to-t from-blue-400 to-blue-300 rounded-t-full"></div>
                  <div className="w-16 h-28 bg-gradient-to-t from-orange-400 to-orange-300 rounded-t-full"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
