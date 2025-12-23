"use client";

type MenuItem = { label: string; value: string };
type Props = {
  items: MenuItem[];
  active: string;
  onSelect: (v: string) => void;
};

export default function LeftMenu({ items, active, onSelect }: Props) {
  return (
    <div className="w-full md:w-[280px] select-none">

      {/* ------------------------------------------------------ */}
      {/* MOBILE MODE — Horizontal Pills (Smooth Scroll)         */}
      {/* ------------------------------------------------------ */}
      <div className="md:hidden flex gap-3 overflow-x-auto no-scrollbar py-3 mt-3">
        {items.map((item) => {
          const isActive = active === item.value;
          return (
            <button
              key={item.value}
              onClick={() => onSelect(item.value)}
              className={`
                cursor-pointer whitespace-nowrap px-6 py-2.5 rounded-2xl border text-sm font-medium
                transition-all duration-300 shadow-sm
                ${isActive
                  ? "bg-[#E6FAFF] border-[#74CEE2] text-[#0C99B8] shadow-md scale-[1.03]"
                  : "bg-white border-gray-300 text-gray-600 hover:text-[#0C99B8] hover:border-[#74CEE2] hover:bg-[#F5FCFF]"
                }
              `}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* ------------------------------------------------------ */}
      {/* DESKTOP MODE — Vertical GOV Menu Style                */}
      {/* ------------------------------------------------------ */}
      <div className="hidden md:flex flex-col mt-6">

        {items.map((item) => {
          const isActive = active === item.value;

          return (
            <button
              key={item.value}
              onClick={() => onSelect(item.value)}
              className={`
                relative w-full text-left py-4 pr-4 pl-6 text-[18px] rounded-lg
                transition-all duration-300 cursor-pointer
                focus:outline-none focus:ring-2 focus:ring-[#74CEE2]/60
                ${isActive
                  ? "bg-[#F1FCFF] text-[#0C99B8] font-semibold shadow-sm"
                  : "text-gray-700 hover:bg-[#F9FEFF] hover:text-[#0C99B8]"
                }
              `}
            >
              {/* LEFT ACTIVE BAR */}
              {isActive && (
                <span className="absolute left-0 top-0 h-full w-[6px] bg-[#74CEE2] rounded-r-lg animate-[slideIn_0.25s_ease-out]"></span>
              )}

              {/* LABEL */}
              <span className="block leading-tight">
                {item.label}
              </span>

              {/* UNDERLINE EFFECT */}
              <span
                className={`
                  absolute bottom-2 left-6 h-[2px] bg-[#74CEE2] transition-all duration-300
                  ${isActive ? "w-[32px]" : "w-0 group-hover:w-[28px]"}
                `}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
