import NewsReleaseDetail from "@/components/page/NewsRelease/NewsReleaseDetail";
import { use } from "react";


interface PageProps {
  params: Promise<{ id: string }>; // params เป็น Promise
}

export default function Page({ params }: PageProps) {
  const { id } = use(params); // unwrap ด้วย React.use()

  return <NewsReleaseDetail newsId={id} />;
}
