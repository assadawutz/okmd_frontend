"use client";
import { useState } from 'react';
import { ChevronLeft, CheckCircle2, AlertCircle, Trash2, UploadCloud } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Page() {
  const [modal, setModal] = useState<'none' | 'save' | 'delete' | 'success'>('none');
  const [file, setFile] = useState<string | null>(null);

  return (
    <main className="okmd-container">
      <Link href="/recruitment/detail" className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-slate-400 mb-10"><ChevronLeft size={14} className="mr-1"/> ย้อนกลับ</Link>
      <div className="card-luxury">
        <h2 className="text-3xl font-black italic mb-12 uppercase">ใบสมัครงานออนไลน์</h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mb-16">
          <div className="space-y-2"><label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ชื่อ - นามสกุล *</label><input className="input-luxury" placeholder="Full Name" /></div>
          <div className="space-y-2"><label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">เบอร์ติดต่อ *</label><input className="input-luxury" placeholder="08X-XXX-XXXX" /></div>
          <div className="md:col-span-2 space-y-4">
             <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">เอกสารแนบ (PDF) *</label>
             <div className="border-4 border-dashed border-slate-50 rounded-[2.5rem] p-12 flex flex-col items-center justify-center bg-slate-50/20">
               {file ? (
                 <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm">
                   <CheckCircle2 className="text-green-500" />
                   <span className="font-bold">{file}</span>
                   <button onClick={()=>setModal('delete')} className="p-2 text-red-400 hover:bg-red-50 rounded-lg"><Trash2 size={20}/></button>
                 </div>
               ) : (
                 <>
                   <UploadCloud size={48} className="text-slate-200 mb-4" />
                   <button onClick={()=>setFile("Resume_2025.pdf")} className="btn-primary !bg-white !text-okmd border-2 border-okmd !shadow-none !py-2.5">อัปโหลดไฟล์</button>
                 </>
               )}
             </div>
          </div>
        </div>
        <div className="flex justify-end pt-10 border-t border-slate-50"><button onClick={()=>setModal('save')} className="btn-primary px-16">ส่งข้อมูลใบสมัคร</button></div>
      </div>
      <AnimatePresence>
        {modal !== 'none' && (
          <div className="modal-overlay" onClick={()=>setModal('none')}>
            <motion.div initial={{scale:0.9, opacity:0}} animate={{scale:1, opacity:1}} className="bg-white rounded-[4rem] p-16 max-w-sm w-full text-center shadow-2xl" onClick={e=>e.stopPropagation()}>
              {modal === 'save' && <>
                <div className="w-24 h-24 bg-blue-50 text-okmd rounded-full flex items-center justify-center mx-auto mb-8 text-5xl font-black italic">?</div>
                <h3 className="text-2xl font-black mb-10 leading-tight">ยืนยันการส่ง<br/>ใบสมัคร?</h3>
                <div className="flex gap-4"><button onClick={()=>setModal('none')} className="flex-1 font-black text-slate-300 text-[10px] uppercase tracking-widest">ยกเลิก</button><button onClick={()=>setModal('success')} className="btn-primary flex-1 !px-0">ยืนยัน</button></div>
              </>}
              {modal === 'delete' && <>
                <div className="w-24 h-24 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-8"><AlertCircle size={48}/></div>
                <h3 className="text-2xl font-black mb-10 leading-tight">ลบไฟล์นี้?</h3>
                <div className="flex gap-4"><button onClick={()=>setModal('none')} className="flex-1 font-black text-slate-300 text-[10px] uppercase tracking-widest">ยกเลิก</button><button onClick={()=>{setFile(null); setModal('none');}} className="btn-primary !bg-red-500 !shadow-none flex-1 !px-0">ลบออก</button></div>
              </>}
              {modal === 'success' && <>
                <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8"><CheckCircle2 size={48}/></div>
                <h3 className="text-2xl font-black mb-10 uppercase">ส่งสำเร็จ</h3>
                <Link href="/recruitment/list" className="btn-primary w-full">กลับหน้าหลัก</Link>
              </>}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}