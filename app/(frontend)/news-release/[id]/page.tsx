import NewsReleaseDetail from "@/components/page/NewsRelease/NewsReleaseDetail";
import { ContainerPage } from "@/components/shared/ContainerPage";
import { use } from "react";

interface PageProps {
  params: Promise<{ id: string }>; // params เป็น Promise
}

export default function Page({ params }: PageProps) {
  const { id } = use(params); // unwrap ด้วย React.use()

  return (
    <ContainerPage>
      <NewsReleaseDetail newsId={id} />
    </ContainerPage>
  );
}
