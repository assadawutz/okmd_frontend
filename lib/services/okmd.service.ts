/**
 * OKMD Service Layer
 * แยก Logic และ Data จาก UI Components
 */

export interface Job {
  id: number;
  title: string;
  dept: string;
  loc: string;
  type: string;
  quota: number;
}

export interface StatusCheckResult {
  status: 'passed' | 'failed';
  name?: string;
}

/**
 * Fetch jobs data
 * TODO: Replace with actual API call
 */
export async function fetchJobs(): Promise<Job[]> {
  // Simulate API call
  const jobs: Job[] = [
    {
      id: 1,
      title: 'เจ้าหน้าที่ช่วยปฏิบัติงานบริหารทรัพยากรกายภาพ ด้าน IT',
      dept: 'สำนักงานบริหารทรัพยากรกายภาพ',
      loc: 'จ.สงขลา',
      type: 'เจ้าหน้าที่ประจำ',
      quota: 2,
    },
    {
      id: 2,
      title: 'นักวิชาการคอมพิวเตอร์',
      dept: 'สำนักงานเทคโนโลยีสารสนเทศ',
      loc: 'กรุงเทพมหานคร',
      type: 'ข้าราชการ',
      quota: 1,
    },
    {
      id: 3,
      title: 'เจ้าหน้าที่ประชาสัมพันธ์',
      dept: 'สำนักงานบริหารงานทั่วไป',
      loc: 'กรุงเทพมหานคร',
      type: 'พนักงานราชการ',
      quota: 3,
    },
  ];

  return jobs;
}

/**
 * Check application status by citizen ID
 * TODO: Replace with actual API call
 */
export async function checkStatus(cid: string): Promise<StatusCheckResult> {
  // Simulate API call
  // In a real implementation, this would call an API endpoint
  
  // Mock logic: if CID ends with even number, status is passed
  const lastDigit = parseInt(cid.slice(-1));
  const isPassed = !isNaN(lastDigit) && lastDigit % 2 === 0;

  if (isPassed) {
    return {
      status: 'passed',
      name: 'ตัวอย่าง ชื่อผู้สมัคร',
    };
  }

  return {
    status: 'failed',
  };
}
