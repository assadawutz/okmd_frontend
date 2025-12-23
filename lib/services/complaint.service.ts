/**
 * Complaint Service Layer
 * แยก Logic และ Data จาก UI Components
 */

export interface ComplaintFormData {
  fullName: string;
  idCard: string;
  address: string;
  subDistrict: string;
  district: string;
  province: string;
  postalCode: string;
  phone: string;
  email: string;
  targetDepartment: string;
  topic: string;
  details: string;
  agreement: boolean;
  files?: File[];
}

export interface ComplaintSubmissionResponse {
  success: boolean;
  trackingId?: string;
  message: string;
}

/**
 * Submit complaint form
 * TODO: Replace with actual API call
 */
export async function submitComplaint(
  data: ComplaintFormData
): Promise<ComplaintSubmissionResponse> {
  // Simulate API call with network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // In a real implementation, this would call an API endpoint like:
  // const response = await fetch('/api/complaints', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // });
  // return await response.json();

  // Mock successful submission
  const trackingId = `OKMD-${Date.now().toString().slice(-6)}`;

  return {
    success: true,
    trackingId,
    message: `ส่งเรื่องร้องเรียนสำเร็จแล้ว! (เลขที่ติดตาม: ${trackingId})`,
  };
}
