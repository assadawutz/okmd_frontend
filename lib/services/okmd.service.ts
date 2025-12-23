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

export async function checkStatus(cid: string): Promise<StatusResult> {
  // Mock implementation
  // Allow any CID for testing purposes, or check specific one
  // For demo: pass if CID ends with 1
  if (cid.endsWith('1')) {
    return { status: 'passed', name: 'นายทดสอบ ผ่านการคัดเลือก' };
  }
  return { status: 'failed' };
}

export async function fetchJobs(): Promise<Job[]> {
  // Mock implementation
  return [
    {
      id: '1',
      title: 'นักจัดการความรู้',
      dept: 'สำนักจัดการความรู้',
      loc: 'กรุงเทพฯ',
      type: 'พนักงานประจำ',
      quota: 2
    },
    {
      id: '2',
      title: 'เจ้าหน้าที่บริหารงานทั่วไป',
      dept: 'สำนักอำนวยการ',
      loc: 'กรุงเทพฯ',
      type: 'พนักงานประจำ',
      quota: 1
    },
    {
      id: '3',
      title: 'นักวิชาการคอมพิวเตอร์',
      dept: 'สำนักเทคโนโลยีสารสนเทศ',
      loc: 'กรุงเทพฯ',
      type: 'สัญญาจ้าง',
      quota: 1
    }
  ];
}
