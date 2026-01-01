/**
 * About OKMD Service Layer
 * แยก Logic และ Data จาก UI Components
 */

export interface AboutOkmdPage {
  title: string;
  content: string;
  slug: string;
}

/**
 * Fetch about OKMD page by slug
 * TODO: Replace with actual API call
 */
export async function getAboutOkmdPage(slug: string): Promise<AboutOkmdPage | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  const pages: Record<string, AboutOkmdPage> = {
    "vision-mission": {
      slug: "vision-mission",
      title: "วิสัยทัศน์และพันธกิจ",
      content: `
        <h2>วิสัยทัศน์</h2>
        <p>เป็นองค์กรหลักในการบริหารและพัฒนาองค์ความรู้เพื่อสร้างสังคมแห่งการเรียนรู้</p>
        
        <h2>พันธกิจ</h2>
        <ul>
          <li>ส่งเสริมและพัฒนาองค์ความรู้ให้เกิดประโยชน์สูงสุด</li>
          <li>สร้างเครือข่ายการเรียนรู้ทั้งในและต่างประเทศ</li>
          <li>พัฒนาบุคลากรให้มีความสามารถและศักยภาพ</li>
        </ul>
      `,
    },
    "board": {
      slug: "board",
      title: "คณะกรรมการ",
      content: `
        <h2>คณะกรรมการบริหาร</h2>
        <p>ประกอบด้วยกรรมการที่มีความเชี่ยวชาญในด้านต่างๆ</p>
      `,
    },
    "organization": {
      slug: "organization",
      title: "โครงสร้างองค์กร",
      content: `
        <h2>โครงสร้างการบริหาร</h2>
        <p>องค์กรแบ่งออกเป็นหน่วยงานต่างๆ เพื่อการทำงานที่มีประสิทธิภาพ</p>
      `,
    },
  };

  return pages[slug] || null;
}

/**
 * Get all about OKMD page slugs
 */
export async function getAboutOkmdPageSlugs(): Promise<string[]> {
  return ["vision-mission", "board", "organization"];
}
