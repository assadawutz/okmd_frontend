"use client";

import Image from "next/image";

export default function AboutBanner() {
  return (
    <div className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] lg:h-[420px] overflow-hidden">
      <Image
        src="/bannerabout.png"
        alt="About OKMD Banner"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
    </div>
  );
}
