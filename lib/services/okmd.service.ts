// Mock data for job listings
const mockJobs = [
  {
    id: '1',
    title: 'นักวิชาการคอมพิวเตอร์',
    dept: 'ฝ่ายเทคโนโลยีสารสนเทศ',
    loc: 'กรุงเทพมหานคร',
    type: 'พนักงานประจำ',
    quota: 2,
  },
  {
    id: '2',
    title: 'นักวิเคราะห์นโยบายและแผน',
    dept: 'ฝ่ายแผนงานและพัฒนา',
    loc: 'กรุงเทพมหานคร',
    type: 'พนักงานประจำ',
    quota: 1,
  },
  {
    id: '3',
    title: 'นักจัดการงานทั่วไป',
    dept: 'ฝ่ายบริหารงานทั่วไป',
    loc: 'กรุงเทพมหานคร',
    type: 'พนักงานสัญญาจ้าง',
    quota: 3,
  },
];

// Mock passed candidates
const passedCandidates: Record<string, string> = {
  '1234567890123': 'นายสมชาย ใจดี',
  '9876543210987': 'นางสาวสมหญิง รักเรียน',
};

export interface Job {
  id: string;
  title: string;
  dept: string;
  loc: string;
  type: string;
  quota: number;
}

export interface StatusResult {
  status: 'passed' | 'failed';
  name?: string;
}

export async function fetchJobs(): Promise<Job[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockJobs;
}

export async function checkStatus(cid: string): Promise<StatusResult> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  
  const name = passedCandidates[cid];
  if (name) {
    return { status: 'passed', name };
  }
  return { status: 'failed' };
}
