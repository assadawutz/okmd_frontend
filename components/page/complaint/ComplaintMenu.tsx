"use client";
export default function ComplaintMenu({
  active,
  onSelect,
  items
}: {
  active: string;
  onSelect: (v: string) => void;
  items: { label: string; value: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((m) => (
        <button
          key={m.value}
          onClick={() => onSelect(m.value)}
          className={`
            w-full text-left px-4 py-3 rounded-lg border transition
            ${active === m.value
              ? "bg-sky-500 text-white border-sky-500"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"}
          `}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
}
