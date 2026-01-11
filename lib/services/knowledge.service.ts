/**
 * Knowledge Service Layer
 * แยก Logic และ Data จาก UI Components
 */

export interface KnowledgeMenuItem {
  label: string;
  value: string;
}

export interface MagazineCard {
  title: string;
  img: string;
  fileSize: string;
  id?: string;
}

export interface KnowledgeData {
  menu: KnowledgeMenuItem[];
  items: Record<string, MagazineCard[]>;
}

/**
 * Get knowledge menu items
 */
export function getKnowledgeMenu(): KnowledgeMenuItem[] {
  return [
    { label: "OKMD หนังสือนิตยสาร", value: "magazine" },
    { label: "OKMD แนะนำหนังสือดี", value: "recommend" },
    { label: "OKMD Infographic", value: "infographic" },
    { label: "OKMD บทความวิจัย", value: "research" },
    { label: "OKMD Recommended", value: "recommended" },
  ];
}

/**
 * Get knowledge items by category
 * TODO: Replace with actual API call
 */
export async function getKnowledgeItems(category?: string): Promise<KnowledgeData> {
  const menu = getKnowledgeMenu();
  
  const items: Record<string, MagazineCard[]> = {
    magazine: [
      { id: "1", title: "The Knowledge vol.39 (AI DEEPFAKE)", img: "/kn-1.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 54265.14 KB" },
      { id: "2", title: "The Knowledge vol.38 (INFORMATION OVERLOAD)", img: "/kn-2.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 54265.14 KB" },
      { id: "3", title: "The Knowledge vol.37 (GLOBAL BOILING)", img: "/kn-3.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 54265.14 KB" },
      { id: "4", title: "The Knowledge vol.36 (AI)", img: "/kn-4.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 54265.14 KB" },
      { id: "5", title: "The Knowledge vol.35 (FUTURE VEHICLES)", img: "/kn-5.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 54265.14 KB" },
      { id: "6", title: "The Knowledge vol.34 (COST OF READING)", img: "/kn-6.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 54265.14 KB" },
      { id: "7", title: "The Knowledge vol.33", img: "/kn-1.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 54265.14 KB" },
      { id: "8", title: "The Knowledge vol.32", img: "/kn-2.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 54265.14 KB" },
      { id: "9", title: "The Knowledge vol.31", img: "/kn-3.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 54265.14 KB" },
    ],
    recommend: [
      { id: "r1", title: "หนังสือแนะนำ: Design Thinking", img: "/kn-1.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 32500.50 KB" },
      { id: "r2", title: "หนังสือแนะนำ: Innovation Management", img: "/kn-2.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 41200.75 KB" },
      { id: "r3", title: "หนังสือแนะนำ: Digital Transformation", img: "/kn-3.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 38000.25 KB" },
    ],
    infographic: [
      { id: "i1", title: "Infographic: OKMD Statistics 2024", img: "/kn-4.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 15200.10 KB" },
      { id: "i2", title: "Infographic: Education Trends", img: "/kn-5.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 18500.30 KB" },
    ],
    research: [
      { id: "res1", title: "บทความวิจัย: AI in Education", img: "/kn-6.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 27500.40 KB" },
      { id: "res2", title: "บทความวิจัย: Digital Literacy", img: "/kn-1.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 31200.60 KB" },
    ],
    recommended: [
      { id: "rec1", title: "OKMD Recommended: Best Practices", img: "/kn-2.png", fileSize: "ดาวน์โหลดเอกสาร pdf ขนาด 22500.20 KB" },
    ],
  };

  return {
    menu,
    items: category ? { [category]: items[category] || [] } : items,
  };
}
