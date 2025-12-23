"use client";


import ActivityBlock from "@/components/page/home/Activity";
import LogoBar from "@/components/Bar";
import Hero from "@/components/page/home/Hero";
import HighlightSection from "@/components/page/home/Highlight";
import KnowledgeShelfSection from "@/components/page/home/Knowledge";
import NewsSection from "@/components/News"; // Wait, is it components/News.tsx or components/page/home/News.tsx?
// I saw components/News.tsx in file list, and components/page/home/News.tsx not explicitly in file list but there was News.tsx
import RecommendSection from "@/components/page/home/Recommend";
import OkmdSearchSection from "@/components/page/home/Search";


export default function HomePage() {
  return (
    <div className="bg-white min-h-screen w-full col-span-12">
      <Hero />
      <OkmdSearchSection />
      <HighlightSection />
      <RecommendSection />
      <ActivityBlock />
      <KnowledgeShelfSection />
      <NewsSection />
    </div>
  );
}
