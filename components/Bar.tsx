"use client";

import Image from "next/image";

export default function LogoBar() {
  const LOGOS = [
    { id: 1, src: "/lo.png", label: "สำนักนายกรัฐมนตรี" },
    { id: 2, src: "/okmd.png", label: "OKMD" },
    { id: 3, src: "/tk.png", label: "TK Park" },
    { id: 4, src: "/mu%203.png", label: "Museum Siam" }
  ];

  return (
    <section
      aria-label="Organization Logos"
      className="w-full bg-[#1F1F1F] py-6 md:py-8"
    >
      <div className="container mx-auto">
        {/* LOGO ROW */}
        <ul className="flex flex-wrap justify-center items-center gap-6 md:gap-28 list-none m-0 p-0">

            {LOGOS.map((item) => (
              <li key={item.id} className="select-none">
                
                <a
                  href="#"
                  aria-label={item.label}
                  className="flex flex-col items-center text-center group"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={100}
                    height={60}
                    className="
                      object-contain
                      w-16 h-12 md:w-24 md:h-16 lg:w-28 lg:h-20
                      filter brightness-0 invert
                      opacity-85 group-hover:opacity-100
                      group-hover:scale-105
                      transition-all duration-300
                    "
                  />
                  <span className="text-white/70 text-[11px] md:text-xs mt-2 group-hover:text-white transition-colors hidden md:block">
                    {item.label}
                  </span>
                </a>

              </li>
            ))}

        </ul>
      </div>
    </section>
  );
}
