import Procurement from "@/components/page/procurement/Procurement";
import { ContainerPage } from "@/components/shared/ContainerPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "จัดซื้อจัดจ้าง | OKMD",
  description:
    "ประกาศจัดซื้อจัดจ้างและราคากลาง สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน)",
};

export default function ProcurementPage() {
  return (
    <ContainerPage>
      <Procurement />
    </ContainerPage>
  );
}
