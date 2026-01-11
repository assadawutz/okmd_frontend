import About from "@/components/page/about/About";
import { ContainerPage } from "@/components/shared/ContainerPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา | OKMD",
  description:
    "ประวัติความเป็นมา วิสัยทัศน์ และพันธกิจของ สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน)",
};

export default function AboutPage() {
  return <About />;
}
