// OKMD Service - For recruitment and job-related functionality

export interface Job {
  id: string;
  title: string;
  dept: string;
  loc: string;
  type: string;
  quota: number;
}

export interface ApplicationStatus {
  status: 'passed' | 'failed';
  name?: string;
}

/**
 * Fetch all available jobs
 */
export async function fetchJobs(): Promise<Job[]> {
  // Mock data for now - replace with actual API call
  return [
    {
      id: '1',
      title: 'นักวิชาการข้อมูล',
      dept: 'ฝ่ายเทคโนโลยีสารสนเทศ',
      loc: 'กรุงเทพมหานคร',
      type: 'Full-time',
      quota: 2,
    },
    {
      id: '2',
      title: 'เจ้าหน้าที่ประชาสัมพันธ์',
      dept: 'ฝ่ายสื่อสารองค์กร',
      loc: 'กรุงเทพมหานคร',
      type: 'Full-time',
      quota: 1,
    },
    {
      id: '3',
      title: 'นักพัฒนาเว็บไซต์',
      dept: 'ฝ่ายเทคโนโลยีสารสนเทศ',
      loc: 'กรุงเทพมหานคร',
      type: 'Contract',
      quota: 3,
    },
  ];
}

/**
 * Check application status by citizen ID
 */
export async function checkStatus(cid: string): Promise<ApplicationStatus> {
  // Mock data for now - replace with actual API call
  // Validate CID format (13 digits)
  if (cid.length !== 13 || !/^\d+$/.test(cid)) {
    return {
      status: 'failed',
    };
  }

  // Mock: Check if the last digit is even (passed) or odd (failed)
  const lastDigit = parseInt(cid[cid.length - 1]);
  if (lastDigit % 2 === 0) {
    return {
      status: 'passed',
      name: 'คุณสมชาย ใจดี',
    };
  }

  return {
    status: 'failed',
  };
}
