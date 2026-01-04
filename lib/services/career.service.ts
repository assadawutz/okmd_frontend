/**
 * Career Service Layer
 * แยก Logic และ Data จาก UI Components
 */

export interface CareerJob {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  postedDate: string;
  closingDate: string;
  description: string;
  requirements?: string;
  responsibilities?: string;
  benefits?: string;
}

/**
 * Fetch career jobs
 * TODO: Replace with actual API call
 */
export async function getCareerJobs(filters?: {
  search?: string;
  department?: string;
  location?: string;
  type?: string;
}): Promise<CareerJob[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  const jobs: CareerJob[] = [
    {
      id: "1",
      title: "นักพัฒนาระบบสารสนเทศ",
      department: "สำนักงานบริหารและพัฒนาองค์ความรู้",
      location: "กรุงเทพมหานคร",
      type: "งานประจำ",
      postedDate: "15 มกราคม 2568",
      closingDate: "15 กุมภาพันธ์ 2568",
      description: "รับผิดชอบในการพัฒนาและดูแลระบบสารสนเทศขององค์กร รวมถึงการออกแบบและพัฒนาระบบใหม่",
      requirements: "วุฒิการศึกษาระดับปริญญาตรีขึ้นไป สาขาวิทยาศาสตร์คอมพิวเตอร์ หรือสาขาที่เกี่ยวข้อง",
      responsibilities: "พัฒนาและดูแลระบบสารสนเทศ ออกแบบและพัฒนาระบบใหม่",
      benefits: "เงินเดือนตามวุฒิการศึกษา สวัสดิการตามที่กฎหมายกำหนด",
    },
    {
      id: "2",
      title: "นักวิชาการองค์ความรู้",
      department: "สำนักงานบริหารและพัฒนาองค์ความรู้",
      location: "กรุงเทพมหานคร",
      type: "งานประจำ",
      postedDate: "10 มกราคม 2568",
      closingDate: "10 กุมภาพันธ์ 2568",
      description: "ทำการวิจัยและพัฒนาองค์ความรู้ในด้านต่างๆ เพื่อส่งเสริมการเรียนรู้และพัฒนาสังคม",
      requirements: "วุฒิการศึกษาระดับปริญญาโทขึ้นไป สาขามนุษยศาสตร์ สังคมศาสตร์ หรือสาขาที่เกี่ยวข้อง",
      responsibilities: "วิจัยและพัฒนาองค์ความรู้ จัดทำรายงานวิจัย",
      benefits: "เงินเดือนตามวุฒิการศึกษา สวัสดิการตามที่กฎหมายกำหนด",
    },
    {
      id: "3",
      title: "เจ้าหน้าที่บริหารงานทั่วไป",
      department: "สำนักงานบริหารและพัฒนาองค์ความรู้",
      location: "กรุงเทพมหานคร",
      type: "งานประจำ",
      postedDate: "5 มกราคม 2568",
      closingDate: "5 กุมภาพันธ์ 2568",
      description: "รับผิดชอบงานบริหารงานทั่วไปขององค์กร รวมถึงการจัดทำเอกสารและการประสานงาน",
      requirements: "วุฒิการศึกษาระดับปริญญาตรีขึ้นไป",
      responsibilities: "บริหารงานทั่วไป จัดทำเอกสาร ประสานงาน",
      benefits: "เงินเดือนตามวุฒิการศึกษา สวัสดิการตามที่กฎหมายกำหนด",
    },
  ];

  // Apply filters if provided
  let filtered = jobs;
  if (filters?.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(
      (job) =>
        job.title.toLowerCase().includes(searchLower) ||
        job.department.toLowerCase().includes(searchLower) ||
        job.description.toLowerCase().includes(searchLower)
    );
  }
  if (filters?.department) {
    filtered = filtered.filter((job) => job.department === filters.department);
  }
  if (filters?.location) {
    filtered = filtered.filter((job) => job.location === filters.location);
  }
  if (filters?.type) {
    filtered = filtered.filter((job) => job.type === filters.type);
  }

  return filtered;
}

/**
 * Get career job by ID
 * TODO: Replace with actual API call
 */
export async function getCareerJobById(id: string): Promise<CareerJob | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  const jobs = await getCareerJobs();
  return jobs.find((job) => job.id === id) || null;
}
