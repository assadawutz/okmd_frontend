"use client";
import { Kanit } from "next/font/google";
import Image from "next/image";
import ShareButtons from "@/components/ShareButtons";
import RelatedNews from "@/components/RelatedNews";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

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
      {
        type: "text",
        text: "กิจกรรมทั้งหมดของเดือนนี้",
        value: "all_events_month",
      },
      {
        type: "text",
        text: "กิจกรรมทั้งหมดของปีนี้",
        value: "all_events_year",
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
      {
        type: "text",
        text: "หมายเหตุ: กิจกรรมนี้ไม่เก็บค่าเข้าร่วมกิจกรรม แต่มีค่ามัดจำในการลงทะเบียน 200 บาท จำกัดเพียง 40 ที่นั่ง โดยผู้เข้าร่วมกิจกรรมนำใบเสร็จรับเงินมาแสดงกับทีมงานในวันงานเพื่อรับเงินมัดจำคืนเต็มจำนวนเป็นเงินสด",
        value: "workshop_note_deposit",
      },
      {
        type: "text",
        text: "หากผู้เข้าร่วมกิจกรรมไม่ได้เป็นสมาชิก TK Park จะมีค่าเข้าพื้นที่วันละ 20 บาท/คน ไม่จำกัดจำนวนครั้งเข้า–ออกภายในวันนั้น หรือสมัครสมาชิก TK Park แบบรายปีเพื่อเข้าพื้นที่ได้ไม่จำกัดครั้งตลอดปี https://www.tkpark.or.th/tha/membership",
        value: "workshop_note_membership",
      },
      {
        type: "text",
        text: "อุทยานการเรียนรู้ TK Park ไม่มีบริการประทับตราจอดรถฟรี ค่าใช้จ่ายเกี่ยวกับการจอดรถ เป็นไปตามเงื่อนไขของศูนย์การค้า centralwOrld",
        value: "workshop_note_parking",
      },
      {
        type: "text",
        text: "กิจกรรมทั้งหมดของเดือนนี้",
        value: "all_events_month",
      },
      {
        type: "text",
        text: "กิจกรรมทั้งหมดของปีนี้",
        value: "all_events_year",
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
      {
        text: "Farooki กล่าวว่า “เรื่องราวของคนอื่นกลายเป็นเรื่องราวส่วนตัวของผมเสมอ แต่ในครั้งนี้ตัวเราเองคือเรื่องราว จึงกลายเป็นเรื่องส่วนตัวที่ลึกซึ้ง”",
        value: "director_quote",
      },
      {
        text: "ภาพยนตร์ได้รับเสียงชื่นชมจากนักวิจารณ์และผู้ชมในเทศกาลภาพยนตร์สำคัญทั่วโลก เช่น Busan (เกาหลี), Mumbai (อินเดีย), Sydney (ออสเตรเลีย) และมีฉากเปิดเรื่องที่พัทยา Farooki เคยมาไทยหลายครั้ง และกล่าวว่า “ที่นี่เหมือนบ้านหลังที่สองของผมจริง ๆ”",
        value: "film_acclaim",
      },
      {
        text: "การฉายภาพยนตร์ Something Like an Autobiography ใน Contemporary World Film Series ปี 2025 ที่ TK Park นับเป็นการฉายภาพยนตร์ครั้งแรกในประเทศไทย และเป็นโอกาสพิเศษที่ผู้กำกับและภรรยาจะเดินทางมาร่วมงาน",
        value: "event_significance",
      },
      {
        text: "พบกันวันเสาร์ที่ 25 ตุลาคม 2568 เวลา 16:00 น. (เปิดให้เข้าร่วมงานตั้งแต่ 15:30 น.) ณ ศูนย์การเรียนรู้อเนกประสงค์ อุทยานการเรียนรู้ TK Park ชั้น 8 centralwOrld",
        value: "event_details",
      },
      {
        text: "ตัวอย่างภาพยนตร์: คลิกชมตัวอย่าง",
        value: "trailer_link",
      },
      {
        text: "ลงทะเบียนล่วงหน้าตั้งแต่วันนี้เป็นต้นไป โดยส่งอีเมลไปยัง filmforum17@gmail.com",
        value: "registration",
      },
      {
        text: "ไม่มีค่าใช้จ่ายในการเข้าชม",
        value: "free_entry",
      },
      {
        text: "จำกัดจำนวนที่นั่ง และสงวนสิทธิ์เฉพาะผู้ที่สำรองที่นั่งล่วงหน้าเท่านั้น ไม่รับ walk-in หรือลงทะเบียนเพิ่มหน้างาน และโปรดแต่งกายกึ่งทางการ (smart casual) ในวันงาน",
        value: "attendance_rules",
      },
      {
        text: "การจัดฉายภาพยนตร์เรื่องนี้ จัดโปรแกรมโดย Lekha Shankar และได้รับการสนับสนุนจากสถานเอกอัครราชทูตสาธารณรัฐประชาชนบังกลาเทศประจำประเทศไทย โดยนายฟัยยาซ มูรชิด กาซี (H.E. Mr. Faiyaz Murshid Kazi) เอกอัครราชทูต จะมากล่าวแนะนำภาพยนตร์ และมีบริการอาหารว่างและเครื่องดื่มให้ผู้เข้าชมหลังจบภาพยนตร์",
        value: "event_organizer",
      },
      {
        text: "หมายเหตุ",
        value: "note_title",
      },
      {
        text: "ไม่มีค่าใช้จ่ายในการชมภาพยนตร์ แต่หากไม่ได้เป็นสมาชิก TK Park จะมีค่าเข้าพื้นที่วันละ 20 บาท ไม่จำกัดจำนวนครั้งเข้า–ออกภายในวันนั้น หรือสมัครสมาชิก TK Park แบบรายปี",
        value: "note_membership_fee",
      },
      {
        text: "อุทยานการเรียนรู้ TK Park ไม่มีบริการประทับตราจอดรถฟรี ค่าใช้จ่ายเกี่ยวกับการจอดรถ เป็นไปตามเงื่อนไขของศูนย์การค้า centralwOrld",
        value: "note_parking",
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
    <div
      className={`${kanit.variable} font-kanit min-h-screen bg-white text-[#333] pb-20 md:pb-32`}
    >
      {/* Breadcrumb - Standard */}
      <div className="border-b border-zinc-200 bg-white">
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center">
          <Breadcrumb
            items={[
              { label: "หน้าหลัก", href: "/" },
              { label: "ปฏิทินกิจกรรม", href: "/calendar-of-event" },
              { label: newsItem.title.substring(0, 20) + "..." },
            ]}
          />
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 md:py-16">
        {/* Header */}
        <header className="mb-8 md:mb-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-8">
            <h1 className="text-2xl md:text-3xl lg:text-[40px] font-bold leading-tight text-[#1B1D20]">
              {newsItem.title}
            </h1>
          </div>

          <div className="md:col-span-4 text-left md:text-right space-y-2">
            <div className="inline-block px-3 py-1 bg-[#E8F6FB] text-[#16A7CB] rounded-lg text-sm font-semibold mb-2">
              ปฏิทินกิจกรรม
            </div>
            <div className="text-gray-600 font-medium">{newsItem.date}</div>
            <div className="text-gray-500 text-sm leading-relaxed">
              {newsItem.location}
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

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-b border-gray-100 pb-16 mb-16">
          <aside className="md:col-span-3 lg:col-span-2 order-2 md:order-1 space-y-6">
            <div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm text-center">
              <span className="text-sm font-bold text-gray-500 block mb-2">
                SHARE
              </span>
              <ShareButtons />
            </div>

            <div className="hidden md:block opacity-60">
              <Image
                src="/okmd_logo_color.png"
                alt="okmd logo"
                width={100}
                height={50}
                className="object-contain mx-auto"
              />
            </div>
          </aside>

          <article className="md:col-span-9 lg:col-span-8 order-1 md:order-2">
            <div className="prose prose-lg max-w-none text-gray-700 leading-loose">
              {newsItem.content.map((item, idx) => (
                <p
                  key={idx}
                  className={`whitespace-pre-line ${
                    idx === 0 ? "text-xl font-medium text-gray-900" : ""
                  }`}
                >
                  {item.text}
                </p>
              ))}
            </div>
          </article>
        </div>

        {/* Related */}
        <section>
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
        </section>
      </main>
    </div>
  );
}
