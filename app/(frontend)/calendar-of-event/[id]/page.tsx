import CalenderEventDetail from "@/components/page/CalendarEvent/CalenderEventDetail";

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const { id } =await params;
  return <CalenderEventDetail newsId={id} />;
}
