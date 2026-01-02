import Donation from "@/components/page/donation/Donation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ร่วมบริจาค | OKMD",
  description: "ร่วมสนับสนุนการเรียนรู้กับ OKMD ใบเสร็จลดหย่อนภาษีได้ 2 เท่า",
};

export default function DonationPage() {
  return <Donation />;
}
