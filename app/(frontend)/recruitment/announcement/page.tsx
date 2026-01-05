"use client";

import { useState } from "react";
import { Search, CheckCircle2, XCircle } from "lucide-react";
// import { checkStatus, type StatusResult } from '@/lib/services/okmd.service';
import { ContainerPage } from "@/components/shared/ContainerPage";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function RecruitmentAnnouncementPage() {
  const [cid, setCid] = useState("");
  const [res, setRes] = useState<{ status: string; name?: string } | null>(
    null
  );

  const handleCheck = async () => {
    // Mock logic for demo
    if (cid === "1234567890123") {
      setRes({ status: "passed", name: "นายทดสอบ ระบบ" });
    } else {
      setRes({ status: "failed" });
    }
  };

  return (
    <ContainerPage>
      <div className="w-full space-y-8 min-h-[60vh] flex flex-col justify-start">
        {/* HEADER BLOCK */}
        <div className="w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden relative shadow-sm">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/bannerabout.png')" }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              ตรวจสอบ <span className="text-[#74CEE2]">สถานะการสมัคร</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              กรอกเลขประจำตัวประชาชนเพื่อตรวจสอบผลการคัดเลือก
            </p>
          </div>
        </div>

        {/* CONTENT BLOCK */}
        <div className="w-full max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 text-center">
            <label className="text-lg font-bold text-[#1B1D20] block mb-4">
              เลขประจำตัวประชาชน 13 หลัก
            </label>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  value={cid}
                  onChange={(e) => setCid(e.target.value)}
                  placeholder="X-XXXX-XXXXX-XX-X"
                  maxLength={13}
                  className="text-center text-xl tracking-widest font-semibold"
                />
              </div>
              <Button
                onClick={handleCheck}
                className="md:w-32 rounded-xl shadow-lg shadow-[#16A7CB]/20 text-lg"
              >
                <Search size={24} /> ตรวจสอบ
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              * กรุณากรอกเลขบัตรประชาชนให้ครบ 13 หลัก
            </p>
          </div>
        </div>

        {/* Modal Result */}
        {res && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-white rounded-3xl p-10 max-w-sm w-full text-center shadow-2xl animate-in fade-in zoom-in duration-200 border border-gray-100">
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${
                  res.status === "passed"
                    ? "bg-green-50 text-green-500"
                    : "bg-red-50 text-red-500"
                }`}
              >
                {res.status === "passed" ? (
                  <CheckCircle2 size={56} />
                ) : (
                  <XCircle size={56} />
                )}
              </div>

              <h2
                className={`text-2xl font-bold mb-2 uppercase ${
                  res.status === "passed" ? "text-green-600" : "text-red-600"
                }`}
              >
                {res.status === "passed"
                  ? "ผ่านการคัดเลือก"
                  : "ไม่ผ่านการคัดเลือก"}
              </h2>

              <p className="text-gray-600 font-medium mb-8">
                {res.status === "passed"
                  ? res.name
                  : "ขออภัย ไม่พบรายชื่อของท่านในรอบนี้ หรือท่านไม่ผ่านเกณฑ์การคัดเลือก"}
              </p>

              <Button
                onClick={() => setRes(null)}
                className="w-full rounded-xl"
              >
                ปิดหน้าจอ
              </Button>
            </div>
          </div>
        )}
      </div>
    </ContainerPage>
  );
}
