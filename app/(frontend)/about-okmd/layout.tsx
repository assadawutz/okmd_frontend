import { ContainerPage } from "@/components/shared/ContainerPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "เกี่ยวกับ OKMD",
  description: "ข้อมูลเกี่ยวกับสำนักงานบริหารและพัฒนาองค์ความรู้ (OKMD)",
};

export default function AboutOkmdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ContainerPage>{children}</ContainerPage>;
}
