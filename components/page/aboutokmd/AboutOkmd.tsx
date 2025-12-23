'use client';

import { useEffect, useState } from 'react';

interface AboutUsData {
  title?: string;
  content?: string;
  [key: string]: unknown;
}

interface AboutUsProps {
  page: string;
}

const AboutOkmd = ({ page }: AboutUsProps) => {
  const [data, setData] = useState<AboutUsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/about-us-page/${page}`
        );

        if (!res.ok) throw new Error('Not found');

        const result = await res.json();
        setData(result.data);
      } catch {
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  if (loading) return null;

  if (!data) {
    return (
      <div className="p-10 text-center text-red-500 text-xl">
        ไม่พบหน้า (404)
      </div>
    );
  }

  return (
    <div className="mt-7">
      <div className="text-[30px] font-semibold">{data.title}</div>

      <div
        className="prose prose-lg max-w-none mt-6"
        dangerouslySetInnerHTML={{ __html: data.content || '' }}
      />
    </div>
  );
};

export default AboutOkmd;
