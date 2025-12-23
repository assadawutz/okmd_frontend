// ช่องทางร้องเรียน
export const COMPLAINT_CHANNELS = [
    {
        id: 1,
        title: "ร้องเรียนออนไลน์",
        detail: "ส่งเรื่องร้องเรียนผ่านระบบออนไลน์ได้ตลอด 24 ชั่วโมง",
        icon: "/icons/complaint-online.png",
    },
    {
        id: 2,
        title: "โทรศัพท์",
        detail: "ติดต่อเจ้าหน้าที่ในเวลาราชการ",
        icon: "/icons/complaint-phone.png",
    },
    {
        id: 3,
        title: "อีเมล",
        detail: "ส่งเรื่องร้องเรียนผ่านอีเมลของหน่วยงาน",
        icon: "/icons/complaint-email.png",
    },
    {
        id: 4,
        title: "ไปรษณีย์",
        detail: "ส่งจดหมายร้องเรียนทางไปรษณีย์",
        icon: "/icons/complaint-mail.png",
    },
];

// ใช้สำหรับหน้า “ตรวจสอบสถานะ”
export const TRACK_DATA = [
    {
        trackingId: "OKMD-2568-0001",
        detail: "เรื่องร้องเรียนได้รับการแก้ไขเสร็จสิ้นแล้ว",
        updatedAt: "12/01/2568",
    },
    {
        trackingId: "OKMD-2568-0002",
        detail: "เรื่องอยู่ระหว่างตรวจสอบข้อเท็จจริง",
        updatedAt: "10/01/2568",
    },
    {
        trackingId: "OKMD-2568-0003",
        detail: "ข้อเสนอแนะได้รับการส่งต่อไปยังหน่วยงานที่เกี่ยวข้อง",
        updatedAt: "05/01/2568",
    },
];
