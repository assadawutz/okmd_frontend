"use client";
import { COMPLAINT_CHANNELS } from "@/data/complaint";

export default function ComplaintResult() {
  return (
    <div className="grid grid-cols-12 gap-10 mt-6">
      {COMPLAINT_CHANNELS.map((r) => (
        <div key={r.id} className="col-span-12 md:col-span-6 lg:col-span-4 p-6 border rounded-2xl shadow-sm bg-white">
          <h3 className="text-lg font-bold">{r.title}</h3>
          <p className="text-gray-500">{r.detail}</p>
          <p className="text-sm text-gray-400 mt-3">วันที่สรุปผล: {r.title}</p>
          <p className="text-sm text-gray-400">เจ้าหน้าที่: {r.detail}</p>
        </div>
      ))}
    </div>
  );
}
