import WorkingDetail from '@/components/page/working/WorkingDetail';
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
      <WorkingDetail id={id} />
    </div>
  );
};

export default Page;
