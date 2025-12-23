import React from "react";
import DonationAmountSelector from "@/components/page/donation/DonationDetail";

interface PageProps {
  params: {
    id: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { id } = params;

  return (
    <div>
      <DonationAmountSelector id={id} />
    </div>
  );
};

export default Page;
