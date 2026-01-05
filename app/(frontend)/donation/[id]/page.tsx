import React from "react";
import DonationAmountSelector from "@/components/page/donation/DonationDetail";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  const { id } = params;

  return (
    <ContainerPage>
      <DonationAmountSelector id={id} />
    </ContainerPage>
  );
}

export default Page;
