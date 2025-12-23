"use client";

import { COMPLAINT_CHANNELS } from "@/data/complaint";
import Image from "next/image";
// import { COMPLAINT_CHANNELS } from "@/lib/complaint/mock";
export default function ComplaintChannels() {
  return (
    <div className="grid grid-cols-12 gap-10 mt-6">
      {COMPLAINT_CHANNELS.map((c) => (
        <div
          key={c.id}
          className="
            col-span-12 md:col-span-6 lg:col-span-3 
            p-6 rounded-2xl border border-gray-200 
            shadow-sm hover:shadow-md transition bg-white
          "
        >
          <Image
            src={c.icon}
            alt={c.title}
            width={50}
            height={50}
            className="mb-6"
          />

          <h3 className="text-xl font-bold text-zinc-900 mb-2">{c.title}</h3>
          <p className="text-gray-500 leading-6 text-sm">{c.detail}</p>
        </div>
      ))}
    </div>
  );
}
