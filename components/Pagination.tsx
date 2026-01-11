type PaginationProps = {
  total: number;
  current: number;
  onChange: (page: number) => void;
};

export default function Pagination({ total, current, onChange }: PaginationProps) {
  const buttonBase = "flex items-center justify-center transition-colors cursor-pointer";
  const pageButton = "w-10 h-10 rounded-lg text-sm font-medium";
  const arrowButton = "w-10 h-10 rounded-lg text-lg font-medium";
  const activeClass = "bg-[#74CEE2] text-white shadow-sm";
  const inactiveClass = "bg-gray-100 text-gray-700 hover:bg-gray-200";
  const disabledClass = "bg-gray-50 text-gray-300 cursor-not-allowed";

  // Generate visible page numbers
  const pages: (number | string)[] = [];
  const maxVisible = 5;
  
  if (total <= maxVisible) {
    for (let i = 1; i <= total; i++) pages.push(i);
  } else {
    if (current <= 3) {
      for (let i = 1; i <= 4; i++) pages.push(i);
      pages.push("...");
      pages.push(total);
    } else if (current >= total - 2) {
      pages.push(1);
      pages.push("...");
      for (let i = total - 3; i <= total; i++) pages.push(i);
    } else {
      pages.push(1);
      pages.push("...");
      pages.push(current - 1);
      pages.push(current);
      pages.push(current + 1);
      pages.push("...");
      pages.push(total);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onChange(current - 1)}
        className={`${buttonBase} ${arrowButton} ${current === 1 ? disabledClass : inactiveClass}`}
        disabled={current === 1}
        aria-label="Previous page"
      >
        ‹
      </button>

      {pages.map((page, idx) => (
        typeof page === "number" ? (
          <button
            key={page}
            onClick={() => onChange(page)}
            className={`${buttonBase} ${pageButton} ${page === current ? activeClass : inactiveClass}`}
            aria-current={page === current ? "page" : undefined}
          >
            {page}
          </button>
        ) : (
          <span key={`ellipsis-${idx}`} className="w-10 h-10 flex items-center justify-center text-gray-400">
            …
          </span>
        )
      ))}

      <button
        onClick={() => onChange(current + 1)}
        className={`${buttonBase} ${arrowButton} ${current === total ? disabledClass : inactiveClass}`}
        disabled={current === total}
        aria-label="Next page"
      >
        ›
      </button>
    </div>
  );
}
