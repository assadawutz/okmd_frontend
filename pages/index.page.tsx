import Image from "next/image";
import Link from "next/link";

const heroHighlights = [
  { label: "จังหวัดทั่วประเทศ", value: "77" },
  { label: "พื้นที่ต้นแบบ", value: "120+" },
  { label: "ชั่วโมงเนื้อหา", value: "4,500" },
];

const highlightCards = [
  {
    variant: "story",
    eyebrow: "Future Ready City",
    title: "เมืองการเรียนรู้ต้นแบบ",
    description:
      "เจาะลึกระบบนิเวศการเรียนรู้ของ OKMD ที่ผสานเทคโนโลยีกับชุมชน เพื่อสร้างพื้นที่การเรียนรู้ตลอดชีวิต",
    action: { label: "ชมเคสศึกษา", href: "#" },
  },
  {
    variant: "event",
    eyebrow: "30",
    meta: "มี.ค. 2568",
    title: "OKMD Knowledge Festival",
    description:
      "อัปเดตกิจกรรม เวทีเสวนา และเวิร์กช็อปที่ต่อยอดทักษะพลเมืองสร้างสรรค์จากทั่วประเทศ",
    action: { label: "ดูตารางกิจกรรม", href: "#" },
  },
  {
    variant: "insight",
    eyebrow: "Insight Toolkit",
    title: "เรียนรู้แบบ Personalised",
    description:
      "สำรวจไลบรารีคู่มือและชุดกิจกรรมที่ออกแบบสำหรับผู้เรียนในแต่ละช่วงวัย พร้อมสื่อประกอบดาวน์โหลดฟรี",
    action: { label: "ดาวน์โหลดเครื่องมือ", href: "#" },
  },
];

const recommendedCards = [
  {
    variant: "light",
    title: "Unleash Your Potential",
    description:
      "ออกแบบเส้นทางการเรียนรู้แบบผสมผสานด้วยสื่อมัลติมีเดียและกิจกรรมภาคสนามจากเครือข่ายพันธมิตร OKMD",
    action: { label: "เริ่มสำรวจ", href: "#" },
  },
  {
    variant: "dark",
    title: "Creative Citizen Program",
    description:
      "โปรแกรมเข้มข้น 12 สัปดาห์ สำหรับเยาวชนที่ต้องการต่อยอดไอเดียสู่โครงการจริง พร้อมการโค้ชแบบตัวต่อตัว",
    action: { label: "สมัครโปรแกรม", href: "#" },
  },
];

const shelfHighlights = [
  {
    title: "Design Thinking Playbook",
    description: "กิจกรรมฝึกทักษะคิดเชิงออกแบบสำหรับห้องเรียนและชุมชน",
  },
  {
    title: "Community Learning Lab",
    description: "โมเดลพื้นที่การเรียนรู้ที่ขยายได้จริงในทุกจังหวัด",
  },
  {
    title: "Digital Civic Class",
    description: "เส้นทางเรียนรู้ทักษะพลเมืองดิจิทัลสำหรับเยาวชน",
  },
];

const shelfCategories = [
  "Active Learning", "Creative Economy", "Civic Education", "Digital Skills", "Lifelong Learning", "Maker Space",
];

const activityThumbs = [
  "Future School Lab",
  "Design Jam",
  "Learning Playground",
  "Culture Hack",
  "Young Innovator",
];

const activitySchedule = [
  {
    time: "09:00",
    title: "Co-design Workshop",
    description: "ร่วมออกแบบกิจกรรมกับครูแกนนำและผู้เชี่ยวชาญ",
  },
  {
    time: "11:30",
    title: "Learning Space Tour",
    description: "สำรวจพื้นที่สร้างสรรค์และชุดเครื่องมือทดลอง",
  },
  {
    time: "14:00",
    title: "Community Pitch",
    description: "นำเสนอไอเดียเพื่อรับคำปรึกษาจากที่ปรึกษา OKMD",
  },
  {
    time: "16:00",
    title: "Networking Meetup",
    description: "เชื่อมต่อเครือข่ายและจับคู่ความร่วมมือใหม่",
  },
];

const newsItems = [
  {
    title: "เปิดตัว OKMD Learning Portal โฉมใหม่",
    description:
      "อัปเดตแพลตฟอร์มการเรียนรู้ด้วยคอนเทนต์แบบปรับตามผู้ใช้ และระบบติดตามความก้าวหน้าเรียลไทม์",
    date: "15 มี.ค. 2568",
  },
  {
    title: "เทศกาลการเรียนรู้ระดับประเทศ 2025",
    description:
      "รวมแรงบันดาลใจจากวิทยากรสร้างสรรค์ กิจกรรมลงมือทำ และพื้นที่ทดลองเทคโนโลยีการศึกษา",
    date: "05 มี.ค. 2568",
  },
  {
    title: "อบรมเครือข่ายครูพื้นที่ภาคเหนือ",
    description:
      "เสริมศักยภาพครูแกนนำด้วยเครื่องมือการเรียนรู้แบบ Active Learning และการออกแบบประสบการณ์",
    date: "18 ก.พ. 2568",
  },
];

export default function Home() {
  return (
    <div id="top" className="okmd-page">
      <section className="okmd-hero">
        <div className="okmd-container">
          <div className="okmd-hero__grid">
            <div className="okmd-hero__content">
              <div className="okmd-hero__brand-row">
                <span className="okmd-hero__brand-icon" aria-hidden>
                  <Image src="/globe.svg" alt="" width={44} height={44} />
                </span>
                <span className="okmd-hero__brand-name">OKMD</span>
              </div>
              <h1>
                สร้างโอกาสการเรียนรู้ให้ทุกคน
                <span> เข้าถึงง่าย ใช้ได้จริง</span>
              </h1>
              <p className="okmd-hero__lead">
                เราออกแบบระบบนิเวศการเรียนรู้ที่ผสานข้อมูล พื้นที่ และกิจกรรม ให้ทุกคนสามารถก้าวสู่เป้าหมายได้อย่างมั่นใจ
                พร้อมทีมโค้ชและสื่อประกอบครบถ้วน
              </p>
              <div className="okmd-hero__cta">
                <Link href="#search" className="okmd-btn okmd-btn--primary">
                  สำรวจบริการความรู้
                </Link>
                <Link href="#join" className="okmd-btn okmd-btn--outline">
                  สมัครร่วมโครงการ
                </Link>
              </div>
              <div className="okmd-hero__stats">
                {heroHighlights.map((item) => (
                  <div key={item.label}>
                    <p>{item.value}</p>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="okmd-hero__visual">
              <div className="okmd-hero__visual-card">
                <Image
                  src="/window.svg"
                  alt="พื้นที่การเรียนรู้แบบเปิด"
                  width={920}
                  height={540}
                  priority
                />
              </div>
            </div>
          </div>
          <div className="okmd-hero__pager" aria-hidden>
            <span className="okmd-hero__pager-bar" />
            <span className="okmd-hero__pager-dot" />
            <span className="okmd-hero__pager-dot" />
          </div>
        </div>
      </section>

      <section id="search" className="okmd-search">
        <div className="okmd-container">
          <div className="okmd-search__frame">
            <div className="okmd-search__card">
              <p className="okmd-search__eyebrow">KNOWLEDGE IS OPPORTUNITY</p>
              <div className="okmd-search__body">
                <h2>ค้นหาทรัพยากรการเรียนรู้ที่ตรงกับคุณ</h2>
                <p>
                  เริ่มจากเลือกหมวดหมู่และรูปแบบการเรียนรู้ เพื่อรับคำแนะนำสื่อและกิจกรรมที่ตอบโจทย์ที่สุด
                </p>
              </div>
              <form className="okmd-search__form">
                <label>
                  <span>หมวดหมู่</span>
                  <select>
                    <option>เลือกหมวดหมู่</option>
                    <option>Creative Economy</option>
                    <option>Active Learning</option>
                    <option>Digital Skills</option>
                  </select>
                </label>
                <label>
                  <span>รูปแบบ</span>
                  <select>
                    <option>ทั้งหมด</option>
                    <option>เวิร์กช็อป</option>
                    <option>คอร์สออนไลน์</option>
                    <option>แหล่งเรียนรู้ออนไลน์</option>
                  </select>
                </label>
                <label>
                  <span>คำค้นหา</span>
                  <input type="search" placeholder="เช่น Civic Education" />
                </label>
                <button type="submit" className="okmd-search__button" aria-label="ค้นหา">
                  <span aria-hidden>ค้นหา</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="okmd-highlight">
        <div className="okmd-container">
          <div className="okmd-section-header">
            <p>MISSION</p>
            <h2>ภารกิจหลักของ OKMD ในการขับเคลื่อนการเรียนรู้</h2>
          </div>
          <div className="okmd-highlight__grid">
            {highlightCards.map((card) => (
              <article key={card.title} className={`okmd-highlight__card okmd-highlight__card--${card.variant}`}>
                <div className="okmd-highlight__content">
                  <span>{card.eyebrow}</span>
                  {card.meta ? <small>{card.meta}</small> : null}
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
                <Link href={card.action.href} className="okmd-card-link">
                  {card.action.label}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="okmd-recommended">
        <div className="okmd-container">
          <div className="okmd-section-header okmd-section-header--light">
            <p>SERVICES</p>
            <h2>บริการและโปรแกรมแนะนำสำหรับเป้าหมายของคุณ</h2>
          </div>
          <div className="okmd-recommended__grid">
            {recommendedCards.map((card) => (
              <article key={card.title} className={`okmd-recommended__card okmd-recommended__card--${card.variant}`}>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
                <Link href={card.action.href} className="okmd-card-link">
                  {card.action.label}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="media" className="okmd-shelf">
        <div className="okmd-container okmd-shelf__grid">
          <div className="okmd-shelf__list">
            <div className="okmd-section-header">
              <p>MEDIA LIBRARY</p>
              <h2>คลังทรัพยากรแนะนำสำหรับครูและผู้เรียน</h2>
            </div>
            <ul>
              {shelfCategories.map((item) => (
                <li key={item}>
                  <button type="button">{item}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="okmd-shelf__cover">
            <div className="okmd-shelf__cover-media">
              <Image src="/file.svg" alt="ปกคลังความรู้" width={360} height={520} />
            </div>
            <div className="okmd-hero__pager okmd-hero__pager--shelf" aria-hidden>
              <span className="okmd-hero__pager-bar" />
              <span className="okmd-hero__pager-dot" />
              <span className="okmd-hero__pager-dot" />
            </div>
          </div>
          <div className="okmd-shelf__description">
            <div className="okmd-shelf__insights">
              {shelfHighlights.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            <Link href="#" className="okmd-card-link">
              ดาวน์โหลดแคตตาล็อกฉบับเต็ม
            </Link>
          </div>
        </div>
      </section>

      <section className="okmd-activity">
        <div className="okmd-container">
          <div className="okmd-section-header">
            <p>ACTIVITY</p>
            <h2>กิจกรรมประจำเดือนและเวิร์กช็อปลงพื้นที่</h2>
          </div>
          <div className="okmd-activity__thumbs">
            {activityThumbs.map((title) => (
              <button key={title} type="button">
                {title}
              </button>
            ))}
          </div>
          <div className="okmd-activity__grid">
            <div className="okmd-activity__calendar">
              <div className="okmd-activity__calendar-inner">
                <span>มีนาคม 2568</span>
                <strong>OKMD Learning Lab</strong>
                <p>ลงทะเบียนภายใน 20 มี.ค. 2568</p>
              </div>
            </div>
            <ul className="okmd-activity__schedule">
              {activitySchedule.map((slot) => (
                <li key={slot.time}>
                  <span>{slot.time}</span>
                  <div>
                    <h3>{slot.title}</h3>
                    <p>{slot.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="news" className="okmd-news">
        <div className="okmd-container">
          <div className="okmd-section-header okmd-section-header--center">
            <p>NEWS</p>
            <h2>ข่าวและอัปเดตจาก OKMD</h2>
          </div>
          <div className="okmd-news__grid">
            {newsItems.map((news) => (
              <article key={news.title}>
                <span>{news.date}</span>
                <h3>{news.title}</h3>
                <p>{news.description}</p>
                <Link href="#" className="okmd-card-link">
                  อ่านเพิ่มเติม
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="okmd-cta">
        <div className="okmd-container okmd-cta__grid">
          <div className="okmd-cta__copy">
            <p>JOIN US</p>
            <h2>ร่วมเป็นส่วนหนึ่งของเครือข่ายการเรียนรู้ OKMD</h2>
            <p>
              สมัครเป็นวิทยากร เจ้าภาพพื้นที่ต้นแบบ หรือพัฒนาหลักสูตรร่วมกับเรา เพื่อขยายโอกาสการเรียนรู้ไปทุกจังหวัด
            </p>
          </div>
          <form className="okmd-cta__form">
            <label>
              <span>อีเมล</span>
              <input type="email" placeholder="name@example.com" required />
            </label>
            <label>
              <span>ประเภทความสนใจ</span>
              <select>
                <option>เลือกหัวข้อ</option>
                <option>ร่วมจัดกิจกรรม</option>
                <option>ขอคำปรึกษา</option>
                <option>สมัครเป็นวิทยากร</option>
              </select>
            </label>
            <button type="submit" className="okmd-btn okmd-btn--primary">
              ส่งคำขอ
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
