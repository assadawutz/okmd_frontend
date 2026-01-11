import script from "@/components/page/procurement/ProcureMentDetail";
import ProcureMentDetail from "@/components/page/procurement/ProcureMentDetail";
import React from "react";
import { ContainerPage } from "@/components/shared/ContainerPage";

interface PageProps {
  params: {
    id: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { id } = params;

  return (
    <ContainerPage>
      <ProcureMentDetail id={id} />
    </ContainerPage>
  );
};

export default Page;
