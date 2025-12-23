type PaginationProps = {
  total: number
  current: number
}

export default function Pagination({ total, current }: PaginationProps) {
  return (
    <div className="flex items-center gap-2">
      <button className="px-2 py-1 border rounded">‹</button>

      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          className={`
            w-8 h-8 rounded text-sm
            ${n === current ? "bg-slate-500 text-white" : "border"}
          `}
        >
          {n}
        </button>
      ))}

      <span className="px-2">…</span>

      <button className="w-8 h-8 border rounded text-sm">{total}</button>

      <button className="px-2 py-1 border rounded">›</button>
    </div>
  )
}
