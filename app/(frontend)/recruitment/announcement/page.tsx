"use client";
import { useState } from 'react';
import { Search, CheckCircle2, XCircle } from 'lucide-react';
import { checkStatus, type StatusResult } from '@/lib/services/okmd.service';

export default function Page() {
  const [cid, setCid] = useState('');
  const [res, setRes] = useState<{ status: string; name?: string } | null>(null);
  const handleCheck = async () => setRes(await checkStatus(cid));
  return (
    <main className="okmd-container py-20 flex flex-col items-center">
      <h1 className="text-5xl sm:text-6xl font-black italic mb-14 uppercase text-center leading-[0.85] tracking-tighter">Application <br/><span className="text-okmd">Status</span></h1>
      <div className="w-full max-w-xl card-luxury bg-slate-50/50 !p-10">
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-6">เลขประจำตัวประชาชน 13 หลัก</label>
        <div className="flex gap-4">
          <input value={cid} onChange={e=>setCid(e.target.value)} className="w-full bg-white rounded-2xl px-6 py-4 text-2xl font-bold outline-none border border-slate-100 focus:border-okmd" placeholder="X-XXXX-XXXXX-XX-X" maxLength={13} />
          <button onClick={handleCheck} className="btn-primary !px-8"><Search size={24}/></button>
        </div>
      </div>
      {res && (
        <div className="modal-overlay">
          <div className="bg-white rounded-[4rem] p-16 sm:p-20 max-w-md w-full text-center shadow-2xl">
            <div className={`w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-10 ${res.status === 'passed' ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'}`}>
              {res.status === 'passed' ? <CheckCircle2 size={72}/> : <XCircle size={72}/>}
            </div>
            <h2 className="text-3xl font-black mb-4 uppercase">{res.status === 'passed' ? 'ผ่านการคัดเลือก' : 'ไม่ผ่านการคัดเลือก'}</h2>
            <p className="text-slate-500 font-bold mb-12">{res.status === 'passed' ? res.name : 'ขออภัย ไม่พบรายชื่อของท่านในรอบนี้'}</p>
            <button onClick={()=>setRes(null)} className="btn-primary w-full">ปิดหน้าจอ</button>
          </div>
        </div>
      )}
    </main>
  );
}