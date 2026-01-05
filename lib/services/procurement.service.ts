/**
 * Procurement Service Layer
 * แยก Logic และ Data จาก UI Components
 */

export interface ProcurementItem {
  id: number;
  title: string;
  type: string;
  status: string;
  method?: string;
  start_date: string;
  end_date?: string;
  publish_date?: string;
  file?: string;
}

export interface ProcurementDetail extends ProcurementItem {
  user_id?: string;
}

/**
 * Fetch procurement announcements
 * TODO: Replace with actual API call
 */
export async function getProcurements(filters?: {
  search?: string;
  type?: string;
  status?: string;
  method?: string;
  startDate?: string;
  endDate?: string;
}): Promise<ProcurementItem[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  const procurements: ProcurementItem[] = [
    {
      id: 1,
      title: "ประกาศเชิญชวนจัดซื้อจัดจ้าง ระบบจัดการข้อมูลองค์ความรู้",
      type: "invitation-tender",
      status: "open",
      method: "e-auction",
      start_date: "2024-01-15",
      end_date: "2024-02-15",
      publish_date: "2024-01-10",
    },
    {
      id: 2,
      title: "ประกาศสอบราคาจัดซื้ออุปกรณ์สำนักงาน",
      type: "price-inquiry",
      status: "open",
      method: "price-inquiry",
      start_date: "2024-01-20",
      end_date: "2024-02-20",
      publish_date: "2024-01-18",
    },
    {
      id: 3,
      title: "ประกาศผลผู้ชนะการประกวดราคา ระบบคลังข้อมูล",
      type: "winner-selection",
      status: "closed",
      method: "e-auction",
      start_date: "2024-01-05",
      end_date: "2024-01-25",
      publish_date: "2024-01-30",
    },
    {
      id: 4,
      title: "ประกาศแก้ไข/เพิ่มเติมเอกสารประกวดราคา",
      type: "amendment",
      status: "open",
      method: "e-auction",
      start_date: "2024-02-01",
      end_date: "2024-02-28",
      publish_date: "2024-01-28",
    },
  ];

  // Apply filters if provided
  let filtered = procurements;
  if (filters?.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter((item) => item.title.toLowerCase().includes(searchLower));
  }
  if (filters?.type) {
    filtered = filtered.filter((item) => item.type === filters.type);
  }
  if (filters?.status) {
    filtered = filtered.filter((item) => item.status === filters.status);
  }
  if (filters?.method) {
    filtered = filtered.filter((item) => item.method === filters.method);
  }

  return filtered;
}

/**
 * Get procurement by ID
 * TODO: Replace with actual API call
 */
export async function getProcurementById(id: string): Promise<ProcurementDetail | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  const procurements = await getProcurements();
  const item = procurements.find((p) => p.id === Number(id));

  if (!item) return null;

  return {
    ...item,
    user_id: "user123",
    file: "/procurement-file.pdf",
  };
}
