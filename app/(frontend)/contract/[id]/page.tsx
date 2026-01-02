import ContractDetail from "@/components/page/contract/ContractDetail";
import { Metadata } from "next";
import { ContainerPage } from "@/components/shared/ContainerPage";

export const metadata: Metadata = {
  title: "รายละเอียดสัญญา | OKMD",
  description: "รายละเอียดสัญญาและข้อตกลง",
};

export default function ContractDetailPage() {
  return (
    <ContainerPage>
      <ContractDetail />
    </ContainerPage>
  );
}
