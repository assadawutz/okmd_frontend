"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const title = {
  name: "รายงานประจำปี",
};

const annualReports = [
  {
    id: 1,
    year: "2567",
    image: "/images/reports/annual-2567.png",
    size: "54265.14 KB",
    href: "#",
  },
  {
    id: 2,
    year: "2566",
    image: "/images/reports/annual-2566.png",
    size: "54265.14 KB",
    href: "#",
  },
  {
    id: 3,
    year: "2565",
    image: "/images/reports/annual-2565.png",
    size: "54265.14 KB",
    href: "#",
  },
  {
    id: 4,
    year: "2564",
    image: "/images/reports/annual-2564.png",
    size: "54265.14 KB",
    href: "#",
  },
  {
    id: 5,
    year: "2563",
    image: "/images/reports/annual-2563.png",
    size: "54265.14 KB",
    href: "#",
  },
  {
    id: 6,
    year: "2562",
    image: "/images/reports/annual-2562.png",
    size: "54265.14 KB",
    href: "#",
  },
  {
    id: 7,
    year: "2561",
    image: "/images/reports/annual-2561.png",
    size: "54265.14 KB",
    href: "#",
  },
  {
    id: 8,
    year: "2560",
    image: "/images/reports/annual-2560.png",
    size: "54265.14 KB",
    href: "#",
  },
  {
    id: 9,
    year: "2559",
    image: "/images/reports/annual-2559.png",
    size: "54265.14 KB",
    href: "#",
  },
];

const ITEMS_PER_PAGE = 9;

export default function AnnualReport() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(annualReports.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedReports = annualReports.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="w-full text-[#40444D]">
      <h1 className="text-2xl lg:text-3xl font-bold mb-8">{title.name}</h1>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {displayedReports.map((report) => (
          <Link
            key={report.id}
            href={report.href}
            className="group block"
          >
            {/* Book Cover */}
            <div className="relative w-full aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
              <Image
                src={report.image}
                alt={`รายงานประจำปี ${report.year}`}
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/T1.png";
                }}
              />
            </div>

            {/* Report Info */}
            <div className="mt-4">
              <h2 className="font-semibold text-base lg:text-lg text-[#333] group-hover:text-[#16A7CB] transition-colors">
                รายงานประจำปี {report.year}
              </h2>
              <p className="text-[#16A7CB] text-sm mt-1">
                ดาวน์โหลดเอกสาร pdf ขนาด {report.size}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-end gap-2 mt-10">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const pageNum = i + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-8 h-8 flex items-center justify-center rounded text-sm ${
                  currentPage === pageNum
                    ? "bg-[#16A7CB] text-white"
                    : "border border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          {totalPages > 5 && (
            <>
              <span className="text-gray-400">...</span>
              <button
                onClick={() => setCurrentPage(totalPages)}
                className={`w-8 h-8 flex items-center justify-center rounded text-sm ${
                  currentPage === totalPages
                    ? "bg-[#16A7CB] text-white"
                    : "border border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {totalPages}
              </button>
            </>
          )}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
