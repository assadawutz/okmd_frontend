/**
 * Donation Service Layer
 * แยก Logic และ Data จาก UI Components
 */

export interface DonationProject {
  id: number;
  title: string;
  currentAmount: number;
  targetAmount?: number;
  taxBenefit: string;
  imageSrc: string;
  description?: string;
}

export interface DonationFormData {
  amount: number;
  donorType: "personal" | "corporate";
  prefix: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  citizenId: string;
  paymentMethod: "qr" | "credit" | "bank";
}

export interface DonationResponse {
  success: boolean;
  transactionId?: string;
  message: string;
}

/**
 * Fetch donation projects
 * TODO: Replace with actual API call
 */
export async function getDonationProjects(): Promise<DonationProject[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return [
    {
      id: 1,
      title: "โครงการศูนย์การเรียนรู้แห่งชาติ NKC",
      currentAmount: 234527,
      targetAmount: 1000000,
      taxBenefit: "ลดหย่อนภาษีได้ 2 เท่า",
      imageSrc: "/images/banner/RC1(4).jpg",
      description: "โครงการเพื่อส่งเสริมการเรียนรู้และพัฒนาศักยภาพของเยาวชนไทย",
    },
  ];
}

/**
 * Get donation project by ID
 * TODO: Replace with actual API call
 */
export async function getDonationProjectById(id: string): Promise<DonationProject | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  const projects = await getDonationProjects();
  return projects.find((p) => p.id === Number(id)) || null;
}

/**
 * Submit donation
 * TODO: Replace with actual API call
 */
export async function submitDonation(
  projectId: string,
  data: DonationFormData
): Promise<DonationResponse> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const transactionId = `DON-${Date.now().toString().slice(-8)}`;

  return {
    success: true,
    transactionId,
    message: `บริจาคสำเร็จ! (เลขที่รายการ: ${transactionId})`,
  };
}

/**
 * Get predefined donation amounts
 */
export function getPredefinedAmounts(): number[] {
  return [500, 1000, 2000, 5000, 10000];
}
