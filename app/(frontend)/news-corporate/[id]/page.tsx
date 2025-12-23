import NewsCorporateDetail from "@/components/page/NewsCorporate/NewsCorporateDetail";

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const { id } =await params;
  return <NewsCorporateDetail newsId={id} />;
}
