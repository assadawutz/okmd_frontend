
export interface JobPosition {
  id: string | number;
  title: string;
  dept: string;
  loc: string;
  type: string;
  quota: number;
}

export const fetchJobs = async (): Promise<JobPosition[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return [
    {
      id: 1,
      title: "นักวิชาการคอมพิวเตอร์",
      dept: "สำนักเทคโนโลยีสารสนเทศ",
      loc: "กรุงเทพมหานคร",
      type: "พนักงานราชการ",
      quota: 2,
    },
    {
      id: 2,
      title: "เจ้าหน้าที่บริหารงานทั่วไป",
      dept: "สำนักอำนวยการ",
      loc: "กรุงเทพมหานคร",
      type: "ลูกจ้างชั่วคราว",
      quota: 1,
    },
    {
      id: 3,
      title: "นักวิเคราะห์นโยบายและแผน",
      dept: "สำนักนโยบายและแผน",
      loc: "กรุงเทพมหานคร",
      type: "พนักงานราชการ",
      quota: 3,
    },
    {
      id: 4,
      title: "นักทรัพยากรบุคคล",
      dept: "สำนักบริหารทรัพยากรบุคคล",
      loc: "กรุงเทพมหานคร",
      type: "ข้าราชการ",
      quota: 1,
    },
    {
      id: 5,
      title: "นิติกร",
      dept: "กลุ่มงานกฎหมาย",
      loc: "กรุงเทพมหานคร",
      type: "พนักงานราชการ",
      quota: 1,
    },
  ];
};
