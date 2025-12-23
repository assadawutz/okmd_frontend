"use client";
import { TRACK_DATA } from "@/data/complaint";
import { useState } from "react";

export default function ComplaintTrack() {
  const [trackId, setTrackId] = useState("");
  const [result, setResult] = useState<any>(null);

  const search = () => {
    const r = TRACK_DATA.find((x) => x.trackingId === trackId);
    setResult(r || "not-found");
  };

  return (
    <div className="max-w-[600px]">
      <label className="text-gray-700 font-medium">หมายเลขติดตาม</label>
      <div className="flex gap-3 mt-2 mb-10">
        <input value={trackId} onChange={(e) => setTrackId(e.target.value)} className="flex-1 border p-3 rounded-lg" placeholder="เช่น OKMD-2568-0001" />
        <button onClick={search} className="px-6 py-3 bg-sky-500 text-white rounded-lg">ตรวจสอบ</button>
      </div>

      {result && result !== "not-found" && (
        <div className="p-6 border rounded-xl bg-white shadow-sm">
          <h3 className="text-xl font-bold">{result.trackingId}</h3>
          <p className="text-gray-700">{result.detail}</p>
          <p className="text-sm text-gray-400 mt-3">อัปเดตล่าสุด {result.updatedAt}</p>
        </div>
      )}

      {result === "not-found" && <p className="text-red-500">ไม่พบข้อมูล</p>}
    </div>
  );
}
