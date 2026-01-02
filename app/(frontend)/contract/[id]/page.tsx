import ContractDetail from "@/components/page/contract/ContractDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "รายละเอียดสัญญา | OKMD",
  description: "รายละเอียดสัญญาและข้อตกลง",
};

export default function ContractDetailPage() {
  return <ContractDetail />;
}
