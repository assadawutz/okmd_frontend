import React, { useState } from "react";
import {
  Search,
  Menu,
  ChevronDown,
  Globe,
  ArrowRight,
  Download,
  Facebook,
  Youtube,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
  X,
  Calendar,
  ExternalLink,
} from "lucide-react";

/**
 * OKMD Landing Page Implementation
 * Tech Stack: React 19, Tailwind CSS v4, Lucide React
 * Architecture: Modular Blocks, 12-Column Grid, Zero-PX Policy (rem/vw)
 */

// --- Shared Utility Components ---

const Section = ({ children, className = "", id = "" }) => (
  <section id={id} className={`w-full ${className}`}>
    <div className="max-w-[90rem] mx-auto px-[5%]">{children}</div>
  </section>
);

const Button = ({
  children,
  variant = "primary",
  className = "",
  icon: Icon,
  onClick,
}) => {
  const baseStyle =
    "inline-flex items-center justify-center gap-[0.5rem] rounded-md transition-all font-medium cursor-pointer active:scale-95";
  const variants = {
    primary:
      "bg-[#6EC1E4] hover:bg-[#5aa8c9] text-white py-[0.5rem] px-[1.5rem] shadow-sm hover:shadow-md",
    outline:
      "border border-white/30 hover:bg-white/10 text-white py-[0.5rem] px-[1.5rem]",
    ghost:
      "text-[#005f7f] hover:text-[#004055] hover:bg-black/5 py-[0.25rem] px-[0.75rem]",
    dark: "bg-[#1f2937] hover:bg-[#374151] text-white py-[0.5rem] px-[1.5rem]",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
      {Icon && <Icon size="1rem" />}
    </button>
  );
};

// --- Block: Header ---

const HeaderBlock = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mock handlers for accessibility tools
  const handleCopy = () => {
    // Feature: Copy URL to clipboard
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 font-sans transition-all">
      {/* Accessibility & Utility Bar */}
      <div className="hidden lg:flex justify-end items-center py-[0.5rem] gap-[1rem] max-w-[90rem] mx-auto px-[5%] text-[0.875rem]">
        <div className="flex items-center gap-[0.5rem] cursor-pointer hover:bg-gray-50 p-[0.25rem] rounded">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg"
            alt="TH"
            className="w-[1.5rem] h-auto shadow-sm"
          />
          <ChevronDown size="0.875rem" />
        </div>
        <div className="h-[1rem] w-[1px] bg-gray-200"></div>
        <div className="flex gap-[0.25rem] items-center">
          <button className="w-[1.5rem] h-[1.5rem] flex items-center justify-center bg-gray-100 rounded text-[0.7rem] hover:bg-gray-200 transition-colors">
            ก
          </button>
          <button className="w-[1.5rem] h-[1.5rem] flex items-center justify-center bg-gray-100 rounded text-[0.8rem] hover:bg-gray-200 transition-colors">
            ก
          </button>
          <button className="w-[1.5rem] h-[1.5rem] flex items-center justify-center bg-gray-100 rounded text-[1rem] font-bold hover:bg-gray-200 transition-colors">
            ก
          </button>
        </div>
        <div className="flex gap-[0.25rem] items-center ml-[0.5rem]">
          <button className="w-[1.5rem] h-[1.5rem] flex items-center justify-center bg-gray-100 rounded text-black font-bold text-[0.75rem] hover:bg-gray-200 ring-1 ring-gray-200">
            C
          </button>
          <button className="w-[1.5rem] h-[1.5rem] flex items-center justify-center bg-black rounded text-white font-bold text-[0.75rem] hover:bg-gray-800">
            C
          </button>
          <button className="w-[1.5rem] h-[1.5rem] flex items-center justify-center bg-yellow-400 rounded text-black font-bold text-[0.75rem] hover:bg-yellow-500">
            C
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex flex-wrap items-center justify-between py-[1rem] max-w-[90rem] mx-auto px-[5%]">
        <div className="flex items-center gap-[3rem]">
          <a
            href="#"
            className="flex-shrink-0 group"
            onClick={handleCopy}
            title="Click to copy link"
          >
            <div className="text-[2.5rem] font-bold text-[#6EC1E4] leading-none tracking-tighter group-hover:scale-105 transition-transform">
              okmd
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-[2rem] text-[1rem] font-medium text-gray-700">
            {[
              "รู้จัก OKMD",
              "ข่าวประชาสัมพันธ์",
              "ปฏิทินกิจกรรม",
              "บริการความรู้",
              "ร่วมงานกับเรา",
            ].map((item) => (
              <div
                key={item}
                className="group relative cursor-pointer flex items-center gap-[0.25rem] hover:text-[#6EC1E4] py-[0.5rem]"
              >
                {item}
                {item !== "ปฏิทินกิจกรรม" && (
                  <ChevronDown
                    size="1rem"
                    className="opacity-50 group-hover:opacity-100 transition-opacity"
                  />
                )}

                {/* Dropdown Simulation */}
                {item !== "ปฏิทินกิจกรรม" && (
                  <div className="absolute top-full left-0 w-[15rem] bg-white shadow-xl rounded-lg p-[0.5rem] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0 z-50 border border-gray-100">
                    <div className="p-[0.5rem] hover:bg-gray-50 rounded cursor-pointer text-gray-600 text-[0.9rem]">
                      เมนูย่อย 1
                    </div>
                    <div className="p-[0.5rem] hover:bg-gray-50 rounded cursor-pointer text-gray-600 text-[0.9rem]">
                      เมนูย่อย 2
                    </div>
                    <div className="p-[0.5rem] hover:bg-gray-50 rounded cursor-pointer text-gray-600 text-[0.9rem]">
                      เมนูย่อย 3
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-[1.5rem]">
          <a
            href="#"
            className="hidden lg:block font-medium hover:text-[#6EC1E4] transition-colors"
          >
            ติดต่อเรา
          </a>
          <Button className="rounded-full !py-[0.5rem] !px-[2rem] shadow-lg shadow-cyan-500/20 text-[1.1rem]">
            Donate
          </Button>
          <button
            className="lg:hidden p-[0.5rem] text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size="1.5rem" /> : <Menu size="1.5rem" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-gray-100 ${
          isMenuOpen
            ? "max-h-[50vh] opacity-100 shadow-xl"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-[1.5rem] flex flex-col gap-[0.5rem]">
          {[
            "รู้จัก OKMD",
            "ข่าวประชาสัมพันธ์",
            "ปฏิทินกิจกรรม",
            "บริการความรู้",
            "ร่วมงานกับเรา",
            "ติดต่อเรา",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[1.1rem] font-medium text-gray-700 py-[0.75rem] border-b border-gray-50 flex justify-between items-center hover:text-[#6EC1E4]"
            >
              {item}
              <ChevronRight size="1rem" className="text-gray-300" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

// --- Block: Hero ---

const HeroBlock = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#98d6f0] via-[#bbf0ff] to-[#cceeff] overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] bg-[#6EC1E4]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-[5%] py-[4rem] lg:py-[7rem] grid lg:grid-cols-2 gap-[3rem] items-center">
        <div className="z-10 space-y-[1.5rem] animate-fade-in-up">
          <div className="inline-block bg-[#6EC1E4] text-white px-[0.75rem] py-[0.25rem] rounded text-[0.875rem] font-bold tracking-wide shadow-sm">
            OKMD INTELLIGENCE
          </div>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-gray-900 leading-[1.1]">
            AI-Driven Intelligence:
          </h1>
          <p className="text-[clamp(1.1rem,1.5vw,1.35rem)] text-gray-700 max-w-[35ch]">
            Search, summarize, and Recommend in an instant.
          </p>
          <div className="flex gap-[1rem] pt-[1rem]">
            <Button className="rounded-full !px-[2rem] !py-[0.75rem] text-[1rem]">
              ดูรายละเอียด
            </Button>
          </div>
        </div>

        <div className="relative h-[22rem] lg:h-[30rem] w-full flex items-center justify-center">
          {/* 3D Illustration Placeholder */}
          <div className="relative w-full h-full">
            <img
              src="https://placehold.co/800x600/png?text=AI+Interaction"
              alt="AI Illustration"
              className="w-full h-full object-contain drop-shadow-2xl opacity-90 hover:scale-105 transition-transform duration-700"
            />

            {/* Floating Elements (Glassmorphism) */}
            <div className="absolute top-[15%] left-[5%] bg-white/40 backdrop-blur-md p-[1.5rem] rounded-2xl border border-white/60 shadow-lg animate-float-slow">
              <div className="text-[#6EC1E4] font-bold text-[2.5rem] leading-none">
                AI
              </div>
              <div className="text-gray-600 text-[0.75rem] mt-1">
                Intelligence
              </div>
            </div>

            <div className="absolute bottom-[20%] right-[10%] bg-white/60 backdrop-blur-md px-[1.5rem] py-[1rem] rounded-xl border border-white/60 shadow-lg flex items-center gap-[1rem] animate-float-delayed">
              <div className="w-[2.5rem] h-[2.5rem] bg-blue-500 rounded-full flex items-center justify-center text-white">
                <Search size="1.25rem" />
              </div>
              <div>
                <div className="w-[8rem] h-[0.5rem] bg-gray-300 rounded-full mb-[0.25rem]"></div>
                <div className="w-[5rem] h-[0.5rem] bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Block: Search ---

const SearchBlock = () => {
  return (
    <Section className="py-[5rem] bg-white text-center relative z-20 -mt-[2rem] rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
      <h3 className="text-[0.875rem] tracking-[0.3em] text-gray-400 font-bold uppercase mb-[1rem]">
        Knowledge is Opportunity
      </h3>
      <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-[#005f7f] mb-[3rem] leading-tight">
        รวมไอเดียเด็ด แรงบันดาลใจเจ๋ง ๆ และความรู้นอกตำรา{" "}
        <span className="text-[#6EC1E4]">OKMD</span>
        <br />
        โลกของคนชอบคิดต่าง
      </h2>

      <div className="max-w-[45rem] mx-auto group">
        <div className="bg-[#1a1a1a] text-white text-[0.8rem] py-[0.75rem] px-[1.5rem] rounded-t-[1rem] flex justify-between items-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>{" "}
            ค้นหาคำตอบตรงใจ รวดเร็ว
          </span>
          <span className="opacity-50">AI Powered Search</span>
        </div>
        <div className="bg-white rounded-[1rem] flex items-center p-[0.75rem] shadow-2xl border border-gray-100 relative z-10">
          <div className="flex-1 px-[1.5rem] border-r border-gray-100">
            <label className="block text-[0.7rem] font-bold text-gray-400 text-left uppercase tracking-wider mb-1">
              Search Context
            </label>
            <input
              type="text"
              placeholder="พิมพ์เป้าหมายของคุณที่นี่..."
              className="w-full outline-none text-gray-900 font-medium text-[1.1rem] placeholder:text-gray-300 h-[2rem]"
            />
          </div>
          <button className="bg-[#6EC1E4] hover:bg-[#5aa8c9] text-white p-[1rem] rounded-full transition-all hover:scale-105 active:scale-95 ml-[0.5rem] shadow-lg shadow-blue-200">
            <Search size="1.5rem" />
          </button>
        </div>
      </div>
    </Section>
  );
};

// --- Block: Highlight ---

const HighlightBlock = () => {
  // Mock data representing the visual cards
  const cards = [
    {
      type: "large",
      title: "เพราะทุกครั้งที่คุณสูบ คือการทำร้ายตัวเองอย่างช้า ๆ",
      image: "https://placehold.co/600x800/222/fff?text=No+Smoking",
      tags: ["Health", "Life"],
    },
    {
      type: "vol",
      title: "The Knowledge",
      vol: "vol.36",
      image: "https://placehold.co/300x400/FFA500/fff?text=Vol.36",
      subtitle: "AI in Global Trends",
    },
    {
      type: "info",
      title: "OKMD สำรวจธุรกิจและองค์กรทั่วโลก เสริมพลังด้านวัฒนธรรมด้วย AI",
      desc: "sk Mona ใช้ AI ช่วยเสริมการเข้าถึงวัฒนธรรม ศิลปะ และพิพิธภัณฑ์ โดยเฉพาะกับกลุ่มคนรุ่นใหม่...",
      icon: true,
    },
    {
      type: "banner",
      title: "เมืองแห่งการเรียนรู้ เชียงใหม่",
      sub: "Chiang Mai : Learning City",
      image: "https://placehold.co/600x300/555/fff?text=Chiang+Mai",
    },
    {
      type: "banner",
      title: "เรียนรู้แบบเก๋าๆ ไปกับ สิงห์ วรรณสิงห์",
      sub: "Perspective Life",
      image: "https://placehold.co/600x300/800000/fff?text=Learning+Life",
    },
  ];

  return (
    <Section className="pb-[6rem] bg-[#f8fbff]">
      <div className="flex flex-col items-center mb-[3rem]">
        <h2 className="text-[2.25rem] font-bold text-gray-900">Highlight</h2>
        <div className="h-[4px] w-[3rem] bg-[#6EC1E4] rounded-full my-[0.5rem]"></div>
        <p className="text-[#6EC1E4] font-medium">
          ทุกจุดเด่น ถูกยกมาไว้ตรงนี้
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] auto-rows-[minmax(12rem,auto)]">
        {/* Card 1: Large Featured */}
        <div className="lg:col-span-1 lg:row-span-2 relative group overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all">
          <img
            src={cards[0].image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-[2rem] flex flex-col justify-end">
            <div className="flex gap-2 mb-2">
              {cards[0].tags.map((t) => (
                <span
                  key={t}
                  className="bg-white/20 backdrop-blur px-2 py-0.5 rounded text-[0.7rem] text-white"
                >
                  {t}
                </span>
              ))}
            </div>
            <h3 className="text-white text-[1.5rem] font-bold leading-tight mb-[1rem]">
              {cards[0].title}
            </h3>
            <div className="flex items-center gap-[0.5rem] text-[#6EC1E4] font-bold text-[0.9rem] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
              <span>อ่านต่อ</span> <ArrowRight size="1rem" />
            </div>
          </div>
        </div>

        {/* Card 2: Magazine Vol */}
        <div className="bg-white p-[1.5rem] rounded-2xl flex items-center justify-between gap-[1rem] shadow-sm hover:shadow-lg transition-all cursor-pointer group">
          <div className="flex flex-col justify-center h-full">
            <div className="text-gray-400 text-[0.8rem] font-bold tracking-wider uppercase">
              {cards[1].title}
            </div>
            <div className="text-[3rem] font-bold text-gray-800 leading-none my-[0.5rem] group-hover:text-[#6EC1E4] transition-colors">
              {cards[1].vol}
            </div>
            <div className="text-gray-500 text-[0.9rem]">
              {cards[1].subtitle}
            </div>
          </div>
          <div className="relative">
            <img
              src={cards[1].image}
              alt="Magazine"
              className="w-[7rem] shadow-lg rounded-sm transform rotate-6 group-hover:rotate-0 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Card 3: Info Card with Icon */}
        <div className="bg-white p-[2rem] rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col relative overflow-hidden group cursor-pointer">
          <div className="text-[#6EC1E4] mb-[1rem]">
            <Globe size="2.5rem" strokeWidth={1.5} />
          </div>
          <div className="text-[0.7rem] font-bold text-gray-400 mb-[0.5rem] uppercase">
            Global Trend
          </div>
          <h3 className="font-bold text-gray-800 mb-[1rem] text-[1.1rem] leading-snug group-hover:text-[#6EC1E4] transition-colors">
            {cards[2].title}
          </h3>
          <p className="text-[0.875rem] text-gray-500 line-clamp-2">
            {cards[2].desc}
          </p>

          <div className="absolute -bottom-10 -right-10 text-gray-50 opacity-50 group-hover:opacity-100 group-hover:text-cyan-50 transition-all">
            <Globe size="10rem" />
          </div>
        </div>

        {/* Card 4: Banner Chiang Mai */}
        <div className="lg:col-span-1 relative rounded-2xl overflow-hidden group h-[14rem] cursor-pointer shadow-sm hover:shadow-lg">
          <img
            src={cards[3].image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex flex-col justify-center items-center text-center p-[1rem]">
            <h3 className="text-white font-bold text-[1.75rem] font-serif italic mb-1">
              {cards[3].title}
            </h3>
            <p className="text-white/80 text-[0.9rem] tracking-widest uppercase">
              {cards[3].sub}
            </p>
          </div>
        </div>

        {/* Card 5: Banner Red */}
        <div className="lg:col-span-1 relative rounded-2xl overflow-hidden group h-[14rem] cursor-pointer shadow-sm hover:shadow-lg">
          <img
            src={cards[4].image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#800000] via-[#800000]/80 to-transparent p-[2rem] flex flex-col justify-center">
            <h3 className="text-white font-bold text-[1.5rem] w-3/4 leading-snug">
              {cards[4].title}
            </h3>
            <div className="mt-[1rem] inline-flex items-center gap-[0.5rem] bg-white/10 w-fit px-[0.75rem] py-[0.25rem] rounded-full backdrop-blur text-[0.75rem] text-white">
              <span>WATCH NOW</span> <ArrowRight size="0.75rem" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

// --- Block: Smart Picks ---

const SmartPicksBlock = () => {
  return (
    <div className="bg-[#1a1a1a] text-white py-[6rem] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

      <Section>
        <div className="text-center mb-[4rem]">
          <h2 className="text-[2.5rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Smart Picks
          </h2>
          <p className="text-gray-500 mt-[0.5rem]">
            เราไม่ได้แค่แนะนำ แต่เรากำหนดนิยามใหม่ให้กับทางเลือก
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-[2rem]">
          {/* Pick 1 */}
          <div className="group relative rounded-3xl overflow-hidden bg-gray-900 h-[24rem] border border-gray-800 hover:border-gray-600 transition-colors cursor-pointer">
            <img
              src="https://placehold.co/800x600/111/fff?text=Robot+Hand"
              alt="Unleash Potential"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            <div className="absolute inset-0 p-[3rem] flex flex-col justify-end">
              <div className="absolute top-[3rem] left-[3rem] w-[3.5rem] h-[3.5rem] bg-cyan-500/10 backdrop-blur border border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Globe size="1.75rem" />
              </div>
              <h3 className="text-[2.5rem] font-bold leading-none mb-[1rem] translate-y-2 group-hover:translate-y-0 transition-transform">
                Unleash
                <br />
                <span className="text-[#6EC1E4]">Your Potential</span>
              </h3>
              <div className="flex items-center gap-[1rem] opacity-0 group-hover:opacity-100 transition-all delay-100">
                <span className="text-sm text-gray-300">Discover More</span>
                <ArrowRight className="text-[#6EC1E4]" />
              </div>
            </div>
          </div>

          {/* Pick 2 */}
          <div className="group relative rounded-3xl overflow-hidden bg-gray-900 h-[24rem] border border-gray-800 hover:border-gray-600 transition-colors cursor-pointer">
            <img
              src="https://placehold.co/800x600/331a00/fff?text=Library+Scene"
              alt="Unlock Knowledge"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            <div className="absolute inset-0 p-[3rem] flex flex-col justify-end items-start">
              <div className="absolute top-[3rem] right-[3rem] text-right">
                <div className="text-[0.75rem] font-bold tracking-widest text-[#f59e0b] mb-[0.25rem]">
                  OKMD
                </div>
                <div className="text-[0.6rem] uppercase tracking-wider text-white/50">
                  Knowledge Portal
                </div>
              </div>

              <h3 className="text-[2.5rem] font-bold leading-tight max-w-[18rem] mb-[1rem] translate-y-2 group-hover:translate-y-0 transition-transform">
                Unlock knowledge
                <br />
                anywhere you are
              </h3>
              <div className="w-[3rem] h-[3rem] rounded-full bg-white/10 hover:bg-[#f59e0b] flex items-center justify-center transition-colors group-hover:scale-110">
                <ArrowRight className="text-white" size="1.25rem" />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

// --- Block: Activity Calendar ---

const ActivityCalendarBlock = () => {
  return (
    <Section className="py-[6rem] bg-white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-[3rem]">
        <div>
          <h2 className="text-[2.25rem] font-bold text-gray-900">
            Activity Calendar
          </h2>
          <p className="text-gray-500 mt-1">
            ทุกกิจกรรมคือแรงบันดาลใจ สู่ความคิดที่แตกต่าง
          </p>
        </div>
        <Button variant="ghost" className="hidden md:flex">
          View All Activities <ArrowRight size="1rem" />
        </Button>
      </div>

      <div className="grid lg:grid-cols-12 gap-[2rem]">
        {/* Event Cards Grid */}
        <div className="lg:col-span-8 grid md:grid-cols-2 gap-[1.5rem]">
          {[
            {
              title: "BAB 2022 CHAOS : CALM",
              date: "22 OCT 2022 — 23 FEB 2023",
              img: "https://placehold.co/400x250/e8f5e9/000?text=BAB+2022",
              theme: "light",
            },
            {
              title: "Music Talk",
              loc: "Music and the Cities London",
              img: "https://placehold.co/400x250/003366/fff?text=Music+Talk",
              theme: "dark",
            },
            {
              title: "SOMETHING LIKE AN AUTOBIOGRAPHY",
              img: "https://placehold.co/400x250/222/fff?text=Autobiography",
              theme: "dark",
            },
            {
              title: "NimitrSight",
              subtitle: "Seeing the Absence",
              img: "https://placehold.co/400x250/111/eee?text=NimitrSight",
              theme: "dark",
            },
          ].map((evt, idx) => (
            <div
              key={idx}
              className="group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer bg-gray-50 border border-gray-100 relative"
            >
              <div className="h-[12rem] overflow-hidden relative">
                <img
                  src={evt.img}
                  alt={evt.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-[1rem] right-[1rem] bg-black/20 backdrop-blur-md rounded-lg p-[0.35rem] opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size="1rem" className="text-white" />
                </div>
              </div>
              <div
                className={`p-[1.25rem] min-h-[7rem] flex flex-col justify-center ${
                  evt.theme === "dark"
                    ? "bg-[#1a1a1a] text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                <h4 className="font-bold text-[1.1rem] mb-[0.25rem] line-clamp-2">
                  {evt.title}
                </h4>
                {evt.date && (
                  <p className="text-[0.75rem] opacity-70 flex items-center gap-1">
                    <Calendar size="0.75rem" /> {evt.date}
                  </p>
                )}
                {evt.subtitle && (
                  <p className="text-[0.875rem] opacity-80 italic">
                    {evt.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Calendar Widget */}
        <div className="lg:col-span-4 bg-[#1f1f1f] rounded-2xl p-[2rem] text-white shadow-2xl flex flex-col justify-between h-full min-h-[25rem] relative overflow-hidden group">
          <div className="absolute -right-10 -top-10 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
            <Calendar size="15rem" />
          </div>

          <div>
            <div className="flex justify-between items-start mb-[2rem] relative z-10">
              <div>
                <div className="text-[0.9rem] font-bold text-[#6EC1E4] mb-[0.25rem] tracking-wider">
                  MONDAY
                </div>
                <div className="text-[1rem] text-gray-400">September</div>
                <div className="text-[6rem] font-bold leading-none tracking-tighter text-white">
                  20
                </div>
              </div>
              <div className="bg-white/10 p-2 rounded-full">
                <Calendar className="text-white/80" size="1.5rem" />
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-[0.5rem] text-center text-[0.8rem] text-gray-500 mb-[2rem] relative z-10">
              {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                <div key={d} className="font-bold text-gray-300">
                  {d}
                </div>
              ))}

              {Array.from({ length: 30 }, (_, i) => i + 1).map((d) => {
                const isToday = d === 20;
                const isRange = d >= 20 && d <= 22;
                return (
                  <div
                    key={d}
                    className={`
                                            aspect-square flex items-center justify-center rounded-full transition-all text-[0.85rem]
                                            ${
                                              isToday
                                                ? "bg-[#6EC1E4] text-white font-bold shadow-lg shadow-cyan-500/30"
                                                : ""
                                            }
                                            ${
                                              isRange && !isToday
                                                ? "bg-[#6EC1E4]/20 text-[#6EC1E4]"
                                                : ""
                                            }
                                            ${
                                              !isToday && !isRange
                                                ? "hover:bg-white/10 cursor-pointer text-gray-400"
                                                : ""
                                            }
                                        `}
                  >
                    {d}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-white/10">
            <button className="w-full text-[0.9rem] text-[#6EC1E4] hover:text-white flex items-center justify-between group-hover:px-2 transition-all">
              <span>ดูกิจกรรมทั้งหมด</span> <ArrowRight size="1rem" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

// --- Block: Knowledge Box ---

const KnowledgeBoxBlock = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    "OKMD กระตุกต่อมคิด",
    "OKMD แนะนำหนังสือ",
    "OKMD Infographic",
    "OKMD บทความวิจัย",
    "OKMD Recommended",
  ];

  return (
    <div className="bg-[#e0f7fa] py-[6rem] relative">
      <Section>
        <div className="mb-[3rem]">
          <h2 className="text-[2.25rem] font-bold text-gray-900 leading-none">
            Knowledge Box
          </h2>
          <p className="text-[#00838f] mt-2 font-medium">
            สู่ความรู้ | สร้างสรรค์ภูมิปัญญา
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-[2.5rem] shadow-xl border border-white/50">
          <div className="grid lg:grid-cols-12 gap-[3rem]">
            {/* Sidebar Tabs */}
            <div className="lg:col-span-4 flex flex-col gap-[0.75rem]">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`
                                text-left p-[1.25rem] rounded-xl text-[1rem] font-medium transition-all flex justify-between items-center group
                                ${
                                  activeTab === idx
                                    ? "bg-white text-[#00838f] shadow-md border border-[#b2ebf2]"
                                    : "text-gray-600 hover:bg-white/50 border border-transparent"
                                }
                            `}
                >
                  {tab}
                  <ChevronRight
                    size="1.25rem"
                    className={`transition-transform ${
                      activeTab === idx
                        ? "text-[#00838f] rotate-0"
                        : "text-gray-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-[3rem] items-center animate-fade-in">
              {/* Book Cover */}
              <div className="relative group perspective-1000 flex justify-center md:justify-end">
                <div className="w-[18rem] bg-gray-900 rounded-r-lg shadow-2xl relative transform transition-all duration-500 group-hover:rotate-y-6 group-hover:scale-105">
                  <img
                    src="https://placehold.co/400x550/002244/fff?text=The+Knowledge+Vol.40"
                    alt="Cover"
                    className="w-full h-auto rounded shadow-lg"
                  />
                  {/* Magazine Spine Effect */}
                  <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-white/20 z-10"></div>
                  <div className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs font-bold px-3 py-1 rounded shadow-lg animate-bounce">
                    NEW
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-[1.5rem]">
                <div>
                  <div className="flex justify-end mb-4 md:hidden">
                    <span className="text-xs text-gray-400 flex items-center gap-1 cursor-pointer">
                      ดูทั้งหมด <ArrowRight size="0.75rem" />
                    </span>
                  </div>
                  <span className="bg-[#e0f7fa] text-[#006064] text-[0.75rem] font-bold px-2 py-1 rounded uppercase tracking-wider">
                    Magazine
                  </span>
                  <h3 className="text-[2rem] font-bold text-gray-900 mt-2 leading-tight">
                    The Knowledge vol.40
                  </h3>
                  <p className="text-gray-600 text-[1rem] mt-[1rem]">
                    นิตยสาร OKMD | เพิ่มพูนความรู้ | สร้างสรรค์ภูมิปัญญา <br />
                    <span className="text-gray-400 text-[0.9rem]">
                      AI and Disabilities: Technology for All
                    </span>
                  </p>
                  <div className="flex gap-4 mt-4 text-[0.85rem] text-gray-500">
                    <span>ฉบับที่ 40</span>
                    <span>•</span>
                    <span>กันยายน - ตุลาคม 2568</span>
                  </div>
                </div>

                <div className="pt-[1.5rem] border-t border-gray-200/60">
                  <button className="w-full md:w-auto flex items-center justify-center gap-[0.75rem] bg-[#00838f] hover:bg-[#006064] text-white py-[0.75rem] px-[1.5rem] rounded-lg shadow-lg shadow-cyan-900/10 transition-all active:scale-95">
                    <Download size="1.25rem" />
                    <span>ดาวน์โหลด PDF (27 MB)</span>
                  </button>
                  <div className="mt-4 text-center md:text-left">
                    <a
                      href="#"
                      className="text-[0.85rem] text-gray-400 hover:text-[#00838f] transition-colors inline-flex items-center gap-1"
                    >
                      ดูฉบับย้อนหลัง <ArrowRight size="0.8rem" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

// --- Block: News ---

const NewsBlock = () => {
  const newsList = [
    {
      title: "TK Park x มูลนิธิกระจกเงาชวนคนไทยร่วมแบ่งปันคุณค่า",
      sub: 'ผ่านหนังสือกับแคมเปญ "อ่านแล้ว อ่านอีก"',
      img: "https://placehold.co/150x150/004488/fff?text=TK+Park",
      date: "20 Oct 2023",
    },
    {
      title: "The Energy Shift : Transition With Opportunities",
      sub: "งานเสวนาที่เปลี่ยนวิสัยทัศน์ด้านพลังงานของคุณ",
      img: "https://placehold.co/150x150/222/fff?text=Energy",
      date: "18 Oct 2023",
    },
    {
      title: "Future Skills for 2025",
      sub: "เตรียมความพร้อมสู่โลกอนาคต กับทักษะที่จำเป็น",
      img: "https://placehold.co/150x150/553311/fff?text=Skills",
      date: "15 Oct 2023",
    },
  ];

  return (
    <Section className="py-[6rem]">
      <div className="flex justify-between items-end mb-[3rem]">
        <div>
          <h2 className="text-[2.25rem] font-bold text-gray-900">News</h2>
          <p className="text-gray-400 mt-1">อัปเดตข่าวสารล่าสุดจากเรา</p>
        </div>
        <Button variant="ghost" className="hidden sm:flex">
          ดูทั้งหมด <ArrowRight size="1rem" />
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-[3rem]">
        {/* Main Featured News */}
        <div className="group cursor-pointer">
          <div className="rounded-2xl overflow-hidden mb-[1.5rem] relative h-[22rem] shadow-md">
            <img
              src="https://placehold.co/800x500/eee/333?text=Main+News+Event"
              alt="Main News"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-[#6EC1E4] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              Featured
            </div>
          </div>
          <div className="pr-4">
            <div className="text-gray-400 text-sm mb-2 flex items-center gap-2">
              <Calendar size="0.8rem" /> 21 Oct 2023
            </div>
            <h3 className="text-[1.5rem] font-bold text-gray-800 group-hover:text-[#6EC1E4] transition-colors leading-tight mb-3">
              กรมสมเด็จพระเทพรัตนราชสุดาฯ เสด็จเปิดศูนย์เยาวชนเทศบาลนครยะลา
              แหล่งเรียนรู้ TK Park Yala
            </h3>
            <p className="text-gray-500 text-[1rem] line-clamp-2 leading-relaxed">
              ความรู้ระเบิดพลังเมื่อลูกแม่ปิงนัน "คิด" แล้ว "เล่า" อย่างไร...
              ร่วมสร้างแรงบันดาลใจให้เด็กไทยก้าวไกลสู่สากล
            </p>
            <div className="mt-[1.5rem] inline-flex items-center gap-[0.5rem] text-[#6EC1E4] font-medium border-b-2 border-transparent group-hover:border-[#6EC1E4] pb-1 transition-all">
              อ่านข่าวนี้ <ArrowRight size="1rem" />
            </div>
          </div>
        </div>

        {/* News List */}
        <div className="flex flex-col gap-[2rem]">
          {newsList.map((news, idx) => (
            <div
              key={idx}
              className="flex gap-[1.5rem] group cursor-pointer border-b border-gray-100 pb-[2rem] last:border-0 last:pb-0 items-start"
            >
              <div className="w-[8rem] h-[8rem] rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                <img
                  src={news.img}
                  alt="Thumbnail"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div>
                <div className="text-gray-400 text-xs mb-1">{news.date}</div>
                <h4 className="font-bold text-gray-800 text-[1.1rem] leading-snug group-hover:text-[#6EC1E4] transition-colors mb-2">
                  {news.title}
                </h4>
                <p className="text-gray-500 text-[0.9rem] line-clamp-2">
                  {news.sub}
                </p>
                <div className="mt-[0.75rem] flex items-center gap-[0.5rem] text-[#6EC1E4] text-[0.8rem] font-medium opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform">
                  อ่านต่อ <ArrowRight size="0.8rem" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

// --- Block: Footer ---

const FooterBlock = () => {
  return (
    <footer className="bg-[#006B8F] text-white pt-[5rem] pb-[2rem] relative mt-[4rem]">
      {/* Curved Top */}
      <div className="absolute top-[-3rem] left-0 w-full h-[4rem] bg-[#006B8F] rounded-t-[50%] -z-10 scale-x-110"></div>

      {/* Partners Logos Area */}
      <div className="bg-[#111] py-[2.5rem] absolute top-[-6rem] left-[5%] right-[5%] rounded-xl shadow-2xl mx-auto max-w-[80rem]">
        <div className="flex flex-wrap justify-center items-center gap-[3rem] opacity-60 grayscale hover:grayscale-0 transition-all duration-500 px-8">
          {/* Simulated Partner Logos */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20"></div>{" "}
            <span className="font-bold text-lg">สํานักนายกรัฐมนตรี</span>
          </div>
          <div className="h-8 w-[1px] bg-white/20 hidden md:block"></div>
          <div className="text-2xl font-black tracking-tighter">okmd</div>
          <div className="h-8 w-[1px] bg-white/20 hidden md:block"></div>
          <div className="text-xl font-bold">TKPark</div>
          <div className="h-8 w-[1px] bg-white/20 hidden md:block"></div>
          <div className="text-xl font-bold">MuseumSiam</div>
        </div>
      </div>

      <Section className="pt-[3rem]">
        <div className="grid lg:grid-cols-12 gap-[4rem] border-b border-white/10 pb-[4rem]">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-[2rem]">
            <div className="space-y-4">
              <div className="text-[3.5rem] font-bold leading-none tracking-tighter text-cyan-200">
                okmd
              </div>
              <h3 className="text-[1.5rem] font-bold leading-tight">
                Office of Knowledge
                <br />
                Management and
                <br />
                Development
              </h3>
            </div>
            <div className="text-cyan-100 text-[0.95rem] space-y-1">
              <p>
                โทรศัพท์ :{" "}
                <a href="tel:021056500" className="hover:text-white">
                  0 2105 6500
                </a>
              </p>
              <p>
                อีเมล :{" "}
                <a
                  href="mailto:saraban@okmd.or.th"
                  className="hover:text-white"
                >
                  saraban@okmd.or.th
                </a>
              </p>
              <p className="opacity-70 text-xs mt-4 max-w-sm">
                อาคารจัตุรัสจามจุรี ชั้น 20 เลขที่ 319 ถนนพญาไท แขวงปทุมวัน
                เขตปทุมวัน กรุงเทพฯ 10330
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-[2rem] text-[0.95rem] text-cyan-100/80">
            <ul className="space-y-[0.75rem]">
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform"
                >
                  หน้าแรก
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform"
                >
                  การกำกับดูแลกิจการ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform"
                >
                  รายงานประจำปี
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform"
                >
                  ศูนย์ข้อมูลข่าวสาร
                </a>
              </li>
            </ul>
            <ul className="space-y-[0.75rem]">
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform"
                >
                  ประกาศจัดซื้อจัดจ้าง
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform"
                >
                  ร่วมงานกับเรา
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform"
                >
                  นโยบายความเป็นส่วนตัว
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform"
                >
                  ติดต่อเรา
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Action Column */}
          <div className="lg:col-span-3 space-y-[2rem]">
            <div>
              <h4 className="font-bold mb-4 text-white">ช่องทางติดตาม</h4>
              <div className="flex gap-[0.75rem]">
                {[Facebook, Youtube, Twitter, Instagram, Linkedin].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="bg-white/10 hover:bg-white/25 hover:text-cyan-200 p-[0.6rem] rounded-lg transition-all transform hover:scale-110"
                    >
                      <Icon size="1.25rem" />
                    </a>
                  )
                )}
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full justify-center py-[0.75rem] border-white/20 hover:bg-white/5 hover:border-white/40"
            >
              แจ้งเรื่องร้องเรียน
            </Button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-[2rem] text-[0.8rem] text-cyan-200/50 flex flex-col md:flex-row justify-between items-center gap-[1.5rem]">
          <p className="text-center md:text-left">
            ลิขสิทธิ์ © 2567 - 2568 OKMD สำนักงานบริหารและพัฒนาองค์ความรู้
            (องค์การมหาชน)
          </p>
          <div className="flex flex-wrap justify-center gap-[1.5rem]">
            <a href="#" className="hover:text-white transition-colors">
              ข้อตกลงการใช้
            </a>
            <a href="#" className="hover:text-white transition-colors">
              แผนผังเว็บไซต์
            </a>
            <a href="#" className="hover:text-white transition-colors">
              นโยบายการใช้คุกกี้
            </a>
          </div>
        </div>
      </Section>

      {/* Sticky Chat Widget */}
      <div className="fixed bottom-[2rem] right-[2rem] z-40 animate-bounce-slow">
        <button className="bg-[#6EC1E4] hover:bg-[#5aa8c9] text-white p-[1rem] rounded-full shadow-2xl transition-transform hover:scale-110 border-4 border-white/20">
          <MessageCircle size="2rem" fill="currentColor" />
        </button>
      </div>
    </footer>
  );
};

// --- Main Page Export ---

const OkmdLandingPage = () => {
  return (
    <div className="font-sans text-gray-900 bg-white antialiased selection:bg-[#6EC1E4] selection:text-white">
      <HeaderBlock />
      <main>
        <HeroBlock />
        <SearchBlock />
        <HighlightBlock />
        <SmartPicksBlock />
        <ActivityCalendarBlock />
        <KnowledgeBoxBlock />
        <NewsBlock />
      </main>
      <FooterBlock />
    </div>
  );
};

export default OkmdLandingPage;
