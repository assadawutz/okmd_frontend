"use client";

import Image from "next/image";

export default function LogoBar() {
  const LOGOS = [
    { id: 1, src: "/lo.png", label: "สำนักนายกรัฐมนตรี" },
    { id: 2, src: "/okmd.png", label: "OKMD" },
    { id: 3, src: "/tk.png", label: "TK Park" },
    { id: 4, src: "/mu%203.png", label: "Museum Siam" } // FIX SPACE
  ];

  return (
    <section
      aria-label="Organization Logos"
      className="w-full bg-[#1F1F1F] py-2 md:py-3"
    >
      <div className="container mx-auto">
        {/* LOGO ROW */}
        <ul className="flex flex-wrap justify-center items-center gap-6 md:gap-28 list-none m-0 p-0">

            {LOGOS.map((item) => (
              <li key={item.id} className="select-none">
                
                <button
                  type="button"
                  aria-label={item.label}
                  className="flex flex-col items-center text-center group"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={80}
                    height={80}
                    className="
                      object-contain
                      w-12 h-12 md:w-20 md:h-20
                      filter brightness-0 invert
                      opacity-90 group-hover:opacity-100
                      group-hover:scale-105
                      transition-all duration-300
                    "
                  />
                </button>

              </li>
            ))}

        </ul>
      </div>
    </section>
  );
}
