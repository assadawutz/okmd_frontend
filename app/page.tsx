"use client";

import ActivityBlock from "@/components/page/home/Activity";
import Hero from "@/components/page/home/Hero";
import HighlightSection from "@/components/page/home/Highlight";
import KnowledgeShelfSection from "@/components/page/home/Knowledge";
import RecommendSection from "@/components/page/home/Recommend";
import OkmdSearchSection from "@/components/page/home/Search";
import NewsSection from "@/components/page/home/NewsSection";

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
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
