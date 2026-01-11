import NewsReleasePage from "@/components/page/NewsRelease/NewsRelease";
import { ContainerPage } from "@/components/shared/ContainerPage";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ข่าวประชาสัมพันธ์เครือข่าย | OKMD",
  description:
    "ข่าวประชาสัมพันธ์เครือข่ายจากสำนักงานบริหารและพัฒนาองค์ความรู้ (OKMD)",
};

export default function NewsRelease({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContainerPage>
      <Suspense fallback={<div>Loading...</div>}>
        <NewsReleasePage />
        {children}
      </Suspense>
    </ContainerPage>
  );
}
