import NewsCorporatePage from "@/components/page/NewsCorporate/NewsCorporate";
import { ContainerPage } from "@/components/shared/ContainerPage";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ข่าว สบร. | OKMD",
  description: "ข้อมูลข่าวสารเกี่ยวกับสำนักงานบริหารและพัฒนาองค์ความรู้ (OKMD)",
};

export default function NewsCorporate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContainerPage>
      <Suspense fallback={<div>Loading...</div>}>
        <NewsCorporatePage />
        {children}
      </Suspense>
    </ContainerPage>
  );
}
