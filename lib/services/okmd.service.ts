/**
 * OKMD Service Layer (Recruitment)
 * แยก logic/data ออกจาก UI components
 *
 * NOTE:
 * - ตอนนี้ยังไม่มี API จริงใน repo นี้ จึงใช้ mock data ให้ build/run ผ่าน
 * - สามารถเปลี่ยนไปเรียก API จริงได้ภายหลัง
 */

export interface JobItem {
  id: string;
  title: string;
  dept: string;
  loc: string;
  type: string;
  quota: number;
}

export interface ApplicationStatusResponse {
  status: "passed" | "failed";
  name?: string;
}

/**
 * Fetch jobs list (server component usage)
 * TODO: Replace with actual API call
 */
export async function fetchJobs(): Promise<JobItem[]> {
  return [
    {
      id: "1",
      title: "Frontend Developer",
      dept: "Digital Product",
      loc: "Bangkok",
      type: "Full-time",
      quota: 1,
    },
    {
      id: "2",
      title: "UX/UI Designer",
      dept: "Creative",
      loc: "Bangkok",
      type: "Contract",
      quota: 1,
    },
    {
      id: "3",
      title: "Content Editor",
      dept: "Knowledge",
      loc: "Hybrid",
      type: "Part-time",
      quota: 2,
    },
  ];
}

/**
 * Check application status (client component usage)
 * TODO: Replace with actual API call
 */
export async function checkStatus(
  citizenId: string
): Promise<ApplicationStatusResponse> {
  const cid = (citizenId ?? "").replace(/\D/g, "");

  // Basic validation
  if (cid.length !== 13) {
    return { status: "failed" };
  }

  // Mock rule: even last digit => passed
  const last = Number(cid[cid.length - 1]);
  if (Number.isFinite(last) && last % 2 === 0) {
    return { status: "passed", name: "ผู้สมัคร (ตัวอย่าง)" };
  }

  return { status: "failed" };
}

