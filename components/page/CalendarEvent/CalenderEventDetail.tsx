"use client";
import { Kanit } from "next/font/google";
import Image from "next/image";
import ShareButtons from "@/components/ShareButtons";
import RelatedNews from "@/components/RelatedNews";
import Link from "next/link";
import { ChevronLeft, Calendar as CalendarIcon, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kanit",
});

const mockNews = [
  {
    id: 1,
    title:
      "กิจกรรม Freedom Learn x Conet LANNA: Yi Peng ชวนน้อง ๆ มาสืบสานประเพณียี่เป็งผ่านการสร้างโคมแขวนรูปทรงเรขาคณิต",
    date: "25 ตุลาคม 2568 เวลา: 11.00 - 15.30 น.",
    location:
      "สถานที่: ห้องเวิร์คช็อป 1 และ 2 อุทยานการเรียนรู้ TK Park ชั้น 8 centralWorld",
    banner: "/event1.png",
    content: [
      {
        type: "text",
        text: "Bangkokpack ร่วมกับอุทยานการเรียนรู้ TK Park จัดกิจกรรม Freedom Learn x Conet LANNA: Yi Peng ชวนน้อง ๆ มาสืบสานประเพณียี่เป็ง ประเพณีอันเก่าแก่ของชาวล้านนา ในคืนวันเพ็ญเดือนยี่ (คืนพระจันทร์เต็มดวง) ผ่านการสร้างโคมแขวนรูปทรงเรขาคณิต จาก Conet ของเล่นรักษ์โลกจากแนวคิด Trash to Teach ที่พี่ ๆ ทีมงานเตรียมไว้ให้น้อง ๆ ได้เรียนรู้อย่างยั่งยืน ด้วยสื่อแทนแสงส่องประกายให้ดำเนินชีวิตเจริญรุ่งเรืองอยู่เย็นเป็นสุข",
        value: "event_intro",
      },
      {
        type: "text",
        text: "Conet Play ดียังไง?",
        value: "conet_play_title",
      },
      {
        type: "text",
        text: "1. เป็นการเล่นที่สร้างคาร์บอนต่ำ ใช้เพียงกระดาษแข็งและยางวง ซึ่งรีไซเคิลได้ 100%",
        value: "conet_play_1",
      },
      {
        type: "text",
        text: "2. ส่งเสริมการเรียนรู้เรื่องรูปเรขาคณิต และการสร้างรูปทรง 3 มิติ",
        value: "conet_play_2",
      },
      {
        type: "text",
        text: "3. สร้างสรรค์จินตนาการได้แบบไม่รู้จบ",
        value: "conet_play_3",
      },
      {
        type: "text",
        text: "4. สร้างพื้นฐานการเรียนรู้แบบ STEAM (Science, Technology, Engineering, Arts, Mathematics)",
        value: "conet_play_4",
      },
      {
        type: "text",
        text: "5. ช่วยฝึกวางแผนและแก้ปัญหา",
        value: "conet_play_5",
      },
      {
        type: "text",
        text: "พบกันที่ห้องเด็ก อุทยานการเรียนรู้ TK Park ชั้น 8 ศูนย์การค้าเซ็นทรัลเวิลด์ ในวันเสาร์ที่ 25 ตุลาคม 2568 ระหว่างเวลา 11.00 – 15.30 น. โดยกิจกรรมแบ่งเป็น 3 รอบ รอบละ 15 คน  เวลา 11.00 – 11.30 น. / 13.00 – 13.30 น. / 15.00 – 15.30 น.",
        value: "event_details",
      },
      {
        type: "text",
        text: "กิจกรรมนี้ไม่มีค่าใช้จ่ายและไม่ต้องลงทะเบียนล่วงหน้า (ลงทะเบียนที่ห้องเด็กในวันจัดกิจกรรม) โดยไม่จำกัดจำนวนผู้เข้าร่วมกิจกรรม",
        value: "event_fee_and_registration",
      },
    ],
  },
  {
    id: 2,
    title:
      "กิจกรรมเวิร์กช็อป หัวอกพ่อแม่ (ครั้งที่ 1): เลี้ยงลูกให้เวิร์ก…แม้ชีวิตจริงไม่เหมือนในตำรา",
    date: "26 ตุลาคม 2568 | เวลา: 13.00 - 15.00 น.",
    location:
      "ห้องเวิร์กช็อป 1 และ 2 อุทยานการเรียนรู้ TK Park ชั้น 8 centralwOrld",
    banner: "/event2.png",
    content: [
      {
        type: "text",
        text: "JoyMind ร่วมกับอุทยานการเรียนรู้ TK Park ชวนพ่อแม่ ผู้ปกครอง มาประยุกต์ความรู้การเลี้ยงลูกให้ได้ผลจริง นำโดยนักจิตวิทยาเด็ก วัยรุ่น และครอบครัว",
        value: "workshop_intro",
      },
      {
        type: "text",
        text: "กิจกรรมนี้เหมาะสำหรับพ่อแม่ที่สงสัยว่า รู้ทฤษฎีก็แล้ว ลองทำตามตำราก็แล้ว แต่ทำไม…ยังไม่เวิร์กเท่าที่หวัง? เช่น คุยกับลูกทีไร ลูกไม่ฟัง พูดเท่าไหร่ก็ไม่เข้าหู ไม่ถึงใจ",
        value: "workshop_target_audience",
      },
      {
        type: "text",
        text: "JoyMind เตรียมกิจกรรมนี้ให้ผู้เข้าร่วมได้สวมบทบาท เข้าใจปัญหาจริง แลกเปลี่ยนวิธีปรับพฤติกรรมที่ได้ผลและที่ไม่ได้ผล พร้อมออกแบบแนวทางใหม่ที่เหมาะกับลูกและครอบครัวจริง ๆ",
        value: "workshop_objective",
      },
      {
        type: "text",
        text: "พบกันที่ห้องเวิร์กช็อป 1 และ 2 อุทยานการเรียนรู้ TK Park ชั้น 8 centralwOrld จำกัดเพียง 40 ที่นั่ง",
        value: "workshop_details",
      },
      {
        type: "text",
        text: "ไม่มีค่าใช้จ่ายในการเข้าร่วมกิจกรรม (อ่านรายละเอียดการมัดจำกิจกรรมได้ที่หมายเหตุด้านล่าง) ลงทะเบียนได้ตั้งแต่วันนี้ โดยทักหาทีมงาน JoyMind ทาง LINE: @joymindcommunity หรือคลิกที่นี่ แล้วจะได้รับ link ลงทะเบียนล่วงหน้าผ่าน Google Forms",
        value: "workshop_registration",
      },
    ],
  },
  {
    id: 3,
    title:
      "Contemporary World Film Series 2025 ขอเชิญชม SOMETHING LIKE AN AUTOBIOGRAPHY ภาพยนตร์จากบังกลาเทศ",
    date: "25 ตุลาคม 2568 | เวลา: 16.00 - 19.00 น.",
    location:
      "สถานที่: อุทยานการเรียนรู้ TK Park ชั้น 8 ศูนย์การค้า centralwOrld",
    banner: "/event3.png",
    content: [
      {
        text: "อุทยานการเรียนรู้ TK Park ร่วมกับสถานเอกอัครราชทูตบังกลาเทศ ประจำประเทศไทยชวนคุณมาชมภาพยนตร์จาก Contemporary World Film Series ปี 2025 ส่งตรงจากประเทศบังกลาเทศ Something Like an Autobiography (2023) กำกับโดย Mostofa Sarwar Farooki ที่เล่าเรื่องชีวิตจริงของผู้กำกับและภรรยา ในช่วงล็อกดาวน์ COVID-19 ทั้งคู่ร่วมกันเขียนบทภาพยนตร์เรื่องนี้ อิงจากชีวิตของตนเอง โดยนำชื่อภาพยนตร์มาจากบรรทัดเปิดของหนังสือบันทึกความทรงจำของ Akira Kurosawa ผู้กำกับญี่ปุ่นที่ Farooki ชื่นชมอย่างยิ่ง",
        value: "event_intro",
      },
      {
        text: "ในเรื่องนี้ นอกจาก Farooki จะกำกับแล้ว เขายังปรากฏตัวในบทนำชายเป็นครั้งแรก โดยรับบทเคียงคู่กับ Tisha ผู้เป็นภรรยา ภาพยนตร์ผสมผสานเรื่องส่วนตัวกับสังคมและการเมือง",
        value: "film_overview",
      },
    ],
  },
];

interface CalenderEventDetailProps {
  newsId: string;
}

export default function CalenderEventDetail({
  newsId,
}: CalenderEventDetailProps) {
  const newsItem = mockNews.find((item) => item.id.toString() === newsId);

  if (!newsItem)
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center space-y-4">
        <div className="text-2xl font-bold text-[#1B1D20]">ไม่พบกิจกรรมนี้</div>
        <Link
          href="/calendar-of-event"
          className="text-[#16A7CB] hover:underline"
        >
          กลับไปหน้าปฏิทินกิจกรรม
        </Link>
      </div>
    );

  // เลือก related news
  const relatedItems = mockNews
    .filter((item) => item.id.toString() !== newsId)
    .slice(0, 4)
    .map((item) => ({
      id: item.id,
      title: item.title,
      banner: item.banner,
    }));

  return (
    <div className={`${kanit.variable} font-kanit w-full space-y-8`}>
      {/* Header Block */}
      <div className="w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden relative shadow-sm">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bannerabout.png')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            ปฏิทิน <span className="text-[#74CEE2]">กิจกรรม</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            ติดตามกิจกรรมที่น่าสนใจจาก OKMD
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 px-2 gap-2">
        <Link href="/" className="hover:text-[#16A7CB] transition-colors">
          หน้าหลัก
        </Link>
        <span>›</span>
        <Link
          href="/calendar-of-event"
          className="hover:text-[#16A7CB] transition-colors"
        >
          ปฏิทินกิจกรรม
        </Link>
        <span>›</span>
        <span className="text-[#16A7CB] font-medium truncate max-w-[200px] md:max-w-xs">
          {newsItem.title}
        </span>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
        <header className="mb-10 space-y-6 md:flex md:items-start md:justify-between md:gap-8 md:space-y-0 border-b border-gray-100 pb-8">
          <div className="flex-1 space-y-4">
            <div className="inline-block px-3 py-1 bg-[#E8F6FB] text-[#16A7CB] rounded-full text-xs font-bold">
              ปฏิทินกิจกรรม
            </div>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight text-[#1B1D20]">
              {newsItem.title}
            </h1>
          </div>
          <div className="w-full md:w-auto flex flex-col gap-3 py-4 md:py-0 md:border-l md:border-gray-100 md:pl-8 text-sm text-gray-600 min-w-[250px]">
            <div className="flex items-start gap-2">
              <CalendarIcon className="w-5 h-5 text-[#16A7CB] shrink-0" />
              <span>{newsItem.date}</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-[#16A7CB] shrink-0" />
              <span>{newsItem.location}</span>
            </div>
          </div>
        </header>

        {/* Banner */}
        <div className="w-full aspect-video md:aspect-[21/9] relative rounded-2xl overflow-hidden mb-12 shadow-sm">
          <Image
            src={newsItem.banner}
            alt={newsItem.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article & Sidebar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <aside className="md:col-span-3 lg:col-span-2 order-2 md:order-1 space-y-6">
            <div className="p-5 rounded-2xl border border-gray-100 bg-[#F8FAFC] text-center">
              <span className="text-xs font-bold text-gray-400 block mb-3 uppercase tracking-wider">
                Share
              </span>
              <ShareButtons />
            </div>

            <div className="hidden md:block opacity-60">
              <Image
                src="/okmd_logo_color.png"
                alt="okmd logo"
                width={100}
                height={50}
                className="object-contain mx-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </aside>

          <article className="md:col-span-9 lg:col-span-10 order-1 md:order-2">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {newsItem.content.map((item, idx) => (
                <p
                  key={idx}
                  className={`whitespace-pre-line ${
                    idx === 0 ? "text-xl font-medium text-[#1B1D20]" : ""
                  }`}
                >
                  {item.text || ""}
                </p>
              ))}
            </div>
          </article>
        </div>

        {/* Related */}
        <div className="mt-16 pt-10 border-t border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1B1D20]">
              กิจกรรมอื่นๆ ที่น่าสนใจ
            </h3>
            <Link
              href="/calendar-of-event"
              className="text-[#16A7CB] font-bold hover:underline"
            >
              ดูทั้งหมด
            </Link>
          </div>
          <RelatedNews items={relatedItems} />
        </div>

        <div className="mt-10">
          <Link href="/calendar-of-event">
            <Button
              variant="outline"
              className="rounded-xl flex items-center gap-2"
            >
              <ChevronLeft size={18} /> ย้อนกลับ
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
