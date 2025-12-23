import { fetchJobs } from '@/lib/services/okmd.service';
import Link from 'next/link';
import { ChevronRight, Search } from 'lucide-react';

export default async function Page() {
  const jobs = await fetchJobs();
  return (
    <main className="okmd-container">
      <div className="mb-14">
        <h1 className="text-6xl sm:text-7xl font-black italic uppercase leading-[0.85] tracking-tighter">Working <br/><span className="text-okmd">with us</span></h1>
        <p className="mt-6 text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em]">Build the future of knowledge with okmd</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <div className="flex-1 bg-slate-50/50 border border-slate-100 rounded-2xl flex items-center px-6">
          <Search size={18} className="text-slate-300 mr-3" />
          <input className="w-full py-4 bg-transparent outline-none text-sm font-bold" placeholder="ค้นหาตำแหน่งงาน..." />
        </div>
        <button className="btn-primary">Search</button>
      </div>
      <div className="card-luxury !p-0 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-okmd text-white text-[10px] font-black uppercase tracking-widest">
            <tr>
              <th className="py-8 px-10">ตำแหน่งงาน</th>
              <th className="py-8 px-10 text-center">ประเภท</th>
              <th className="py-8 px-10 text-center">จำนวน</th>
              <th className="py-8 px-10"></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map(j => (
              <tr key={j.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 group transition-all">
                <td className="py-10 px-10">
                  <Link href="/recruitment/detail" className="text-xl sm:text-2xl font-black group-hover:text-okmd">{j.title}</Link>
                  <div className="text-[10px] font-bold text-slate-300 uppercase mt-2">{j.dept} • {j.loc}</div>
                </td>
                <td className="py-10 px-10 text-center text-sm font-bold text-slate-500">{j.type}</td>
                <td className="py-10 px-10 text-center">
                  <span className="bg-okmd/10 text-okmd badge">{j.quota}</span>
                </td>
                <td className="py-10 px-10 text-right">
                  <Link href="/recruitment/detail" className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-okmd group-hover:text-white transition-all">
                    <ChevronRight size={24} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}