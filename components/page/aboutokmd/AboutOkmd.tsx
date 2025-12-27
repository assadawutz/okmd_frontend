'use client';

import { useEffect, useState } from 'react';

// --- Import Blueprint Components ---
import Reports from './Reports';
import Structure from './Structure';
import StructureOkmd from './Structureokmd';
import BoardInformation from './BoardInformation';
import Executives from './Executives';
import AnnualReport from './AnnualReport';
import AnalysisReport from './AnalysisReport';
import OutcomeReport from './OutcomeReport';
import ValueForMoneyReport from './ValueForMoneyReport';
import Plan from './Plan';
import ActionPlan from './ActionPlan';
// If these exist, import them. If not, I'll check first or assume they exist based on previous `ls`.
// Executives.tsx exists in my ls list.
// ActionPlan.tsx exists in my ls list.

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

  // --- Component Mapping based on Blueprint Slugs ---
  // Note: These keys must match the slug used in the Sidebar/Menu or URL.
  const BLUEPRINT_COMPONENTS: Record<string, React.ComponentType<any>> = {
    'structure': Structure,
    'structureokmd': StructureOkmd,
    'board-information': BoardInformation,
    'executives': Executives,
    'reports': Reports,
    'annual-report': AnnualReport,
    'analysis-report': AnalysisReport,
    'outcome-report': OutcomeReport,
    'value-for-money-report': ValueForMoneyReport,
    'strategic-plan': Plan,
    'action-plan': ActionPlan,
  };

  const SpecificComponent = BLUEPRINT_COMPONENTS[page];

  // If a specific component exists for this page, render it directly.
  if (SpecificComponent) {
    return <SpecificComponent />;
  }

  // --- Fallback: Fetch from API ---
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

  if (loading) return null; // Or a skeleton loader

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
