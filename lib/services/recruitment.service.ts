/**
 * Recruitment Service Layer
 * แยก Logic และ Data จาก UI Components
 */

export interface RecruitmentAnnouncement {
  id: string;
  title: string;
  description: string;
  postedDate: string;
  closingDate: string;
  department: string;
  location?: string;
  type?: string;
  status?: "open" | "closed";
  announcementDate?: string;
}

export interface RecruitmentApplication {
  id: string;
  announcementId: string;
  applicantName: string;
  citizenId: string;
  status: string;
  submittedDate: string;
}

/**
 * Fetch recruitment announcements
 * TODO: Replace with actual API call
 */
export async function getRecruitmentAnnouncements(filters?: {
  search?: string;
  department?: string;
  status?: string;
}): Promise<RecruitmentAnnouncement[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  const announcements: RecruitmentAnnouncement[] = [
    {
      id: "1",
      title: "ประกาศรับสมัครงานตำแหน่งนักพัฒนาระบบสารสนเทศ",
      description: "รับสมัครงานตำแหน่งนักพัฒนาระบบสารสนเทศ เพื่อพัฒนาระบบและแอปพลิเคชันขององค์กร",
      postedDate: "2024-01-15",
      closingDate: "15 กุมภาพันธ์ 2568",
      announcementDate: "15 มกราคม 2568",
      department: "สำนักงานบริหารและพัฒนาองค์ความรู้",
      location: "กรุงเทพมหานคร",
      type: "งานประจำ",
      status: "open",
    },
    {
      id: "2",
      title: "ประกาศรับสมัครงานตำแหน่งนักวิชาการองค์ความรู้",
      description: "รับสมัครงานตำแหน่งนักวิชาการองค์ความรู้ เพื่อทำการวิจัยและพัฒนาองค์ความรู้",
      postedDate: "2024-01-10",
      closingDate: "10 กุมภาพันธ์ 2568",
      announcementDate: "10 มกราคม 2568",
      department: "สำนักงานบริหารและพัฒนาองค์ความรู้",
      location: "กรุงเทพมหานคร",
      type: "งานประจำ",
      status: "open",
    },
    {
      id: "3",
      title: "ประกาศรับสมัครงานตำแหน่งเจ้าหน้าที่บริหารงานทั่วไป",
      description: "รับสมัครงานตำแหน่งเจ้าหน้าที่บริหารงานทั่วไป เพื่อรับผิดชอบงานบริหารและประสานงาน",
      postedDate: "2024-01-05",
      closingDate: "5 กุมภาพันธ์ 2568",
      announcementDate: "5 มกราคม 2568",
      department: "มิวเซียมสยาม",
      location: "กรุงเทพมหานคร",
      type: "งานประจำ",
      status: "closed",
    },
  ];

  // Apply filters if provided
  let filtered = announcements;
  if (filters?.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(
      (item) =>
        item.title.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower) ||
        item.department.toLowerCase().includes(searchLower)
    );
  }
  if (filters?.department) {
    filtered = filtered.filter((item) => item.department === filters.department);
  }

  return filtered;
}

/**
 * Get recruitment announcement by ID
 * TODO: Replace with actual API call
 */
export async function getRecruitmentAnnouncementById(
  id: string
): Promise<RecruitmentAnnouncement | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  const announcements = await getRecruitmentAnnouncements();
  return announcements.find((a) => a.id === id) || null;
}

/**
 * Submit recruitment application
 * TODO: Replace with actual API call
 */
export async function submitRecruitmentApplication(data: {
  announcementId: string;
  applicantName: string;
  citizenId: string;
  email: string;
  phone: string;
  files?: File[];
}): Promise<{ success: boolean; applicationId?: string; message: string }> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const applicationId = `APP-${Date.now().toString().slice(-8)}`;

  return {
    success: true,
    applicationId,
    message: `ส่งใบสมัครสำเร็จ! (เลขที่ใบสมัคร: ${applicationId})`,
  };
}
