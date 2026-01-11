import Contact from "@/components/page/contact/Contact";
import { ContainerPage } from "@/components/shared/ContainerPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ติดต่อเรา | OKMD",
  description:
    "ช่องทางการติดต่อ สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน)",
};

export default function ContactPage() {
  return (
    <ContainerPage>
      <Contact />
    </ContainerPage>
  );
}
