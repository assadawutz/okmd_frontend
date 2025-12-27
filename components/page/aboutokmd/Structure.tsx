import Link from 'next/link'
import React from 'react'
const title = {
  name:"โครงสร้าง OKMD"
}
export default function Structure() {
  return (
    <div className='container'>
      <h1 className="text-3xl font-bold mb-10">{title.name}</h1>
      <div className='flex flex-col justify-center gap-2'>
        <div>
          <img src="/A.png" alt="" />
        </div>
        <div className='flex justify-center'>
          <img src="/A4.png" alt="" />
        </div>
        <div>
          <img src="/A1.png" alt="" />
        </div>
        <div className='flex justify-center'>
          <img src="/A5.png" alt="" />
        </div>
        <div>
          <img src="/A3.png" alt="" />
        </div>
        <div className='flex justify-center'>
          <img src="/A6.png" alt="" />
        </div>
        <div className='flex justify-center'>
          <img src="/A7.png" alt="" />
        </div>
      </div>
       <hr className='mt-5 mb-5'/>
      <div>
        <div className='mb-2'>  
          <h1 className='text-xl'>โครงสร้าง OKMD :</h1>
          <Link href="/about-okmd/structureokmd" className='hover:text-[#16A7CB]'>
          <li>โครงสร้างสำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน)</li>
          </Link>
          <Link href="/about-okmd/structure" className='hover:text-[#16A7CB]'>
          <li>โครงสร้างคณะกรรมการ สบร. และคณะอนุกรรมการ</li>
          </Link>
        </div>
      </div>
    </div>
  )
}
