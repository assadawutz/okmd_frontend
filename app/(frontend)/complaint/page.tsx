import Complaint from "@/components/page/complaint/Complaint";
import { ContainerPage } from "@/components/shared/ContainerPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "เรื่องร้องเรียน | OKMD",
  description:
    "ช่องทางการรับเรื่องร้องเรียนและข้อเสนอแนะ สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน)",
};

export default function ComplaintPage() {
  return (
    <ContainerPage>
      <Complaint />
    </ContainerPage>
  );
}
