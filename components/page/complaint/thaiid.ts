export function validateThaiId(id: string): boolean {
  if (!/^[0-9]{13}$/.test(id)) return false;
  let sum = 0;
  for (let i = 0; i < 12; i++) sum += Number(id[i]) * (13 - i);
  return (11 - (sum % 11)) % 10 === Number(id[12]);
}

export function thaiIdAutoFill(id: string) {
  if (!validateThaiId(id)) return null;

  // สมมติว่าระบบเชื่อมฐานข้อมูลประชาชน (mock)
  return {
    fullname: "นายสมชาย ใจดี",
    phone: "0891234567",
    email: "somchai@example.com",
  };
}
