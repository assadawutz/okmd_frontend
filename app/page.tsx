"use client";

import { ContainerPage } from "@/components/shared/ContainerPage";
import ActivityBlock from "@/components/page/home/Activity";
import Hero from "@/components/page/home/Hero";
import HighlightSection from "@/components/page/home/Highlight";
import KnowledgeShelfSection from "@/components/page/home/Knowledge";
import NewsSection from "@/components/page/home/NewsSection";
import RecommendSection from "@/components/page/home/Recommend";
import OkmdSearchSection from "@/components/page/home/Search";

export default function HomePage() {
  return (
    <ContainerPage>
      <OkmdSearchSection />
      <HighlightSection />
      <RecommendSection />
      <ActivityBlock />
      <KnowledgeShelfSection />
      <NewsSection />
    </ContainerPage>
  );
}
