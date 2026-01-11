import CalenderEventDetail from "@/components/page/CalendarEvent/CalenderEventDetail";
import { ContainerPage } from "@/components/shared/ContainerPage";

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return (
    <ContainerPage>
      <CalenderEventDetail newsId={id} />
    </ContainerPage>
  );
}
