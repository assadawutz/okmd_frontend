import NewsCorporateDetail from "@/components/page/NewsCorporate/NewsCorporateDetail";
import { ContainerPage } from "@/components/shared/ContainerPage";

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return (
    <ContainerPage>
      <NewsCorporateDetail newsId={id} />
    </ContainerPage>
  );
}
