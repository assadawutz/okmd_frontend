import ReportDetail from '@/components/page/report/ReportDetail';
import React from 'react';

interface PageProps {
  params: {
    id: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { id } = params;

  return (
    <div>
      <ReportDetail id={id} />
    </div>
  );
};

export default Page;
