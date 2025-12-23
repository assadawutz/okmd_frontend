import Link from 'next/link';
import { ChevronLeft, MapPin, Clock } from 'lucide-react';

export default function Page() {
  return (
    <main className="okmd-container">
      <Link href="/recruitment/list" className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-slate-400 mb-10 hover:text-okmd transition-colors">
        <ChevronLeft size={14} className="mr-1"/> ย้อนกลับ
      </Link>
      <div className="card-luxury">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">เจ้าหน้าที่ช่วยปฏิบัติงานบริหารทรัพยากรกายภาพ ด้าน IT (สงขลา)</h1>
            <div className="flex gap-6">
              <span className="flex items-center text-xs font-bold text-slate-400"><MapPin size={16} className="mr-2 text-okmd"/> จ.สงขลา</span>
              <span className="flex items-center text-xs font-bold text-slate-400"><Clock size={16} className="mr-2 text-okmd"/> เจ้าหน้าที่ประจำ</span>
            </div>
          </div>
          <Link href="/recruitment/apply" className="btn-primary px-12">สมัครงาน</Link>
        </div>
        <div className="space-y-10 border-t border-slate-50 pt-10 font-bold text-slate-500 leading-relaxed">
           <section>
             <h3 className="text-okmd uppercase tracking-widest text-sm mb-4">หน้าที่ความรับผิดชอบ</h3>
             <ul className="list-disc pl-5 space-y-3">
               <li>ดูแลรักษาระบบคอมพิวเตอร์และเครือข่ายภายในองค์กร</li>
               <li>สนับสนุนการใช้งาน Software และ Hardware ให้แก่บุคลากร</li>
               <li>จัดทำรายงานสรุปการทำงานรายเดือน</li>
             </ul>
           </section>
        </div>
      </div>
    </main>
  );
}