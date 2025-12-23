'use client';

import AboutOkmd from '@/components/page/aboutokmd/AboutOkmd';
import { use } from 'react';

interface PageProps {
  params: Promise<{
    page: string;
  }>;
}

const Page = ({ params }: PageProps) => {
  const { page } = use(params);

  return <AboutOkmd page={page} />;
};

export default Page;
