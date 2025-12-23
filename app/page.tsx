"use client";


import ActivityBlock from "../components/Activity";
import LogoBar from "../components/Bar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HighlightSection from "../components/Highlight";
import KnowledgeShelfSection from "../components/Knowledge";
import NewsSection from "../components/News";
import RecommendSection from "../components/Recommend";
import OkmdSearchSection from "../components/Search";


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
